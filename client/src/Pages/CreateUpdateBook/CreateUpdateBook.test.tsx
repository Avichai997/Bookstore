import { renderComponentWithProviders } from '@Tests/MockServer/createWrapper';
import CreateUpdateBook from './CreateUpdateBook';

describe('<CreateUpdateBook/>', () => {
  test('should render <CreateUpdateBook/> component', async () => {
    renderComponentWithProviders(<CreateUpdateBook />);
  });
});
