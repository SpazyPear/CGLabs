/* global THREE, cube, scene, camera, renderer */


var speed = 0.02;
var clock = new THREE.Clock();


function rotate(object) {
    var delta = clock.getDelta();
    object.rotation.x += delta*speed;
}

function animate() {
    renderer.render(scene, camera);
    rotate(cubeGroup);
    //Rotate all cubes
    //Rotate the group around the Y axis
    //console.log(speed);
    controls.update();
    requestAnimationFrame(animate);
}