import "./Header.css";
import Tombol from "./Tombol";

function Header(props) {
  const sudahLogin = false;
  const userName = "Mas Iwan";

  // IF ELSE

  // let komponen;
  // if (sudahLogin) {
  //   komponen = <div>Mas Iwan</div>;
  // } else {
  //   komponen = <Tombol>Login</Tombol>;
  // }

  // return (
  //   <header>
  //     <div>Andromeda</div>
  //     {komponen}
  //   </header>
  // );

  // TERNARY

  return (
    <header>
      <div>{props.logo}</div>
      {sudahLogin ? <div>{userName}</div> : <Tombol a={userName}>Login</Tombol>}
      {sudahLogin && <h1>Selamat datang, {userName}!</h1>}
      {!sudahLogin && <p>Silakan login terlebih dahulu.</p>}
      {sudahLogin || <p>Silakan login terlebih dahulu.</p>}
      <p>Hai, {userName ?? "orang tak dikenal"}!</p>
    </header>
  );
}

export default Header;
