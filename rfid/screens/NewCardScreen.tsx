import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TextInput, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react'
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import navigation from '../navigation';

export default function NewCardScreen({ navigation }: RootTabScreenProps<'DigitalWallet'>) {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.label}>Name</Text>
        <TextInput 
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder='Key Name'
        />
        <Text style={styles.label}>Description</Text>
        <TextInput 
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder='Key Description'
        />
        <Text style={styles.label}>UID</Text>
        <TextInput 
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder='UID'
        />
        <View style={styles.separator} lightColor="#fff" />
        <TouchableOpacity onPress={() => navigation.navigate('Root')} style={styles.submitButton}>
          <Text style={styles.buttonText}>Add Key</Text>
        </TouchableOpacity>
      </SafeAreaView>

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
    padding: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 20,
    paddingLeft: 10,
    textAlign: 'left'
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: 290,
    padding: 10,
    alignSelf: 'auto'
  },
  submitButton: {
    backgroundColor: "#43C2F3",
    width: 300,
    height: 50,
    margin: 6,
    paddingTop: 12,
    padding: 10,
    borderRadius: 10
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "white",
    textAlign: 'center',
  }
});
