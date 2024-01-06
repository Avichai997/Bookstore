import { IFormikInput } from '@CommonInterfaces';
import { SxProps, TextField } from '@mui/material';
import { useField } from 'formik';
import { ChangeEvent, FocusEvent, useEffect, useState } from 'react';
import useDebounce from '@Hooks/useDebounce';
import { fontSizeLabel, fontSizeLabelOuter, sxFormikInput } from './FormikInput.StyleSheet';

const FormikInput = ({
  name,
  value = '',
  label = '',
  placeholder = label,
  style = {},
  styleTextArea,
  disableUnderline = false,
  textAlign,
  outerLabel = false,
  ...props
}: IFormikInput) => {
  const [field, meta, helpers] = useField(name);
  const [fieldValue, setFieldValue] = useState(value || field.value);
  const debouncedValue = useDebounce(fieldValue || '', 500);

  useEffect(() => {
    if (meta.touched) return;
    if (field.value !== fieldValue) setFieldValue(field.value);
    // eslint-disable-next-line
  }, [field.value]);

  useEffect(() => {
    if (debouncedValue === field.value) return;

    field.onChange({
      target: {
        name,
        value: props.type === 'number' ? +debouncedValue : debouncedValue,
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => setFieldValue(event.target.value);

  const onBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (!props.required || meta.touched) return;
    const isTouched = !!(event.target.value.length === 0);
    helpers.setTouched(isTouched);
  };

  return (
    <>
      {outerLabel ? <span style={fontSizeLabelOuter}>{label}</span> : <></>}
      <TextField
        {...props}
        inputProps={{
          style: styleTextArea ? { textAlign: textAlign || 'left' } : undefined,
        }}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        InputProps={{
          ...(props.variant !== 'outlined' && { disableUnderline }),
        }}
        error={!!meta.error}
        placeholder={placeholder}
        helperText={meta.error}
        label={!outerLabel ? <span style={fontSizeLabel}>{label}</span> : <></>}
        sx={{ ...sxFormikInput(label), ...style } as SxProps}
        style={styleTextArea || undefined}
        disabled={props.disabled}
        {...field}
        value={fieldValue}
        onChange={onChange}
        onBlur={onBlur}
        variant={props.variant || 'standard'}
      />
    </>
  );
};

export default FormikInput;
