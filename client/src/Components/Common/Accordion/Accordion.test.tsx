import { renderComponentWithProviders } from '@Tests/MockServer/createWrapper';
import Accordion from './Accordion';

describe('<Accordion/>', () => {
  test('should render <Accordion/> component', async () => {
    renderComponentWithProviders(<Accordion />);
  });
});
