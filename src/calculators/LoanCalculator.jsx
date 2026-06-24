import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import InputField from '../components/InputField';
import { calculateEMI } from '../utils/financeFormulas';

const LoanCalculator = () => {
  const [principal, setPrincipal] = useState('500000');
  const [rate, setRate] = useState('8.5');
  const [tenure, setTenure] = useState('60');
  const [results, setResults] = useState({ emi: 0, totalPayment: 0, totalInterest: 0 });

  useEffect(() => {
    setResults(calculateEMI(principal, rate, tenure));
  }, [principal, rate, tenure]);

  return (
    <Card title="Loan Summary Calculator">
      <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
        Calculate your total interest and total payment over the life of a loan.
      </p>

      <InputField
        label="Loan Amount (Principal)"
        type="number"
        prefix="₹"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
        placeholder="Enter principal amount"
      />
      
      <InputField
        label="Interest Rate (Yearly)"
        type="number"
        suffix="%"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        placeholder="Enter annual interest rate"
      />

      <InputField
        label="Loan Tenure (Months)"
        type="number"
        value={tenure}
        onChange={(e) => setTenure(e.target.value)}
        placeholder="Enter tenure in months"
      />

      <div className="results-grid">
        <div className="result-item highlight">
          <div className="result-label">Total Payment</div>
          <div className="result-value">₹{results.totalPayment}</div>
        </div>
        <div className="result-item highlight">
          <div className="result-label">Total Interest</div>
          <div className="result-value">₹{results.totalInterest}</div>
        </div>
      </div>
    </Card>
  );
};

export default LoanCalculator;
