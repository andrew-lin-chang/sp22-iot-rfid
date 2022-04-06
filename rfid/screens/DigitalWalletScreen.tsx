import { StyleSheet, AppRegistry,  } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function DigitalWalletScreen({ navigation }: RootTabScreenProps<'DigitalWallet'>) {
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
      </View>
      <View style={styles.separator} lightColor="#fff" />
      <View style={styles.rectangle}>
      </View>
      <View style={styles.separator} lightColor="#fff" />
      <View style={styles.rectangle}>
      </View>
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
  rectangle: {
    width: 300,
    height: 175,
    backgroundColor: '#98DFFC',
  },
});
