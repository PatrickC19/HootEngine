

Hoot.AssetsManager = class {

    /*
     * @Constructor
     */
    constructor() {

    }

    /*
     * @Getters and Setters
     */
    getImage(key) {
        if (!Hoot.hasAssets) {
            console.error("Hoot Error: Cannot get image with no assets defined in the config.");
            return false;
        }

        for (let i in Hoot.assets) {
            if (Hoot.assets[i].type === "IMAGE") {
                if (Hoot.assets[i].key === key) {
                    return Hoot.assets[i].data;
                }
            }
        }
    }
};