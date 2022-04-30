import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function ScanScreen({ navigation }: RootTabScreenProps<'Friends'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan key on reader</Text>
      <Image source={require('../assets/images/phonetap.png')}/>        
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
    paddingBottom: 30,
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
    color: "#FFFFFF",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "white",
    alignSelf: "center",
    paddingTop: 5,
  },
  scanstyle: {
    flexDirection: "row",
    alignItems: "center",
  },
});
