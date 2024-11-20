import FriendCard from '../../components/FriendCard/FriendCard'
import css from './FriendsPage.module.css'
export default function FriendsPage() {
  return (
  <div className={css.wrapperFriendsPage}>
<p className={css.mainParagraph}>Our friends</p>
<div>
    <FriendCard/>
</div>
  </div>
  )
}
