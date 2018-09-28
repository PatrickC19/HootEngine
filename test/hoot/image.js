
/**
 * By The Hoot Engine
 * @type {Hoot.Image}
 */
Hoot.Image = class {

    /*
     * @Constructor
     */
    constructor(path) {
        if (typeof path !== "string") {
            path = "none";
        }

        this.path = path;

        this.status = "LOADING";
        if (this.path === "none") {
            this.status = "BROKEN";
        }

        this.response = new Image();
        this.response.src = this.path;
        this.response.async = true;

        this.size = {
            width: this.response.width,
            height: this.response.height
        };

        this._onload = null;
        this._hasOnload = false;

        this.response.onload = function() {
            if (this._hasOnload) {
                this._onload();
            }

            this.status = "LOADED";
        }.bind(this);
    }

    /*
     * @Methods
     */

    //When the image is done loading
    onload(callback, callbackScope) {
        if (typeof callback !== "function") {
            console.error("Hoot Error: To set an image's onload callback there needs to be a 'callback' function.");
            return false;
        }

        this._onload = function() {
            callback.bind(callbackScope);
        };
        this._hasOnload = true;
    }


    /*
     * @Getters and Setters
     */

    getWidth() {
        return this.size.width;
    }

    getHeight() {
        return this.size.height;
    }

    getLoaded() {
        if (this.status === "LOADED") {
            return true;
        }else {
            return false;
        }
    }

    getLoading() {
        if (this.status === "LOADING") {
            return true;
        }else {
            return false;
        }
    }

    getBroken() {
        if (this.status === "BROKEN") {
            return true;
        }else {
            return false;
        }
    }

    getResponse() {
        return this.response;
    }

    getPath() {
        return this.path;
    }

    setPath(path) {
        if (typeof path !== "string") {
            return false;
        }

        this.path = path;
    }
};