import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
