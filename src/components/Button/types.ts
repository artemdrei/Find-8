export type TBtnVariant = 'primary' | 'link';

export interface IProps {
  label?: string;
  size?: 'large';
  variant?: TBtnVariant;
  children?: React.ReactNode;
  isDisabled?: boolean;
  className?: string;
  onClick?: () => void;
  onMouseUp?: () => void;
  onMouseDown?: () => void;
}
