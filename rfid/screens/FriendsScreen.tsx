import { StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function FriendsScreen({ navigation }: RootTabScreenProps<'Friends'>) {
  return (
    <View style={styles.container}>
        <View style={styles.hseparator} lightColor="#fff" />
        <ScrollView horizontal>
        <View style={styles.separator} lightColor="#fff" />
          <TouchableOpacity onPress={() => navigation.navigate('FriendInfo')} style={styles.button1}>
            <Text style={styles.buttonText}>Andrew</Text>
            <View style={styles.separator2} lightColor="#98DFFC" />
            <Image style={styles.image} source={require('../assets/images/andrew.png')}/> 
          </TouchableOpacity>
          <View style={styles.separator} lightColor="#fff" />
          <TouchableOpacity onPress={() => navigation.navigate('FriendInfo')} style={styles.button2}>
            <Text style={styles.buttonText}>Anushka</Text>
            <View style={styles.separator2} lightColor="#43C2F3" />
            <Image style={styles.image} source={require('../assets/images/anushk.png')}/> 
          </TouchableOpacity>
          <View style={styles.separator} lightColor="#fff" />
          <TouchableOpacity onPress={() => navigation.navigate('FriendInfo')} style={styles.button3}>
            <Text style={styles.buttonText}>Jessica</Text>
            <View style={styles.separator2} lightColor="#292DA3" />
            <Image style={styles.image} source={require('../assets/images/jessica2.png')}/> 
          </TouchableOpacity>
          <View style={styles.separator} lightColor="#fff" />
          <View style={styles.container}>
        </View>
      </ScrollView>
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
    marginHorizontal: 10,
    height: 1,
  },
  hseparator: {
    marginVertical: 20,
    height: 1,
    width: '80%'
  },
  button1: {
    backgroundColor: "#98DFFC",
    width: 175,
    height: 200,
    padding: 20,
    borderRadius: 10
  },
  button2: {
    backgroundColor: "#43C2F3",
    width: 175,
    height: 200,
    padding: 20,
    borderRadius: 10
  },
  button3: {
    backgroundColor: "#292DA3",
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
  separator2: {
    marginVertical: 2,
    height: 1,
    width: '80%',  },
});
