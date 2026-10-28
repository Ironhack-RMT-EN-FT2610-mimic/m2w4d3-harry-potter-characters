import { useState } from "react"
import charactersJSON from "../data/all-characters.json"
import RandomBox from "./RandomBox"

// event listener
// state that handles all the favourite characters array
// setState() and push the element inside the array
// bonus: after adding make sure we cannot select it again

function Characters() {

  const [ randomCharacter, setRandomCharacter ] = useState(null)
  const [ favCharacters, setFavCharacters ] = useState([])

  const handleSelectRandom = () => {

    let randomIndex = Math.floor( Math.random() * charactersJSON.length )
    let character = charactersJSON[randomIndex]
    console.log(character)

    setRandomCharacter(character)

  }

  const handleAddToFav = () => {
    console.log(randomCharacter)

    // favCharacters.push(randomCharacter) //! ALWAYS AVOID DIRECTLY MUTATING THE STATE

    // BONUS
    const foundCharacter = favCharacters.find((character) => {
      return character.id === randomCharacter.id
    }) // either the character if exists or null if it doesn't exist

    if (foundCharacter) {
      console.log("character already exists")
      return
    }

    const stateClone = [...favCharacters] // clone the state
    stateClone.push(randomCharacter) // push to the clone

    setFavCharacters(stateClone) // state now becomes the clone

  }

  const handleRemoveFromFav = (index) => {
    console.log(index)
    // we need the index
    const stateClone = [...favCharacters]
    stateClone.splice(index, 1)
    setFavCharacters(stateClone)
  }

  const handleRemoveFromFavFilter = (idToRemove) => {
    // we could also use the idToRemove
    const filteredArr = favCharacters.filter((character) => {
      return character.id !== idToRemove
    })
    setFavCharacters(filteredArr)
  }

  return (
    <div className="characters-container">
      
      <RandomBox randomCharacter={randomCharacter} handleAddToFav={handleAddToFav} handleSelectRandom={handleSelectRandom}/>

      <div id="fav">

        <h2>Favourite Characters</h2>
       
        {[favCharacters.map((character, index) => {
          
          return (
            <div className="card fav-card" key={character.id}>
              <h5>Name: {character.name} </h5>
              <p>Description: {character.description}</p>

              <button onClick={() => handleRemoveFromFav(index)}>Remove from Fav</button>
            </div>
          )
        })]}

      </div>

    </div>
  )
}
export default Characters
