import React from "react";
import HighProbGather from "../Components/Gather/HighProbGather";
import ReservoirExtension from "../Components/ReservoirExtension/ReservoirExtension.js";
import Stacks from "../Components/Stacks/Stacks.js";
import { Box } from "@mui/material";
import GeobodyList from "../Components/GeobodyList/GeobodyList";
import SelectedGeo from "../Components/SelectedGeobody/SelectedGeobody";
import Avaplot from "../Components/AVAPlot/AVAPlot";
import RecommendationGeobody from "../Components/RecomendationGeobody/RecomendationGeobody.js/RecomendationGeobody";
import TMLDistribution from "../Components/TMLDist/TMLDistribution";
import TMLNPDist from "../Components/TMLNPDist/TMLNPDist";
import TMLProbability from "../Components/TMLProbability/TMLProbability";

const Dashboard = () => {
  return (
    <Box
      width={{ lg: 1490 }}
      sx={{
        display: "flex",
        justifyContent: "space-between",

        p: -3,
      }}
    >
      <div>
        <Box width={{ lg: 800 }}>
          <ReservoirExtension />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Stacks />
            <HighProbGather />
          </Box>
          <GeobodyList />
        </Box>
      </div>
      <div>
        <SelectedGeo />
        <Avaplot />
        <RecommendationGeobody />
      </div>
      <div>
        <TMLDistribution />
        <TMLNPDist />
        <TMLProbability />
      </div>
    </Box>
  );
};

export default Dashboard;
