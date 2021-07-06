import React, { 
  useState, 
  useContext, 
  createContext, 
  ReactNode,
  useEffect
} from 'react';

import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { discordApi } from '../services/discordApi';
import { COLLECTION_USER } from '../configs/database';

const { REDIRECT_URI } = process.env;
const { SCOPE } = process.env;
const { RESPONSE_TYPE } = process.env;
const { CLIENT_ID } = process.env;
const { CDN_IMAGE } = process.env;

type AuthProviderProps = {
  children: ReactNode;
};

type AuthContextProps = {
  user: User;
  loading: boolean;
  signIn: () => Promise<void>;
  handleSignOut: () => Promise<void>;
};

type User = {
  id: string;
  avatar: string;  
  firstName: string;
  motd: string;
  token: string;
};

type AuthResponseProps = AuthSession.AuthSessionResult & {
  params: {
    access_token?: string;    
    error?: string;
  };
};

const AuthContext = createContext({} as AuthContextProps );

const AuthProvider = ({ children }: AuthProviderProps) => {  
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  async function signIn() {
    try {
      setLoading(true);

      const authUrl = `${discordApi.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;            
      
      const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthResponseProps;      

      if(params.error){
        setLoading(false);
        return
      }

      if(type === 'success') {        
        discordApi.defaults.headers.authorization = `Bearer ${params.access_token}`

        const { data } = await discordApi.get('/users/@me');

        const userData: User = {
          ...data,
          firstName: data.username.split(' ')[0],
          avatar: `${CDN_IMAGE}/avatars/${data.id}/${data.avatar}.png`,
          token: params.access_token,
          motd: '',
        };

        await AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(userData));
        setUser(userData);
      };

    } catch {
      throw new Error('Não foi possível autenticar');

    } finally {
      setLoading(false);

    }
  };

  async function handleSignOut() {
    setUser({} as User);
    await AsyncStorage.removeItem(COLLECTION_USER);
  }

  useEffect(() => {
    async function getStoredUser() {
      const data = await AsyncStorage.getItem(COLLECTION_USER);
  
      if(data){
        const userData = JSON.parse(data) as User;
        discordApi.defaults.headers.authorization = `Bearer ${userData.token}`
  
        setUser(userData);        
      };
    };
    getStoredUser();

  }, []);
  
  return (
    <AuthContext.Provider value={{ 
      user,
      loading,
      signIn,
      handleSignOut,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export {
  useAuth,
  AuthProvider
};


