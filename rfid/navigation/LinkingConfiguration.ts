/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          DigitalWallet: {
            screens: {
              DigitalWalletScreen: 'digitalwallet',
            },
          },
          Friends: {
            screens: {
              FriendsScreen: 'friends',
            },
          },
          Profile: {
            screens: {
              ProfileScreen: 'profile',
            },
          },
        },
      },
      NewCard: {
        screens: {
          NewCardScreen: 'newcard',
        },
      },
      NotFound: '*',
    },
  },
};

export default linking;
