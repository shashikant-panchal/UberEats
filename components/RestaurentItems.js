import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

export const localRestaurants = [
    {
        name: "Beachside Bar",
        image_url:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Benihana",
        image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMgludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    },
    {
        name: "India's Grill",
        image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMgludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Indian", "Bar"],
        price: "$$",
        reviews: 700,
        rating: 4.9,
    },
];

const RestaurantItems = (props) => {
    return (
        <TouchableOpacity activeOpacity={1} style={{marginBottom: '71%', width:'95%', justifyContent:'center', alignSelf:'center' }}>
            {props.restaurantData.map((restaurant, index) => (
                <View
                    key={index}
                    style={{
                        marginTop: 10,
                        padding: 15,
                        backgroundColor: 'white',
                        borderRadius: 10,
                        shadowColor: 'gray',
                        shadowOffset: { width: 0, height: 5 },
                        shadowOpacity: 0.2,
                        shadowRadius: 2,
                        elevation: 10,
                    }}>
                    <RestaurantImage image_url={restaurant.image_url} />
                    <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
                </View>
            ))}
        </TouchableOpacity>
    );
}





const RestaurantImage = (props) => {
    return (
        <>
            <Image source={{ uri: props.image_url }}
                style={{
                    width: '100%',
                    height: 180,
                    borderRadius: 10,
                }}
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

const RestaurantInfo = (props) => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10
        }}>
            <View>
                <Text style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: 'black'
                }}>{props.name}</Text>
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
                }}>{props.rating}</Text>
            </View>
        </View>
    )
}

export default RestaurantItems;
