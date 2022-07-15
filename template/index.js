import { Navigation } from 'react-native-navigation'
import { bottomTabs, stackNavigation } from './src/navigation';

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: stackNavigation,
      bottomTabs: bottomTabs,
    },
  })
});

Navigation.setDefaultOptions({
  topBar: {
    background: {
      color: '#F5F5F5'
    }
  },
  bottomTabs: {
    backgroundColor: '#F5F5F5',
    titleDisplayMode: 'alwaysShow',
  },
  bottomTab: {
    fontSize: 12,
    textColor: '#6998AB',
    selectedTextColor: '#406882',
    selectedFontSize: 14,
    iconColor: '#6998AB',
    selectedIconColor: '#406882',
  },
  statusBar: {
    backgroundColor: '#F5F5F5'
  }
})