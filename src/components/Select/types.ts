type TOption = {
  label: string;
  value: string;
};

export interface IProps {
  data: TOption[];
  name: string;
  ariaLabel: string;
  variant?: 'outline';
  className?: string;
  defaultValue?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
