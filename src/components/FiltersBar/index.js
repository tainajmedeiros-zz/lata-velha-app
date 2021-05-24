import React from 'react';
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/core';
import FilterSelect from '../Select';
import style from './style';
import messages from './messages';
import Select from '../Select';

const FiltersBar = ({ brandsFilterOptions, modelsFilterOptions, pricesFilterOptions }) => {
  const theme = useTheme();
  const classes = style(theme);
  
  return (
    <div className={classes.filtersBar} data-testid="filters-bar">
      <FilterSelect
        options={brandsFilterOptions.list}
        defaultOption={messages.searchBrand.defaultMessage}
        label="Marca"
        id="select-brand"
        onChangeHandler={brandsFilterOptions.onChange}
        value={brandsFilterOptions.value}
      />
      <FilterSelect
        options={modelsFilterOptions.list}
        defaultOption={messages.searchModel.defaultMessage}
        label="Modelo"
        id="select-model"
        onChangeHandler={modelsFilterOptions.onChange}
        value={modelsFilterOptions.value}
      />
      <Select
        options={pricesFilterOptions.list}
        defaultOption={messages.searchPrice.defaultMessage}
        label="Faixa de Preço"
        id="select-price"
        onChangeHandler={pricesFilterOptions.onChange}
        value={pricesFilterOptions.value}
      />
    </div>
  );
};

export default FiltersBar;

FiltersBar.propTypes = {
  // onChangeHandler: PropTypes.func.isRequired,
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
};
