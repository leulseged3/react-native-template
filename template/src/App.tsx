import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle, TouchableOpacity } from 'react-native';
import { useActions, useProps } from './hooks';
import { Provider } from 'react-redux'
import { store } from './states/store'

const Example = () => {
  const { currentLanguage, translation } = useProps(state => state.Language);
  const { Language } = useActions();

  const onLanguageChangePressed = (language: string) => {
    if (currentLanguage === 'en') {
      Language.setLanguageEffect('am')
    } else {
      Language.setLanguageEffect('en')
    }
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
      <TouchableOpacity
        style={styles.changeLanguageButton}
        onPress={() => onLanguageChangePressed('am')}
      >
        <Text style={styles.changeLanguageButtontext}>{translation.change}</Text>
      </TouchableOpacity>
    </View>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <Example />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
})
export default App