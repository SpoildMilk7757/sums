let num = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 9; index++) {
        num = index + 1
        basic.showNumber(num + index)
    }
})
