import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBox from '../components/SearchBox'
import Categories from '../components/Categories'
import RestaurentItem from '../components/RestaurentItem'

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View style={{ backgroundColor: 'white', padding: 15 }}>
                <HeaderTabs />
                <SearchBox />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurentItem />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;
