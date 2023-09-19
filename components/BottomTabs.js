import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs() {
    return (
        <View style={styles.container}>
            <Icon icon="home" text="Home" />
            <Icon icon="search" text="Browse" />
            <Icon icon="shopping-bag" text="Grocery" />
            <Icon icon="receipt" text="Orders" />
            <Icon icon="user" text="Account" />
        </View>
    );
}

const Icon = (props) => (
    <TouchableOpacity style={styles.iconContainer}>
        <View>
            <FontAwesome5
                name={props.icon}
                size={25}
                style={{
                    marginBottom: 3,
                    alignSelf: "center",
                }}
            />
            <Text style={styles.iconText}>{props.text}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
        backgroundColor: "white",
        borderTopWidth: 1,
        borderTopColor: "lightgray",
        paddingVertical: 10,
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: 0
    },
    iconContainer: {
        alignItems: "center",
    },
    iconText: {
        fontSize: 12,
        color: "gray",
        marginTop: 5,
    },
});
