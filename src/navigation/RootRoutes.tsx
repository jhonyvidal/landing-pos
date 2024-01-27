import { Route, Routes } from "react-router-dom";
import React from "react";
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
          <React.Suspense fallback={<>...</>}>
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
          <React.Suspense fallback={<>...</>}>
            <ContactScreen />
          </React.Suspense>
        }
      />
      {/* not found router */}
      <Route path="*" element={<Landing />} />
    </Routes>
  );
}
