import React from 'react'
import css from './ImageCard.css'
import imagePlaceHolder from '../../assets/logo&icons/placeholder.png'

const ImageCard = ({
    imageSource = imagePlaceHolder, 
    alt = 'placeholder',
    description = 'some article description and some more description here :D'
}) => {
   return (
        <div className={css.ImageCard}>
            <img src={imageSource} alt={alt}/>
            <article className={css.Description}>
                {description}
            </article>
        </div>
    )   
}

export default ImageCard

