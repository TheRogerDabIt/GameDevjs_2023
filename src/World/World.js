import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/light.js';

import { createRenderer } from './systems/renderer.js';
import { Loop } from './systems/Loop.js';
import { Resizer } from './systems/Resizer.js';
import { MathUtils, Vector3 } from "three";


// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;
let light;
let loop;

class World {

    // 1. Create an instance of the World app
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        light = createLights();
        loop = new Loop(camera, scene, renderer);

        container.append(renderer.domElement);

        const cube = createCube(new Vector3(0, 0, 0));

        loop.updatables.push(cube);

        scene.add(cube, light);
        const resizer = new Resizer(container, camera, renderer);
        resizer.onResize = () => {
            this.render();
        }


    };

    // 2. Render the scene
    render() {
        renderer.render(scene, camera);
        requestAnimationFrame(true);
    };

    start() {
        loop.start();
    };

    stop() {
        loop.stop();
    };

    pause() {
        requestAnimationFrame(false);
    };

    resume() {
        requestAnimationFrame(true);
    };
}
export {
    World
};