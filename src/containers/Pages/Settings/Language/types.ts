import { TLanguages } from '@root/i18n/context/types';

export interface IProps {
  language: TLanguages;
  setLanguage: React.Dispatch<React.SetStateAction<TLanguages>>;
}
