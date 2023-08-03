export default function BookList() {
   let pageTitle = "Kids Can Save The Day!";
   let book1 = "https://m.media-amazon.com/images/I/51hllwp+MmL._SY344_BO1,204,203,200_.jpg"
   let book2 = "https://m.media-amazon.com/images/I/51PARqAysPL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
   let book3 = "https://m.media-amazon.com/images/I/5140TwVkYQL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Miles Morales, Shock Waves" />
         <img src={book2} alt="Case Closed-Mystery In The Mansion" />
         <img src={book3} alt="Diary of a Wimpy Kid" />
      </div>      
   );
}

