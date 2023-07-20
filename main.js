const handleResponse = () => {
    fetch("https://swapi.dev/api/vehicles/14/")
        .then(response => response.json())
        .then(vehicle => alert(`Ваш транспорт - ${vehicle.name}`))
    fetch("https://swapi.dev/api/starships/12/")
        .then(response => response.json())
        .then(ships => alert(`Ваш корабль - ${ships.name}`))
    fetch("https://swapi.dev/api/people/1/")
        .then(response => response.json())
        .then(info => alert(`Вы ${info.name}, год рождения - ${info.birth_year}`))
        .catch(error => console.log(error))
}

handleResponse()