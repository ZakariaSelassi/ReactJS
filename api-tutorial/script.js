// creation d'une request
let request = new XMLHttpRequest()

request.open('GET', 'https://ghibliapi.herokuapp.com/films',true);

request.onload = function(){
    let data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
        data.forEach((movie) => {
          console.log(movie.title)
        })
      } else {
        console.log('error')
      }
}

request.send();