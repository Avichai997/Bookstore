import { IFormikInput } from '@CommonInterfaces';
import { TextField } from '@mui/material';
import { useField } from 'formik';
import { ChangeEvent, FocusEvent, useEffect, useState } from 'react';
import useDebounce from '@Hooks/useDebounce';
import { fontSizeLabel, requiredTextAreaStyle, sxFormikInput } from './FormikInput.StyleSheet';

const FormikInput = ({
  name,
  value = '',
  label = '',
  placeholder = label,
  style,
  styleTextArea,
  requiredTextArea,
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
      <TextField
        {...props}
        InputProps={{ style: !props.variant ? style : undefined }}
        error={!!meta.error}
        placeholder={placeholder}
        helperText={meta.error}
        label={<span style={fontSizeLabel}>{label}</span>}
        sx={{ ...sxFormikInput(label), ...style }}
        style={styleTextArea || style}
        disabled={props.disabled}
        {...field}
        value={fieldValue}
        onChange={onChange}
        onBlur={onBlur}
        variant={props.variant || 'standard'}
      />
      {requiredTextArea && <div style={requiredTextAreaStyle}>שדה חובה</div>}
    </>
  );
};

export default FormikInput;
