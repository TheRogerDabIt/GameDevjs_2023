import { DirectionalLight } from "three";

function createLights() {
    const light = new DirectionalLight('#d2bd83', 8);

    light.position.set(10, 10, 10);
    light.castShadow = true;

    return light;
}

export { createLights };