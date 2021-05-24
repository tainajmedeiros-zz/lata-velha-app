import React from 'react';
import FiltersBar from '../../../components/FiltersBar';
import CardVehicle from '../../../components/CardVehicle';
import ActionBar from '../../../components/ActionBar';
import PropTypes from 'prop-types';
import style from './style';
import { useTheme } from '@material-ui/core';
import EmptyState from '../../../components/EmptyState/EmptyState';

const ListVehiclePage = (props) => {
  const {
    vehiclesList,
    onEditHandler,
    onDeleteHandler,
    brandsFilterOptions,
    modelsFilterOptions,
    pricesFilterOptions,
  } = props;

  const theme = useTheme();
  const classes = style(theme);

  return (
    <>
      {/* <FiltersBar
        brandsFilterOptions={brandsFilterOptions}
        modelsFilterOptions={modelsFilterOptions}
        pricesFilterOptions={pricesFilterOptions} 
      /> */}
      {vehiclesList?.length ? (
        <div className={classes.listContainer}>
          <div className={classes.list}>
            {vehiclesList.map(vehicle =>
              <CardVehicle key={vehicle.id}
                model={vehicle.model}
                price={vehicle.price}
                year={vehicle.year}
                brandName={vehicle.brandName}
                brandLogoUrl="https://ccorpusa.com/wp-content/uploads/2017/07/logo.png"
                onEditClick={() => onEditHandler(vehicle)}
                onDeleteClick={() => onDeleteHandler(vehicle.id)} />
            )}
          </div>
        </div>
      ) : <EmptyState />}
      < ActionBar />
    </>
  );
};


ListVehiclePage.propTypes = {
  vehiclesList: PropTypes.array.isRequired,
  brandsFilterOptions: PropTypes.shape({
    list: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
  }).isRequired,
  modelsFilterOptions: PropTypes.shape({
    list: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
  }).isRequired,
  pricesFilterOptions: PropTypes.shape({
    list: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
  }).isRequired,
  onEditHandler: PropTypes.func.isRequired,
  onDeleteHandler: PropTypes.func.isRequired,
}

export default ListVehiclePage;
