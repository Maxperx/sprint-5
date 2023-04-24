let reportAcudits = [];

function jokes() {
  fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      document.querySelector('#joke').innerHTML = data.joke;
      document.querySelector('.botones-votacion').style.display = 'flex'; // Mostramos los botones de votación
    })
    .catch(error => console.error(error));
}

function votarChiste(resultado) {
  const chiste = document.querySelector('#joke').innerHTML;
  const date = new Date().toISOString();
  reportAcudits.push({
    joke: chiste,
    resultado: resultado,
    date: date
  });
  console.log(reportAcudits);
}


fetch('http://api.openweathermap.org/data/2.5/forecast?id=3128760&appid=5fe2fe693ec8532ed958bc2d1a715ccc', {
  headers: {
    'Accept': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => {
    const temperature = (data.list[0].main.temp - 273.15).toFixed();
    const weatherIcon = `http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    document.querySelector('#tiempo').innerHTML = `${temperature}ºC <br><img src="${weatherIcon}" alt="icono del clima">`;
  })
  .catch(error => console.error(error));