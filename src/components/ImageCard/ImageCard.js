import React from 'react'
import css from './ImageCard.css'
import imagePlaceHolder from '../../assets/logo&icons/placeholder.png'

const ImageCard = ({
            imageSource = imagePlaceHolder, 
            alt = 'placeholder',
            description = 'some article description and some more description here :D',
            onClick
        }) =>  (
        <div className={css.ImageCard}>
            <div className={css.Container} >
                <div className={css.Overlay} onClick={onClick}>
                    <h1 className={css.OverlayText}>Add to Cart</h1>
                </div>
                <img src={imageSource} alt={alt}/>
            </div>
            <p className={css.Description}>
                {description}
            </p>
        </div>
    )

export default ImageCard

