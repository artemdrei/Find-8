export default en;

import React, { useReducer, ReactNode } from 'react';

import en from './en';
import ua from './ua';

export type TLanguages = 'en' | 'ua';

export const translations = { en, ua };
const getTranslate = (langCode: TLanguages) => translations[langCode];

const initialState = {
  langCode: 'en',
  labels: getTranslate('en'),
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

  return <I18nContext.Provider value={{ ...state, dispatch }}>{children}</I18nContext.Provider>;
};
