import NoticesList from "../../components/NoticesList/NoticesList";
import NoticesFilters from "../../components/NoticesFilters/NoticesFilters";
import css from './NoticesPage.module.css'
export default function NoticesPage() {
    return (
        <div>
            <p className={css.findPetParagraph}>Find your favorite pet</p>
            <NoticesFilters/>
            <NoticesList/>
            
        </div>
    )
}