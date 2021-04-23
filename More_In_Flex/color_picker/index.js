/* 
    Use fetch() to load 1, then 5, then 25 colors from the HexBot

    Use FlexBox to create a Responsive 5x5 Grid displaying the colors    
*/

function showColors(colors){
    let htmlDiv = ""
    colors.map(color => {
         htmlDiv += `<div class="colors" style="background-color: ${color.value} "></div>`
        //  htmlDiv += `<div style="background-color: ${colors[1].value} ">${colors[0].value}</div>`

         })
    document.body.innerHTML = htmlDiv
}
async function getColors(){
    const colors = await fetch("https://apis.scrimba.com/hexcolors?count=25")
                        .then(response => response.json())
                        .then(data => data)
    showColors(colors.colors)
}

getColors()