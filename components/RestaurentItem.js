import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const RestaurentItem = () => {
    return (
        <TouchableOpacity activeOpacity={1} style={{
            marginBottom: 20
        }}>
            <View style={{
                marginTop: 10,
                padding: 15,
                backgroundColor: 'white'
            }}>
                <RestaurentImage />
                <RestaurentInfo />
            </View>
        </TouchableOpacity>

    )
}

const RestaurentImage = () => {
    return (
        <>
            <Image source={{ uri: 'https://as1.ftcdn.net/v2/jpg/03/24/73/92/1000_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg' }}
                style={{ width: '100%', height: 180 }}
            />
            <TouchableOpacity style={{
                position: 'absolute',
                right: 20,
                top: 20
            }}>
                <MaterialIcon name='heart-outline' size={25} color='white' />
            </TouchableOpacity>
        </>
    );
}

const RestaurentInfo = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
            <View>
                <Text style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: 'black'
                }}>Farmhouse Kitchen Thai Chicken</Text>
                <Text style={{
                    fontSize: 13,
                    color: 'gray'
                }}>30-45 · min </Text>
            </View>
            <View
                style={{
                    backgroundColor: 'lightgray',
                    height: 30,
                    width: 30,
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Text style={{
                    color: 'black'
                }}>4.5</Text>
            </View>
        </View>
    )
}

export default RestaurentItem;
