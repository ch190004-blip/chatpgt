import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Grade7APlus from "./pages/Grade7APlus.jsx";
import Grade8B from "./pages/Grade8B.jsx";

const navItems = [
  { to: "/", label: "首頁" },
  { to: "/grade-7-a-plus", label: "國七 A+" },
  { to: "/grade-8-b", label: "國八 B" },
];

const App = () => {
  return (
    <div className="app">
      <header className="app__header">
        <div>
          <p className="app__eyebrow">國中課程入口</p>
          <h1>學期課程總覽</h1>
        </div>
        <nav className="app__nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `app__link ${isActive ? "app__link--active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="app__main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grade-7-a-plus" element={<Grade7APlus />} />
          <Route path="/grade-8-b" element={<Grade8B />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
