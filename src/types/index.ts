export interface IMessages {
  id: number,
  from: string;
  message: string;
  type: string;
  favorite: boolean;
  viewed: boolean;
  checked: boolean;
  date: number;
}

export interface IMenuItem {
  type: string;
  name: string;
  svg: unknown | string
}