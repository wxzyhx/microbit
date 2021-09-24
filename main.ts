pins.digitalWritePin(DigitalPin.P13, 1)
pins.digitalWritePin(DigitalPin.P14, 0)
control.waitMicros(5710)
pins.digitalWritePin(DigitalPin.P13, 0)
basic.forever(function () {
	
})
