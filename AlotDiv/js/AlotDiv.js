/*

    N220 Section 25750
    Harmanjot Singh
    Alot Div
    4 April 2020

*/

// object to store the controls
const controls = {
    // output div
    outputDiv: null
}

// main function
function main() {
    // heading
    document.body.innerHTML = "<h1>That's A lot of Divs</h1>";

    // keep executing this loop until we reach 100 in counting
    for(let i = 0; i <= 100; i++) {
        // create the divs by calling the function
        createDivs(randomColor(), "20px", "20px", "left"); 
    }
}

// create divs function
function createDivs(bgColor, width, height, move){
    // boilerplate for all the div features
    controls.outputDiv = document.createElement("div");
    // background color
    controls.outputDiv.style.backgroundColor = bgColor;
    // width
    controls.outputDiv.style.width = width;
    // height
    controls.outputDiv.style.height = height;
    // float
    controls.outputDiv.style.float = move;
    // append it to the document body
    document.body.appendChild(controls.outputDiv);
}

// random color function
function randomColor() {
    // generate red
    let r= Math.random() * 255;
    // generate green
    let g= Math.random() * 255;
    // generate blue
    let b= Math.random() * 255;

    // return the rgb set
    return "rgb("+ r + "," + g + "," + b +")";
}