import React from 'react'

const Figure = ({wrongLetters}) => {
  //we get how many parts we want to show
  const errors= wrongLetters.length;
    
  
  
  return (
        <svg height="250" width="200" class="figure-container">
        {/* <!-- Rod --> */}
        <line x1="60" y1="20" x2="140" y2="20" />
        <line x1="140" y1="20" x2="140" y2="50" />
        <line x1="60" y1="20" x2="60" y2="230" />
        <line x1="20" y1="230" x2="100" y2="230" />

        {/* <!-- Head --> */}
        <circle cx="140" cy="70" r="20" class="figure-part" style={{display:errors>=1?"Block":"none"}}/>
        {/* <!-- Body --> */}
        <line x1="140" y1="90" x2="140" y2="150" class="figure-part" style={{display:errors>=2?"Block":"none"}}/>
        {/* <!-- Arms --> */}
        <line x1="140" y1="120" x2="120" y2="100" class="figure-part" style={{display:errors>=3?"Block":"none"}}/>
        <line x1="140" y1="120" x2="160" y2="100" class="figure-part" style={{display:errors>=4?"Block":"none"}}/>
        {/* <!-- Legs --> */}
        <line x1="140" y1="150" x2="120" y2="180" class="figure-part" style={{display:errors>=5?"Block":"none"}}/>
        <line x1="140" y1="150" x2="160" y2="180" class="figure-part" style={{display:errors>=6?"Block":"none"}}/>
      </svg>
    )
}

export default Figure
