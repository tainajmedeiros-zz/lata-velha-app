import VehicleView from "../../../models/Vehicle/VehicleView";

const VehicleService = (vehicleRepository) => {

  const listAll = async (params) => {
    const vehiclesJson = await vehicleRepository.findAll(params);
    const vehicleViewList = vehiclesJson.map(vehicle => {
      return VehicleView(vehicle.id, vehicle.model, vehicle.brand.name, vehicle.year, vehicle.price);
    });

    return vehicleViewList;
  }

  const getById = async (vehicleId) => {
    const vehicleJson = await vehicleRepository.findById(vehicleId);
    return new VehicleView(vehicle.id, vehicle.model, vehicle.brand.name, vehicle.year, vehicle.price);
  };


  const create = async (vehicleForm) => {
    const apiResponse = await vehicleRepository.save(vehicleForm);
    return apiResponse;
  }

  const update = async (id, vehicleForm) => {
    const apiResponse = await vehicleRepository.update(id, vehicleForm);
    return apiResponse;
  }

  const remove = async (vehicleId) => {
    const apiResponse = await vehicleRepository.remove(vehicleId);
    return apiResponse;
  }

  return {
    listAll,
    create,
    update,
    remove,
    getById
  }
}

export default VehicleService;