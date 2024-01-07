import { renderComponentWithProviders } from '@Tests/MockServer/createWrapper';
import BooksCatalog from './BooksCatalog';

describe('<BooksCatalog/>', () => {
  test('should render <BooksCatalog/> component', async () => {
    renderComponentWithProviders(<BooksCatalog />);
  });
});
