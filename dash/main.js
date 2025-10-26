const log = console.log.bind( console )
log("prox")

const oneKilo = 1024
const oneMeg = 1024 * 1024;
const oneGig = 1024 * 1024 * 1024;

const oneMinute = 60
const oneHour = 60 * 60
const oneDay = 24 * 60 * 60

userBytesContent = document.getElementById('user-bytes')
userBytes = document.getElementById('user-bytes').textContent

userSecondsContent = document.getElementById('user-seconds')
userSeconds = document.getElementById('user-seconds').textContent

if (userBytes == 0 ) {
    document.getElementById('user-bytes-unit').textContent = "Not Connected yet"
}

if (userBytes > 0 && userBytes <= oneKilo ){
    document.getElementById('user-bytes-unit').textContent = "Bytes"
}

if (userBytes > oneKilo && userBytes <= oneMeg ) {
    document.getElementById('user-bytes-unit').textContent = "Kilobytes"
    userBytesContent.textContent = Math.floor((userBytes / oneKilo))
}

if (userBytes > oneMeg && userBytes <= oneGig ) {
    document.getElementById('user-bytes-unit').textContent = "Megabytes"
    userBytesContent.textContent = Math.floor((userBytes / oneMeg))
}

if (userBytes > oneGig) {
    document.getElementById('user-bytes-unit').textContent = "Gigabytes"
    userBytesContent.textContent = Math.floor((userBytes / oneGig))
}

if (userSeconds == 0) {
    document.getElementById('user-seconds-unit').textContent = "Not Connected yet"
}

if (userSeconds > 0 && userSeconds <= oneMinute) {
    document.getElementById('user-seconds-unit').textContent = "Seconds"
}

if (userSeconds > oneMinute && userSeconds <= oneHour) {
    document.getElementById('user-seconds-unit').textContent = "Minutes"
    userSecondsContent.textContent = Math.floor((userSeconds / oneMinute))
}

if (userSeconds > oneHour && userSeconds <= oneDay) {
    document.getElementById('user-seconds-unit').textContent = "Hours"
    userSecondsContent.textContent = Math.floor((userSeconds / oneHour))
}

if (userSeconds > oneDay) {
    document.getElementById('user-seconds-unit').textContent = "Days"
    userSecondsContent.textContent = Math.floor((userSeconds / oneDay))
}


