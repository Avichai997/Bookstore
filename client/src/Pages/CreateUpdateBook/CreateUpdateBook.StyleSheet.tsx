import { SxProps } from '@mui/material';
import { CSSProperties } from 'react';

export const buttonsStyle: SxProps = {
  border: '2px solid var(--color-shual) !important',
  borderRadius: '6px',
  fontWeight: 'bold',
  fontSize: ' 16px',
  lineHeight: '19px !important',
  alignItems: 'center',
  textAlign: 'center',
  color: 'var(--color-shual)',
};

export const inputNameStyle: CSSProperties & SxProps = {
  width: '100%',
  maxWidth: '500px ',
  margin: 0,
  height: 51,
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  '& .MuiFormHelperText-root': {
    width: 'inherit',
    height: 0,
    whiteSpace: 'nowrap',
  },
};

export const selectBoxStyle = {
  width: '160px !important',
};
export const styleTextArea = {
  borderRadius: '6px',
  border: '0.1px solid var(--color-disable-text)',
  width: '100%',
  padding: '4px',
};
export const styleInputPropsTextArea = {
  borderRadius: '6px',
  margin: '0',
  backgroundColor: 'var(--color-white)',
  padding: '0px',
  '.MuiInputBase-root.MuiInput-root': {
    marginTop: '0px',
  },
};
