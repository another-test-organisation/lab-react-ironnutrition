import { Divider, Input } from 'antd';
import { useState } from 'react';

function Search({filterDisplay}) {
    const [searchText, setSearchText] = useState('');
  
    return (
      <div>
        <Divider>Search</Divider>
  
        <label>Search</label>
        <Input value={searchText} type="text"
          onChange={(event) => {
            setSearchText(event.target.value);
            filterDisplay(event.target.value)
          }}
        />
      </div>
    );

}

export default Search
