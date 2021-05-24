import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  InputLabel,
  NativeSelect,
  useTheme,
} from '@material-ui/core';
import style from './style';

const FilterSelect = ({
  options,
  defaultOption,
  label,
  id,
  onChangeHandler,
  value,
  name,
}) => {
  const theme = useTheme();
  const classes = style(theme);

  return (
    <FormControl margin="normal" data-testid={id}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <NativeSelect
        className={classes.select}
        id={id}
        value={value}
        onChange={onChangeHandler}
        data-testid={`${id}-select`}
        name={name}
      >
        <option value="_" disabled>
          {defaultOption}
        </option>
        {options.length > 0 && options.map(({id, name}) => (
          <option key={name.toLowerCase() + id} value={name}>
            {name}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

FilterSelect.propTypes = {
  options: PropTypes.array.isRequired,
  defaultOption: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string
};

export default FilterSelect;
