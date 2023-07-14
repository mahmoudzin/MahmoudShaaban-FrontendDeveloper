import React from 'react';
import Item from './Item';
import Pagination from './Pagination';

interface GridDataProps {
    tableHead: string[]
    tableItems: any[]
}
//overflow-x-auto
const GridData: React.FC<GridDataProps> = ({ tableHead, tableItems }) => {

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-10">
                <table className="w-full overflow-hidden min-w-max text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>{tableHead.map((item) => <th key={item} scope="col" className="px-6 py-3">{item}</th>)}
                    </tr>
                    </thead>
                    <tbody>
                        {tableItems.map((item) => <Item key={item.serial} item={item}/>)}
                    </tbody>
                </table>
                <Pagination />
            </div>


        </>
    );
};

export default GridData;
