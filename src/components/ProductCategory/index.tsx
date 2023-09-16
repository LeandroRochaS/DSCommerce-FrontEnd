import "./styles.scss";

export default function ProductCategory(props: { text: string }) {
  const { text } = props;
  return (
    <>
      <div className="dsc-card-category">{text}</div>
    </>
  );
}
