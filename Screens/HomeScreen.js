import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBox from '../components/SearchBox'
import Categories from '../components/Categories'

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View style={{ backgroundColor: 'white', padding: 15 }}>
                <HeaderTabs />
                <SearchBox />
            </View>
                <Categories />
        </SafeAreaView>
    )
}

export default HomeScreen