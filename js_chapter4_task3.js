function moveTank(roadMines) {
    let mines = 0
    for (let i in roadMines) {
        if (roadMines[i] === false) {
            console.log(`танк переместился на ${+i+1}`)
        }
        else if (roadMines[i] === true) {
            ++mines
            if (mines === 1) {
                console.log('танк повреждён')
                console.log(`танк переместился на ${+i+1}`)
            }
            else {
                console.log('танк уничтожен')
                break
            }
        }
    }
}
