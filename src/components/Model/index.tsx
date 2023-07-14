import React from 'react';
import Laoding from '../Loading';
import { useAppContext } from '../../context';

const ListItem = ({title='', value=''})=> {
    return (
        <div className="flex flex-col py-3 px-4">
            <dt className="mb-1 text-gray-500 md:text-lg ">{title}</dt>
            <dd className="text-lg font-semibold">{value}</dd>
        </div>
    )
}

const Model:React.FC = () => {
    const {myState, itemActions} = useAppContext()
    const {item, shouldShow} = myState;
    const {closeModel} = itemActions
    
    return (
        <>
        {/* Main modal */}
        {shouldShow &&
        <div onClick={()=> closeModel()} className={` fixed flex items-center justify-center top-0 left-0 right-0 z-50 w-full p-4 bg-slate-200 bg-opacity-50 backdrop-filter backdrop-blur-lg overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
            <div onClick={e => e.stopPropagation()}  className="relative w-full max-w-2xl max-h-full shadow z-40">
            {/* Modal content */}
            <div  className="relative bg-white rounded-lg shadow">
                {/* Modal header */}
                <div className="flex items-start justify-between p-4 border-b rounded-t">
                <h3 className="text-xl font-semibold text-gray-900">
                    Capsule {item?.capsule_serial}
                </h3>
                <button onClick={()=> closeModel()} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="staticModal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
                </div>
                {/* Modal body */}
                {item ?
                    <dl className="text-gray-900 divide-y divide-gray-200 ">
                        <ListItem title="Capsule ID" value={item.capsule_id}/>
                        <ListItem title="Capsule details" value={item.details || 'there no available details to this Capsule'}/>
                        <ListItem title="Capsule Original Launch" value={item.original_launch}/>
                        <ListItem title="Capsule Status" value={item.status}/>
                        <ListItem title="Capsule Type" value={item.type}/>
                    </dl>
                    :<Laoding />
                }
                
            </div>
            </div>
  </div>}
        </>
    );
};

export default Model;
