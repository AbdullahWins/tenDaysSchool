import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";

function App() {
  const Router = routes;
  
  return (
    <div className="App">
      <RouterProvider router = {Router}></RouterProvider>
    </div>
  );
}

export default App;
