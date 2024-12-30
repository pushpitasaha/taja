import React, {useState} from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Browse from '../../components/Browse/Browse'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Stories from '../../components/Stories/Stories'

const Home = () => {

    const [category, setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <Browse category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <Stories/>
    </div>
  )
}

export default Home
