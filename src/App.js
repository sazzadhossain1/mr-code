import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Main from "./LayOUt/Main";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Blog from "./components/Blog/Blog";
import Courses from "./components/Courses/Courses";
import Faq from "./components/Faq/Faq";
import CourseDetailsPage from "./components/CourseDetailsPage/CourseDetailsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/courses",
          loader: async () => {
            return fetch("http://localhost:5000/allCoursesApi/");
          },
          element: <Courses></Courses>,
        },
        {
          path: "/faq",
          element: <Faq></Faq>,
        },
        {
          path: "/courseDetailsPage/:id",
          loader: async ({ params }) => {
            return fetch(`http://localhost:5000/allCoursesApi/${params.id}`);
          },
          element: <CourseDetailsPage></CourseDetailsPage>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
