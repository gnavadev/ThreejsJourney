import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// CLock

// const clock = new THREE.Clock()

//Time
// let time  = Date.now();

// Animations

document.onkeydown = (event) => {


    if(event.key == 'w')
    {

        gsap.to(mesh.position, {duration: 1, delay:0, z: - 2})
    }
    if(event.key == 'q')
    {

        gsap.to(mesh.position, {duration: 1, delay:0, x:0})
    }
    if(event.key == 's')
    {

        gsap.to(mesh.position, {duration: 1, delay:0, z:0})
    }
}


const tick = () => 
{
    
    // Clock
    
    // const elapsedTime = clock.getElapsedTime();
    
    //Time
    // const currentTime = Date.now()
    // const deltaTime = currentTime - time
    // time = currentTime
    
    //update objects
    // mesh.rotation.y += 0.001 * deltaTime;
    // mesh.position.y = Math.sin(elapsedTime) * 2
    // mesh.position.x = Math.sin(elapsedTime) * 3.2
    // camera.lookAt(mesh.position);

    //render
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)

}

tick ( );