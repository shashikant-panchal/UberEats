import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const RestaurantItems = ({ restaurantData }) => {
    const renderRestaurantItem = ({ item }) => {
        return (
            <TouchableOpacity activeOpacity={0.9} style={styles.itemContainer}>
                <RestaurantImage image_url={item.image_url} />
                <RestaurantInfo name={item.name} rating={item.rating} />
            </TouchableOpacity>
        );
    };

    return (
        <FlatList
            data={restaurantData}
            renderItem={renderRestaurantItem}
            keyExtractor={(item) => item.name}
            contentContainerStyle={styles.container}
        />
    );
};

const RestaurantImage = ({ image_url }) => {
    return (
        <>
            <Image
                source={{ uri: image_url }}
                style={styles.image}
            />
            <TouchableOpacity style={styles.favoriteButton}>
                <MaterialIcon name='heart-outline' size={25} color='white' />
            </TouchableOpacity>
        </>
    );
};

const RestaurantInfo = ({ name, rating }) => {
    return (
        <View style={styles.infoContainer}>
            <View>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.ratingText}>30-45 · min</Text>
            </View>
            <View style={styles.ratingContainer}>
                <Text style={styles.rating}>{rating}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: '2.5%',
        flex: 1
    },
    itemContainer: {
        marginBottom: '3%',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 10,
    },
    image: {
        width: '100%',
        height: 180,
        borderRadius: 10,
    },
    favoriteButton: {
        position: 'absolute',
        right: 20,
        top: 20,
        backgroundColor: 'transparent',
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        padding: 15,
    },
    nameText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },
    ratingText: {
        fontSize: 13,
        color: 'gray',
    },
    ratingContainer: {
        backgroundColor: 'lightgray',
        height: 30,
        width: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rating: {
        color: 'black',
    },
});

export default RestaurantItems;
