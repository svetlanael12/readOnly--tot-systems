export interface IMessages {
  id: number,
  from: string;
  message: string;
  type: string;
  favorite: boolean;
  viewed: boolean;
  date: number;
}