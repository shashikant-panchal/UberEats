import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import React from 'react'

const Categories = () => {

    const items = [
        {
            image: require("../../assets/images/shopping-bag.png"),
            text: "Pick-up",
        },
        {
            image: require("../../assets/images/soft-drink.png"),
            text: "Soft Drinks",
        },
        {
            image: require("../../assets/images/bread.png"),
            text: "Bakery Items",
        },
        {
            image: require("../../assets/images/fast-food.png"),
            text: "Fast Foods",
        },
        {
            image: require("../../assets/images/deals.png"),
            text: "Deals",
        },
        {
            image: require("../../assets/images/coffee.png"),
            text: "Coffee & Tea",
        },
        {
            image: require("../../assets/images/desserts.png"),
            text: "Desserts",
        }
    ];

    return (
        <View style={{
            marginTop: 5,
            backgroundColor: 'white',
            paddingVertical: 10,
            paddingHorizontal:10
        }}>
            <FlatList
                data={items}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={{ alignItems: 'center', marginRight: 22 }}>
                        <Image
                            source={item.image}
                            style={styles.categoryImage}
                        />
                        <Text style={styles.categoryText}>{item.text}</Text>
                    </View>
                )}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    categoryImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    categoryText: {
        fontSize: 13,
        fontWeight: '900',
        color: 'black',
    },
});

export default Categories