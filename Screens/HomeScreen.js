import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import HeaderTabs from '../components/HeaderTabs';
import SearchBox from '../components/SearchBox';
import Categories from '../components/Categories';
import RestaurantItems, { localRestaurants } from '../components/RestaurentItems';
import axios from 'axios';

const YELP_API_KEY = 'Vypukigi6IWBFBQQwU1z7oWA8daIIx8U7Us-cnV6_T9xoyxzTbthYISnYDIFKAZjUPhzXnWFf99am5l8aBA62hFef6ZYQWep2EZfoft-0Y9AdzVN-nxNTCZnresFZXYx';

const HomeScreen = () => {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [selectedLocation, setSelectedLocation] = useState('San Fransisco');
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('Delivery')

    useEffect(() => {
        getRestaurantDataFromYelp(selectedLocation);
        console.log(activeTab);
    }, [selectedLocation, activeTab]);

    const getRestaurantDataFromYelp = (location) => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${location}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        axios
            .get(yelpUrl, apiOptions)
            .then((response) => {
                setRestaurantData(response.data.businesses.filter((b) => b.transactions.includes(activeTab.toLowerCase())));
                setError(null);
            })
            .catch((error) => {
                console.error('Error fetching data from Yelp API:', error);

                if (error.response && error.response.status === 400) {
                    // Handle the specific error where no items are available for the region
                    setError('No items available for this region.');
                } else {
                    setError('An error occurred while fetching data.'); // Handle other errors
                }
            });
    };

    const handleLocationSelect = (selectedPlace) => {
        setSelectedLocation(selectedPlace.place_name);
    };

    return (
        <SafeAreaView style={{ backgroundColor: 'lightgray' }}>
            <View style={{ backgroundColor: 'white', padding: 15 }}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBox onLocationSelect={handleLocationSelect} />
                {error && (
                    <Text style={{ color: 'red', textAlign: 'center', marginTop: 10 }}>
                        {error}
                    </Text>
                )}
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <View style={{ marginBottom: '72%' }}>
                    <RestaurantItems restaurantData={restaurantData} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
