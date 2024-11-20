// import sprite from "../../images/icons.svg";

import css from './FriendCard.module.css'
export default function FriendCard() {
  return <div className={css.container}>
<div className={css.timeDiv}>
    <p className={css.time}>time</p>

</div>
<div className={css.mainInfo}>
    <div className={css.avatar}></div>
    <div>
        <p className={css.additionalInfoTitle}>title</p>
        <p className={css.additionalInfo}><span className={css.additionalInfoSpan}>Email:</span>Email</p>
        <p className={css.additionalInfo}><span className={css.additionalInfoSpan}>Address: </span>Address</p>
        <p className={css.additionalInfo}><span className={css.additionalInfoSpan}>Phone: </span>Phone</p>
    </div>

</div>
  </div>;
}
