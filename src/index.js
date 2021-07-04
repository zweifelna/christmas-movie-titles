import {getRandomInt} from 'lib/math';

const christmas = ["Un Noël", "Noël"];

const words_start = ["Un pique-nique à", "La lettre de", "L'ambassadrice de", "Un parfum de", "Une romance à",
                     "Le livre de", "Un festival à", "La maison de", "La carte de", "Le rêve de", "A la recherche du Père",
                    "Un délicieux"];

const words_end = ["à l'hôtel", "en Floride", "à Hawaii", "pas comme les autres", "interminable", "de conte de fée",
                    "inoubliable", "à Paris", "avec mon chien", "à croquer"];

const getRandomTitle = () => {
    let randomChristmas = getRandomInt(0, 1);
    let randomWordsEnd = getRandomInt(0, words_end.length - 1);
    let randomWordsStart = getRandomInt(0, words_start.length - 1);

    if(christmas[randomChristmas] == christmas[0]){
        return christmas[0] + " " + words_end[randomWordsEnd];
    }
    else if(christmas[randomChristmas] == christmas[1]){
        return words_start[randomWordsStart] + " " + christmas[1];
    }
    return "error";
}

//console.log(getRandomTitle());
const setRandomTitle = () => {
    document.getElementById('random_title').innerText = getRandomTitle();
}

document.getElementById("generate")
    .addEventListener('click', setRandomTitle);

setRandomTitle();
