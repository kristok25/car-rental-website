export type Lang = 'en' | 'sq';

export interface Props {
  withLabel?: boolean;
  buttonProps?: ButtonProps | IconButtonProps;
  onChanged?: (lang: Lang) => void;
  showFlag?: boolean;
}

export interface ButtonProps {
  sx?: object;
  [key: string]: unknown;
}

export interface IconButtonProps {
  sx?: object;
  [key: string]: unknown;
}
