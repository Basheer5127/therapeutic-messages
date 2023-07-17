import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Romance from "./Pages/Romance/Romance";
const route = createBrowserRouter([
  { path: "/baby/:name", element: <Romance /> },
]);
function App() {
  return <RouterProvider router={route}></RouterProvider>;
}

export default App;
