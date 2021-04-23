/* 
    Use fetch() to load 1, then 5, then 25 colors from the HexBot

    Use FlexBox to create a Responsive 5x5 Grid displaying the colors    
*/

/* 
    Create a variable to store the count of colors to be loaded
    
    Update the getColors() function to take that count as a parameter
    
    Set the count to 100 colors, update the .my-color class to maintain the grid structure
*/

const color_count = 100

function displayColors(colors) {
    let myColorsHtml = colors.map(color => {
        return `<div class="my-color" style="background-color: ${color.value}"></div>`
    }).join('')
    
    console.log(myColorsHtml)

    document.body.innerHTML = `<div class="my-colors">
        ${myColorsHtml}
    </div>`
}

async function getColors(color_count) {
    let response = await fetch("https://apis.scrimba.com/hexcolors?count="+color_count)
    let data = await response.json()
    let colors = data.colors
    
    displayColors(colors)
}

getColors(color_count)
