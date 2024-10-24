import { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const DarkModeContext = createContext();

// Create a provider component
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // قراءة القيمة المخزنة في localStorage عند تحميل الصفحة
    const storedMode = localStorage.getItem('darkMode');
    return storedMode === 'true'; // إذا كانت القيمة المخزنة true، نستخدم الوضع الداكن
  });

  // حفظ الوضع الحالي في localStorage عند تغييره
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode); // التبديل بين الوضعين
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook to use the dark mode context
export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
