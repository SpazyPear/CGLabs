//document.getElementById("speed").onclick = setClick();


function setClick() {
    //console.debug("test");
    speed = parseFloat(document.getElementById("speed").value);
    
}

function sizeClick() {
    cubeCount = parseFloat(document.getElementById("size").value);
    console.log("test");
    createGroup();
}