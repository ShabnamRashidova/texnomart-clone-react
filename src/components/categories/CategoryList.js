const CategoryList = ({ categories, changeCategory, currentCategory }) => {
  return (
    <div className="categories">
      {categories.map((category) => (
        <ul className="category-list p-4 " key={category.id}>
          <li
            className={
              category.categoryName === currentCategory ? `active` : null
            }
            onClick={() => changeCategory(category)}
          >
            {category.categoryName}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default CategoryList;
