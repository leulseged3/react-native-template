import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { NavigationComponentProps, NavigationFunctionComponent } from 'react-native-navigation';

interface IProps extends NavigationComponentProps {

}

export const ScreenFive: NavigationFunctionComponent<IProps> = (props) => {
  const { componentId } = props

  return (
    <View style={styles.container}>
      <Text>
        Screen Five
      </Text>
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