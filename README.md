# Smart Finance Toolkit 📊

A sleek, professional, and responsive web application built for your everyday financial calculations. This toolkit includes a GST Calculator, an EMI Calculator, and a Loan Summary Calculator.

**Live Deployment:** [Link to your Vercel Deployment here]

---

## 🖼️ Screenshots

*(Replace these placeholders with actual screenshots of your app once deployed)*

![GST Calculator Screenshot](#) 
![EMI Calculator Screenshot](#)

---

## ✨ Features

- **Modern UI:** Clean, professional card-based layout with a cohesive design system (no third-party UI libraries used).
- **Responsive Design:** Fully usable and accessible on both desktop and mobile devices.
- **GST Calculator:** Easily add GST to a base amount or extract the base amount from a GST-inclusive price.
- **EMI Calculator:** Quickly determine your Equated Monthly Installment for loans.
- **Loan Summary:** Understand the long-term impact of your loans with accurate "Total Interest" and "Total Payment" over the loan's lifetime.
- **Zero Dependencies:** Built purely with React, Vite, standard JavaScript mathematics, and vanilla CSS.

---

## 🧮 Formulas Used

The core mathematical logic relies on the following standard financial formulas:

1. **Add GST**
   - `GST Amount = (Original Cost * GST Rate) / 100`
   - `Net Price = Original Cost + GST Amount`
2. **Remove GST (Inclusive)**
   - `Base Amount = Total Cost / (1 + (GST Rate / 100))`
   - `GST Amount = Total Cost - Base Amount`
3. **Equated Monthly Installment (EMI)**
   - Formula: `E = P * r * (1 + r)^n / ((1 + r)^n - 1)`
   - *Where `P` is Principal, `r` is monthly interest rate, and `n` is tenure in months.*
4. **Loan Summary**
   - `Total Payment = EMI * n`
   - `Total Interest = Total Payment - Principal`

---

## 🚀 Local Setup & Installation

To run this project locally, follow these steps:

1. **Clone the repository**
   ```bash
   git clone <your-github-repo-url>
   cd smart-finance-toolkit
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Development Server**
   ```bash
   npm run dev
   ```
   *The app will be available at `http://localhost:5173`.*

4. **Build for Production**
   ```bash
   npm run build
   ```

---

## 🤝 Built For Digital Heroes

This application was developed as a software developer trial project, created for [Digital Heroes](https://digitalheroesco.com).

**Author:** [Your Full Name]  
**Email:** [Your Email]
