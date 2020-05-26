export interface IProps {
  label?: string;
  size: 'large' | 'medium';
  children?: React.ReactNode;
  isDisabled?: boolean;
  className?: string;
  onClick?: () => void;
  onMouseUp?: () => void;
  onMouseDown?: () => void;
  variant: 'primary' | 'link';
}
