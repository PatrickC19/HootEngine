
//Display
const display = new Hoot.Display("game-area", Hoot.width, Hoot.height);
const camera = new Hoot.Camera(0, 0, Hoot.width, Hoot.height);
display.setCamera(camera);

//Managers
const sceneManager = new Hoot.SceneManager();
const assetsManager = new Hoot.AssetsManager();


//GameScene
const GameScene = new Hoot.Scene({
    init: function() {
        camera.setBounds(0, 0, 1600, 1200);
    },

    create: function() {

        sprite = new Hoot.Sprite(500, 100, assetsManager.getImage("img-tv"), 0);
        camera.setTarget(sprite);

        camera.update();

        camera.render(sprite);

    },

    tick: function() {



    },

    render: function() {


    }
});

//Add the 'GameScene' to the scene manager.
sceneManager.add("GameScene", GameScene);
sceneManager.start("GameScene");