import React, { useContext } from 'react';
import { FilterContext } from '../../context/index.context';
import { SearchBoxProp } from '../../types/component.types';

const SearchBox: React.FC<SearchBoxProp> = ({placeholder }) => {
    const {setQuery} = useContext(FilterContext)
  return (
       <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 h-[40px] border border-gray-300 rounded-lg"
        placeholder={placeholder}
      />
  );
};

export default React.memo(SearchBox);