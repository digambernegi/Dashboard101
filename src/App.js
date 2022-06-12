import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSetting } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employee,
  Stacked,
  ColorPicker,
  ColorMapping,
  Editor,
  Pyramid,
  Customer,
  Kanban,
  Line,
  Pie,
  Bar,
  Area,
  Financial,
} from "./pages";
import { useStateContext } from "./context/ContextProvider";

function App() {
  const { activeMenu, themeSetting, setThemeSetting, currentMode } =
    useStateContext();
  return (
    <div className={currentMode === "Dark" ? "bg-gray-500" : "bg-white"}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                onClick={() => setThemeSetting(true)}
                style={{
                  background: "gray",
                  color: "white",
                  borderRadius: "50%",
                }}
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="sidebar fixed w-72 dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}

          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : " flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

            <div>
              {themeSetting && <ThemeSetting />}
              <Routes>
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employee />} />
                <Route path="/customers" element={<Customer />} />

                {/* apps */}
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/Kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* chart */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
