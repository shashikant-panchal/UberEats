import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const image = 'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg';
const title = 'Indian Kitchen';
const description = 'Food $$ • 🎫 • 4⭐ (1900+)';

const About = () => {
  return (
    <View style={styles.container}>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription description={description} />
    </View>
  );
};

const RestaurantImage = (props) => {
  return (
    <Image source={{ uri: props.image }} style={styles.image} />
  );
};

const RestaurantTitle = (props) => {
  return (
    <Text style={styles.title}>{props.title}</Text>
  );
};

const RestaurantDescription = (props) => {
  return (
    <Text style={styles.description}>{props.description}</Text>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    paddingBottom: 10,
  },
  image: {
    width: '100%',
    height: 180,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
    marginHorizontal: 15,
  },
  description: {
    fontSize: 16,
    fontWeight: '700',
    color: 'gray',
    marginHorizontal: 15,
  },
});

export default About;
