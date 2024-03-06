import { search } from "../../data/api.js";
const inpMovieName = document.querySelector(".inp");
const filmList = document.querySelector(".film-list");

// index.html mainde olusturulan kartlarin
// elementlerini olusturacak javascript fonksiyonu
// createelement kullanacak Mehmet

/*
    api.jsdeki butun filmleri ceken fonksiyonu 
    calistiracak fonksiyon //Sule
*/

/*
    api.jsdeki tek filmi ceken fonksiyonu 
    calistiracak fonksiyon // Duygu
*/
/*
    api.jsdeki search apisini 
    calistiracak fonksiyon // Eda
*/


const fullFill = (films) => {

    let str = "";

   films.forEach(element => {
    str+= ` <div class="card m-3 p-3 bg-danger-subtle " style="width: 18rem;">
    <img src=${element.show.image.medium} class="card-img-top h-100 w-100 position-relative rounded-3  " alt="...">
      <p class="card-text text-center py-1">${element.show.name}</p>
  </div>`    
   }); 

   return str;
}




//----------------------Eda-----------------------

let vrb = "";

inpMovieName.addEventListener("input",async (e)=>{

   
    clearTimeout(vrb)

    vrb = setTimeout(async ()=>{
       
        let movies = e.target.value;

        let moviesFiltered = await searchByName(movies);
   
     let all =  fullFill(moviesFiltered) 
     filmList.innerHTML=all;
    }
    ,1000)

});


const searchByName = async (q)=>{
   let searchedMovie = await search(q);
   return searchedMovie;
 } 

 

//----------------------Eda------------------------



