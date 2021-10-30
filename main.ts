function Forward () {
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.analogWritePin(AnalogPin.P12, speed)
}
input.onButtonPressed(Button.A, function () {
    align = align + 2
    pins.servoWritePin(AnalogPin.P0, 90 + align)
})
function Reverse () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.analogWritePin(AnalogPin.P12, speed)
}
input.onButtonPressed(Button.AB, function () {
    Forward()
    basic.pause(1000)
    Stop()
    basic.pause(500)
    Reverse()
    basic.pause(1000)
    Stop()
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P0, 90 + align + 70)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P0, 90 + align)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P0, 90 + align - 70)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P0, 90 + align)
})
input.onButtonPressed(Button.B, function () {
    align = align - 2
    pins.servoWritePin(AnalogPin.P0, 90 + align)
})
function Stop () {
    pins.analogWritePin(AnalogPin.P12, 0)
}
let align = 0
let speed = 0
speed = 550
pins.servoWritePin(AnalogPin.P0, 90)
basic.showIcon(IconNames.Heart)
