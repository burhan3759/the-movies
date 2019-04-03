## The MOVIES
Simple **react native** app made using [Expo](https://expo.io/). This app are using [TMDB Developer API](https://developers.themoviedb.org) for fetching the movies. You need get `API_KEY` from tmdb to access the endpoint. If you dont want to register for the `API_KEY` it is okay also since I already inserted some dummy data.

### Features

	- [Expo](https://expo.io/)
	- [axios](https://github.com/axios/axios);
	- [redux](https://redux.js.org/)
	- [react-navigation](https://reactnavigation.org/)

### Quick Start

Clone the repo.

utils/http.js

```
const API_KEY = 'API_KEY_HERE'
```

Paste your api key here.

If you dont have expo cli installed, install it first by running:
```
	npm install expo-cli --global
```

Then:
```
npm install
npm start
```