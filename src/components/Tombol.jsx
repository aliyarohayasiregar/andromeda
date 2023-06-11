import "./Tombol.css";

function Tombol({ children, ...props }) {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
}

export default Tombol;
