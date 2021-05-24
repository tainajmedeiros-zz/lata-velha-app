import { defineMessages } from 'react-intl';

const prefix = 'src.components.Dashboard.ListDashboard';

export default defineMessages({
  contentDashboard: {
    id: `${prefix}.contentDashboard`,
    defaultMessage: 'Existem {numberOfVehicles} veículos, totalizando R$ {amount}',
  },
});
