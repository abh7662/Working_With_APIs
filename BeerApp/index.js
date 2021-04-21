// variables

// Create a filter for the Hoppiness :)
// 1. Create a const for the radio group
// 2. Create a variable to track the options selected
// 3. Create an event listener to update the option selected
//      - all = ""
//      - weak = "ibu_lt=35"
//      - medium = "ibu_gt=34&ibu_lt=75"
//      - strong = "ibu_gt=74"
// 4. Implement the new options into the url being fetched 


const urlBase = "https://api.punkapi.com/v2/beers?page=";
const filterABV = document.getElementById("filterABV")
const filterIBU = document.getElementById("filterIBU")
const pageText = document.getElementById("pageNumber");
const prevPage = document.getElementById("prevPage");
const nextPage = document.getElementById("nextPage");
let optionsIBU = ""
let optionsABV = ""
let page = 1

// pagination

nextPage.addEventListener("click", () =>{
    page++
    getBeers()
})
prevPage.addEventListener("click", () =>{
    page--
    getBeers()

})

filterIBU.addEventListener("change", e =>{
    const value = e.target.value
    switch(value){
        case "all":
            optionsIBU = ""
            break
        case "weak":
            optionsIBU = "&ibu_lt=35"
            break
        case "medium":
            optionsIBU = "&ibu_gt=34&ibu_lt=75"
            break
        case "strong":
            optionsIBU = "&ibu_gt=74"
            break
    }
    getBeers()
})

filterABV.addEventListener("change", e =>{
    const value = e.target.value
    switch(value){
        case "all":
            optionsABV = ""
            break
        case "weak":
            optionsABV = "&abv_lt=4.6"
            break
        case "medium":
            optionsABV = "&abv_gt=4.5&abv_lt=7.6"
            break
        case "strong":
            optionsABV = "&abv_gt=7.5"
            break
    }
    getBeers()
})
async function getBeers() {
    // fetch
    const url = urlBase + page + optionsIBU + optionsABV
    console.log(url)
    const beerPromise = await fetch(url);
    const beers = await beerPromise.json();
    
    // render data
    const beersDiv = document.querySelector('.beers');
    
    let beerHtml = "";
      
    // Fill in the blanks with the rest of the data
    const genericBottle = 'https://cdn.pixabay.com/photo/2014/12/22/00/04/bottle-576717_960_720.png';
    beers.forEach(beer => {
       beerHtml += `
        <div class='beer-wrapper card'>
            <div class='beer'>
                <img class='beer__img' src="${beer.image_url?beer.image_url:genericBottle}">
                <h3>${beer.name}</h3>
                <span class='beer__info'>
                    <span>ABV: ${beer.abv}%</span>
                    <span>IBU: ${beer.ibu}</span>
                </span>
            </div>
            <div class='beer__content'>
                <div class='beer__name'>${beer.name}</div>
                <div class='beer__tagline'>${beer.tagline}</div>
                <div class='beer__description'>${beer.description}</div>
                <div class='beer__food-pairing'>
                    Pair with: ${beer.food_pairing.join(', ')}
                </div>
            </div>
        </div>
       `; 
    });
    
    if(page === 1){
        prevPage.disabled = true
    }else{
        prevPage.disabled = false

    }

    if(beers.length < 25){
        nextPage.disabled = true
    }else{
        nextPage.disabled = false
    }

    beersDiv.innerHTML = beerHtml;
    pageText.innerHTML = page

}

// initial get
getBeers();