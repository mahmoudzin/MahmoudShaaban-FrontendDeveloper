import React from 'react';
import { useAppContext } from '../../context';


interface ItemProps {
    item: any
}

const Item: React.FC<ItemProps> = ({ item }) => {
    const {itemActions} = useAppContext();

    return (
        <tr onClick={()=> itemActions.getItem(item.serial)} className="cursor-pointer bg-white border-b  hover:bg-gray-50 ">
            {item && Object.values(item).map((val:any, i) => <td key={i} className="px-6 py-4">{val}</td>)}
        </tr>
    );
};

export default Item;
