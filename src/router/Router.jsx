import { Movies } from "../pages/Movies";
import { Series } from "../pages/Series";
import { RootLayout } from "../layout/RootLayout";
import { PageNotFound } from "../pages/PageNotFound";
import { MoviesDetails } from "../pages/MoviesDetails";
import { SeriesDetails } from "../pages/SeriesDetails";

import { createBrowserRouter } from "react-router";
import { Home } from "../pages/Home";


export const router = createBrowserRouter([
  {path: "/" , Component: RootLayout,
    children: [
      {path: "*", Component: PageNotFound},

      {index: true, Component: Home},

      {path: "movies", Component: Movies},
      {path: "movies/:id", Component: MoviesDetails},

      {path: "series", Component: Series},
      {path: "series/:id", Component: SeriesDetails},
    ]
  }
])
