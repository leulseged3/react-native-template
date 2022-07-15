import { createModel } from '@rematch/core';
import type { RootModel } from './index';

import {
  getLanguageFromAsyncStorage$,
  setLanguageToAsyncStorage$,
} from '../../utilities/language-persist';
import { ITranslation } from '../../localization/type';
import en from '../../localization/en.json';
import am from '../../localization/am.json';

interface ILanguage {
  translation: ITranslation;
  currentLanguage: string;
}

export const Language = createModel<RootModel>()({
  state: {
    translation: en,
    currentLanguage: 'en',
  } as ILanguage,
  reducers: {
    setLanguage(state, payload: ILanguage) {
      return {
        ...state,
        currentLanguage: payload.currentLanguage,
        translation: payload.translation,
      };
    },
  },
  effects: dispatch => ({
    loadLanguageEffect() {
      getLanguageFromAsyncStorage$().then(res => {
        if (res) {
          switch (res) {
            case 'am':
              dispatch.Language.setLanguage({
                currentLanguage: res,
                translation: am,
              });
              break;
            case 'en':
              dispatch.Language.setLanguage({
                currentLanguage: res,
                translation: en,
              });
              break;
            default:
              break;
          }
        }
      });
    },
    setLanguageEffect(language: string) {
      setLanguageToAsyncStorage$(language).then(() => {
        switch (language) {
          case 'am':
            dispatch.Language.setLanguage({
              currentLanguage: language,
              translation: am,
            });
            break;
          case 'en':
            dispatch.Language.setLanguage({
              currentLanguage: language,
              translation: en,
            });
            break;
          default:
            break;
        }
      });
    },
  }),
});
