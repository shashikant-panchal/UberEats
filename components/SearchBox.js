import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/Ionicons'
import AntIcon from 'react-native-vector-icons/AntDesign'

const SearchBox = () => {
    return (
        <View style={{ marginTop: 15, flexDirection: 'row' }}>
            <GooglePlacesAutocomplete
                placeholder='Search'
                styles={{
                    textInput: {
                        backgroundColor: '#E5E4E2',
                        borderRadius: 20,
                        fontWeight: '700',
                        marginTop: 7,
                    },
                    textInputContainer: {
                        backgroundColor: '#E5E4E2',
                        borderRadius: 50,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 10,
                    }
                }}
                renderLeftButton={() => (
                    <View style={{ marginLeft: 10 }}>
                        <Icon name='location-sharp' size={24} color={'black'} />
                    </View>
                )}
                renderRightButton={() => (
                    <View style={{ flexDirection: 'row', marginRight: 10, backgroundColor: 'white', padding: 9, borderRadius: 30, alignItems: 'center' }}>
                        <AntIcon name='clockcircle' size={11} color={'black'} style={{ marginRight: 5 }} />
                        <Text style={{ color: 'black', fontWeight: '700' }}>Search</Text>
                    </View>
                )}
            />
        </View>

    )
}

export default SearchBox