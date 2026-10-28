function RandomBox(props) {
  return (
    <div id="random">
      <h2>Harry Potter Characters</h2>
      <button onClick={props.handleSelectRandom}>Find Random Character</button>

      {props.randomCharacter && (
        <div className="card random-card">
          <h4>Random Character</h4>
          <h5>Name: {props.randomCharacter.name} </h5>
          <p>Description: {props.randomCharacter.description}</p>

          <button onClick={props.handleAddToFav}>Add to Favourite</button>
        </div>
      )}
    </div>
  );
}
export default RandomBox;
