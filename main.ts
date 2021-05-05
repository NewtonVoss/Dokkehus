smarthome.crashSensorSetup(DigitalPin.P3)
let dør = 1
led.enable(false)
let strip = neopixel.create(DigitalPin.P2, 1, NeoPixelMode.RGB)
basic.forever(function () {
    if (smarthome.crashSensor()) {
        dør = dør * -1
        if (dør == 1) {
            servos.P1.setAngle(90)
        } else if (dør == -1) {
            servos.P1.setAngle(0)
        }
    }
})
