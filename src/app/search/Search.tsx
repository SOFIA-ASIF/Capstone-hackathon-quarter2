import React, { useState } from 'react';

interface SearchProps {
    onSearch: (searchTerm: string) => void;
}

const Search = ({ onSearch }: SearchProps) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <div className='flex items-center justify-center w-[60%] mx-auto'>
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleChange}
                className='border-2 lg:text-base w-full rounded-xl outline-0 py-[10px] px-[31px] border-[#9F9F9F]'
            />
        </div>
    );
};

export default Search;