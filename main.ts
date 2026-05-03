function Wrongkey () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.No)
    serial.writeLine("Wrong key. Do again!")
    user_key = ""
    basic.pause(2000)
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    // Nhập dữ liệu vào bộ nhớ tạm: temp
    // _ --> A
    // XX --> XXA
    temp = "" + user_key + "A"
    basic.showString("A")
    CheckKey()
})
function CheckKey () {
    // Sau khi nhập xong, Chuyển dữ liệu từ bộ nhớ tạm vào mật mã người dùng đã nhập
    user_key = temp
    // Hiển thị mật mã người dùng đã nhập lên serial monitor
    serial.writeLine(user_key)
    // So sánh mật mã người dùng đã nhập với mật mã đúng
    // Điều kiện này chắc chắn đến trước điều kiện ở dưới
    if (user_key == key) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.InBackground)
        basic.showIcon(IconNames.Happy)
        serial.writeLine("Secret is " + secret)
        basic.clearScreen()
        basic.showString("" + (secret))
        // cài đặt lại bộ nhớ mật mã người dùng nhập
        user_key = ""
    } else if (user_key.length == key.length && user_key != key) {
        Wrongkey()
    } else if (user_key.length > key.length) {
        Wrongkey()
    }
    // Dấu hiệu nhận biết dữ liệu đã lưu vào Mật mã người dùng nhập
    basic.showIcon(IconNames.Asleep)
}
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    temp = "" + user_key + "B"
    basic.showString("B")
    CheckKey()
})
let temp = ""
let user_key = ""
let key = ""
let secret = 0
basic.showIcon(IconNames.Asleep)
// Lưu bí mật.
secret = 3791
// Lưu Mật mã đúng
key = "ABBA"
// Lưu Mật mã người dùng đã nhập
user_key = ""
