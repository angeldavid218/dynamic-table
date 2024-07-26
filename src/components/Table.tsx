import { ITable } from '../types/table-record.ts';

export const Table = ({
  title = 'default table name',
  columns,
  dataSource,
  onAction,
}: ITable) => {
  return (
    <div className="mt-4">
      <h1 className="text-center">{title}</h1>
      <table className="table-auto w-full bg-white border border-gray-400 mt-4">
        <thead className="bg-gray-200 border-b">
          <tr>
            {columns.map((column) => (
              <th className="border border-gray-300 px-4 py-2">{column}</th>
            ))}
          </tr>
          <tr>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataSource.map((row: never, i: number) => (
            <tr
              key={i}
              className="transition duration-300 ease-in-out hover:bg-gray-100"
            >
              {columns.map((col, colIdx: number) => (
                <td key={colIdx} className="border border-gray-300 px-4 py-2">
                  {row[col]}
                </td>
              ))}
              <td className="border border-gray-300 px-4 py-2 text-left">
                <a onClick={() => onAction('edit', row)}>Edit</a>
              </td>
              <td className="border border-gray-300 px-4 py-2 text-left">
                <a onClick={() => onAction('delete', row)}>Delete</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
