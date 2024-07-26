export interface ITable {
  title: string;
  columns: string[];
  dataSource: any;
  onAction: (action: string, row: any) => { action: string; row: any };
}

export interface Action<T = unknown> {
  action: string; // CRUD
  record?: T;
}
