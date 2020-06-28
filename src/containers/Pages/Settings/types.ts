import { TField } from '@root/typings';

export interface IProps {
  field: TField;
  changeField: React.Dispatch<React.SetStateAction<TField>>;
}
