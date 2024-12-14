
import PropTypes from 'prop-types';

import css from './FriendsItem.module.css'
export default function FriendsItem({ partner }) {
  const { imageUrl
    , title, email, address, phone, workDays } = partner;
        // Determine working hours

    let workingHoursMessage = 'Day and night'; // Default message if workDays is not provided or empty
    if (workDays && workDays.length > 0) {
        const openDays = workDays.filter(day => day.isOpen);
        if (openDays.length > 0) {
          workingHoursMessage = `${openDays[0].from} - ${openDays[0].to}`;
        } else {
          workingHoursMessage = 'Closed';
        }
    }
  return <div className={css.container}>
<div className={css.timeDiv}>
<p className={css.time}>{workingHoursMessage}</p>

</div>
<div className={css.mainInfo}>
    <div className={css.avatar} style={{ backgroundImage: `url(${imageUrl
})` }}></div>
    <div className={css.paragraphDiv}>
        <p className={css.additionalInfoTitle}>{title}</p>
        {email && (
    <p className={css.additionalInfo}>
      <span className={css.additionalInfoSpan}>Email:</span>
      <a href={`mailto:${email}`} className={css.link}>{email}</a>
    </p>
  )}
  {address && (
    <p className={css.additionalInfo}>
      <span className={css.additionalInfoSpan}>Address: </span>
      <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer" className={css.link}>
        {address}
      </a>
    </p>
  )}
      {phone && (
    <p className={css.additionalInfo}>
      <span className={css.additionalInfoSpan}>Phone: </span>
      <a href={`tel:${phone}`} className={css.link}>{phone}</a>
    </p>
  )}
    </div>

</div>
  </div>;
}
FriendsItem.propTypes = {
  partner: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    email: PropTypes.string, // Make email optional
    address: PropTypes.string, // Make address optional
    phone: PropTypes.string, // Make phone optional
    workDays: PropTypes.arrayOf(
      PropTypes.shape({
        isOpen: PropTypes.bool.isRequired,
        from: PropTypes.string,
        to: PropTypes.string,
      })
    ),
  }).isRequired,
};