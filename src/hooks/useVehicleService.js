import { useContext } from "react";
import VehicleRepository from "../api/services/Vehicle/VehicleRepository";
import VehicleService from "../api/services/Vehicle/VehicleService";
import HttpContext from "../contexts/HttpContext";

export default function useVehicleService() {

  const httpClient = useContext(HttpContext);
  const vehicleRepository = VehicleRepository(httpClient);
  const vehicleService = VehicleService(vehicleRepository);

  return vehicleService;
};
