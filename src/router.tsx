import { lazy, Suspense } from "react";
import type { RouteObject } from "react-router-dom";
const Loader = (Component: any) =>
  function loader(props: any) {
    return (
      <Suspense fallback={<div>Loading</div>}>
        <Component {...props} />
      </Suspense>
    );
  };

// import component
const Layout = Loader(lazy(() => import("./Layout")))
const LayoutAuth = Loader(lazy(() => import("./Layout/auth")))
const Test = Loader(lazy(() => import("./Pages/test")))
const Dashboard = Loader(lazy(() => import("./Pages/Dashboard")))
const Login = Loader(lazy(() => import("./Pages/auth/login")))

const router: RouteObject[] = [
  {
    path: "admin",
    element: <Layout />,
    children: [
      {
        index: true,
        path: '',
        element: <Dashboard />
      },
      {
        path: 'test',
        element: <Test />
      }
    ]
  },
  {
    path: 'auth',
    element: <LayoutAuth />,
    children: [
      {
        path: 'login',
        element: <Login />
      }
    ]
  }

]

export default router;