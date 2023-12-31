import './App.css';
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import RootLayout from './RootLayout';
import Home from './Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
