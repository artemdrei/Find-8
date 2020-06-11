export type TBtnVariant = 'primary' | 'link' | 'outline';

export interface IProps {
  label?: string;
  size?: 'large';
  variant?: TBtnVariant | TBtnVariant[];
  children?: React.ReactNode;
  isDisabled?: boolean;
  className?: string;
  onClick?: () => void;
  onMouseUp?: () => void;
  onMouseDown?: () => void;
}
