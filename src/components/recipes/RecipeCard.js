import React from 'react'
import './recipes.css';
import { IoIosArrowDropup } from 'react-icons/io'

const RecipeCard = (props) => {
  
  return (
    <section className="recipeCard">
      <div>{props.recipe.primaryPicture}</div>
      <div>
        <div>{props.recipe.name}</div>
      </div>
      <a onClick={() => {}}><IoIosArrowDropup className='expand' /></a>
      
    </section>
  )
}

export default RecipeCard;