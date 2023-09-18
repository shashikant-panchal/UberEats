import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState('Delivery')

  return (
    <View style={{ flexDirection: 'row', alignSelf: 'center', backgroundColor: 'lightgray', padding: 10, borderRadius: 20 }}>
      {/* HeaderButton1 */}
      <HeaderButton text='Delivery' btnColor='black' textColor='white' activeTab={activeTab} setActiveTab={setActiveTab} isLeftRounded={false} isRightRounded={true} />
      {/* HeaderButton2 */}
      <HeaderButton text='Pickup' btnColor='white' textColor='black' activeTab={activeTab} setActiveTab={setActiveTab} isLeftRounded={true} isRightRounded={false} />
    </View>
  )
}

const HeaderButton = (props) => {
  const borderRadiusStyle = {
    borderTopLeftRadius: props.isRightRounded ? 15 : 0,
    borderBottomLeftRadius: props.isRightRounded ? 15 : 0,
    borderTopRightRadius: props.isLeftRounded ? 15 : 0,
    borderBottomRightRadius: props.isLeftRounded ? 15 : 0,
  };

  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.activeTab === props.text ? 'black' : 'white',
        paddingVertical: 6,
        paddingHorizontal: 16,
        ...borderRadiusStyle,
      }}
      onPress={() => props.setActiveTab(props.text)}
    >
      <Text style={{ color: props.activeTab === props.text ? 'white' : 'black', fontSize: 15, fontWeight: '900' }}>{props.text}</Text>
    </TouchableOpacity>
  );
}

export default HeaderTabs
