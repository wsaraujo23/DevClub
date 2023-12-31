import { Route, Routes } from "react-router-dom";
import Home from "../container/Home";
import Movies from "../container/Movies";
import Series from "../container/Series";
import PadraoLayout from "../layout/DefaultLayout";

function Router() {
  return (
    <Routes>
      <Route element={<PadraoLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Movies />} />
        <Route path="/series" element={<Series />} />
      </Route>
    </Routes>
  );
}

export default Router;
