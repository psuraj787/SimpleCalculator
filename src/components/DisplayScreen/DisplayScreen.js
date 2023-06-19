import "./display-screen.css";

export const DisplayScreen = (props) => {
  return (
      <input type='text' name='resultVal' value={props.trace} className="display" />
  );
};

export default DisplayScreen;
