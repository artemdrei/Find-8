import React, { useReducer, ReactNode } from 'react';

import en from '../en';
import ua from '../ua';

import { TLanguages } from './types';
import { getStorage } from '@root/utils';

export const translations = { en, ua };
const getTranslate = (langCode: TLanguages) => translations[langCode];

const langCode = getStorage('language') || 'en';

const initialState = {
  langCode,
  labels: getTranslate(langCode),
};

export const I18nContext = React.createContext({
  ...initialState,
});

type TAction = {
  type: string;
  payload: TLanguages;
};

export const I18nContextProvider: React.FC<ReactNode> = ({ children }) => {
  const reducer = (state = initialState, action: TAction) => {
    switch (action.type) {
      case 'SET_LANGUAGE':
        return {
          langCode: action.payload,
          labels: getTranslate(action.payload),
        };
      default:
        return { ...state };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // @ts-ignore
  return <I18nContext.Provider value={{ ...state, dispatch }}>{children}</I18nContext.Provider>;
};
