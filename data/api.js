const API_BASE_URL = "https://api.tvmaze.com";

// ----------------------------------------------
// Butun Filmleri cek // Sule
// ----------------------------------------------
// ---------------------Duygu-------------------------
// Tek Film cek isim ile // Duygu

    const getMovieByName = async (q) => {
      const res = await fetch(`${API_BASE_URL}/search/shows?q=${q}`);
      if(!res.ok) throw new Error("The movie can not be found"); 
      const data= await res.json();
      return data;
    }
    
// --------------------Duygu--------------------------
// ----------------------------------------------
// Search apisi // Eda
// ----------------------------------------------
// People verisini cek // Cahit

export{getMovieByName};
