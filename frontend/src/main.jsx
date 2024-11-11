import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HealthproductPage from './pages/HealthproductPage.jsx';
import OurServicesPage from './pages/OurServicesPage.jsx';
import OurTeamPage from './pages/OurTeamPage.jsx';
import AboutOurTeam from './Components/OurTeam/OurTeam_Inner/AboutOurTeam.jsx';
import ProductDescriptionPage from './pages/ProductDescriptionPage.jsx';
import ContactUs from './Components/ContactUs/ContactUs.jsx';
import Appointment from './Components/Appointment/Appointment.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddToCart from './Components/AddToCart/AddToCart.jsx';
import OurTeam_InnerPage from './pages/OurTeam_InnerPage.jsx';
import { CartProvider } from "./Components/context/cart_context.jsx"; // Import CartProvider here

import Login from './Components/LoginPage/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Products",
    element: <HealthproductPage />,
  },
  {
    path: "/Services",
    element: <OurServicesPage />,
  },
  {
    path: "/Services/Detalis",
    element: <OurTeam_InnerPage />,
  },
  {
    path: "/OurTeam",
    element: <OurTeamPage />,
  },
  {
    path: "/OurTeam/Details",
    element: <AboutOurTeam />,
  },
  {
    path:  "/Product/Product_Description/:id",
    element: <ProductDescriptionPage />,
  },
  {
    path: "/ContactUS",
    element: <ContactUs />,
  },
  {
    path: "/Appointment",
    element: <Appointment />,
  },
  {
    path: "/AddToCart",
    element: <AddToCart />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
createRoot(document.getElementById('root')).render(
  // <RouterProvider router={router}/>
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
)
