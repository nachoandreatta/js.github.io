const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ba1e913d77msh963717c24599c47p180742jsn523fa26306e3',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));