const baseUrl = 'https://swapi.dev/api/';

export function getStarships() {
    return fetch(baseUrl + 'starships/', {mode: 'cors'}).then(res => res.json());
}

