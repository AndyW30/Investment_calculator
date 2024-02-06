import { styled } from 'styled-components';

const StyledSection = styled.section`
  padding: 1rem;
  max-width: 30rem;
  margin: 2rem auto;
  border-radius: 4px;
  background: linear-gradient(180deg, #307e6c, #2b996d);
  div {
    display: flex;
    justify-content: space-evenly;
    gap: 1.5rem;
  }
  label {
    display: block;
    margin-bottom: 0.25rem;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 0.5rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #76c0ae;
    border-radius: 0.25rem;
    background-color: transparent;
    color: #c2e9e0;
    font-size: 1rem;
  }
`;

export default function UserInput({ onChangeInput, userInput }) {
  return (
    <StyledSection>
      <div>
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChangeInput('initialInvestment', event.target.value)
            }
          ></input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChangeInput('annualInvestment', event.target.value)
            }
          ></input>
        </p>
      </div>
      <div>
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChangeInput('expectedReturn', event.target.value)
            }
          ></input>
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onChangeInput('duration', event.target.value)}
          ></input>
        </p>
      </div>
    </StyledSection>
  );
}
