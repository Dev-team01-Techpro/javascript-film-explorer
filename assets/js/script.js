import { search, getMovieByName, getAllShows } from "../../data/api.js";
import { languageAndCountryCodes, languageAndCountryNames } from "../../data/countries.js";


const inpMovieName= document.getElementById("inpMovieName");
const parent = document.querySelector(".parent");


const fillCard = (item) => {
  const { name, image, language, premiered, rating } =item.show;
  assistantMethod(name,image,language,premiered,rating);
  
};
const fillCardForGetAll=(item)=>{
  const { name, image, language, premiered, rating } =item;
  assistantMethod(name,image,language,premiered,rating);
}

//ELEMENT OLUŞTURMA YARDIMCI METHOD
const assistantMethod =(name,image,language,premiered,rating)=> {
  const imageStyle = `url(${image.medium})`;
  const cardStyles =
    imageStyle !== null
      ? { backgroundImage: `url(${image.medium})` }
      : { backgroundColor: "white" };
  const card = createAndAppendElement(
    "div",
    parent,
    "film-card",
    null,
    cardStyles,
    null
  );

  const year = createAndAppendElement(
    "div",
    card,
    "year",
    premiered,
    { display: "none" },
    null
  );

  const nameFilm = createAndAppendElement(
    "div",
    card,
    "forName",
    name,
    { display: "none" },
    null
  );

  const countryName = createAndAppendElement(
    "div",
    card,
    "forCountry",
    `${languageAndCountryNames[language]}`,
    { display: "none" },
    null
  );

  const ratingFilm = createAndAppendElement(
    "div",
    card,
    "rating",
    null,
    { display: "none" },
    null
  );

  const imdb = createAndAppendElement(
    "div",
    ratingFilm,
    null,
    "imdb",
    null,
    null
  );

  const avg = rating.average !== null ? `${rating.average}` : "0.0";
  const avgElement = createAndAppendElement(
    "div",
    ratingFilm,
    null,
    avg,
    null,
    null
  );

  const flag = createAndAppendElement(
    "img",
    card,
    null,
    null,
    { display: "none", zIndex: "2" },
    {
      src:
        language !== null
          ? `https://flagcdn.com/40x30/${languageAndCountryCodes[language]}.png`
          : "./assets/img/the-inventor.jpg",
    }
  );

  const overlay = createAndAppendElement(
    "div",
    card,
    "overlay",
    null,
    null,
    null
  );

  card.addEventListener("mouseenter", () => {
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    nameFilm.style.display = "block";
    year.style.display = "block";
    flag.style.display = "block";
    countryName.style.display = "block";
    ratingFilm.style.display = "block";
  });

  card.addEventListener("mouseleave", () => {
    overlay.style.backgroundColor = "transparent";
    nameFilm.style.display = "none";
    year.style.display = "none";
    flag.style.display = "none";
    countryName.style.display = "none";
    ratingFilm.style.display = "none";
  });
}
const createAndAppendElement = (
  tagName,
  parent,
  className,
  textContent,
  styles,
  attributes
) => {
  const element = document.createElement(tagName);
  if (styles) {
    for (let style in styles) {
      element.style[style] = styles[style];
    }
  }
  if (className) {
    element.className = className;
  }
  if (textContent) {
    element.textContent = textContent;
  }
  if (attributes) {
    for (let attribute in attributes) {
      element.setAttribute(attribute, attributes[attribute]);
    }
  }
  parent.appendChild(element);
  return element;
};
//---------------------yrdmc mthd---------------------

//---------ŞULEEE------------------------
const handleDOMContentLoaded= async()=>{
 const shows = await getAllShows();
  let strShows = "";
  console.log(shows);

  shows.forEach((item) => {
    strShows += fillCardForGetAll(item);
  });
 
}
document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);

//---------ŞULEEE------------------------


//-------------- Duygu---------------

/*
const keyword = document.getElementById("inpSearch");
const listShows = document.getElementById("listShows");

keyword.addEventListener("input", async (e) => {
  const q = e.target.value;
  if (q.length < 3) return;

  const movies = await getMovieByName(q);
  let foundMovies = "";

  if (movies.length <= 0) {
    alert("Movie not found!");
  } else {
    movies.forEach((item) => {
      const { id, image, name } = item.show;

      foundMovies += `
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
});*/

// ---------------------Duygu-------------------------

//----------------------Eda-----------------------

let vrb = "";

inpMovieName.addEventListener("input", async (e) => {
  parent.innerHTML = "";
  clearTimeout(vrb);

  vrb = setTimeout(async () => {
    let movies = e.target.value;    
    let moviesFiltered = await searchByName(movies,handleDOMContentLoaded);

    let strShows = "";
    moviesFiltered.forEach((item) => {
    strShows += fillCard(item);
  });
  }, 1000);
});

const searchByName = async (q,method) => {
  let searchedMovie = await search(q,method);
  return searchedMovie;
};

//----------------------Eda------------------------


/* ---------CAHIT----------------- */

const getInformation = async (q) => {
  let information = [];
  let obje = {};

  q.forEach((items) => {
    obje = {
      id: items.id,
      name: items.show.name,
      language: items.show.language,
      ratingScore: items.show.rating.average ?? "No Rating",
      summary: items.show.summary,
      type: items.show.type,
      image: items.show.image.medium,
    };
    information.push(obje);
  });
  console.log(information);
  return information;
};

const infoCardCreater = (m) => {
  let infoCardDiv = document.createElement("div");
  infoCardDiv.setAttribute("class", "infoCard");
  infoCardDiv.style.display = "none";

  let topDiv = document.createElement("div");
  topDiv.setAttribute("class", "top");
  infoCardDiv.appendChild(topDiv);

  let imgEl = document.createElement("img");
  imgEl.setAttribute("class", "info-Img");
  imgEl.setAttribute("src", `${m.show.image.medium}`);
  imgEl.setAttribute("alt", "image");
  topDiv.appendChild(imgEl);

  let InformationDiv = document.createElement("div");
  InformationDiv.setAttribute("class", "information");
  topDiv.appendChild(InformationDiv);

  let nameH3 = document.createElement("h3");
  nameH3.textContent = `Name: ${m.name}`;
  languageH3.textContent = `Language: ${m.language}`;
  typeH3.textContent = `Type: ${m.type}`;

  InformationDiv.append(nameH3, languageH3, typeH3);

  let paragrafDiv = document.createElement("div");
  paragrafDiv.setAttribute("class", "paragraf");
  infoCardDiv.appendChild(paragrafDiv);

  let paragrafEl = document.createElement("p");
  paragrafEl.textContent(m.summary);
  paragrafDiv.appendChild(paragrafEl);
};

/* ---------CAHIT----------------- */
