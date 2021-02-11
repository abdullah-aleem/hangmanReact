import './App.css';
import Header from './pages/Header';
import Figure from './pages/Figure'
import WrongWords from './pages/Wrongwords';
import Word from './pages/Word';
import React, { useState, useEffect } from 'react';
import { showNotification as show } from './helpers/helperNotify';
import Notification from "./pages/Notification"
//the list of the words that can be placed in the hangman
const words = ['application', 'programming', 'interface', 'wizard'];


//this selects the random word out of the array of words
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
   //---------setting up state-----------------//

   //is game to be played 
   const [playable, setPlayable] = useState(true);

   //the letters that do match to the correct word
   const [correctLetters, setCorrectLetters] = useState([]);

   //the letters that donot match the the correct word
   const [wrongLetters, setWrongLetters] = useState([]);

   //the state for showing the notification that you have already entered the letter
   const [showNotification, setNotification] = useState(false);



   //the use effect is used when ever you need have a sideeffect of your website, anything that you want should happen whenever your app rerenders
   useEffect(() => {

      //the function that handle the key strokes and decides accordingly
      const handleKeyStroke = event => {
         console.log('key pressed and funtion startted')
         const { key, keyCode } = event;
         if (playable) {
            if (keyCode >= 65 && keyCode <= 90) {
               const letter = key.toLowerCase();

               if (selectedWord.includes(letter)) {
                  if (!correctLetters.includes(letter)) {
                     setCorrectLetters(current => [...current, letter])
                     console.log('length of word', selectedWord.length);
                     console.log('length of word', correctLetters);
                     let temWord = Array.from(new Set([...selectedWord]))
                     console.log(temWord);
                     if (temWord.length == (correctLetters.length + 1)) {
                        setPlayable(false)
                        console.log('you win');
                     }

                  } else {
                     //already entered
                     show(setNotification);
                  }
               } else {
                  if (!wrongLetters.includes(letter)) {
                     setWrongLetters(current => [...current, letter])
                     if ((wrongLetters.length + 1) == 6) {
                        setPlayable(false);
                        console.log("youlost")
                     }
                  } else {
                     //already entered
                     show(setNotification);
                  }
               }
            }
         }
      }



      //this adds the event listener to the window and it calls the function handle keystroke 
      window.addEventListener('keydown', handleKeyStroke);



      //now the problem is that we only want one event listener at a time so we remove the other by removing them in the end
      return () => window.removeEventListener('keydown', handleKeyStroke)



   }, [correctLetters, playable, wrongLetters])






   return (

      <div>
         <Header />
         <div className="game-container">
            <Figure wrongLetters={wrongLetters} />
            <WrongWords wrongWords={wrongLetters} />
            <Word selectedword={selectedWord} correctLetters={correctLetters} />
         </div>
         <Notification showNotification={showNotification} />
      </div>
   );
}

export default App;
