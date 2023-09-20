import { View, Text } from 'react-native'
import React from 'react'
import About from '../components/RestaurentDetails/About'
import MenuItems from '../components/RestaurentDetails/MenuItems'

const RestaurentDetails = () => {
  return (
    <View>
      <About />
      <MenuItems/>
    </View>
  )
}

export default RestaurentDetails