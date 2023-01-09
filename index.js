import Profile from './Profile.js'
import profileData from './data.js'

let profileIndex = 0;
let currentProfile = new Profile(profileData[profileIndex])



function renderProfile() {
    document.getElementById('content').innerHTML = currentProfile.getProfileHtml()
}

renderProfile()

function liked(){
    document.getElementById('liked-badge').style.display= 'block'
    setTimeout(() => {
        document.getElementById('liked-badge').style.display= 'none'
 
    }, 1200);
    
}

function disliked(){
    document.getElementById('disliked-badge').style.display= 'block'
    setTimeout(() => {
        document.getElementById('disliked-badge').style.display= 'none'
 
    }, 1200);
}


document.getElementById('like').addEventListener('click', liked)
document.getElementById('dislike').addEventListener('click', disliked)