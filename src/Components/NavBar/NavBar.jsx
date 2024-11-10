import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // استيراد Link من react-router-dom
import { useDarkMode } from './../DarkModeContext/DarkModeContext'; // Import the custom hook

const NavBar = ({ logo, items, sun, moon, btn, menu_outline }) => {
  const [active, setActive] = useState(false); 
  const { darkMode, toggleDarkMode } = useDarkMode(); // Use the custom hook to get the context

  useEffect(() => {
    // تطبيق الوضع الداكن على body عند تحميل الصفحة
    if (darkMode) {
      document.body.classList.add("dark");
      document.body.style.backgroundColor = "#090D1F";
    } else {
      document.body.classList.remove("dark");
      document.body.style.backgroundColor = "#FFFFFF";
    }
  }, [darkMode]);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-40 flex justify-between items-center bg-light dark:bg-myDark shadow-inner px-5 py-6 md:py-9 lg:py-12 lg:px-28 h-10`}>
        <p className={`flex font-bold text-lg dark:text-light`}>{logo}</p>
        <div className="hidden md:flex gap-7">
          <ul className="flex items-center gap-7">
            {items?.map((item, index) => (
              <li key={index}>
                <Link
                  to={item === 'Newsletter' ? '/Newsletter' : (item === 'Blog' ? '/task6' : '#')} // الانتقال إلى صفحة Newsletter عند النقر على Newsletter
                  className="text-lg font-normal text-myDark dark:text-light  dark:hover:text-gray-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleDarkMode}
            className={`hidden md:flex h-10 w-24 content-center justify-center items-center rounded-3.5xl bg-gray-800 dark:bg-light text-white dark:text-black`}
          >
            {darkMode ? moon : sun}
          </button>
        </div>
        
        {/* زر التبديل للقائمة المحمولة */}
        <button
          className={`black md:hidden dark:text-light ${active ? 'hidden' : 'black'}`}
          onClick={() => setActive((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {btn}
        </button>
      </nav>

      {/* قائمة التنقل المحمولة */}
      <div style={{ paddingTop: "70px" }}>
        <div className={`absolute z-50 top-0 flex flex-col justify-between w-screen h-screen lg:hidden bg-white dark:bg-myDark transition-transform duration-300 ${active ? 'translate-x-0' : '-translate-x-full'}`}>
          <div>
            <p className="flex flex-col items-center mt-28.7 font-bold text-lg text-gray-800 dark:text-light">{logo}</p>
            <ul className="mb-20.2 mt-14 flex flex-col gap-7 w-full items-center">
              {items?.map((item, index) => (
                <li key={index} className="h-4 flex justify-center">
                  <Link
                    to={item === 'Newsletter' ? '/Newsletter' : (item === 'Blog' ? '/task6' : '#')} // الانتقال إلى صفحة Newsletter عند النقر على Newsletter
                    className="text-lg font-normal text-gray-800 dark:text-light"
                    onClick={() => setActive(false)} // إغلاق القائمة بعد اختيار العنصر
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <button
                onClick={toggleDarkMode}
                className="flex h-10 w-24 content-center justify-center items-center rounded-3.5xl mt-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-black"
              >
                {darkMode ? sun : moon}
              </button>
            </ul>
          </div>
          <button className="text-gray-800 dark:text-light my-3 mx-auto" onClick={() => setActive(false)}>
            {menu_outline}
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
