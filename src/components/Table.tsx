import {ITable} from "../types/table-record.ts";

export const Table = ({title = 'default table name', columns, dataSource}: ITable) => {
    return (
        <div className='mt-4'>
            <h1 className='text-center'>{title}</h1>
            <table className='table-auto w-full bg-white border border-gray-400 mt-4'>
                <thead className='bg-gray-200 border-b'>
                <tr>
                    <th className='border border-gray-300 px-4 py-2'>Song</th>
                    <th className='border border-gray-300 px-4 py-2'>Artist</th>
                    <th className='border border-gray-300 px-4 py-2'>Year</th>
                </tr>
                </thead>
                <tbody>
                <tr className='transition duration-300 ease-in-out hover:bg-gray-100'>
                    <td className='border border-gray-300 px-4 py-2'>One</td>
                    <td className='border border-gray-300 px-4 py-2'>Metallica</td>
                    <td className='border border-gray-300 px-4 py-2'>1980</td>
                </tr>
                <tr className='transition duration-300 ease-in-out hover:bg-gray-100'>
                    <td className='border border-gray-300 px-4 py-2'>One</td>
                    <td className='border border-gray-300 px-4 py-2'>Metallica</td>
                    <td className='border border-gray-300 px-4 py-2'>1980</td>
                </tr>
                </tbody>
            </table>
        </div>

    );
};


