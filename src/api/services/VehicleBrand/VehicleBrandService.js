import VehicleBrandView from "../../../models/VehicleBrand/VehicleBrandView";

const VehicleBrandService = (vehicleBrandRepository) => {

  const listAll = async () => {
    const vehicleBrandViewList = [];
    const vehicleBrandsJson = await vehicleBrandRepository.findAll();
    vehicleBrandsJson.forEach(brand => {
      vehicleBrandViewList.push(VehicleBrandView(brand.id, brand.name));
    });
    return vehicleBrandViewList;
  }


  const create = async (vehicleBrandForm) => {
    const apiResponse = await vehicleBrandRepository.save(vehicleBrandForm);
    return apiResponse;
  }

  const update = async (id, vehicleBrandForm) => {
    const apiResponse = await vehicleBrandRepository.update(id, vehicleBrandForm);
    return apiResponse;
  }

  const remove = async (vehicleBrandId) => {
    const apiResponse = await vehicleBrandRepository.remove(vehicleBrandId);
    return apiResponse;
  }

  return {
    listAll,
    create,
    update,
    remove,
  }
}

export default VehicleBrandService;