import { useContext } from "react";
import DashboardRepository from "../api/services/Dashboard/DashboardRepository";
import DashboardService from "../api/services/Dashboard/DashboardService";
import HttpContext from "../contexts/HttpContext";

export default function useDashboardService() {

  const httpClient = useContext(HttpContext);
  const dashboardRepository = DashboardRepository(httpClient);
  const dashboardService = DashboardService(dashboardRepository);

  return dashboardService;
};
