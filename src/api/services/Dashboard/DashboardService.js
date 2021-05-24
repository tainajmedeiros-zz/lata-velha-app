import DashboardView from "../../../models/Dashboard/DashboardView";

const DashboardService = (dashboardRepository) => {

  const listAll = async () => {
    const dashboardViewList = [];
    const dashboardJson = await dashboardRepository.findAll();
    dashboardJson.forEach(dashboard => {
      dashboardViewList.push(DashboardView(dashboard.brand, dashboard.numberOfVehicles, dashboard.total));
    });
    return dashboardViewList;
  }

  return {
    listAll,
  }
}

export default DashboardService;