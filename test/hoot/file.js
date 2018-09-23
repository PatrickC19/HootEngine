/**
 * By Hoot
 * @type {Hoot.File}
 */
Hoot.File = class {
    /*
     * @Constructor
     */
    constructor(path, type) {
        if (typeof path !== "string") {
            this.path = "none";
        }
        if (typeof type !== "string") {
            this.type = "unknown";
        }

        this.path = path;
        this.type = type;

        this.data = null;
        this.hasData = false;

        this.status = "NONE";

        if (this.type == "unknown") {
            this.type = this._getFileType(this.path);

            if (this.type == "unknown-1") {
                console.log("File type is not recognized.");
            }
        }

        if (this.type !== "unknown-1") {
            if (this.type === "text/javascript") {
                var element = document.createElement("script");
                element.src = path;

                this.status = "LOADING";

                element.onload = function() {
                    this.status = "LOADED";
                }.bind(this);

                document.head.appendChild(element);
            }else if (this.type === "text/javascript") {
                var element = document.createElement("script");
                element.src = path;

                this.status = "LOADING";

                element.onload = function() {
                    this.status = "LOADED";
                }.bind(this);

                document.head.appendChild(element);
            }else if (this.type === "data/JSON") {

                var xhttp = new XMLHttpRequest();
                xhttp.onload = function() {
                    this.data = JSON.parse(xhttp.responseText);
                    this.hasData = true;

                    this.status = "LOADED";
                }.bind(this);

                xhttp.open("GET", this.path);
                xhttp.send(null);

            }else if (this.type === "text/plain") {
                var xhttp = new XMLHttpRequest();
                xhttp.onload = function() {
                    this.data = xhttp.responseText;
                    this.hasData = true;

                    this.status = "LOADED";
                }.bind(this);

                xhttp.open("GET", this.path);
                xhttp.send(null);
            }
        }
    }

    _getFileType(path) {
        if (path.indexOf(".min.js") !== -1) {
            return "text/javascript";
        }else if (path.indexOf(".js") !== -1) {
            return "text/javascript";
        }else if (path.indexOf(".json") !== -1) {
            return "data/JSON";
        }else if (path.indexOf(".txt") !== -1) {
            return "text/plain";
        }else {
            return "unknown-1";
        }
    }
};