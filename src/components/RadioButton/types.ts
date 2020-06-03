export interface IProps {
  id?: string;
  name?: string;
  value?: any;
  label?: string;
  className?: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
