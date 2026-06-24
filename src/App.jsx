import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GSTCalculator from './calculators/GSTCalculator';
import EMICalculator from './calculators/EMICalculator';
import LoanCalculator from './calculators/LoanCalculator';

function App() {
  const [activeTab, setActiveTab] = useState('gst');

  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content">
        <div className="tabs">
          <button 
            className={`tab-btn ${activeTab === 'gst' ? 'active' : ''}`}
            onClick={() => setActiveTab('gst')}
          >
            GST Calculator
          </button>
          <button 
            className={`tab-btn ${activeTab === 'emi' ? 'active' : ''}`}
            onClick={() => setActiveTab('emi')}
          >
            EMI Calculator
          </button>
          <button 
            className={`tab-btn ${activeTab === 'loan' ? 'active' : ''}`}
            onClick={() => setActiveTab('loan')}
          >
            Loan Summary
          </button>
        </div>

        <div className="calculator-container">
          {activeTab === 'gst' && <GSTCalculator />}
          {activeTab === 'emi' && <EMICalculator />}
          {activeTab === 'loan' && <LoanCalculator />}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
