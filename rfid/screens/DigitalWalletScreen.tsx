import React from 'react';
import { StyleSheet, TouchableOpacity, AppRegistry, ScrollView, ImageBackground } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function DigitalWalletScreen({ navigation }: RootTabScreenProps<'DigitalWallet'>) {
  return (
    <ScrollView>
      <View style={styles.container}>
      <View style={styles.separator} lightColor="#fff" />
        <TouchableOpacity onPress={() => navigation.navigate('CardInfo')} style={styles.button1}>
          <Text style={styles.buttonText}>House Key</Text>
        </TouchableOpacity>
        <View style={styles.separator} lightColor="#fff" />
        <TouchableOpacity onPress={() => navigation.navigate('CardInfo')} style={styles.button2}>
          <Text style={styles.buttonText}>Gym</Text>
        </TouchableOpacity>
        <View style={styles.separator} lightColor="#fff" />
        <TouchableOpacity onPress={() => navigation.navigate('CardInfo')} style={styles.button3}>
          <Text style={styles.buttonText}>Pool</Text>
        </TouchableOpacity>
        <View style={styles.separator} lightColor="#fff" />
        <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('CardInfo')} style={styles.button1}>
          <Text style={styles.buttonText}>Anushka's Apartment</Text>
        </TouchableOpacity>
        <View style={styles.separator} lightColor="#fff" />
        <TouchableOpacity onPress={() => navigation.navigate('CardInfo')} style={styles.button2}>
          <Text style={styles.buttonText}>Jessica's Absolutely Gigantic Mansion</Text>
        </TouchableOpacity>
        <View style={styles.separator} lightColor="#fff" />
        <TouchableOpacity onPress={() => navigation.navigate('CardInfo')} style={styles.button3}>
          <Text style={styles.buttonText}>Pranav's House</Text>
        </TouchableOpacity>
        <View style={styles.separator} lightColor="#fff" />
      </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
  button1: {
    backgroundColor: "#98DFFC",
    // backgroundImage: 
    width: 300,
    height: 175,
    padding: 20,
    borderRadius: 10
  },
  button2: {
    backgroundColor: "#43C2F3",
    width: 300,
    height: 175,
    padding: 20,
    borderRadius: 10
  },
  button3: {
    backgroundColor: "#292DA3",
    width: 300,
    height: 175,
    padding: 20,
    borderRadius: 10
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "white"
  }, 
  image: {
    flex: 1,
    justifyContent: "center",
  }
});
