/******************************************
Treehouse Techdegree:
FSJS project 4 - OOP Game App
Phrase.js
--aiming for exceeds expectations--
******************************************/

 class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    };
    
    // Adds letter placeholders to the display when the game starts.  
    addPhraseToDisplay() {
        const phrase = this.phrase;
        const phraseUl = document.querySelector('#phrase ul');
        
        for (let i = 0; i < phrase.length; i++) {
            let letter = phrase[i];
            const letterLi = document.createElement('li');
                        
            if(letter === ' ') {
                letterLi.className = 'space';
                letterLi.textContent = ' ';
            } else {
                letterLi.className = `hide letter ${letter}`;
                letterLi.textContent = `${letter}`;
            };

            phraseUl.appendChild(letterLi);
        };
        return phrase;
    }; 

    // Checks to see if the letter selected by the player matches a letter in the phrase.
    // @param {string} letter - letter to check
    checkLetter(letter) {
        if(this.phrase.includes(`${letter}`)) {
            return true;
        } else {
            return false;
        };
    }; 

    // Reveals the letter(s) on the board that matches the player's selection.
    // @param {string} letter - selected letter to display
    showMatchedLetter(letter) {
        const matchingListItems = document.getElementsByClassName(`${letter}`);
        for (let i = 0; i < matchingListItems.length; i++) {
            let matchedLi = matchingListItems[i];
            matchedLi.classList.remove('hide');
            matchedLi.classList.add('show');
        };
    };    
 };