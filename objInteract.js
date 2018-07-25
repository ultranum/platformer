// Object Interaction Library

function circleClicked(aCircle) {
    let clicked = dist(mouseX, mouseY, aCircle.x, aCircle.y)
    if (clicked < aCircle.r)
        return true
    else
        return false

}

function rectClicked(aRect) {
    if (mouseX > aRect.x && mouseX < aRect.w + aRect.x && mouseY > aRect.y && mouseY < aRect.h + aRect.y) {
        return true
    } else {
        return false
    }
}

function circleIntersect(circ1, circ2) {
    let totald = dist(circ1.x, circ1.y, circ2.x, circ2.y)
    if (totald < circ1.r + circ2.r)
        return true
    else
        return false
}

function rectIntersect(rect1, rect2) {
    let re = rect1.x + rect1.w
    let le = rect1.x
    let be = rect1.y + rect1.h
    let te = rect1.y
    let re2 = rect2.x + rect2.w
    let le2 = rect2.x
    let be2 = rect2.y + rect2.h
    let te2 = rect2.y
    if (re > le2 && le < re2 && be > te2 && te < be2)
        return true
    else
        return false
}