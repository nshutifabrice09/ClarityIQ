// main.tsx
import React from "react";
import { NavigationProvider } from "./NavigationContext";
//import PlasmicDashboard from "./mdashboard";
import PlasmicDinaggregation from "./mdinaggregation";
import DashboardSection from "./mdashboardsection";

const MainComponent = () => {
  return (
    <NavigationProvider>
      <DashboardSection />
      <PlasmicDinaggregation />
    </NavigationProvider>
  );
};

export default MainComponent;
