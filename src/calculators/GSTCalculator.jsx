import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import InputField from '../components/InputField';
import { calculateGST } from '../utils/financeFormulas';

const GSTCalculator = () => {
  const [amount, setAmount] = useState('1000');
  const [rate, setRate] = useState('18');
  const [isInclusive, setIsInclusive] = useState(false);
  const [results, setResults] = useState({ baseAmount: 0, gstAmount: 0, totalAmount: 0 });

  useEffect(() => {
    setResults(calculateGST(amount, rate, isInclusive));
  }, [amount, rate, isInclusive]);

  return (
    <Card title="GST Calculator">
      <InputField
        label="Amount"
        type="number"
        prefix="₹"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      
      <InputField
        label="GST Rate"
        type="number"
        suffix="%"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        placeholder="Enter GST rate"
      />

      <label className="toggle-group">
        <input
          type="checkbox"
          checked={isInclusive}
          onChange={(e) => setIsInclusive(e.target.checked)}
        />
        <span>Amount already includes GST</span>
      </label>

      <div className="results-grid">
        <div className="result-item">
          <div className="result-label">Base Amount</div>
          <div className="result-value">₹{results.baseAmount}</div>
        </div>
        <div className="result-item">
          <div className="result-label">GST Amount</div>
          <div className="result-value">₹{results.gstAmount}</div>
        </div>
        <div className="result-item highlight">
          <div className="result-label">Total Amount</div>
          <div className="result-value">₹{results.totalAmount}</div>
        </div>
      </div>
    </Card>
  );
};

export default GSTCalculator;
