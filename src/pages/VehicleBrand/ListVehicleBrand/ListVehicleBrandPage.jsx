import React from 'react';
import ActionBar from '../../../components/ActionBar';
import CardVehicleBrand from '../../../components/CardVehicleBrand';
import PropTypes from 'prop-types';
import style from './style';
import EmptyState from '../../../components/EmptyState/EmptyState';

const ListVehicleBrandPage = ({ vehicleBrandsList, onEditHandler, onDeleteHandler }) => {
  const classes = style();
  return (
    <>
      <div className={classes.container}>
        {vehicleBrandsList?.length ? (
          vehicleBrandsList.map(vehicleBrand =>
            <CardVehicleBrand
              key={vehicleBrand.id}
              name={vehicleBrand.name}
              brandLogoUrl="https://ccorpusa.com/wp-content/uploads/2017/07/logo.png"
              onEditClick={() => onEditHandler(vehicleBrand)}
              onDeleteClick={() => onDeleteHandler(vehicleBrand.id)} />
          )
        ) : <EmptyState />}
      </div>
      <ActionBar />
    </>
  );
};

ListVehicleBrandPage.propTypes = {
  vehicleBrandsList: PropTypes.array.isRequired,
  onEditHandler: PropTypes.func.isRequired,
  onDeleteHandler: PropTypes.func.isRequired,
}

export default ListVehicleBrandPage;
