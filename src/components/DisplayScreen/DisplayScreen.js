import "./display-screen.css";

export const DisplayScreen = (props) => {
  return (
    <abbr title={props.trace}>
      <div className="display">{props.trace}</div>
    </abbr>
  );
};

export default DisplayScreen;
