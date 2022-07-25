import React from   'react'

const QuoteBox = ({randomQuote, randomColors, getRandomAll}) => {

    const objBgStyle = {
    
        backgroundColor:randomColors
    }

    const objAStyle = {
        color:randomColors
    }

    let author = randomQuote.author;
    if(author=='Unknown'){
        author='Motivational phrase'
    }

    return (
        <div>

        <div className='quoteBox'>
            <p className='quoteText'>
            <i className="fa-solid fa-quote-left quotes__ico"></i> 
            {randomQuote.quote}
            <span className='author'>
                <a className='toAuthor' style={objAStyle} href={`https://www.google.com/search?q=${author}`} target='blank' alt="See more on google">
                <i className="fa-solid fa-feather-pointed"></i>  {randomQuote.author}
                </a>
            </span>
            </p>
            <button onClick={getRandomAll} className='Quote__Button' style={objBgStyle}>&#62;</button>
        </div> 
        <div className='socials'>
            
        <a href={`https://api.whatsapp.com/send?text=${randomQuote.quote}`}><i class="fa-brands fa-whatsapp"></i></a></div>
        </div>
    )
} 

export default QuoteBox