import { getObjectProperty } from '@CommonFunctions';
import { IFormikSelect, ISelectOnChangeHandler } from '@CommonInterfaces';
import { FormControl, MenuItem, Select } from '@mui/material';
import { FONT_SIZE_LABEL, styleOptions } from './FormikSelect.StyleSheet';

const onChangeHandler = <TValues,>({
  formik,
  options,
  event,
  textOrValue,
  name,
  setEffectedFieldName,
  onItemClicked,
}: ISelectOnChangeHandler<TValues>) => {
  const stringArray = getObjectProperty(options, textOrValue ? 'value' : 'text');
  const FieldValue =
    textOrValue || typeof event.target.value === 'number' || typeof event.target.value === 'string'
      ? event.target.value
      : stringArray.indexOf(event.target.value) + 1;

  if (onItemClicked) onItemClicked(formik, event);
  else formik.setFieldValue(name, FieldValue);

  if (setEffectedFieldName) {
    formik.setFieldValue(setEffectedFieldName, FieldValue);
  }
};

const FormikSelect = <TValues,>({
  formik,
  label,
  name,
  value,
  style,
  styleWrap,
  options,
  colorStyle,
  textOrValue = false,
  disabled = false,
  setEffectedFieldName,
  onItemClicked,
  optionsPaddingRight,
  setShowPopupStatus,
}: IFormikSelect<TValues>) => {
  return (
    <FormControl variant='standard' sx={styleWrap}>
      <div style={FONT_SIZE_LABEL}>{label}</div>

      <Select
        disabled={disabled}
        value={value}
        variant='standard'
        sx={style}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: '300px',
            },
          },
        }}
        onChange={(event) =>
          onChangeHandler({
            formik,
            options,
            event,
            textOrValue,
            name,
            setEffectedFieldName,
            onItemClicked,
            setShowPopupStatus,
          })
        }
      >
        {options?.map((option, index) => (
          <MenuItem
            value={option.value}
            key={index}
            sx={colorStyle}
            style={styleOptions(option.colorText, option.backgroundColor, optionsPaddingRight)}
          >
            {`${option.text}`}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default FormikSelect;
