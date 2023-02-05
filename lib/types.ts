export interface User {
  key: string;
  email: string;
  avatar: string;
}

export interface Child {
  key: string;
  user: string;
  name: string;
  email: string;
  avatar: string;
  last_deposit?: number;
  balance: number;
}

export interface Transaction {
  key: string;
  child: string;
  amount: number;
  for: string;
  date_created: number;
}

export interface AppState {
  user: User;
  children: Child[];
}
