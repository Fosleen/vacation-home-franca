import { ReactNode } from "react";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  filled?: boolean;
  wider?: boolean;
  form?: string;
}

export interface LandmarkProps {
  img: string;
  url: string;
}

export interface ImageProps {
  alt: string;
  height: number;
  src: string;
  width: number;
  caption: string;
}

export interface ChildrenProps {
  children: ReactNode;
}

export interface TranslatedDataProps {
  title: string;
  description: string;
}

export interface LocaleContextType {
  locale: string;
  setLocale: (locale: string) => void;
}
