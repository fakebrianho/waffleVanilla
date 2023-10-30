export class Player {
	constructor() {
		this.velocity = 0.1
		this.position = [0, 0, 0]
	}
	update() {
		// Call this method in your animation loop
		// Handle movement based on keyboard input
		if (this.moveForward) this.camera.position.z -= this.speed
		if (this.moveBackward) this.camera.position.z += this.speed
		if (this.moveLeft) this.camera.position.x -= this.speed
		if (this.moveRight) this.camera.position.x += this.speed
	}

	onKeyDown(event) {
		switch (event.keyCode) {
			case 38: // up
			case 87: // w
				this.moveForward = true
				break
			case 40: // down
			case 83: // s
				this.moveBackward = true
				break
			case 37: // left
			case 65: // a
				this.moveLeft = true
				break
			case 39: // right
			case 68: // d
				this.moveRight = true
				break
		}
	}

	onKeyUp(event) {
		switch (event.keyCode) {
			case 38: // up
			case 87: // w
				this.moveForward = false
				break
			case 40: // down
			case 83: // s
				this.moveBackward = false
				break
			case 37: // left
			case 65: // a
				this.moveLeft = false
				break
			case 39: // right
			case 68: // d
				this.moveRight = false
				break
		}
	}
}
