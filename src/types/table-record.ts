export interface ITable {
  title: string;
  columns: string[];
  dataSource: any;
}

export interface Action<T = unknown> {
  action: string; // CRUD
  record?: T;
}
