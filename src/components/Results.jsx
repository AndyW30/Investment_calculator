import { styled } from 'styled-components';
import { calculateInvestmentResults, formatter } from '../util/investment';

const StyledTable = styled.table`
  max-width: 50rem;
  margin: 2rem auto;
  padding: 1rem;
  table-layout: fixed;
  border-spacing: 1rem;
  text-align: right;
  thead {
    font-size: 0.7rem;
    color: #83e6c0;
  }
  tbody {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 0.85rem;
    color: #c2e9e0;
  }
`;

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  const initialInvestment =
    resultsData.length > 0
      ? resultsData[0].valueEndOfYear -
        resultsData[0].interest -
        resultsData[0].annualInvestment
      : 0;
  console.log(resultsData);
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalInvestment = yearData.valueEndOfYear - totalInterest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvestment)}</td>
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
}
