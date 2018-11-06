

class Engine {
    constructor(config) {
        this.config = null;
        if (typeof config === "string") {
            let xhttp = new XMLHttpRequest();
            xhttp.onload = function() {
                this.config = this.fixConfig(JSON.parse(xhttp.responseText));
            }.bind(this);
            xhttp.open("GET", config);
            xhttp.send(null);
        }else {
            this.config = this.fixConfig(config);
        }

        Hoot.Core.Events.on("hoot-engine-config-loaded", function() {

        }, this);
    }

    fixConfig(config) {
        if (typeof config !== "object") {
            config = {
                title: "",
                author: "",
                version: "1.0.0",
                description: "",
                parent: "",
                scale: {
                    width: 960,
                    height: 720,
                    mode: "DEFAULT"
                },
                renderer: {
                    smoothing: true
                }
            };
        }else {
            // TODO Put all configuration values that will need to be set and FIXED here!
            if (typeof config.title !== "string") {
                config.title = "";
            }
            if (typeof config.author !== "string") {
                config.author = "";
            }
            if (typeof config.version !== "string") {
                config.version = "1.0.0";
            }
            if (typeof config.description !== "string") {
                config.description = "";
            }
            if (typeof config.parent !== "string") {
                config.parent = "";
            }
            if (typeof config.scale !== "object") {
                config.scale = {
                    width: 960,
                    height: 720,
                    mode: "DEFAULT"
                };
            }else {
                if (typeof config.scale.width !== "number") {
                    config.scale.width = 960;
                }
                if (typeof config.scale.height !== "number") {
                    config.scale.height = 720;
                }
                if (typeof config.scale.mode !== "string") {
                    config.scale.mode = "DEFAULT";
                }
            }
            if (typeof config.renderer !== "object") {
                config.renderer = {
                    smoothingEnabled: true
                };
            }else {
                if (typeof config.renderer.smoothingEnabled !== "boolean") {
                    config.renderer.smoothingEnabled = true;
                }
            }
        }
    }
}

module.exports = Engine;