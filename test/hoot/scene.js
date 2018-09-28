/**
 * By The Hoot Engine
 * @type {Hoot.Scene}
 */
Hoot.Scene = class {

    /*
     * @Constructor
     */
    constructor(callbacks) {
        this._callbacks = callbacks;

        //The Callbacks
        this.init = this._callbacks.init;
        this.create = this._callbacks.create;
        this.tick = this._callbacks.tick;
        this.render = this._callbacks.render;

        //Status
        this.isRunning = false;
        this.isActive = false;
    }

    /*
     * @Methods
     */

    //Start up the scene
    start() {
        if (this.isRunning) {
            return;
        }

        this.init();

        this.create();

        this.isRunning = true;

        this._tick();
        this._render();

        this.isActive = true;
    }

    //Stop the scene
    stop() {
        if (!this.isRunning) {
            return;
        }

        this.isRunning = false;
        this.isActive = false;
    }

    //*Looped* update game objects and variables.
    _tick() {
        if (this.isRunning) {
            try {
                this.tick();
            }catch {
                this.stop();
            }

            window.requestAnimationFrame(this._tick.bind(this));
        }
    }

    //*Looped* render the game objects
    _render() {
        if (this.isRunning) {
            try {
                this.render();
            }catch {
                this.stop();
            }

            window.requestAnimationFrame(this._render.bind(this));
        }
    }
};