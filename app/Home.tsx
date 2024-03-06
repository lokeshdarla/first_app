import React from 'react'
import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={{ uri: 'https://4kwallpapers.com/images/walls/thumbs_2t/14025.png' }} style={styles.image} />
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Hello World!!</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Set your desired background color
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover', // Adjust the resizeMode based on your preference
  },
  innerContainer: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff', // Set your desired inner container background color
    elevation: 5, // Add elevation (shadow) for a raised effect on Android
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4285f4', // Set your desired text color
  },
})

export default App
