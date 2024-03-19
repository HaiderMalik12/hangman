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
  const filterAbleGusses = words.filter(word => word.length === hangman.length)

  //sort all the filterAbleGusses in the higest occurence character
  sortWithHighOccurence(filterAbleGusses);
}

/**
 * Sort Array with Highest occurence characters
 */
function sortWithHighOccurence(filterAbleGusses){
    function calculateCharFrequency(word) {
        const freuquency = {};
        for(const char of word){
            freuquency[char] = (freuquency[char] || 0) + 1
        }
        return freuquency
    }

  filterAbleGusses.sort((a,b) => {
    const freuquencyA = calculateCharFrequency(a);
    const freuquencyB = calculateCharFrequency(b);

    const totalOccurenceA = Object.values(freuquencyA).reduce((acc, val) => acc + val, 0)
    const totalOccurenceB = Object.values(freuquencyB).reduce((acc, val) => acc + val, 0)

    return totalOccurenceB - totalOccurenceA
  });

  console.log('Sorted Array based on higest occurence of characters');
  console.log(filterAbleGusses);

}


getFilterAbleGusess()