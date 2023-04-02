import {
    BoxBufferGeometry,
    MathUtils,
    Mesh,
    MeshStandardMaterial,
    TextureLoader
} from "three";
import bwTexture from './../../assets/textures/uv-test-bw.png';

function createCube(position) {
    const geometry = new BoxBufferGeometry(1, 1, 1)

    const material = createMaterial();


    const cube = new Mesh(geometry, material);
    cube.position.set(position.x, position.y, position.z);

    const radiansPerSecond = MathUtils.degToRad(30);

    cube.tick = (delta) => {
        // increase the cube's rotation each frame
        cube.rotation.z += radiansPerSecond * delta;
        cube.rotation.x += radiansPerSecond * delta;
        cube.rotation.y += radiansPerSecond * delta;
    };

    return cube;
}

function createMaterial() {
    const textureLoader = new TextureLoader();

    const texture = textureLoader.load(
        bwTexture,
    );

    const material = new MeshStandardMaterial({
        map: texture,
    });

    return material;
}

export { createCube }