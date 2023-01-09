import Profile from './Profile.js'
import profileData from './data.js'

function renderProfile() {
    const teddyTheDog = new Profile(profileData.teddy)
    document.getElementById('content').innerHTML = teddyTheDog.getProfileHtml()
}

renderProfile()

function liked(){
    console.log('islikehjd')
}

document.getElementById('like').addEventListener('click', liked)