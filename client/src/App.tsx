import ProjectStatus from '@Pages/ProjectStatus/ProjectStatus';
import { Route, Routes } from 'react-router-dom';
import BooksCatalog from '@Pages/BooksCatalog/BooksCatalog';
import BooksContainer from '@Components/BooksContainer/BooksContainer';
import CreateUpdateBook from '@Pages/CreateUpdateBook/CreateUpdateBook';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<BooksCatalog />}>
        <Route index element={<BooksContainer />} />
        <Route path='Book' element={<CreateUpdateBook />} />
        <Route path='Book/:bookId' element={<CreateUpdateBook />} />
      </Route>

      <Route path='/ProjectStatus' element={<ProjectStatus />} />
      <Route path='*' element={<>PAGE NOT FOUND!</>} />
    </Routes>
  );
};

export default App;
