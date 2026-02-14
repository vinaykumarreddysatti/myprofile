import React, { useEffect } from 'react';
import { useTheme } from 'foundation-components';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Initialize foundation-components theme hooks
  const theme = useTheme();

  useEffect(() => {
    // Sync the theme with the document element for foundation-components CSS selectors
    const root = document.documentElement;
    root.setAttribute('data-theme', theme.theme);
  }, [theme.theme]);

  // We could expose a context here if we wanted to allow child components
  // to easily toggle theme, but for now we follow the library's pattern.

  return (
    <div className={`theme-${theme.theme}`} style={{ minHeight: '100vh' }}>
      {children}
    </div>
  );
};

export default ThemeProvider;
