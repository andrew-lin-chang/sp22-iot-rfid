import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function FriendsScreen({ navigation }: RootTabScreenProps<'Friends'>) {
  return (
    <View style={styles.container}>
        <View style={styles.hseparator} lightColor="#fff" />
        <ScrollView horizontal>
        <View style={styles.separator} lightColor="#fff" />
          <TouchableOpacity onPress={() => navigation.navigate('FriendInfo')} style={styles.button1}>
            <Text style={styles.buttonText}>Jessica</Text>
          </TouchableOpacity>
          <View style={styles.separator} lightColor="#fff" />
          <TouchableOpacity onPress={() => navigation.navigate('FriendInfo')} style={styles.button2}>
            <Text style={styles.buttonText}>Anushka</Text>
          </TouchableOpacity>
          <View style={styles.separator} lightColor="#fff" />
          <TouchableOpacity onPress={() => navigation.navigate('FriendInfo')} style={styles.button3}>
            <Text style={styles.buttonText}>Dhrohit</Text>
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
  }
});
