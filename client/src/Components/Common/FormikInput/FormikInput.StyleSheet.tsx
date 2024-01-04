export const fontSizeLabel = {
  fontSize: '22px',
  color: 'var(--color-black)',
};

export const sxFormikInput = (label: string | undefined) => {
  return {
    '&& .muirtl-1d1r5q-MuiFormHelperText-root': {
      display: !label && 'none',
      color: 'var(--color-red)',
      height: '0px',
      marginTop: 0,
    },
    '.muirtl-1c2i806-MuiFormLabel-root-MuiInputLabel-root': {
      color: 'var(--color-red)',
    },
    before: {
      '.muirtl-1c2i806-MuiFormLabel-root-MuiInputLabel-root': { color: 'var(--color-red)' },
    },
    '&& .muirtl-66dh3a-MuiInputBase-input-MuiInput-input': {
      marginTop: '-10px',
    },
    '&& .muirtl-wgai2y-MuiFormLabel-asterisk': {
      color: 'var(--color-red)',
      display: !label && 'none',
    },
    '&& .MuiOutlinedInput-notchedOutline legend': {
      display: 'none',
    },
  };
};

export const requiredTextAreaStyle = { marginTop: '2px' };
