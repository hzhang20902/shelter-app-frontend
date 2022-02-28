import './App.css';
import LoginPage from './components/LoginPage.js';
import ButtonAppBar from './components/AppBar.js';
import { Container } from '@mui/material';
import QuickLinks from './components/QuickLinks';
import { Routes, Route } from 'react-router-dom';
import SelectDog from './components/SelectDog';
import ProtectedRoutes from './components/ProtectedRoutes';
import { UserContext } from './components/UserContext';
import { useState } from 'react';
import SelectCat from './components/SelectCat';
<<<<<<< HEAD
import Housekeeping from './components/Housekeeping';

=======
import NotFoundPage from './components/NotFoundPage';
>>>>>>> bc7939d0dfa2ef3d61e0aed142a34f8b4f779207

function App() {
  const [user, setUser] = useState({ auth: false });
  return (
    <Container maxWidth="sm" sx={{marginTop: 15}}>
      <ButtonAppBar />
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="home" element={<QuickLinks />} />
            <Route path="dog" element={<SelectDog />} />
            <Route path="cat" element={<SelectCat />} />
            <Route path="tasks" element={<Housekeeping />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </Container>
  );
}

export default App;
