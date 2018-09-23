/**
 * --* The Hoot Engine *--
 * By Patrick Carroll
 */
class Hoot {

    /*
     * @Constructor
     */
    constructor() {
        this.config = {};
    }

    /*
     * @Methods
     */

    //Start the game by giving the path to the "config.json" file as the 'path'
    static start(path) {
        if (typeof path !== "string") {
            path = "";
        }

        //When the page reloads try to make it reload correctly.
        const header = document.createElement("meta");
        header.httpEquiv = "Cache-control";
        header.content = "no-cache";

        document.head.appendChild(header);

        //Get the "config.json" file.
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            Hoot.config = Hoot._fixConfig(JSON.parse(xhttp.response));

            for (let i in Hoot.config.import) {
                Hoot._import(Hoot.config.import[i]);
            }

            Hoot._loadScript(Hoot.config.main);
        };

        xhttp.open("GET", path);
        xhttp.send(null);


    }

    //Fixes the set game config to have all fields included and set.
    static _fixConfig(config) {
        if (typeof config !== "object") {
            config = {
                name: "unknown",
                description: "unknown",
                author: "unknown",
                version: "unknown",
                main: "none",
                import: [],
                width: 960,
                height: 720,
                antialias: true,
                centerOnPage: true
            };
        }else {
            if (typeof config.name !== "string") {
                config.name = "unknown";
            }
            if (typeof config.description !== "string") {
                config.description = "unknown";
            }
            if (typeof config.author !== "string") {
                config.author = "unknown";
            }
            if (typeof config.version !== "string") {
                config.version = "unknown";
            }
            if (typeof config.main !== "string") {
                config.main = "none";
            }
            if (typeof config.import !== "object") {
                config.import = [];
            }
            if (typeof config.width !== "number") {
                config.width = 960;
            }
            if (typeof config.height !== "number") {
                config.height = 720;
            }
            if (typeof config.antialias !== "boolean") {
                config.antialias = true;
            }
            if (typeof config.centerOnPage !== "boolean") {
                config.centerOnPage = false;
            }
        }

        return config;
    }

    //Loads a "script" or "__.js" file
    static _loadScript(path) {
        return new Promise(function(resolve, reject) {
            var element = document.createElement("script");
            element.crossOrigin = "anonymous";
            element.src = path;

            element.onload = resolve;
            element.onerror = reject;

            document.head.appendChild(element);
        })
    }

    //Loads a string in the "import" format
    //Import Format:
    // "hoot.display" = "hoot/display.js";
    static _import(path) {
        const str = path.replace(/\./gi, '/') + ".js";

        return new Promise(function(resolve, reject) {
            const element = document.createElement("script");
            element.crossOrigin = 'anonymous';
            element.src = str;

            element.onload = resolve;
            element.onerror = reject;

            document.head.appendChild(element);
        });
    }
};
