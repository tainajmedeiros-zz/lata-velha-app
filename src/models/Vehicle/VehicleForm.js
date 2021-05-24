const Vehicle = (model, brandId, year, price) => {
  return {
    model,
    brand: { id: brandId },
    year,
    price
  }
};

export default Vehicle;