import React from   'react'
import authorPhotos from '../json/authorPhotos.json'

const PhotoAuthor = ({randomQuote}) => {
let url = authorPhotos[1].author;
let mensaje = "Pendiente"
/*  */
for(let i = 0; i < authorPhotos.length; i++){
    if(authorPhotos[i].author===randomQuote.author){
    
    if(authorPhotos[i].url==="Pendiente"){
    mensaje = `Foto de ${randomQuote.author} Pendiente`
    url = 'https://upload.wikimedia.org/wikipedia/commons/2/2f/No-photo-m.png'
    }else{
        mensaje = randomQuote.author
        url = authorPhotos[i].url
    }
    break
}else{
    url = 'sorry No Photo for';
}
}

    return (

    <div className='photo__container'> 
    <p>{mensaje}</p>
    
    <img  className='behind' src={url}></img>
    
    </div>

    )
}

export default PhotoAuthor