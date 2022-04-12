import React from 'react';
import { StyleSheet, TouchableOpacity, AppRegistry,  } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function DigitalWalletScreen({ navigation }: RootTabScreenProps<'DigitalWallet'>) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('CardInfo')} style={styles.button}>
        <Text style={styles.buttonText}>Card One</Text>
      </TouchableOpacity>
      <View style={styles.separator} lightColor="#fff" />
      <TouchableOpacity onPress={() => navigation.navigate('CardInfo')} style={styles.button}>
        <Text style={styles.buttonText}>Card Two</Text>
      </TouchableOpacity>
      <View style={styles.separator} lightColor="#fff" />
      <TouchableOpacity onPress={() => navigation.navigate('CardInfo')} style={styles.button}>
        <Text style={styles.buttonText}>Card Three</Text>
      </TouchableOpacity>
    </View>
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
  button: {
    backgroundColor: "#98DFFC",
    width: 300,
    height: 175,
    padding: 20,
    borderRadius: 10
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "white"
  }
});
