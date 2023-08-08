Our Template Name

## :star: Features in this template 
- Typescript support.
- Can use directly within react native cli.
- Integration with @rematch redux for easy global state management.
- BootSplash for faster splashScreen configurations.
- Integration with wix/react-native-navigation for faster and native navigation.
- Localization.

## :wrench: Preconfigured with

- Synced with the recommended [TypeScript template](https://reactnative.dev/docs/typescript#getting-started-with-typescript)
- [Axios](https://github.com/tannerlinsley/react-query) for fetch api calls
- [React Native Navigation(wix)](https://wix.github.io/react-native-navigation/docs/before-you-start/) for native and best performance navigation.
- [react-native-lottie-splash-screen](https://github.com/HwangTaehyun/react-native-lottie-splash-screen) BootSplash for faster splashScreen configurations.
- [Rematch](https://rematchjs.org/) for for easy global state management.
- [react-native-keychain](https://github.com/oblador/react-native-keychain) for Keychain/Keystore access.
- [AsyncStorage](https://github.com/react-native-async-storage/async-storage) for persistent storage.

## Getting Started

Create a new project using the template.

```bash
$ npx react-native init MyApp --template leulseged3/react-native-template
```
## Directory Structure

```
root
├── __tests__
├── android
├── ios
└── src
    └── api
    | └── constants.ts
    | └── get-data.ts
    | └── response.d.ts
    └── assets
    | ├── home-icon.png
    | ├── packages.png
    | ├── profile-icon.png
    └── components
    | ├── Button.tsx
    | └── use-actions.ts
    └── hooks
    |   └── use-actions.ts
    |   └── use-props.ts
    |   └── index.ts
    └── localization
    |   └── am.json
    |   └── en.json
    |   └── types.ts
    └── navigation
    |   ├── bottom-tabs-navigation.tsx
    |   ├── index.tsx
    |   ├── stack-navigation.tsx
    └── screens
    |   ├── ScreenOne.tsx
    |   ├── ScreenTwo.tsx
    |   ├── ScreenThree.tsx
    |   ├── ScreenFour.tsx
    |   ├── ScreenFive.tsx
    |   ├── index.ts
    └── states
    |   └── model
    |     └── blogs.ts
    |     └── language.ts
    |     └── index.ts
    |   └── store.ts
    └── utilities
    |   ├── language-persist.ts
    |   ├── screenNames.ts
 
```

## Credits

This template is modified from [react-native-typescript-template](https://github.com/react-native-community/react-native-template-typescript)

Thank you ❤️
