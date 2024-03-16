input.onButtonPressed(Button.A, function () {
    JoyCar.turn(
    FRDirection.Forward,
    LRDirection.Left,
    50,
    5
    )
})
input.onButtonPressed(Button.AB, function () {
    JoyCar.drive(FRDirection.Forward, 100)
})
input.onButtonPressed(Button.B, function () {
    JoyCar.turn(
    FRDirection.Forward,
    LRDirection.Right,
    50,
    5
    )
})
basic.forever(function () {
    // Start collision detection
    if (JoyCar.collisionDetection() == 1) {
        JoyCar.stop(StopIntensity.Soft)
    }
    // Obstacle avoidance
    if (JoyCar.obstacleavoidance(SensorLRSelection.Left)) {
        JoyCar.stop(StopIntensity.Soft)
        // Pause for a moment before attempting to dodge
        basic.pause(500)
        JoyCar.turn(
        FRDirection.Forward,
        LRDirection.Right,
        50,
        5
        )
    }
    // Obstacle avoidance on the right side
    if (JoyCar.obstacleavoidance(SensorLRSelection.Right)) {
        JoyCar.stop(StopIntensity.Intense)
        // Pause for a moment before attempting to dodge
        basic.pause(500)
        JoyCar.turn(
        FRDirection.Forward,
        LRDirection.Left,
        50,
        5
        )
    }
})
