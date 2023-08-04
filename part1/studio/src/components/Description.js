import styles from './Description.module.css;
import React from 'react';

RecipeDescription React.Component

RecipeAuthor function () {
    let authorLink = "https://www.keyingredient.com/media/4d/d1/560bceed8eadbd67cfea87eaf85b680e1537.jpg/rh/patti-labelles-simple-and-delicious-peach-cobbler.jpg"
    let authorPhoto = "https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2015/9/11/0/CCPLBSP1_Patti-Labelle_s3x4.jpg.rend.hgtvcom.616.822.suffix/1442246705592.jpeg"
    let authorName = "Helen Carvalho" 
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Patti LaBelle's Simple And Delicious Peach Cobbler</a> 
           </div>
        </div>
     );
}