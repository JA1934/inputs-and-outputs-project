let value = 0
basic.forever(function () {
    value = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(value)
    if (pins.analogReadPin(AnalogPin.P0) > 200) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
})
