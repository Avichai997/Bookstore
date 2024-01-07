export const styleOptions = (
  colorText: string | undefined,
  backgroundColor: string | undefined,
  paddingRight?: string
) => {
  return {
    color: colorText || '',
    backgroundColor: backgroundColor || '',
    border: colorText ? `1px solid ${colorText}` : 'none',
    borderRadius: '7px',
    margin: '5px',
    display: 'flex',
    alignItems: 'center',
    paddingRight,
  };
};
export const styleImgOption = {
  marginLeft: '2px',
  paddingInline: '5px',
};
export const styleImgLabel = { transform: 'translate(-5px,2px)' };

export const colorStyle = {
  color: 'var(--color-shual)',
};
export const FONT_SIZE_LABEL = { fontSize: '16px' };
