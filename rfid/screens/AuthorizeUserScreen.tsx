import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function AuthorizeUserScreen({ navigation }: RootTabScreenProps<'Friends'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Authorize User?</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.navigate('Scan')} style={styles.authbuttony}>
            <Text style={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('FriendInfo')} style={styles.authbuttonn}>
            <Text style={styles.buttonText}>No</Text>
          </TouchableOpacity>
      </View>
        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
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
    marginVertical: 30,
    height: 1,
    width: '80%',
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
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "white",
    alignSelf: "center",
    paddingTop: 5,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  authbuttony: {
      paddingHorizontal: 8,
      paddingVertical: 10,
      borderRadius: 4,
      backgroundColor: "#228C22",
      alignSelf: "flex-start",
      marginHorizontal: "1%",
      marginBottom: 6,
      minWidth: "40%",
      minHeight: "25%",
      height: 30,
      textAlign: "center",
  },
  authbuttonn: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: "#FF0000",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "40%",
    minHeight: "20%",
    height: 58,
    textAlign: "center",
}
});
