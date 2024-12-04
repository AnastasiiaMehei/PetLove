import css from "./FindPetForm.module.css";
export default function FindPetForm() {
  return (
    <div className={css.wrapper}>
      <div className={css.filterContainer}>
        <input className={css.search} type="text" placeholder="Search" />
        <select className={css.category}>
          <option value="option1">Show all</option>
          <option value="option1">Sell</option>
          <option value="option2">Free</option>
          <option value="option3">Lost</option>
          <option value="option3">Found</option>
        </select>
        <select className={css.gender}>
          <option value="option1">Show all</option>
          <option value="option1">Unknown</option>
          <option value="option2">Female</option>
          <option value="option3">Male</option>
          <option value="option3">Multiple</option>
        </select>
      </div>
    </div>
  );
}
