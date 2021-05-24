import PriceView from "../../../models/Price/PriceView";

const PriceService = (priceBrandRepository) => {
  const listAll = async () => {
    const priceList = [];
    const pricesJson = await priceBrandRepository.findAll();
    pricesJson.forEach(price => {
      priceList.push(PriceView(price.id, price.label));
    });
    return priceList;
  }

  return {
    listAll,
  }
}

export default PriceService;