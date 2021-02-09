import React from 'react'

const Word = ({selectedword,correctLetters}) => {
    //              ---------Working-------------
    //the component gets the correctedletters and the word 
    //that is to be found the component compares them and 
    //finds if the letter is in the word then it displays it in correct words 
    //else blank
    
   const pressedLetter=selectedword.split('').map((letter,i)=>{
return(
    <span className="letter" key={i}>
        {correctLetters.includes(letter)?letter:""}
    </span>
)

    })
    return (
        <div className="word">
            {pressedLetter}
        </div>
    )
}

export default Word
