import React from 'react'
import Header from '../navigation/Header'
import RecipeCard from './RecipeCard'
import {MdRestaurantMenu} from 'react-icons/md'

const MyRecipes = () => {
  const tempRecipes =[
    {
      id: 1,
      name: 'Chocolate Protein Pancakes',
      primaryPicture: <MdRestaurantMenu />,
    }
  ]

  return (
    <>
      <div className='mobileHeaderMenu'>
        <Header name={'myRecipe'} />
      </div>
      {tempRecipes.map((recipe) => {
        return <RecipeCard key={recipe.id} recipe={recipe} />
      })}
    </>
  )
} 

export default MyRecipes