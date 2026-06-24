/**
 * Smart Finance Toolkit - Formulas
 */

// GST Calculation
// rate: percentage (e.g. 18 for 18%)
export const calculateGST = (amount, rate, isInclusive = false) => {
  const numericAmount = parseFloat(amount);
  const numericRate = parseFloat(rate);

  if (isNaN(numericAmount) || isNaN(numericRate) || numericAmount <= 0) {
    return { baseAmount: 0, gstAmount: 0, totalAmount: 0 };
  }

  if (isInclusive) {
    // If amount already includes GST:
    // Base Amount = Total Cost - [Total Cost * (100 / (100 + GST Rate))]
    const baseAmount = numericAmount / (1 + numericRate / 100);
    const gstAmount = numericAmount - baseAmount;
    return {
      baseAmount: baseAmount.toFixed(2),
      gstAmount: gstAmount.toFixed(2),
      totalAmount: numericAmount.toFixed(2),
    };
  } else {
    // If adding GST to a base amount
    const gstAmount = (numericAmount * numericRate) / 100;
    const totalAmount = numericAmount + gstAmount;
    return {
      baseAmount: numericAmount.toFixed(2),
      gstAmount: gstAmount.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
    };
  }
};

// EMI Calculation
// P = Principal loan amount, r = rate per month, n = number of months
export const calculateEMI = (principal, annualRate, months) => {
  const p = parseFloat(principal);
  const r = parseFloat(annualRate) / 12 / 100;
  const n = parseInt(months, 10);

  if (isNaN(p) || isNaN(r) || isNaN(n) || p <= 0 || n <= 0) {
    return { emi: 0, totalPayment: 0, totalInterest: 0 };
  }

  if (r === 0) {
    // Zero interest loan
    const emi = p / n;
    return {
      emi: emi.toFixed(2),
      totalPayment: p.toFixed(2),
      totalInterest: 0,
    };
  }

  const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalPayment = emi * n;
  const totalInterest = totalPayment - p;

  return {
    emi: emi.toFixed(2),
    totalPayment: totalPayment.toFixed(2),
    totalInterest: totalInterest.toFixed(2),
  };
};
