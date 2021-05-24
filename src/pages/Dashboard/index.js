import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useDashboardService from '../../hooks/useDashboardService';
import DashboardPage from './DashboardPage';
import messages from './messages';

const ListDashboard = () => {
  const dashboardService = useDashboardService();
  const [dashboardList, setDashboardList] = useState([]);

  useEffect(() => {
    try {
      dashboardService.listAll().then(list => {
        setDashboardList(list);
      });
    } catch (error) {
      toast.error(messages.listError.defaultMessage);
    }
  }, []);

  return (<DashboardPage dashboardList={dashboardList} />);
};

export default ListDashboard;
