/* eslint-disable @typescript-eslint/no-explicit-any */
import { DISABLED_BTN_TOOLTIP_SX } from '@CommonConstants';
import { ButtonTypeMap, ExtendButtonBase, Tooltip } from '@mui/material';
import { FormikProps } from 'formik';
import { ReactElement } from 'react';

export interface ISaveErrorTooltip {
  isSaveBtnDisabled: (formik: FormikProps<any>) => boolean;
  formik: FormikProps<any>;
  children: ReactElement<ExtendButtonBase<ButtonTypeMap<object, 'button'>>>;
}

const SaveErrorTooltip = ({ isSaveBtnDisabled, formik, children }: ISaveErrorTooltip) => {
  return (
    <Tooltip
      title={
        !formik.isValid
          ? 'Not all fields are filled in correctly.'
          : isSaveBtnDisabled(formik) && !formik.dirty
            ? 'No changes to save.'
            : ''
      }
      placement='top'
      followCursor
      componentsProps={DISABLED_BTN_TOOLTIP_SX}
    >
      <span>{children}</span>
    </Tooltip>
  );
};

export default SaveErrorTooltip;
