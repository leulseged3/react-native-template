import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Navigation, NavigationComponentProps, NavigationFunctionComponent } from 'react-native-navigation';
import { AppButton } from '../components';

interface IProps extends NavigationComponentProps {

}

export const ScreenOne: NavigationFunctionComponent<IProps> = (props) => {
  const { componentId } = props
  const onBackButtonPress = () => {
    Navigation.pop(componentId)
  }
  return (
    <View style={styles.container}>
      <Text>
        Details Screen
      </Text>
      <AppButton
        onPress={onBackButtonPress}
        title={'Back Home'}
        buttonContainerStyle={{ marginTop: 20, backgroundColor: 'grey' }}
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
  } as ViewStyle
});