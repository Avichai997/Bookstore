import { renderComponentWithProviders } from '@Tests/MockServer/createWrapper';
import ProjectStatus from './ProjectStatus';

describe('<ProjectStatus/>', () => {
  test('should render <ProjectStatus/> component', async () => {
    renderComponentWithProviders(<ProjectStatus />);
  });
});
