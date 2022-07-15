import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * EXCEPTION HANDLING IS MISSED
 */

/**
 *A function to put user language preference in persistent storage.
 *
 * @export
 * @param {string} language
 * @return {*} 
 */
export async function setLanguageToAsyncStorage$(language: string) {
  return await AsyncStorage.setItem('@language', JSON.stringify(language));
}

/**
 *A function to retrieve user language preference from presistent storage.
 *
 * @export
 * @return {*} 
 */
export async function getLanguageFromAsyncStorage$() {
  const language = await AsyncStorage.getItem('@language');
  if (language) {
    return JSON.parse(language) as string;
  }
}
