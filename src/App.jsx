import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Romance from "./Pages/Romance/Romance";
const route = createBrowserRouter([
  { path: "/sallie", element: <Romance /> },
  { path: "/", element: <p>Home page</p> },
]);
function App() {
  return <RouterProvider router={route}></RouterProvider>;
}

export default App;
