import React from 'react';
import {
  ScreenThree,
  ScreenFour,
  ScreenFive
} from '../screens';
import { Provider } from 'react-redux';
import { LayoutBottomTabs, Navigation } from 'react-native-navigation';
import { SceneNames } from '../utilities/screenNames';
import { store } from '../states/store';

Navigation.registerComponent(
  SceneNames.ScreenThree,
  () => props =>
  (
    <Provider store={store}>
      <ScreenThree {...props} />
    </Provider>
  ),
  () => ScreenThree,
);

Navigation.registerComponent(
  SceneNames.ScreenFour,
  () => props =>
  (
    <Provider store={store}>
      <ScreenFour {...props} />
    </Provider>
  ),
  () => ScreenFour,
);

Navigation.registerComponent(
  SceneNames.ScreenFive,
  () => props =>
  (
    <Provider store={store}>
      <ScreenFive {...props} />
    </Provider>
  ),
  () => ScreenFive,
);

export const bottomTabs: LayoutBottomTabs = {
  id: 'BOTTOM_TABS_LAYOUT',
  children: [
    {
      stack: {
        id: 'SCREEN_THREE_TAB',
        children: [
          {
            component: {
              id: 'SCREEN_THREE',
              name: SceneNames.ScreenThree
            },
          },
        ],
        options: {
          bottomTab: {
            text: 'Home',
            icon: require('../assets/home-icon.png'),
          }
        }
      },
    },
    {
      stack: {
        id: 'SCREEN_FOUR_TAB',
        children: [
          {
            component: {
              id: 'SCREEN_FOUR',
              name: SceneNames.ScreenFour
            }
          }
        ],
        options: {
          bottomTab: {
            text: 'Package',
            icon: require('../assets/packages.png'),
          }
        }
      },
    },
    {
      stack: {
        id: 'SCREEN_FIVE_TAB',
        children: [
          {
            component: {
              id: 'SCREEN_FIVE',
              name: SceneNames.ScreenFive
            }
          }
        ],
        options: {
          bottomTab: {
            text: 'Profile',
            icon: require('../assets/profile-icon.png'),
          }
        }
      },
    }
  ],
}