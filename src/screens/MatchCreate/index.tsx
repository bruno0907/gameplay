import React, { useState } from 'react';
import { 
  View, 
  Text,    
  KeyboardAvoidingView, 
  Platform, 
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import uuid from 'react-native-uuid';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_MATCHES } from '../../configs/database';

import { Guilds } from '../Guilds';

import { CategoryList } from '../../components/CategoryList';
import { GradientBackground } from '../../components/GradientBackground';
import { Header } from '../../components/Header';
import { InputNumber } from '../../components/InputNumber';
import { InputText } from '../../components/InputTextarea';
import { ModalView } from '../../components/ModalView';
import { ButtonSelectServer } from '../../components/ButtonSelectServer';
import { GuildProps } from '../Guilds';

import { styles} from './styles';

function MatchCreate() {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [guild, setGuild] = useState<GuildProps>();

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [description, setDescription] = useState('');  
  
  const [isVisible, setIsVisible] = useState(false);

  const isEnabled = Boolean(
    selectedCategory.length &&
    guild?.name.length &&
    day.length &&
    month.length &&
    hour.length &&
    minute.length &&
    description.length
    )
  
  const handleModalIsVisible = () =>  setIsVisible(prevState => !prevState);

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId)  
  };  

  const handleSelectGuild = (guild: GuildProps) => {
    setGuild(guild);
    handleModalIsVisible();
  };

  const handleNewMatch = async() => {
    const newMatchData = {
      id: uuid.v4(),
      guild,
      category: selectedCategory,
      date: `${day}/${month} às ${hour}: ${minute}`,
      description
    };

    const storage = await AsyncStorage.getItem(COLLECTION_MATCHES);
    const matches = storage ? JSON.parse(storage) : [];

    await AsyncStorage.setItem(
      COLLECTION_MATCHES,
      JSON.stringify([
        ...matches,
        newMatchData
      ])
    );

    navigation.navigate('Home');
  }

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>
        <GradientBackground>
          <Header title="Agendar partida" />      
          <Text style={[styles.label, 
            { marginTop: 24, marginBottom: 12, paddingHorizontal: 24 }
          ]}>Categoria</Text>
          <CategoryList 
            selectedCategory={selectedCategory}
            setSelectedCategory={handleSelectCategory}
            hasCheckbox
          />
          <View style={styles.content}>
            <ButtonSelectServer server={guild} onPress={handleModalIsVisible}/>
          </View>

          <View style={styles.content}>
            <View style={styles.inlineContent}>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Dia e mês
                </Text>
                <View style={styles.inlineContent}>                
                  <InputNumber 
                    maxLength={2} 
                    onChangeText={setDay}
                  />
                  <Text style={[styles.label, { marginHorizontal: 6 }]}>/</Text>                  
                  <InputNumber 
                    maxLength={2}
                    onChangeText={setMonth}
                  />
                </View>
              </View>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Horário
                </Text>
                <View style={styles.inlineContent}>
                  <InputNumber 
                    maxLength={2}
                    onChangeText={setHour}
                  />
                  <Text style={[styles.label, { marginHorizontal: 6 }]}>:</Text>                  
                  <InputNumber 
                    maxLength={2}
                    onChangeText={setMinute}
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.content}>
            <View style={[styles.inlineContent, { marginBottom: 12 }]}>
              <Text style={styles.label}>Descrição</Text>
              <Text style={styles.alternative}>Max 100 caracteres</Text>
            </View>            
              <InputText 
                multiline maxLength={100} 
                numberOfLines={4}
                onChangeText={setDescription}
              />            
          </View>

          <View style={styles.footer}>
            <RectButton 
              style={[styles.createButton, 
              {
                opacity: isEnabled ? 1 : 0.5,
              }]}
              enabled={isEnabled}
              onPress={handleNewMatch}
            >
              <Text style={styles.createButtonLabel}>Agendar</Text>
            </RectButton>
          </View>
          
        </GradientBackground>
      </ScrollView>

      <ModalView 
        isVisible={isVisible} 
        handleModalIsVisible={handleModalIsVisible}
        onRequestClose={handleModalIsVisible}
      >
        <GradientBackground>
          <View style={styles.container}>
            <View style={styles.bar}/>
            <Guilds handleSelectGuild={handleSelectGuild}/>
          </View>
        </GradientBackground>

      </ModalView>


    </KeyboardAvoidingView>

  );
};

export { MatchCreate };
