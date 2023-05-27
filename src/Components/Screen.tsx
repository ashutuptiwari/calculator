import "./Screen.css";
interface Props {
  nstring: string;
}
const Screen = ({ nstring }: Props) => {
  return (
    <div id="screen">
      <p>{nstring}</p>
    </div>
  );
};
export default Screen;
