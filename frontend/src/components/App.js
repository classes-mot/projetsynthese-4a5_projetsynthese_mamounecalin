import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import RootLayout from "../pages/Root";
import InscriptionPage from "../pages/InscriptionPage";
import ConnexionPage from "../pages/ConnexionPage";
import ProfilePage from "../pages/ProfilePage";
import ListeArtistesPage from "../pages/ListeArtistesPage";
import OeuvreDetaillePage from "../pages/OeuvreDetaillePage";
import CollectionAutreArtistePage from "../pages/CollectionAutreArtistePage";
import ErreurPage from "../pages/ErreurPage";
import ModifierProfilePage from "../pages/ModificationProfilePage";
import OeuvreAjoutePage from "../pages/OeuvreAjoutePage";
import ListeOeuvresPage from "../pages/ListeOeuvresPage";
import { useEffect, useState } from "react";
import { AuthentificationContexte } from "./contexte/AuthentificationContext";
import ReactRouterDom from "../";

const routerLogin = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErreurPage />,
    children: [
      {
        path: "connexion",
        element: <Navigate to="/profile" replace />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "artistes",
        element: <ListeArtistesPage />,
      },
      {
        path: "oeuvre",
        element: <ListeOeuvresPage />,
      },
      { path: "/oeuvre/:oeuvreId", element: <OeuvreDetaillePage /> },
      {
        path: "/artistes/:artisteId",
        element: <CollectionAutreArtistePage />,
      },
      {
        path: "parametres",
        element: <ModifierProfilePage />,
      },
      {
        path: "oeuvre/ajouter",
        element: <OeuvreAjoutePage />,
      },
    ],
  },
]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErreurPage />,
    children: [
      {
        path: "connexion",
        element: <ConnexionPage />,
      },
      {
        path: "inscription",
        element: <InscriptionPage />,
      },
      {
        path: "artistes",
        element: <ListeArtistesPage />,
      },
      {
        path: "oeuvre",
        element: <ListeOeuvresPage />,
      },
      { path: "/oeuvre/:oeuvreId", element: <OeuvreDetaillePage /> },
      {
        path: "/artistes/:artisteId",
        element: <CollectionAutreArtistePage />,
      },
    ],
  },
]);

function App() {
  const [data, setData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const login = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reponse = await fetch(
          process.env.REACT_APP_BACKEND_URL + "message/"
        );
        const jsonData = await reponse.json();
        setData(jsonData.messages);
      }catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (isLoggedIn) {
    return (
      <AuthentificationContexte.Provider
        value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
      >
        <RouterProvider router={routerLogin} />
      </AuthentificationContexte.Provider>
    );
  }else{
  return (
    <AuthentificationContexte.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <RouterProvider router={router} />
    </AuthentificationContexte.Provider>
  );
}
}

export default App;
