import React from 'react';
import { ScrollView } from 'react-native';
import { styles } from './styles';

import { categories } from '../../utils/categories'
import { CategoryItem } from './CategoryItem';

type CategorySlideProps = {
  selectedCategory: string;
  setSelectedCategory: (categoryId: string) => void;
  hasCheckbox?: boolean;
}

const CategoryList = ({ 
  selectedCategory ,
  setSelectedCategory,
  hasCheckbox
}: CategorySlideProps) => {
  
  return (
    <ScrollView 
      style={styles.container}
      horizontal      
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map(category => (
        <CategoryItem 
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={ category.id === selectedCategory }
          hasCheckbox={hasCheckbox}
          onPress={() => setSelectedCategory(category.id)}
        />
      ))}
    </ScrollView>
  );
};

export { CategoryList };
