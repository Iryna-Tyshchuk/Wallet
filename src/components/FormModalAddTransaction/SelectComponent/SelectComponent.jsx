import Select, { components } from 'react-select';
import { useTheme } from 'styled-components';
import { TfiAngleDown } from 'react-icons/tfi';

import { selectStyles } from './SelectComponentStyles';

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <TfiAngleDown />
    </components.DropdownIndicator>
  );
};

const SelectComponent = ({
  field,
  options,
  placeholder = 'Select',
  className,
  onChange,
}) => {
  const theme = useTheme();

  return (
    <Select
      name={field.name}
      className={className}
      placeholder={placeholder}
      options={options}
      onChange={onChange}
      components={{ DropdownIndicator }}
      styles={selectStyles(theme)}
      openMenuOnFocus={true}
      isSearchable={true}
    />
  );
};

export default SelectComponent;
