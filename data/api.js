const API_BASE_URL = "https://api.tvmaze.com/";

// ----------------------------------------------
// Butun Filmleri cek // Sule
// ----------------------------------------------
// Tek Film cek // Duygu
// ----------------------------------------------

// Search apisi // Eda
//----------------------Eda-----------------------

export const search = async (q) => {

    if(q.length < 3) return;


        const res = await fetch(`${API_BASE_URL}/search/shows?q=:${q}`);

        if(!res) throw new Error("data is empty");

        const data = await res.json();

        return data;
}



//----------------------Eda------------------------

// People verisini cek // Cahit