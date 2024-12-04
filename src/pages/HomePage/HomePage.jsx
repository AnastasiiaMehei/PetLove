import FindPetForm from '../../components/FindPetForm/FindPetForm'
import css from './HomePage.module.css'
// import NewsPage from '../../pages/NewsPage/NewsPage'
// import FriendsPage from '../../pages/FriendsPage/FriendsPage'

export default function HomePage() {
  return (
  <div className={css.wrapper}>
    <div className={css.header}>
      
    </div>
    <div className={css.headerContainer}>
<h1 className={css.mainTitle}>
Take good <span className={css.mainTitleSpan}>care</span> of your small pets
</h1>
<p className={css.mainParagraph}>Choosing a pet for your home is a choice that is meant to enrich your life with immeasurable joy and tenderness.</p>
    </div>
    <div className={css.photo}>

    </div>
  {/* <MenuContainer/> */}
  {/* <NewsPage/> */}
  <FindPetForm/>

  </div>
  )
}
