
import React from 'react';

const FavoriteList = (props) => {

const students=props.students
const setStudents=props.setStudents

const favorites=props.favorites
const setFavorites=props.setFavorites
const removeFavorite=props.removeFavorite


  return (
    <div className='bg-slate-300 flex flex-col items-center p-10'>
      <h2 className=' text-xl font-bold my-6'>Favorite Students</h2>
      {favorites.length > 0 ? (
        <ul className='p-6'>
          {favorites.map(favorite => (
            <div className='p-2 flex flex-col'>
                <li className='flex gap-10' key={favorite.id}>
                {favorite.name}
                <button className='bg-red-600 text-white p-1 border rounded-md'
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
