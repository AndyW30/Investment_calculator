import logo from '../assets/dollar.jpg';

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="dollar" title="Investment Calculator" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
