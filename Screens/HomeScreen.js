import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import HeaderTabs from '../components/HeaderTabs';
import SearchBox from '../components/SearchBox';
import Categories from '../components/Categories';
import RestaurantItems, { localRestaurants } from '../components/RestaurentItems';
import axios from 'axios';

const YELP_API_KEY = 'Vypukigi6IWBFBQQwU1z7oWA8daIIx8U7Us-cnV6_T9xoyxzTbthYISnYDIFKAZjUPhzXnWFf99am5l8aBA62hFef6ZYQWep2EZfoft-0Y9AdzVN-nxNTCZnresFZXYx';

const HomeScreen = () => {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);

    useEffect(() => {
        getRestaurantDataFromYelp();
    }, []);

    const getRestaurantDataFromYelp = () => {
        const yelpUrl = 'https://api.yelp.com/v3/businesses/search?term=restaurants&location=LosAngeles';

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        axios
            .get(yelpUrl, apiOptions)
            .then((response) => {
                setRestaurantData(response.data.businesses);
            })
            .catch((error) => {
                console.error('Error fetching data from Yelp API:', error);
            });
    };

    return (
        <SafeAreaView style={{ backgroundColor: 'lightgray' }}>
            <View style={{ backgroundColor: 'white', padding: 15 }}>
                <HeaderTabs />
                <SearchBox />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
