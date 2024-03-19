# Steps

1. Create the Game by getting the hamstring length (How many characters will be involved in the word) i.e [abjoint,abjudge,ererfff,ffffgddf,gggdyytr,aqerreerp,guesses]
2. Extract 9 charcter words from words file
3. Filterable Gusses = [];
4. Iterate over all Guesses and send the request to GUESS LETTER
   1. Sort all the Gusses in the form of highest occurrence letter/character
   2. Iterate of over the Sorted Guesses and send the api request to guess the letter
   3. If letter does not belong to wrong guesses array then do the api request with a letter
   4. Before start the Guess the wrong try should be 0.Check if you get the status = false 7 times it should close the game and also push the character to wrong guesses array
   5. If character matched then try to find out all the words from the dictionary that have my hamstring input
      1. Get the most probabable words
      2. Sort the higest occurrence of words
      3. If current character belongs to wrong guesses array then remove it from the sorted array which I have to pass to next iteration
   6. Print the solution
   7. Print the Character
5. If charachter matched then print the API response
