import React, { useEffect, useState } from 'react';
import { FaSortAmountDownAlt, FaSortAmountUpAlt, FaSearchLocation } from 'react-icons/fa';
import { getresults } from 'services';
import { useAppContext } from 'context/context';


const SearchBar = (props) => {
	const [initialState, dispatch] = useAppContext();
	const [sortby, setSortBy] = useState(false);
	const [filter, setFilter] = useState({});

	/**
	  * searchHandler - a async function which makes API req, sets state in context accordingily
	  * @param { any} filter - an object containing filter criteria
	  * @returns {any} - an object containing articles based on input and state of network cal
	  */
	const searchHandler = async () => {
		dispatch({ type: 'beforeFetchReq', payload: { isLoading: true } });
		const searchResult = await getresults(filter);
		dispatch({ type: 'itemList', payload: { isLoading: false, searchRes: searchResult.articles } });
	}


	/**
  * clickHandler - a function which gets called when  button is clicked 
  * takes name and state of element
  * @param { element} html element which is being clicked
  * @returns {any} - updates the state variable
  */
	const clickHandler = (element) => {
		const { name, attributes: {
			pubattr: {
				value
			} } } = element.target;

		if (!sortby)
			setFilter({
				...filter,
				[name]: value
			});
		else {
			const clonedF = { ...filter };
			delete clonedF[name];
			setFilter({
				...clonedF,
			})
		}
		setSortBy(!sortby);
	}

	/**
  * changeHandler - a function which sets the input name and value in state of component
  * takes name and state of element
  * @param { element} html element which is being clicked
  * @returns {any} - updates the state variable
  */
	const changeHandler = (element) => {
		let { name, value } = element.target;

		setFilter({
			...filter,
			[name]: value
		})
	}

	/**
  * make a Call on initial page page load
  */
	useEffect(() => {
		searchHandler()
	}, []);

	return (
		<div className="search-wrapper">
			<div className="filter-section">

				{/* input ::Query */}
				<div className="input-item-wrapper">
					<label for="query">Query</label>
					<input type="text" name="query" onChange={changeHandler} placeholder="search" />
				</div>

				{/* input ::domains */}
				<div className="input-item-wrapper">
					<label for="domain">domains</label>
					<select name="domain" id="cars" onChange={changeHandler}>
						<option value="">Select</option>
						<option value="wsj.com">wsj</option>
						<option value="abc.com">abc</option>
						<option value="education.com">Education</option>
					</select>
				</div>

				{/* input ::from */}
				<div className="input-item-wrapper">
					<label for="from">From</label>
					<input type="date" name="from" placeholder="select end date" onChange={changeHandler} />
				</div>

				{/* input ::to */}
				<div className="input-item-wrapper">
					<label for="to">To</label>
					<input type="date" name="to" placeholder="select start date" onChange={changeHandler} />
				</div>

				{/* input ::Sort By */}
				<div className="input-item-wrapper">
					<label for="sortby">Sort by</label>
					<button name="sortby" pubAttr="publishedAt" value={sortby} onClick={clickHandler}>
						{sortby ? <FaSortAmountDownAlt /> : <FaSortAmountUpAlt />}
						Popularity
					</button>
				</div>

				<div className="input-item-wrapper">
					<label for="search action"></label>
					<button className="btn-search" onClick={searchHandler}>
						<FaSearchLocation />
						 Search
					 </button>
				</div>

			</div>

		</div>
	)
}

export default SearchBar;
