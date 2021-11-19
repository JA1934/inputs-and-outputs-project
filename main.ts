let value = 0
basic.forever(function () {
    value = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(value)
    if (value >= 500) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        for (let index = 0; index < 4; index++) {
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.pause(300)
            pins.digitalWritePin(DigitalPin.P1, 0)
            basic.pause(300)
        }
    }
})
