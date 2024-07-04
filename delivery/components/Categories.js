import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal:15,
            paddingTop:10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
    >
        {/* Category card */}
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing1"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing2"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing1"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing2"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing1"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing2"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing1"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing2"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing1"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing2"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing1"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing2"/>
    </ScrollView>
  )
}

export default Categories