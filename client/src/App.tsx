import ProjectStatus from '@Components/ProjectStatus/ProjectStatus';
import ProtectRoute from '@CommonComponents/ProtectRoute/ProtectRoute';
import { Route, Routes } from 'react-router-dom';
import BooksCatalog from '@Pages/BooksCatalog';
import BooksContainer from '@Components/BooksContainer/BooksContainer';

const App = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <ProtectRoute>
            <BooksCatalog />
          </ProtectRoute>
        }
      >
        <Route index element={<BooksContainer />} />
        {/* <Route path='Book' element={<CreateUpdateBook />} />
        <Route path='Book/:bookId' element={<CreateUpdateBook />} />{' '} */}
      </Route>

      <Route path='/ProjectStatus' element={<ProjectStatus />} />
      <Route path='*' element={<>ROUTE NOT FOUND !</>} />
    </Routes>
  );
};

export default App;
