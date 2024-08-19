// StudentList.jsx
import React, { useState } from 'react';


const StudentList = (props) => {


const students=props.students
const setStudents=props.setStudents

const favorites=props.favorites
const setFavorites=props.setFavorites


//useState for user input
const [newStudent, setnewStudent]=useState()


//getting data from user input
 const handleChange=(event)=>{
  setnewStudent(event.target.value);
  console.log(newStudent);
 }

 //adding new students name to students array of object
 function addStudent(){
  setStudents([...students,{id: students.length+1, name:newStudent}]);

 }



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

      <div>
        <input onChange={handleChange} className='p-1 border border-black' type="text" />
        <button onClick={addStudent}  className='bg-green-400 border border-black p-1 ml-1'>Add</button>
      </div>


      <ul className='p-6'>
        {students.map(student => (
            <div className=' p-2 m-2 flex justify-evenly'>
                <li className=' flex gap-10'  key={student.id}> {student.name}
                    <button className='bg-green-400 border border-black rounded-sm p-1' onClick={() => addFavorite(student.id)} disabled={favorites.some(fav => fav.id === student.id)}>
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
