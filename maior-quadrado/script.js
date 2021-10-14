function calcular() {
    let x = Number(document.getElementById('xvalue').value)
    let y = Number(document.getElementById('yvalue').value)
    let res = document.getElementById('res')
    res.innerHTML = `${calcVal(x, y)} metros`
}
function calcVal(x = 0, y = 0) {
    if (x < y) {
        y -= x
        return calcVal(x, y)
    } else if (x > y) {
        x -= y
        return calcVal(x, y)
    } else {
        return x
    }
}
