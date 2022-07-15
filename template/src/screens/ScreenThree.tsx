import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ViewStyle, TouchableOpacity, TextStyle } from 'react-native';
import { Navigation, NavigationComponentProps, NavigationFunctionComponent } from 'react-native-navigation';
import { useActions, useProps } from '../hooks';
import { AppButton } from '../components';
import { SceneNames } from '../utilities/screenNames';
import SplashScreen from "react-native-lottie-splash-screen";

interface IProps extends NavigationComponentProps {

}

export const ScreenThree: NavigationFunctionComponent<IProps> = (props) => {
  const { componentId } = props
  const { currentLanguage, translation } = useProps(state => state.Language);
  const { Language } = useActions();

  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 3000)
  }, []);

  const onLanguageChangePressed = () => {
    if (currentLanguage === 'en') {
      Language.setLanguageEffect('am')
    } else {
      Language.setLanguageEffect('en')
    }
  }

  const onDetailButtonPress = () => {
    Navigation.push(componentId, {
      component: {
        name: SceneNames.ScreenOne
      }
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{translation.welcome}</Text>
      {
        currentLanguage === 'en'
          ?
          <Text>
            Default language is <Text style={styles.languageName}>English</Text>
          </Text>
          :
          <Text>
            የመረጡት ቋንቋ <Text style={styles.languageName}>አማርኛ</Text> ነው።
          </Text>
      }

      <AppButton
        onPress={() => onLanguageChangePressed()}
        title={translation.changeLanguage}
        buttonContainerStyle={{ marginTop: 20 }}
      />
      <AppButton
        onPress={onDetailButtonPress}
        title={'Details Screen'}
        buttonContainerStyle={{ marginTop: 20, backgroundColor: 'red' }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  } as ViewStyle,
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  } as TextStyle,
  languageName: {
    fontWeight: 'bold'
  } as TextStyle,
  changeLanguageButton: {
    backgroundColor: 'blue',
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  } as ViewStyle,
  changeLanguageButtontext: {
    color: '#fff',
    fontWeight: 'bold'
  } as TextStyle
});
