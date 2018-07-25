function initGlobals() {
    player1 = new jumping(000, 100, BLUE, LEFT_ARROW, RIGHT_ARROW, UP_ARROW)
    // player2 = new jumping(600, 580, RED, 65, 68, 87)
    let platform1 = new platform(400, 300, 200, 30, 2, 0)
    let platform2 = new platform(00, 100, 500, 40, 0, 0)
    let platform3 = new platform(600, 00, 250, 100, 0, 0)
    let platform4 = new platform(500, 340, 250, 300, 0, 0)
    let platform5 = new platform(200, 500, 200, 20, 0, 0)
    platforms = [platform1, platform2, platform3, platform4, platform5];
    let spikeStrip1 = new spikeStrip(300, 400, 30, 30)
    let spikeStrip2 = new spikeStrip(100, 200, 10, 10)
    spikeStrips = [spikeStrip1, spikeStrip2]
    levelEnd1 = new levelEnd(150, 580, 20, 20)
}

function moveObjects() {
    player1.update()
    // player2.update()
    player1.prevent()
}

function drawObjects() {
    player1.show()
    // player2.show()

    // powerUp(300, 100, "?")
    // door(200, 100, ORANGE)
    // item(40, 50, ORANGE, BLUE)
    // spike(10, 20, RED)
    // bridge(300, 200, 20, BLUE)


}


function checkLevelEnd1() {
    if (rectIntersect(player1, levelEnd1)) {
        level++
        console.log(level)
    }
}

function drawLevel1() {
    for (let i = 0; i < platforms.length; i++) {
        platforms[i].move();
        platforms[i].show();
    }
    for (let i = 0; i < spikeStrips.length; i++) {
        spikeStrips[i].show()
    }
    levelEnd1.show()
}

function drawLevel2() {

}