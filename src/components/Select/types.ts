type TOption = {
  label: string;
  value: string;
};

export interface IProps {
  name: string;
  ariaLabel: string;
  variant?: 'outline';
  className?: string;
  data: TOption[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
