export interface IProps {
  name?: string;
  value?: any;
  label?: string;
  className?: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
