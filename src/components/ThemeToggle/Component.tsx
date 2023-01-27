import React, { useContext } from 'react';
import { ThemeContext } from '../../components/contexts/ThemeContext';

import './styles.css';

export default function Component() {
  const [checked, setChecked] = React.useState(true);
  const { toggleTheme } = useContext(ThemeContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <div className="theme-toggle-container">
      <input 
          className="theme-toggle" 
          type="checkbox" 
          checked={checked} 
          onChange={handleChange} 
          onClick={toggleTheme} 
        />
    </div>
  );
}
