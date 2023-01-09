
function Profile(data) {

Object.assign(this, data)


    this.getProfileHtml = function () {
        const { avatar, name, age, bio } = this

        return `<div class="img-container">
        <img class='liked-badge hidden' id='liked-badge'src='images/like-image.png'>
        <img class='disliked-badge hidden' id='disliked-badge'src='images/nope-image.png'>
        <img class="img" src="${avatar}">
        <h2 class="img-text-info">${name}, ${age}
        <br>
        <span class='bio'>${bio}</span></h2>
    </div>`
    }
}



export default Profile