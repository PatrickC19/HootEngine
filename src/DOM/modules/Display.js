

class Display {
    constructor(parent, width, height, options) {
        this.parent = parent;
        this.options = options || {};

        this.size = {
            width: width || 960,
            height: height || 720
        };

        this.scale = {
            x: 1,
            y: 1
        };

        this.canvas = null;
        this.context = null;
        if (document.readyState === "complete") {
            this.init();
        }else {
            window.onload = this.init;
        }

    }

    init() {
        this.canvas = document.createElement("canvas");
        this.canvas.width = this.size.width;
        this.canvas.height = this.size.height;
        this.context = this.canvas.getContext("2d");
        this.context.translate(0.5, 0.5);
        this.context.scale(this.scale.x, this.scale.y);

        if (typeof this.options.smoothingEnabled === "boolean") {
            this.context.imageSmoothingEnabled = this.options.smoothingEnabled;
        }

        if (typeof this.parent == null) {
            document.body.appendChild(this.canvas);
        }else {
            document.getElementById(this.parent).appendChild(this.canvas);
        }
    }

    getWidth() {
        return this.size.width;
    }

    getHeight() {
        return this.size.height;
    }

    getCanvas() {
        return this.canvas;
    }

    getContext() {
        return this.context;
    }
}

module.exports = Display;
