import ProjectStatus from '@Components/ProjectStatus/ProjectStatus';
import ProtectRoute from '@CommonComponents/ProtectRoute/ProtectRoute';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <ProtectRoute>
            <div>Home Page</div>
          </ProtectRoute>
        }
      >
        <Route path='Some nested path' element={<div>Component</div>} />
      </Route>

      <Route path='/ProjectStatus' element={<ProjectStatus />} />
      <Route path='*' element={<>ROUTE NOT FOUND !</>} />
    </Routes>
  );
};

export default App;
