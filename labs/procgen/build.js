/* global THREE, scene, renderer, camera */

/*
 *
 * In this lab we use a group to organise the matrices of a set of cubes
 * Create a group for the cubes set
 * Define the number of cubes in the set [size of the cubes array]
 * 
 */


//Create a cube using variable w, h, d and a hex-color
function createCube(w, h, d, color) {
    var material = new THREE.MeshBasicMaterial();

    //In this ab we will use the hex-color which is easier to randmomize
    material.color = new THREE.Color(color);
    material.wireframe = true;
    var geometry_cube = new THREE.BoxGeometry(w, h, d);
    var square = new THREE.Mesh(geometry_cube, material);
    return square;
}
var cubeCount = 0;
var cubeGroup = new THREE.Group();


function createGroup() {
    cubeGroup.clear();
    var width = 0;
    var height = 0;
    for (var i = 0; i < cubeCount; i++) {
        var cube = createCube(1, 1, 1, 0xff0000);
        cube.position.x = width;
        cube.position.y = height;
        width += 2;
        if (width > 15) {
            width = 0;
            height += 2;
        }
        cubeGroup.add(cube);
    }
    addShapes();
    animate();
}

function addShapes() {
    //add the group of cubes to the scene
    scene.add(cubeGroup);
}