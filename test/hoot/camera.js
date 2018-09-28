
/**
 * By The Hoot Engine
 * @type {Hoot.Camera}
 */
Hoot.Camera = class {

    /*
     * @Constructor
     */
    constructor(x, y, width, height) {
        this.viewport = {
            width: width,
            height: height
        };

        this.perspective = {
            x: x,
            y: y,
            width: width,
            height: height
        };

        this.bounds = {
            x: 0,
            y: 0,
            width: width,
            height: height
        };

        this.display = null;
        this.hasDisplay = false;

        this.target = null;
        this.hasTarget = false;
    }

    /*
     * @Methods
     */

    update() {
        if (this.hasDisplay) {
            this.display.context.clearRect(0, 0, this.perspective.width, this.perspective.height);
        }
    }

    //Renders a gameObject onto the screen
    render(gameObject) {
        if (gameObject instanceof Hoot.Sprite) {
            if (this.hasDisplay) {
                if (this.hasTarget) {
                    if (this.target === gameObject) {
                        if (gameObject.pos.x < (this.viewport.width / 2)) {
                            this.perspective.x = 0;
                            gameObject.scroll.x = gameObject.pos.x;
                        }
                        if (gameObject.pos.x > (this.viewport.width / 2) && gameObject.pos.x < (this.bounds.width - (this.viewport.width / 2))) {
                            this.perspective.x = gameObject.pos.x - (this.viewport.width / 2);
                            gameObject.scroll.x = (this.viewport.width / 2);
                        }
                        if (gameObject.pos.x > (this.bounds.width - (this.viewport.width))) {
                            this.perspective.x = (this.bounds.width + this.bounds.x) - this.viewport.width;
                            gameObject.scroll.x = gameObject.pos.x;
                        }
                    }
                }else {
                    gameObject.scroll.x = (this.perspective.x - gameObject.pos.x);
                    gameObject.scroll.y = (this.perspective.y - gameObject.pos.y);
                }

                this.display.context.drawImage(gameObject.getImage(), gameObject.scroll.x, gameObject.scroll.y, gameObject.size.width, gameObject.size.height);
            }
        }else {
            console.error("Hoot Error: Cannot render game object if the game object provided is undefined");
            return false;
        }
    }

    /*
     * @Getters and Setters
     */
    setDisplay(display) {
        if (!display instanceof Hoot.Display) {
            return false;
        }

        this.display = display;
        this.hasDisplay = true;
    }

    getDisplay() {
        if (this.hasDisplay) {
            return this.display;
        }else {
            console.error("Hoot Error: Cannot get display of undefined");
            return false;
        }
    }

    setBounds(x, y, width, height) {
        if (typeof x !== "number") {
            x = this.bounds.x;
        }
        if (typeof y !== "number") {
            y = this.bounds.y;
        }
        if (typeof width !== "number") {
            width = this.bounds.width;
        }
        if (typeof height !== "number") {
            height = this.bounds.height;
        }

        this.bounds.x = x;
        this.bounds.y = y;
        this.bounds.width = width;
        this.bounds.height = height;
    }

    getBounds() {
        return this.bounds;
    }

    setTarget(sprite) {
        if (!sprite instanceof Hoot.Sprite) {
            console.error("Hoot Error: Cannot set target that is not an instance of 'Hoot.Sprite'");
            return false;
        }

        this.target = sprite;
        this.hasTarget = true;
    }

    getTarget() {
        if (this.hasTarget) {
            return this.target;
        }else {
            return false;
        }
    }
};