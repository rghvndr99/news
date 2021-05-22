import React from 'react';
import SearchBar from 'components/searchBar';
import ItemList from 'components/itemList';

const Home =(props)=>{
    return (
        <div className="page-wrapper">
           <SearchBar />
           <ItemList />
        </div>
    )
}
export default Home;