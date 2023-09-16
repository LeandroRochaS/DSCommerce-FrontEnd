import "./styles.scss";

export default function Button(props: { text: string }) {
  const { text } = props;
  return (
    <>
      <div className="dsc-btn dsc-btn-blue">{text}</div>
    </>
  );
}
