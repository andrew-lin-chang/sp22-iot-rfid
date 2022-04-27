import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { Text, View } from '../components/Themed';

export default function FriendInfoScreen() {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button1}>
            <Text style={styles.buttonText}>Jessica</Text>
            <View style={styles.separator} lightColor="#98DFFC" />
            <Image style={styles.image} source={require('../assets/images/jessica2.png')}/> 
        </TouchableOpacity>
        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingTop: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 2,
    height: 1,
    width: '80%',  },
  button1: {
    backgroundColor: "#98DFFC",
    width: 175,
    height: 200,
    padding: 20,
    borderRadius: 10
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "white"
  },
  image: {
    width: 135,
    height: 135,
  }
});
