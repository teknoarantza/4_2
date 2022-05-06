input.onButtonPressed(Button.A, function () {
    radio.sendString("pozik")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("bihotza")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "pozik") {
        basic.showIcon(IconNames.Happy)
    }
    if ("triste" == receivedString) {
        basic.showIcon(IconNames.Sad)
    }
    if ("bihotza" == receivedString) {
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("triste")
})
radio.setGroup(40)
