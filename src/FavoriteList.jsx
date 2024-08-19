import React from 'react';

const FavoriteList = (props) => {



const students=props.students
const setStudents=props.setStudents

const favorites=props.favorites
const setFavorites=props.setFavorites
// const removeFavorite=props.removeFavorite

// Function to remove a student from the favorites list
const removeFavorite = (id) => {
  setFavorites(favorites.filter(fav => fav.id !== id));
};


  return (
    <div className='bg-slate-300 flex flex-col items-center p-10'>
      <h2 className=' text-xl font-bold my-6'>Favorite Students</h2>
      {favorites.length > 0 ? (
        <ul className='p-6'>
          {favorites.map(favorite => (
            <div className='p-2'>
                <li className='flex justify-between gap-10 p-1' key={favorite.id}>
                {favorite.name}
                <button className='bg-[#FF4C4C] border border-black text-white p-1 rounded-sm'
                    onClick={() => removeFavorite(favorite.id)}
                >
                    Remove
                </button>
                </li>
            </div>
          ))}
        </ul>
      ) : (
        <p>No favorite students yet.</p>
      )}
    </div>
  );
};

export default FavoriteList;
