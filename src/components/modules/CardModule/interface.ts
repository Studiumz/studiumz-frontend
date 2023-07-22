export interface CardProps {
  type: string;
  id: string;
  value: string;
  className?: string;
  isRequired?: boolean;
  subject: string | undefined;
}
