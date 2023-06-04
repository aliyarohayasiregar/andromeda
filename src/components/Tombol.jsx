import "./Tombol.css";

function Tombol(props) {
  return (
    <button onClick={props.onClick} className="button">
      {props.children}
    </button>
  );
}

export default Tombol;
