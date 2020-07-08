

export function getAllStarships() {
    return fetch(`https://swapi.dev/api/starships/`, {mode: 'cors'})
    .then(res => res.json())
}

