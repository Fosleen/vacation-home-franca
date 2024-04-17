export interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  filled?: boolean;
  wider?: boolean;
  form?: string;
}

export interface LandmarkProps {
  title: string;
  description: string;
  img: string;
  url: string;
}
