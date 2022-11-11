input.onButtonPressed(Button.A, function () {
    alarm = false
})
let 读数 = 0
let alarm = false
alarm = false
basic.forever(function () {
    读数 = pins.digitalReadPin(DigitalPin.P1)
    if (读数 == 1) {
        alarm = true
    }
    if (alarm) {
        music.ringTone(262)
    } else {
        music.stopAllSounds()
    }
})
