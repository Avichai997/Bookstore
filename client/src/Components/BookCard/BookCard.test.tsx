import { renderComponentWithProviders } from '@Tests/MockServer/createWrapper';
import { mockBook } from '@Tests/MockServer/mockData';
import BookCard from './BookCard';

describe('<BookCard />', () => {
  test('should render <BookCard/> component', async () => {
    renderComponentWithProviders(<BookCard book={mockBook} />);
  });
});
