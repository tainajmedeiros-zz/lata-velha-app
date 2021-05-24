import PropTypes from 'prop-types';
import React from 'react';
import CardDashboard from '../../components/CardDashboard';
import EmptyState from '../../components/EmptyState/EmptyState';
import style from './style';

const DashboardPage = ({ dashboardList }) => {
  const classes = style();
  return (
    dashboardList?.length ?
      (
        <div className={classes.container} >
          { dashboardList.map((item, index) => <CardDashboard key={index} item={{ ...item, id: index }} />)}
        </div >
      ) : <EmptyState />
  );
}

DashboardPage.propTypes = {
  dashboardList: PropTypes.array.isRequired
}
export default DashboardPage;