
export interface ITable {
    title: string;
    columns: string[];
    dataSource: unknown;
}


export interface Action<T = unknown> {
    action: string // CRUD
    record?: T
}


