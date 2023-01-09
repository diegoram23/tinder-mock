
class Profile {
    constructor(data) {
        Object.assign(this, data)

    }

    getProfileHtml() {
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

    getEndMessageHtml() {
        return `<h1 class='end'>You reached the end of your likes
        <br><br>Come back tomorrow to find your match</h1>`
    }
}



export default Profile