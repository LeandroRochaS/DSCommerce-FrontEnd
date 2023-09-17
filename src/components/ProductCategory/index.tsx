import { CategoryDTO } from "../../models/category";
import "./styles.scss";

export default function ProductCategory(props: { category: CategoryDTO }) {
  const { category } = props;
  return (
    <>
      <div className="dsc-card-category">{category.name}</div>
    </>
  );
}
