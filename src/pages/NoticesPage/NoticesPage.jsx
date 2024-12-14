import NoticesList from "../../components/NoticesList/NoticesList";
import NoticesFilters from "../../components/NoticesFilters/NoticesFilters";
import css from './NoticesPage.module.css'
export default function NoticesPage() {
    const handleFilterChange = (newFilters) => {
        console.log('Filters changed:', newFilters);
        // Implement the logic to handle filter changes
    };

    // Define the function to handle sort changes
    const handleSortChange = (sortOption) => {
        console.log('Sort option changed:', sortOption);
        // Implement the logic to handle sort changes
    };
    

    return (
        <div>
            <p className={css.findPetParagraph}>Find your favorite pet</p>
            <NoticesFilters onFilterChange={handleFilterChange} 
                onSortChange={handleSortChange} 
            />
            <NoticesList/>
        
        </div>
    )
}