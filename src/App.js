// css
import './App.css';

// react router
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

// Layouts
import Layout from './layouts/Layout';



// Pages
import Stories from "./pages/stories"
import Features from "./pages/features"
import Pricing from "./pages/pricing"
import Home from "./pages/home"

const router  = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />} >
        <Route index element={<Home />}/>
        <Route path="stories" element={<Stories />}/>
        <Route path="features" element={<Features />}/>
        <Route path="pricing" element={<Pricing />}/>
    </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
