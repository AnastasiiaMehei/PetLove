import css from "./NoticesFilters.module.css";
export default function NoticesFilters() {
  return (
    <div className={css.wrapper}>
      <div className={css.filterContainer}>
        <input className={css.search} type="text" placeholder="Search" />
        <select className={css.category}>
          <option className={css.options} value="option1">Show all</option>
          <option className={css.options} value="option1">Sell</option>
          <option className={css.options} value="option2">Free</option>
          <option className={css.options} value="option3">Lost</option>
          <option className={css.options} value="option3">Found</option>
        </select>
        <select className={css.gender}>
          <option  className={css.options} value="option1">Show all</option>
          <option  className={css.options} value="option1">Unknown</option>
          <option  className={css.options} value="option2">Female</option>
          <option  className={css.options} value="option3">Male</option>
          <option  className={css.options} value="option3">Multiple</option>
        </select>
        <select className={css.byType}>
          <option className={css.options} value="option1">Show all</option>
          <option className={css.options} value="option2">Dog</option>
          <option className={css.options} value="option3">Cat</option>
          <option className={css.options} value="option4">Monkey</option>
          <option className={css.options} value="option5">Bird</option>
          <option className={css.options} value="option6">Snake</option>
          <option className={css.options} value="option7">Turtle</option>
          <option className={css.options} value="option8">Lizard</option>
        </select>
         <input className={css.search} type="text" placeholder="Location" />

      </div>
      <div className={css.divBtnsChose}>
        <button className={css.buttonsChose} type="button">Popular</button>
        <button className={css.buttonsChose} type="button">Unpopular</button>
        <button className={css.buttonsChose} type="button">Cheap</button>
        <button className={css.buttonsChose} type="button">Expensive</button>
      </div>
    </div>
  );
}
