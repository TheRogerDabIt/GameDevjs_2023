import { Scene, Color } from "three";

function createScene() {
    const scene = new Scene();

    scene.background = new Color('skyblue');
    //scene.background = new Color('#18a3c1');

    return scene;
}

export { createScene }