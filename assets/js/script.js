const mainEl=document.querySelector(".main");
const parent=document.querySelector(".parent");



const languageAndCountryCodes = {
  "Turkish": "tr",
  "English": "gb",
  "German": "de",
  "French": "fr",
  "Spanish": "es",
  "Italian": "it",
  "Japanese": "jp",
  "Korean": "kr",
  "Chinese": "cn",
  "Portuguese": "pt",
  "Russian": "ru",
  "Vietnamese": "vn",
  "Hindi": "in",
  "Thai": "th",
  "Arabic": "ae",
  "Indonesian": "id",
  "Polish": "pl",
  "Czech": "cz",
  "Hungarian": "hu",
  "Swedish": "se",
  "Norwegian": "no",
  "Danish": "dk",
  "Finnish": "fi",
  "Greek": "gr",
  "Croatian": "hr",
  "Serbian": "rs",
  "Bulgarian": "bg",
  "Ukrainian": "ua",
  "Romanian": "ro",
  "Bengali": "bd"
};
const languageAndCountryNames = {
  "Turkish": "Turkey",
  "English": "The USA",
  "German": "Germany",
  "French": "France",
  "Spanish": "Spain",
  "Italian": "Italy",
  "Japanese": "Japan",
  "Korean": "Korea",
  "Chinese": "China",
  "Portuguese": "Portugal",
  "Russian": "Russia",
  "Vietnamese": "Vietnam",
  "Hindi": "India",
  "Thai": "Thailand",
  "Arabic": "United Arab Emirates",
  "Indonesian": "Indonesia",
  "Polish": "Poland",
  "Czech": "Czech Republic",
  "Hungarian": "Hungary",
  "Swedish": "Sweden",
  "Norwegian": "Norway",
  "Danish": "Denmark",
  "Finnish": "Finland",
  "Greek": "Greece",
  "Croatian": "Croatia",
  "Serbian": "Serbia",
  "Bulgarian": "Bulgaria",
  "Ukrainian": "Ukraine",
  "Romanian": "Romania",
  "Bengali": "Bangladesh"

};



const fillCard=(item)=>{   
        
        const {name,image,language,premiered,rating}=item.show;

        const imageStyle = `url(${image.medium})`;
        const cardStyles = imageStyle !== null ? { backgroundImage: `url(${image.medium})` } : { backgroundColor: 'white'};
        const card = createAndAppendElement('div', parent, 'film-card', null ,cardStyles,null);

        const year= createAndAppendElement('div', card, 'year',premiered,{display: 'none'},null);

        const nameFilm= createAndAppendElement('div', card, 'forName',name,{display: 'none'},null);

        const countryName= createAndAppendElement('div', card, 'forCountry',`${languageAndCountryNames[language]}`,{display: 'none'},null);

        const ratingFilm= createAndAppendElement('div', card, 'rating',null,{display: 'none'},null);

        const imdb= createAndAppendElement('div', ratingFilm, null ,'imdb',null,null);
        
        const avg=rating.average!==null ?  `${rating.average}`: "0.0";
        const avgElement= createAndAppendElement('div', ratingFilm, null ,avg,null,null);


        const flag = createAndAppendElement('img', card, null, null,{display: "none",zIndex: "2"} ,{
        src: language !== null ? `https://flagcdn.com/40x30/${languageAndCountryCodes[language]}.png` : "./assets/img/the-inventor.jpg",
        });

        const overlay= createAndAppendElement('div', card, 'overlay' ,null ,null,null);


 
        card.addEventListener("mouseenter",()=>{
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';           
            nameFilm.style.display="block";
            year.style.display="block";
            flag.style.display="block";
            countryName.style.display="block";
            ratingFilm.style.display="block";

        })

        card.addEventListener("mouseleave",()=>{
            overlay.style.backgroundColor = 'transparent';          
            nameFilm.style.display="none";
            year.style.display="none";
            flag.style.display="none";
            countryName.style.display="none";
            ratingFilm.style.display="none";
        })

}


//ELEMENT OLUŞTURMA YARDIMCI METHOD
const createAndAppendElement=(tagName, parent,className,textContent,styles,attributes)=> {
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
}


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
/*
    api.jsdeki people apisini 
    calistiracak fonksiyon // Cahit
*/
