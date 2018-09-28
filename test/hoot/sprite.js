
/**
 * By The Hoot Engine
 * @type {Hoot.Sprite}
 */
Hoot.Sprite = class {

    /*
     * @Constructor
     */
    constructor(x, y, image, frame) {
        this.pos = {
            x: x,
            y: y
        };

        this.scroll = {
            x: x,
            y: y
        };

        this.hasImage = true;
        this.image = image;
        if (this.image === null || typeof this.image === "undefined") {
            this.hasImage = false;
        }
        this.frame = frame;

        this.size = {
            width: this.image.width,
            height: this.image.height
        };

    }

    /*
     * @Methods
     */
    moveTo(x, y) {
        this.pos = {
            x: x,
            y: y
        };
    }

    move(changeX, changeY) {
        this.pos.x += changeX;
        this.pos.y += changeY;
    }


    /*
     * @Getters and Setters
     */
    getImage() {
        if (this.hasImage) {
            return this.image;
        }else {
            return false;
        }
    }

    setImage(image) {
        if (typeof image === "undefined") {
            console.error("Hoot Error: Cannot set a sprites image with 'key' of undefined");
            return false;
        }

        this.image = image;
        return true;
    }

};