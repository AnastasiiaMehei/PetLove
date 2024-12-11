import FriendsList from '../../components/FriendsList/FriendsList'
import css from './FriendsPage.module.css'
export default function FriendsPage() {
  return (
  <div className={css.wrapperFriendsPage}>
<p className={css.mainParagraph}>Our friends</p>
<div>
    <FriendsList/>
</div>
  </div>
  )
}
