import { renderComponentWithProviders } from '@ApiService/Tests/MockServer/createWrapper';
import TopBar from './TopBar';

describe('<TopBar/>', () => {
  test('should render <TopBar/> component', () => {
    renderComponentWithProviders(<TopBar />);
  });
});
