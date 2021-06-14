const resultArea = document.querySelector('#planets');
const loading = document.querySelector('div.loading');


const getPlanets = (e) => {
    e.preventDefault();
  
    loading.classList.add("flex");

    const url = `https://swapi.dev/api/planets/`;
  
    fetch(url) 
      .then(response => {
        if (response.status !== 200) {
          throw Error("To nie jest odpowedź 200")
        } else {
          return response.json() 
        }
      })
      .then(json => showPlanets(json.results))
      .catch(err => console.log(err))
}
  
const showPlanets = (planets) => {
    resultArea.textContent = "";
    planets.forEach(planet => {
        const item = document.createElement('div');
        item.classList.add("card")
        item.innerHTML = `
        <h1 class="name">${planet.name}</h1>
        <p>Rotation period: <span>${planet.rotation_period}</span></p>
        <p>Climate: <span>${planet.climate}</span></p>
        <p>Gravity: <span>${planet.gravity}</span></p>
        <p>Created: <span>${planet.created}</span></p>
        <p>Url: <a href="${planet.url}">${planet.url}</a></p>
        `
        resultArea.appendChild(item);
        loading.classList.remove("flex")
       
    })
}

  document.querySelector('button').addEventListener('click', getPlanets);