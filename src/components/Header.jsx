import { styled } from 'styled-components';
import logo from '../assets/dollar.jpg';

const StyledHeader = styled.header`
  text-align: center;
  margin: 3rem auto;
  & img {
    width: 10rem;
    object-fit: contain;
    border-radius: 50%;
    box-shadow: 2px 2px 5px rgb(255, 255, 255);
  }
  & h1 {
    font-size: 1.5rem;
  }
`;
export default function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="dollar" title="Investment Calculator" />
      <h1>Investment Calculator</h1>
    </StyledHeader>
  );
}
