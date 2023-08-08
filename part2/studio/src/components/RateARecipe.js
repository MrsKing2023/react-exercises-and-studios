let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {
  return stars;

  function GiveRating(props) {
    return <h3>{stars[props.rating - 1]}</h3>;
    <div> GiveRating = {`${stars} >= 1 && <= 5 === true ? [props.rating] : "null" `} </div>
    //if (GiveRating)

  }
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
