/*
    api.jsdeki butun filmleri ceken fonksiyonu 
    calistiracak fonksiyon //Sule
*/
//-------------- Duygu---------------

import { getMovieByName } from "../../data/api.js";

    const keyword=document.getElementById("inpSearch");
    const listShows = document.getElementById("listShows");

     keyword.addEventListener("input" , async(e) => {
        const q=e.target.value;
        if(q.length < 3) return; 

        const movies= await getMovieByName(q);
        let foundMovies="";

        if(movies.length <= 0){
           alert("Movie not found!")
        }else{
            movies.forEach((item) =>{
                const {id, image, name }= item.show;
                
              foundMovies +=   `
            <div class="col">
                <div class="card h-100" data-id="${id}" style="cursor:pointer">
                    <img class="card-img-top" src="${image.medium}" alt="Title" />
                    <div class="card-body">
                        <h4 class="card-title">${name}</h4>
                    </div>
                </div>
            </div>`;
		});
        }
    listShows.innerHTML = foundMovies;
});
    

// ---------------------Duygu-------------------------
/*
    api.jsdeki search apisini 
    calistiracak fonksiyon // Eda
*/
/*
    api.jsdeki people apisini 
    calistiracak fonksiyon // Cahit
*/
