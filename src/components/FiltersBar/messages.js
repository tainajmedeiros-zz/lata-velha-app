import { defineMessages } from 'react-intl';

const prefix = 'components.FilterBar';

export default defineMessages({
  searchBrand: {
    id: `${prefix}.searchBrand`,
    defaultMessage: 'Pesquisar por Marca',
  },
  searchModel: {
    id: `${prefix}.searchModel`,
    defaultMessage: 'Pesquisar por Modelo',
  },
  searchPrice: {
    id: `${prefix}.searchPrice`,
    defaultMessage: 'Pesquisar por Faixa de Preço',
  },
});
