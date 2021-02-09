import React from 'react'

const WrongWords = ({wrongWords}) => {
//                    --------working---------
//              the component displays the wrong words
//      the component also displays parts according to the wrong words
  
 
  return (
        <div class="wrong-letters-container">
        <div id="wrong-letters">
          {wrongWords.length>0?<p>Wrong Words</p>:''}
          {/* displays the wrong letters pressed */}
          {wrongWords.map((letter,i) => <span key={i}>{letter},</span>)}
        </div>
      </div>
    )
}

export default WrongWords
