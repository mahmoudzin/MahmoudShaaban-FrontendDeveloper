import React from 'react';
import { useAppContext } from '../../context';


const SearchForm: React.FC = () => {
    
    const {myState, dataActions} = useAppContext()
    const {query} = myState;
    const {changeQuery, changeFilter, handleSubmitted} = dataActions

    return (
            <form className="mb-6 flex" onSubmit={handleSubmitted}>
                <select defaultValue={"status"} onChange={event => changeFilter(event.target.value)}  
                className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-1/4 p-2.5 mr-5">
                    <option disabled>Filter By</option>
                    <option value="status">Status</option>
                    <option value="original_launch">Original Launch</option>
                    <option value="type">Type</option>
                </select>

                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                    <input 
                        type="search" 
                        className="block w-full outline-none p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-violet-500 focus:border-violet-500 " 
                        placeholder="Search Mockups, Logos..."
                        onChange={(e)=> changeQuery(e.target.value)}
                        value={query} 
                        required />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-violet-500 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-4 py-2">
                        Search
                    </button>
                </div>
            </form>
    );
};

export default SearchForm;
