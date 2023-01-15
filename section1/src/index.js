import generateJoke from "./generateJoke";
import "./styles/main.scss";
import laughing from './assets/laughing.png';


// cannot show this on console, because the errors occur 
// "Uncaught SyntaxError: Cannot use import statement outside a module"
// so we use webpack
// how to use webpack? here is how to install
//
// npm init
// npm i -D webpack webpack-cli
const laughingPic = document.getElementById("laughingPic");
laughingPic.src = laughing;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);

generateJoke();