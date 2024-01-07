import { renderComponentWithProviders } from '@Tests/MockServer/createWrapper';
import BooksContainer from './BooksContainer';

describe('<BooksContainer/>', () => {
  test('should render <BooksContainer/> component', async () => {
    renderComponentWithProviders(<BooksContainer />);
  });
});
