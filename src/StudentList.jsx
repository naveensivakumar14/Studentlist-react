// StudentList.jsx
import React, { useState } from 'react';




const StudentList = (props) => {
  // Initial list of students
//   const [students, setStudents] = useState([
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 3, name: 'Charlie' },
//     { id: 4, name: 'David' }
//   ]);

  // State to track favorite students
//   const [favorites, setFavorites] = useState([]);

const students=props.students
const setStudents=props.setStudents

const favorites=props.favorites
const setFavorites=props.setFavorites







  // Function to add a student to the favorites list
  const addFavorite = (id) => {
    const student = students.find(s => s.id === id);
    if (student && !favorites.some(fav => fav.id === id)) {
      setFavorites([...favorites, student]);
    }
  };

 

  return (
    <div className='bg-slate-300  p-10 flex  flex-col items-center'>
      <h2 className='text-xl my-6 font-bold'>Students</h2>
      <ul className='p-6'>
        {students.map(student => (
            <div className=' p-2 m-2 flex justify-evenly'>
                <li className=' flex gap-10'  key={student.id}> {student.name}
                    <button className='bg-green-400 border rounded-md p-1' onClick={() => addFavorite(student.id)} disabled={favorites.some(fav => fav.id === student.id)}>
                    {/* conditional rendering */}
                    {favorites.some(fav => fav.id === student.id) ? 'Favorited' : 'Add to Favorites'}
                    </button>
                </li>
          </div>
        ))}
      </ul>

      {/* Pass the favorites list and removeFavorite function to the FavoriteList component */}
      {/* <FavoriteList favorites={favorites} removeFavorite={removeFavorite} /> */}
    </div>
  );
};

export default StudentList;
