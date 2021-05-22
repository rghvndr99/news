
import React from 'react';
import { useAppContext } from 'context/context';
import Tile from 'components/tile';
import { FiLoader } from 'react-icons/fi';

const ItemList = (props) => {
	const [initialState, dispatch] = useAppContext();
	const { list = [], isLoading=true } = initialState;

	/**
	  * generateList - a function which generates list of items
	   * @param { array} takes list as aparameter
	  * @returns {any} - react elements 
	  */
	const generateList=()=>{
		return list.map((list) => {
			return <Tile {...list} />
		})
	}

	return (
		<div className="item-wrapper">
			{isLoading ? <FiLoader className="loader" /> : <>
				{list.length ? generateList()  : <p>No Result found</p>}</>}
		</div>
	)
}

export default ItemList;
