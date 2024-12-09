import sprite from "../../images/icons.svg";

import css from './NoticesItem.module.css'
export default function NoticesItem () {
    return (
        <div className={css.wrapperFindCard }>
            <div className={css.findCardBackgroundImg}>

            </div>
            <div className={css.divCard}>
                <div className={css.divNamePet}>
                    <p className={css.namePet}>
                    Found Red-Eared Slider
                    </p>
                    <div className={css.divYellowStar}>
                    <svg className={css.yellowStar}>
                   <use xlinkHref={`${sprite}#icon-yellowStar`}></use>                 
                   </svg>
                   <p>1</p>
                    </div>
                    
                    
                </div>
                <div className={css.divPetsCharacteristics}>
                
                <div className="divPetsDescription">
    <p className={css.namePet}>
        Name
    </p>
    <p className={css.namePetApi}>Name</p>
</div>
<div className="divPetsDescription">
    <p className={css.namePet}>
    Birthday
    </p>
    <p className={css.namePetApi}>Birthday</p>
</div>

<div className="divPetsDescription">
    <p className={css.namePet}>
    Sex
    </p>
    <p className={css.namePetApi}>Sex</p>
</div>
<div className="divPetsDescription">
    <p className={css.namePet}>
    Species
    </p>
    <p className={css.namePetApi}>Species</p>
</div>
<div className="divPetsDescription">
    <p className={css.namePet}>
    Category
    </p>
    <p className={css.namePetApi}>Category</p>
</div>
                    </div>

                    <p className={css.petsComment}>Friendly gecko lost around the park. Reward offered.</p>

            </div>
            <div className={css.divLearnMoreBtn}>
<p className={css.price}>Price</p>
<div className={css.divSend}>
<button className={css.learnMoreBtn} type="button">Learn more</button>
<button className={css.btnLike} type="button">
<svg className={css.iconYellowLike}>
                   <use xlinkHref={`${sprite}#icon-yellowLike`}></use>                 
                   </svg>
</button>
</div>
            </div>
            
        </div>
    )
}
