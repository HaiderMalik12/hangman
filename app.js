import fetch from 'node-fetch';
const API_URL = 'https://polly-hangman.herokuapp.com'

/**
 * Create new Hangman GAME
 */

async function createGame(){
    const gameResponse = await fetch(`${API_URL}/hangman`, {
        method: 'POST'
    });
    return await gameResponse.json()
}

async function getWords(){
    const words = await fetch('https://raw.githubusercontent.com/despo/hangman/master/words')
    return await words.text()
}

async function getFilterAbleGusess(){
 const {hangman} = await createGame(); 
  const words = (await getWords()).split('\n')
  const filterAbleWords = words.filter(word => word.length === hangman.length)
}

getFilterAbleGusess()
