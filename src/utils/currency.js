const formatFloatToBrazilianCurrency = (price) => price.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export default formatFloatToBrazilianCurrency;