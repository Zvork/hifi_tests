var user = "highfidelity/";
var repository = "hifi_tests/";
var branch = "master/";
var autoTester = Script.require("https://github.com/" + user + repository + "blob/" + branch + "tests/utils/autoTester.js?raw=true" );

autoTester.perform("Point light", Script.resolvePath("."), function(testType) {
    var spectatorCameraConfig = autoTester.setupTest();

    // Test material matrix
    Script.include("../setup.js?raw=true")

    spectatorCameraConfig.position = { x: TEST_POSITION.x, y: TEST_POSITION.y, z: TEST_POSITION.z - 0.6 };
    spectatorCameraConfig.orientation = TEST_ORIENTATION;
    // Add the test Cases
    var createdEntities = setup(5.0, 90.0);

    autoTester.addStepSnapshot("Clean up after test", function () {
        for (var i = 0; i < createdEntities.length; i++) {
            Entities.deleteEntity(createdEntities[i]);
        }
    });
    
    var result = autoTester.runTest(testType);
});
