
const baseUrl = 'http://localhost:9000'

/**
	  * getresults - a async function which connects backends makes API req, and returns response
	  * @param { any} filter - an object containing filter criteria
	  * @returns {any} - an object containing articles based on input
	  */
export const getresults = async (filterParams) => {
	const { query, sortby, domain, to, from } = filterParams;
	const params = {
		q: query,
		from,
		to,
		sortBy: sortby,
		domains: domain,
	};
	let queryString = !query ? 'q=undefined' : '';
	Object.keys(params).map((key, index) => {
		if (params[key]) {
			queryString += (index === 0 ? '' : '&') + key + '=' + params[key];
		}
	});

	return await fetch(baseUrl + '/news', {
		method: 'post',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify({ queryString })
	}).then(res => res.json());
};

