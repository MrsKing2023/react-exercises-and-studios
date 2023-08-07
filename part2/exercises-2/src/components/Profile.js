import './styles.css';
import Button from './Button';
import oceans from './components/oceans.json.js';

const listItem = oceans.map(ocean =>
   //if (${creatureCheck} = "true") {   
   <div key={ocean.id} className="profile" >
      <img src={ocean.image} alt={ocean.name} className="img"/>   
      
      } else (${creatureCheck} = "false") {   
         <div key={ocean.id}  className={`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`}></div> ) {
   </div>
); 

}
      

function Profile()
{
   return(
      <>
         <ul>
            {listItem}
         </ul>  
         <Button />
      </>
   );
}
export default Profile;