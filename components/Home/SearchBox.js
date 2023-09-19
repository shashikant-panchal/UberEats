import React, { useState, useRef } from 'react';
import { View, TextInput, Text, TouchableOpacity, FlatList } from 'react-native';
import MapboxGeocoder from '@mapbox/mapbox-sdk/services/geocoding';
import Icon from 'react-native-vector-icons/Ionicons';

const mapboxApiKey = 'pk.eyJ1IjoiaGFzZWViLWNyZWF0b3IiLCJhIjoiY2xtb215ZzlyMTVwNjJpczVvYmJrNno3byJ9.FVpLe8aS2Pd-igHOJSfEiA';

const geocodingClient = MapboxGeocoder({ accessToken: mapboxApiKey });

const SearchBox = ({ onLocationSelect }) => {
    const textInputRef = useRef(null);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [showSearchButton, setShowSearchButton] = useState(false);

    const handleInputChange = (text) => {
        setQuery(text);

        if (text.length > 0) {
            setShowSearchButton(true);
        } else {
            setShowSearchButton(false);
        }

        geocodingClient
            .forwardGeocode({ query: text, limit: 5 })
            .send()
            .then(response => {
                if (response && response.body && response.body.features) {
                    setResults(response.body.features);
                } else {
                    setResults([]);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                setResults([]);
            });
    };

    const handleSelectPlace = (place) => {
        console.log('Selected Place:', place);
        onLocationSelect(place);
        const completeCityName = place.place_name;
        setQuery(completeCityName);
        textInputRef.current.blur();
        setResults([]);
    };




    const handleClearInput = () => {
        setQuery('');
        setShowSearchButton(false);
        setResults([]);
    };

    return (
        <View>
            <View style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center', backgroundColor: '#E5E4E2', borderRadius: 20, paddingLeft: 20 }}>
                <Icon name="location-sharp" size={24} color={'black'} />
                <TextInput
                    placeholder='Search'
                    style={{
                        flex: 1,
                        fontSize: 15,
                        fontWeight: '700',
                        height: 50,
                    }}
                    placeholderTextColor={'gray'}
                    onChangeText={handleInputChange}
                    value={query}
                    ref={textInputRef}
                    defaultValue={query}
                />
                {showSearchButton && (
                    <TouchableOpacity onPress={handleClearInput}>
                        <Icon name='close-circle' size={20} color='black' style={{ marginRight: 10 }} />
                    </TouchableOpacity>
                )}
            </View>
            <FlatList
                data={results}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleSelectPlace(item)} style={{ padding: 10 }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>{item.place_name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default SearchBox;
