import sprite from "../../images/icons.svg";
import css from './ModalAttention.module.css'
export default function ModalAttention() {

    return (
        <div className={css.modalOverlay}>

        <div className={css.wrapperModalAttention} >
            <div className={css.divSvg}>
            <svg className={css.iconClose}>
            <use xlinkHref={`${sprite}#icon-close`}></use>
          </svg>
            </div>
            <div className={css.imageBackground}>
<div className={css.img}></div>            </div>
            <p className={css.attention}>Attention</p>
            <p className={css.attentionParagraph}>We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features.</p>
       <div className={css.btnsRegLogDiv}>
        <button className={css.btnsRegLog} type="button">Log In</button>
        <button className={css.btnsRegLog} type="button">Registration</button>
       </div>
        </div>
        </div>

    )
}