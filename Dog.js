function Dog(data) {

Object.assign(this, data)

    this.getDogHtml = function () {
        const { avatar, name, age, bio } = this
        document.getElementById('content').innerHTML = `<div class="img-container">
        <img class="img" src="${avatar}">
        <h2 class="img-text-info">${name}, ${age}
        <br>
        <span class='bio'>${bio}</span></h2>
    </div>`
    }
}



export default Dog