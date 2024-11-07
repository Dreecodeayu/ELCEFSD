const btnGetJoke = document.getElementById('btn1');
const btnClearJoke = document.getElementById('btn2');
const jokeDisplay = document.getElementById('joke-disply');
btnGetJoke.addEventListener('click', () => {
    fetch('https://v2.jokeapi.dev/joke/Any')
    .then(response => response.json()) 
    .then(data => console.log(data)) 
    .catch(error => console.error('Error:', error)); 

});









