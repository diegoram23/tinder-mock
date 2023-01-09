function Profile(data) {

Object.assign(this, data)

    this.getProfileHtml = function () {
        const { avatar, name, age, bio,hasBeenSwiped, hasBeenLiked } = this

        return `<div class="img-container">
        <img class="img" src="${avatar}">
        <h2 class="img-text-info">${name}, ${age}
        <br>
        <span class='bio'>${bio}</span></h2>
    </div>`
    }
}



export default Profile