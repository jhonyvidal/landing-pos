import { Fragment } from "react";

// Sections
import { BrowserRouter } from "react-router-dom";
import RootRoutes from "./navigation/RootRoutes";

function App() {

  return (
    <Fragment>
      <BrowserRouter >
        <RootRoutes />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
