input.onButtonPressed(Button.A, function () {
    JoyCar.drive(FRDirection.Forward, 50)
    JoyCar.drive(FRDirection.Reverse, 50)
})
input.onButtonPressed(Button.AB, function () {
    JoyCar.drive(FRDirection.Forward, 100)
})
input.onButtonPressed(Button.B, function () {
    JoyCar.drive(FRDirection.Reverse, 50)
    JoyCar.drive(FRDirection.Forward, 50)
})
basic.forever(function () {
	
})
