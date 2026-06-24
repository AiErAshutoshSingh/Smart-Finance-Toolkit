import React from 'react';

const InputField = ({ label, type = 'number', value, onChange, placeholder, prefix, suffix }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {prefix && <span style={{ position: 'absolute', left: '1rem', color: 'var(--text-muted)' }}>{prefix}</span>}
        <input
          type={type}
          className="input-field"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={{ 
            paddingLeft: prefix ? '2.5rem' : '1rem',
            paddingRight: suffix ? '2.5rem' : '1rem'
          }}
        />
        {suffix && <span style={{ position: 'absolute', right: '1rem', color: 'var(--text-muted)' }}>{suffix}</span>}
      </div>
    </div>
  );
};

export default InputField;
