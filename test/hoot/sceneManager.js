/**
 * By The Hoot Engine
 * @type {Hoot.SceneManager}
 */
Hoot.SceneManager = class {

    /*
     * @Constructor
     */
    constructor() {
        this.scenes = [];

        this.active = {
            name: "",
            scene: null
        };
    }

    /*
     * @Methods
     */

    //Add a scene
    add(key, scene) {
        if (typeof key !== "string") {
            console.error("Hoot Error: When adding a scene there needs to be a 'key' declared.");
            return false;
        }
        if (!scene instanceof Hoot.Scene) {
            console.error("Hoot Error: When adding a scene the 'scene' needs to be an instance of 'Hoot.Scene");
            return false;
        }

        this.scenes.push({
            key: key,
            scene: scene
        });

        return true;
    }

    //Start a scene based off of the scene's key
    start(key) {
        if (typeof key !== "string") {
            if (this.scenes.length <= 0) {
                return false;
            }else {
                this.active = this.scenes[0];
                this.active.scene.start();

                return true;
            }
        }

        for (let i in this.scenes) {
            if (this.scenes[i].key === key) {
                this.active = this.scenes[i];
                this.active.scene.start();

                return true;
            }
        }
    }
};
