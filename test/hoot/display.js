
/**
 * By The Hoot Engine
 * @type {Hoot.Display}
 */
Hoot.Display = class {
    /*
     * @Constructor
     */
    constructor(elementId, width, height) {
        if (typeof elementId !== "string") {
            elementId = "";

            width = 960;
            height = 720;
        }
        if (typeof width !== "number") {
            width = 960;
            height = 720;
        }
        if (typeof height !== "number") {
            height = 720;
        }

        this.elementId = elementId;
        this.hasElementId = true;
        if (this.elementId === null) {
            this.hasElementId = false;
        }

        this.width = width;
        this.height = height;

        this.camera = null;

        this.element = null;

        if (this.hasElementId) {
            this.element = document.getElementById(this.elementId);
            this.element.width = this.width;
            this.element.height = this.height;
        }else {
            this.element = document.createElement("canvas");
            this.element.width = this.width;
            this.element.height = this.height;

            document.body.appendChild(this.element);
        }

        this.context = this.element.getContext("2d");
        this.context.translate(0.5, 0.5);

        this.element.style.display = "block";
        if (Hoot.config.centerOnPage) {
            this.element.style.marginLeft = "auto";
        }

        this.element.imageSmoothingEnabled = Hoot.config.antialias;
    }

    /*
     * @Methods
     */

    //Render an image or graphic onto the screen
    setCamera(camera) {
        if (!camera instanceof Hoot.Camera) {
            console.error("Hoot Error: Cannot add camera that is not an instanceof 'Hoot.Camera.'");
            return false;
        }

        this.camera = camera;
        camera.setDisplay(this);
    }
};