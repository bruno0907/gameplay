import React, { useState, useCallback } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { FlatList, View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { CategoryList } from '../../components/CategoryList';
import { GradientBackground } from '../../components/GradientBackground';
import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { ListHeader } from '../../components/ListHeader';
import { MatchesItem } from '../../components/MatchesItem';
import { ListDivider } from '../../components/ListDivider';
import { Loader } from '../../components/Loader';

import { COLLECTION_MATCHES } from '../../configs/database';
import { GuildProps } from '../Guilds';

import { styles } from './styles';

type MatchesProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;  
  description: string;
};

function Home() {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [matches, setMatches] = useState<MatchesProps[]>([]);
  const [loading, setLoading] = useState(true);

  const handleSelectCategory = (categoryId: string) => {
    categoryId === selectedCategory 
      ? setSelectedCategory('')
      : setSelectedCategory(categoryId)
  };

  const handleCreateNewMatch = () => {
    navigation.navigate('MatchCreate');
  };

  async function fetchMatchesList() {
    const response = await AsyncStorage.getItem(COLLECTION_MATCHES);
    const matchesList: MatchesProps[] = response ? JSON.parse(response) : [];

    if(selectedCategory){
      setMatches(matchesList.filter(match => match.category === selectedCategory))
    } else {
      setMatches(matchesList);

    }

    setLoading(false);    
  }

  useFocusEffect(
    useCallback(() => {
      fetchMatchesList()
    }, [selectedCategory])
  );  

  return (   
    <GradientBackground>
      <View style={styles.container}>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd onPress={handleCreateNewMatch}/>
        </View>
        
        <CategoryList 
          selectedCategory={selectedCategory}
          setSelectedCategory={handleSelectCategory}
        />
        { loading 
          ? <Loader /> 
          : matches 
          ? <>
          <ListHeader 
            title="Partidas agendadas"
            subtitle={`Total: ${matches.length}`}
          />        
           <FlatList
              style={styles.matchesList}
              contentContainerStyle={{ paddingBottom: 69 }}
              data={matches}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <MatchesItem data={item}/>
              )}
              ItemSeparatorComponent={() => <ListDivider />}
            />    
          </>                           
          : <Text style={styles.notMatchFoundText}>Nenhuma partida agendada</Text>
        }        
        </View>
    </GradientBackground> 
  );
};

export { Home };
