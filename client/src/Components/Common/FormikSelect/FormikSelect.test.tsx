import { renderComponentWithProviders } from '@Tests/MockServer/createWrapper';
import { FormikProps } from 'formik';
import FormikSelect from './FormikSelect';

describe('<FormikSelect/>', () => {
  test('should render <FormikSelect/> component', async () => {
    renderComponentWithProviders(
      <FormikSelect
        formik={{} as FormikProps<unknown>}
        label='1'
        value='1'
        name='cc'
        options={[{ text: 'tt', value: 1 }]}
      />
    );
  });
});
