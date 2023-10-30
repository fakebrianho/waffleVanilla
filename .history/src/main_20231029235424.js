import './style.css'
import * as THREE from 'three'
import { sizes, camera } from './camera'
import addLight from './lights'
import { addMeshes, addShader } from './addMeshes'
import { PARAMS, pane, orbit } from './controls'
import { resize } from './eventListeners'
import { Player } from '../player'

let renderer, scene
renderer = new THREE.WebGLRenderer()
scene = new THREE.Scene()
const player = new Player(camera)

const meshes = {}
const lights = {}

init()
function init() {
	renderer.setSize(sizes.width, sizes.height)
	document.body.appendChild(renderer.domElement)
	meshes.default = addMeshes()
	meshes.shader = addShader()
	lights.default = addLight()
	scene.add(meshes.default)
	scene.add(meshes.shader)
	scene.add(lights.default)
	document.addEventListener('keydown', (event) => player.onKeyDown(event))
	document.addEventListener('keyup', (event) => player.onKeyUp(event))
	resize(camera, renderer, sizes)
	orbit(camera, renderer)
	animate()
}

function checkBoundaries() {
	if (camera.position.z < 0) {
		console.log('hi')
	}
}

function animate() {
	requestAnimationFrame(animate)
	player.update()
	meshes.shader.material.uniforms.uTime.value += 0.1
	meshes.shader.material.uniforms.displacementStrength.value =
		PARAMS.displacementStrength
	meshes.shader.rotation.y -= 0.01
	meshes.shader.rotation.z += 0.01
	meshes.default.rotation.x += 0.01
	meshes.default.rotation.y += 0.01
	renderer.render(scene, camera)
}
