import React from 'react';
import Text from './Text';
import { View, Image, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    //flexDirection: 'row', // Arrange children in a row
    //alignItems: 'center', // Align items vertically centered
    padding: 10, // Optional: Add padding around the container
  },
  topContainer: {
    flexDirection: 'row', // Arrange image and text side by side
    marginBottom: 10, // Space between the top section and stats
  },
  imageContainer:{
    marginRight: 10
  },
  img: {
    width: 60,
    height: 60,
    //marginRight: 10, // Add space between the image and the text
    borderRadius: 5
  },
  /*
  content:{
    flex: 1
  },
  */
  textContainer: {
    flex: 1, // Allow text container to take remaining space
    //marginBottom: 10
  },
  fullName: {
    fontWeight: 'bold', // Make the full name bold
    fontSize: 16,
    marginBottom: 5, // Add space between lines
  },
  description: {
    marginBottom: 5,
  },
  languageTag: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    paddingVertical: 4, // Vertical padding inside the tag
    paddingHorizontal: 8, // Horizontal padding inside the tag
    marginBottom: 5,
  },
  languageText: {
    color: 'white',
    fontSize: 14
    
    //fontStyle: 'italic', // Optional: Style the language differently
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Distribute stats evenly
    marginTop: 10,
  },
  statItem: {
   alignItems: 'center', // Center align text and legend
   flex: 1
  },
  statNumber: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  statLabel: {
    fontSize: 12,
    color: '#555'
  },
});

const formatNumber = (num) => {
  return num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num;
};

const Item = ({ repo }) => (
  <View style={styles.container}>
    {/* Top section: Image and text */}
    <View style={styles.topContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.img} source={{ uri: repo.ownerAvatarUrl }} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.fullName}>{repo.fullName}</Text>
        <Text style={styles.description}>{repo.description}</Text>
        <View style={styles.languageTag}>
          <Text style={styles.languageText}>{repo.language}</Text>
        </View>
      </View>
    </View>

    {/* Stats row */}
    <View style={styles.statsContainer}>
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>{formatNumber(repo.stargazersCount)}</Text>
        <Text style={styles.statLabel}>Stars</Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>{formatNumber(repo.forksCount)}</Text>
        <Text style={styles.statLabel}>Forks</Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>{formatNumber(repo.reviewCount)}</Text>
        <Text style={styles.statLabel}>Reviews</Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>{formatNumber(repo.ratingAverage)}</Text>
        <Text style={styles.statLabel}>Rating</Text>
      </View>
    </View>
  </View>
)

export default Item;