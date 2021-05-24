import { useContext } from "react";
import VehicleRepository from "../api/services/Vehicle/VehicleRepository";
import VehicleBrandRepository from "../api/services/VehicleBrand/VehicleBrandRepository";
import VehicleBrandService from "../api/services/VehicleBrand/VehicleBrandService";
import HttpContext from "../contexts/HttpContext";

export default function useVehicleBrandService() {

  const httpClient = useContext(HttpContext);
  const vehicleBrandRepository = VehicleBrandRepository(httpClient);
  const vehicleBrandService = VehicleBrandService(vehicleBrandRepository);

  return vehicleBrandService;
};
