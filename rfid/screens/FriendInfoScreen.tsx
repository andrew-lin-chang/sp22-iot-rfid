import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function FriendInfoScreen({ navigation }: RootTabScreenProps<'Friends'>)  {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button1}>
            <Text style={styles.buttonText}>Andrew</Text>
            <View style={styles.separator} lightColor="#98DFFC" />
            <Image style={styles.image} source={require('../assets/images/andrew.png')}/> 
        </TouchableOpacity>
        <Text style={styles.title}> Pick a key to share: </Text>
        <ScrollView>
          <TouchableOpacity onPress={() => navigation.navigate('AuthorizeUser')} style={styles.keybutton1}>
            <Text style={styles.buttonText}>House Key</Text>
          </TouchableOpacity>
          <View style={styles.separator} lightColor="#fff" />
          <TouchableOpacity onPress={() => navigation.navigate('AuthorizeUser')} style={styles.keybutton2}>
            <Text style={styles.buttonText}>Gym</Text>
          </TouchableOpacity>
            <View style={styles.separator} lightColor="#fff" />
            <TouchableOpacity onPress={() => navigation.navigate('AuthorizeUser')} style={styles.keybutton3}>
              <Text style={styles.buttonText}>Pool</Text>
            </TouchableOpacity>
            <View style={styles.separator} lightColor="#fff" />
            <TouchableOpacity onPress={() => navigation.navigate('AuthorizeUser')} style={styles.keybutton1}>
              <Text style={styles.buttonText}>Anushka's Apartment</Text>
            </TouchableOpacity>
            <View style={styles.separator} lightColor="#fff" />
            <TouchableOpacity onPress={() => navigation.navigate('AuthorizeUser')} style={styles.keybutton2}>
              <Text style={styles.buttonText}>Jessica's Absolutely Gigantic Mansion</Text>
            </TouchableOpacity>
            <View style={styles.separator} lightColor="#fff" />
            <TouchableOpacity onPress={() => navigation.navigate('AuthorizeUser')} style={styles.keybutton3}>
              <Text style={styles.buttonText}>Dhrohit's Crib</Text>
           </TouchableOpacity>
          </ScrollView>
        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20
  },
  title: {
    paddingTop: 20,
    paddingBottom: 10,
    fontSize: 25,
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
  },
  keybutton1: {
    backgroundColor: "#98DFFC",
    width: 250,
    height: 75,
    padding: 20,
    borderRadius: 10
  },
  keybutton2: {
    backgroundColor: "#43C2F3",
    width: 250,
    height: 75,
    padding: 20,
    borderRadius: 10
  },
  keybutton3: {
    backgroundColor: "#292DA3",
    width: 250,
    height: 75,
    padding: 20,
    borderRadius: 10
  },
});