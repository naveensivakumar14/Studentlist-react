
import './App.css';
import { useState } from 'react';
import StudentList from './StudentList';
import FavoriteList from './FavoriteList';
 import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';



function App() {


  const [students, setStudents] = useState([
    { id: 1, name: 'Arjun' },
    { id: 2, name: 'Balaji' },
    { id: 3, name: 'Gokul' },
    { id: 4, name: 'Naveen' },
    { id: 5, name: 'Sindhu'},
    { id: 6, name: 'Vignesh'}
  ]);

  const [favorites, setFavorites] = useState([]);

   // Function to remove a student from the favorites list
   const removeFavorite = (id) => {
    setFavorites(favorites.filter(fav => fav.id !== id));
  };
 


  return (
    
      <BrowserRouter>
      <div className='bg-[#6c6af8] flex justify-center gap-10 p-10'>
        <h2 className='text-lg text-white font-bold '><Link to={'/StudentList'}>Student List</Link></h2>
        <h2 className='text-lg text-white font-bold '><Link to={'/FavoriteList'}>Favorite List</Link></h2>
      </div>
      
      <Routes>
        <Route path='/StudentList' element={<StudentList students={students} setStudents={setStudents} favorites={favorites} setFavorites={setFavorites} />}></Route>
        <Route path='/FavoriteList' element={<FavoriteList students={students} setStudents={setStudents} favorites={favorites} setFavorites={setFavorites} removeFavorite={removeFavorite} />}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;

