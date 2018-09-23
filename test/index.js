

const display = new Hoot.Display("game-area", Hoot.width, Hoot.height);
const sceneM = new Hoot.SceneManager();


const GameScene = new Hoot.Scene({
    init: function() {

    },

    create: function() {
        this.image = new Hoot.Image("img-tv", "./assets/images/tv.png");
    },

    tick: function() {

    },

    render: function() {
        display.render(this.image);
    }
});
sceneM.add("GameScene", GameScene);
sceneM.start("GameScene");