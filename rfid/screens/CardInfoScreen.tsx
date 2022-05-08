import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function CardInfoScreen({ navigation }: RootTabScreenProps<'Friends'>) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText2}>Pranav's House</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Recent Uses</Text>
      <ScrollView>
        <View style={styles.separator} lightColor="#fff" />
        <TouchableOpacity style={styles.ubutton}>
          <Text style={styles.buttonText}>Anushka</Text>
          <Text style={styles.textstyle}>April 30, 2022</Text>
        </TouchableOpacity>
        <View style={styles.separator} lightColor="#fff" />
        <TouchableOpacity style={styles.ubutton}>
        <Text style={styles.buttonText}>Jessica</Text>
          <Text style={styles.textstyle}>April 28, 2022</Text>
        </TouchableOpacity>
        <View style={styles.separator} lightColor="#fff" />
        <TouchableOpacity style={styles.ubutton}>
        <Text style={styles.buttonText}>Dhruv</Text>
          <Text style={styles.textstyle}>April 25, 2022</Text>
        </TouchableOpacity>
        <View style={styles.separator} lightColor="#fff" />
        <TouchableOpacity style={styles.ubutton}>
        <Text style={styles.buttonText}>Nitisha</Text>
          <Text style={styles.textstyle}>April 22, 2022</Text>
        </TouchableOpacity>
        <View style={styles.separator} lightColor="#fff" />
        <TouchableOpacity style={styles.ubutton}>
          <Text style={styles.buttonText}>Morgan</Text>
          <Text style={styles.textstyle}>April 19, 2022</Text>
        </TouchableOpacity>
        <View style={styles.separator} lightColor="#fff" />
        <TouchableOpacity style={styles.ubutton}>
        <Text style={styles.buttonText}>Rohit</Text>
          <Text style={styles.textstyle}>April 15, 2022</Text>
        </TouchableOpacity>
        <View style={styles.separator} lightColor="#fff" />
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
    paddingTop: 20,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 5,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 5,
    height: 1,
    width: '80%',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#404040"
  },
  buttonText2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "white"
  },
  ubutton: {
    backgroundColor: "#D3D3D3",
    width: 300,
    height: 75,
    padding: 15,
    borderRadius: 10
  },
  button1: {
    backgroundColor: "#292DA3",
    width: 300,
    height: 175,
    padding: 20,
    borderRadius: 10
  },
  textstyle: {
    fontSize: 15,
    paddingBottom: 5,
    fontWeight: 'bold',
    color: "#404040"
  }
});
