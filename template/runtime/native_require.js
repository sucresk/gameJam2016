
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"libs/modules/game/game.native.js",
	"libs/modules/tween/tween.js",
	"libs/modules/res/res.js",
	"libs/modules/physics/physics.js",
	"bin-debug/apple/AppleBody.js",
	"bin-debug/apple/AppleContact.js",
	"bin-debug/apple/AppleWorld.js",
	"bin-debug/apple/materials/AppleMaterial.js",
	"bin-debug/apple/shapes/AppleRectangle.js",
	"bin-debug/banana/core/BananaObject.js",
	"bin-debug/banana/objects/APhysicsObject.js",
	"bin-debug/banana/physics/APhysicsEngine.js",
	"bin-debug/DragHelper.js",
	"bin-debug/state/State.js",
	"bin-debug/EndState.js",
	"bin-debug/Game.js",
	"bin-debug/input/gamePad/GamePad.js",
	"bin-debug/input/gamePad/GamePadEvent.js",
	"bin-debug/input/gesture/GestureController.js",
	"bin-debug/input/gesture/GestureRecognizer.js",
	"bin-debug/input/gesture/GestureResult.js",
	"bin-debug/input/gesture/GestureTemplate.js",
	"bin-debug/input/Gesture.js",
	"bin-debug/LoadingUI.js",
	"bin-debug/Main.js",
	"bin-debug/p2DebugDraw.js",
	"bin-debug/p2Demo/BuoyancyState.js",
	"bin-debug/p2Demo/HeightfieldScene.js",
	"bin-debug/p2Demo/KinematicState.js",
	"bin-debug/p2Demo/LockState.js",
	"bin-debug/p2Demo/PistonState.js",
	"bin-debug/p2Demo/RayReflectState.js",
	"bin-debug/p2Demo/RestitutionState.js",
	"bin-debug/p2Demo/SleepState.js",
	"bin-debug/p2Demo/SpringsState.js",
	"bin-debug/p2Demo/TearableState.js",
	"bin-debug/PhysicState.js",
	"bin-debug/state/IState.js",
	"bin-debug/state/StateEvent.js",
	"bin-debug/state/StateManager.js",
	"bin-debug/TestState.js",
	//----auto game_file_list end----
];

var window = {};

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    egret_native.requireFiles();
    egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 60,
		scaleMode: "noScale",
		contentWidth: 800,
		contentHeight: 480,
		showPaintRect: false,
		showFPS: true,
		fpsStyles: "x:0,y:0,size:30,textColor:0x00c200,bgAlpha:0.9",
		showLog: true,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel(egret.TextField.default_fontFamily, 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};