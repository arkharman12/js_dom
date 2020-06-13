/*

    N220 Section 25750
    Harmanjot Singh
    Fire
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
    document.body.innerHTML = "<h1>Don't Stand in the Fire</h1>";

    // create the div by calling the function
    createDivs("yellow", "100px", "100px");
}

// create divs function
function createDivs(bgColor, width, height) {
    // boilerplate for all the div features
    controls.outputDiv = document.createElement("div");
    // background color
    controls.outputDiv.style.backgroundColor = bgColor;
    // width
    controls.outputDiv.style.width = width;
    // height
    controls.outputDiv.style.height = height;
    // add the event listener function
    controls.outputDiv.addEventListener("mouseover", makeMeRed)
    // add the event listener function
    controls.outputDiv.addEventListener("mouseout", makeMeYellow)
    // append it to the document body
    document.body.appendChild(controls.outputDiv);
}

// make the div red function
function makeMeRed(event) {
    // change the background color
    this.style.backgroundColor = "red";
}

// make the div yellow function
function makeMeYellow(event) {
    // change the background color
    this.style.backgroundColor = "yellow";
}