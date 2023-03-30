import scene from "./basic/Scene.js";
import camera from "./basic/Camera.js";
import renderer from "./basic/Renderer.js";
import light from "./basic/Light.js";

import resize from "./basic/Resize.js";
import loopMachine from "./basic/LoopMachine.js"

import cube from "./basic/shapes/Cube.js";
import plane from "./basic/shapes/Plane.js";
import keyListener from "./basic/KeyListener.js";
import keyCode from "./basic/KeyCode.js";

scene.add( cube );
scene.add( light );
scene.add( plane );

// camera.position.x = 2
// camera.position.y = 1
// camera.position.z = 5
plane.position.y = -1
camera.position.set(2,2,2)
camera.lookAt(cube.position)
 
//renderer.render(scene, camera) //take a picture
//console.log(scene, camera, renderer, cube)

loopMachine.addCallback(() =>{
    if(keyListener.isPressed(keyCode.ENTER)){
        cube.rotation.y += 0.01 
    }
    renderer.render(scene, camera);
    
})

resize.start(renderer)
loopMachine.start()
keyListener.start()