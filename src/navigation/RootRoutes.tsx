import { Route, Routes } from "react-router-dom";
import React from "react";
import Loading from "../components/base/Loading";
import ModulesScreen from "../modules/modules/screen/modules.screen";
const Landing = React.lazy(
  () => import("../modules/landing/screen/landing.screen")
);
const ContactScreen = React.lazy(
  () => import("../modules/contact/screen/contact.screen")
);

export default function RootRoutes(/*props: refProps*/) {
  return (
    <Routes>
      {/* default router */}
      <Route
        path="/"
        element={
          <React.Suspense fallback={<Loading/>}>
            <Landing />
          </React.Suspense>
        }
      >
        {/* second router level */}
        <Route index element={<Landing />} />
      </Route>
      {/* contact router */}
      <Route path="contact"
        element={
          <React.Suspense fallback={<Loading/>}>
            <ContactScreen />
          </React.Suspense>
        }
      />
       {/* modules router */}
       <Route path="modules"
        element={
          <React.Suspense fallback={<Loading/>}>
            <ModulesScreen />
          </React.Suspense>
        }
      />
      {/* not found router */}
      <Route path="*" element={<Landing />} />
    </Routes>
  );
}
