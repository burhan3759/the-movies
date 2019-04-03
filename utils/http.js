import axios from 'axios';

const API_KEY = 'API_KEY_HERE';

const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	timeout: 120000,
	headers: {
		'Content-Type': 'application/json',
	}
});

const api = (method, url, body) => {
	let customHeaders = {};

	return instance(
		{
			method,
			url: `${url}?api_key=${API_KEY}`,
			data: body,
			headers: customHeaders,
		}
	).then(res => {
		return Promise.resolve(res.data.results);
	}).catch(err => {
		console.error(JSON.stringify(err));
		return Promise.reject(err);
	});
};

const GET = (url, body = {}) => api('get', url, body);
const POST = (url, body = {}) => api('post', url, body);
const PATCH = (url, body = {}) => api('patch', url, body);
const PUT = (url, body = {}) => api('put', url, body);
const DELETE = (url, body = {}) => api('delete', url, body);

export default {
	GET,
	POST,
	PATCH,
	PUT,
	DELETE,
	API_KEY,
};