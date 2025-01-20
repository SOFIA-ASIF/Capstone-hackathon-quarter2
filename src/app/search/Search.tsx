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
        <div>
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleChange}
                className='border-2 lg:text-base rounded-xl outline-0 py-[10px] px-[31px] border-[#9F9F9F]'
            />
        </div>
    );
};

export default Search;