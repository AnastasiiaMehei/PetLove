import sprite from "../../images/icons.svg";

import css from './ModalNotice.module.css'
export default function ModalNotice() {
    return (
        <div className={css.modalOverlay}>
            <div className={css.wrapperModalNotice}>
<div>
<svg className={css.iconClose}>
            <use xlinkHref={`${sprite}#icon-close`}></use>
          </svg>
</div>
<div className={css.backgroundImg}>
   <p className={css.sellParagraph}>Sell</p>
</div>
<div>
    <p className={css.title}>Golden Retriever Puppies</p>
    <div>
    <svg className={css.iconStar}>
            <use xlinkHref={`${sprite}#icon-yellowLike`}></use>
          </svg>
          <svg className={css.iconStar}>
            <use xlinkHref={`${sprite}#icon-yellowStar`}></use>
          </svg>
          <p className={css.rating}>1</p>
    </div>
</div>


            </div>
        </div>
    )
}