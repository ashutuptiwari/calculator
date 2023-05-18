import "./Button.css";
interface Props {
  bvalue: string;
  onClick: () => void;
}
const Button = ({ bvalue, onClick }: Props) => {
  return (
    <>
      <button type="button" id="btn" onClick={onClick}>
        {bvalue}
      </button>
    </>
  );
};
export default Button;
