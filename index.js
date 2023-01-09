import Profile from './Profile.js'
import profileData from './data.js'

let profileIndex = 0;
let currentProfile = new Profile(profileData[profileIndex])


function liked() {
    document.getElementById('liked-badge').style.display = 'block'
    //Goes to the next object in the profile array
    profileIndex++
    setTimeout(() => {
        //Displays like badge and calls function to render the next profile
        document.getElementById('liked-badge').style.display = 'none'
        renderNewProfile()
    }, 1200);

}

function disliked() {
    document.getElementById('disliked-badge').style.display = 'block'
    //Goes to the next object in the profile array
    profileIndex++

    setTimeout(() => {
        //Displays like badge and calls function to render the next profile
        document.getElementById('disliked-badge').style.display = 'none'
        renderNewProfile()
    }, 1000);
}

function renderNewProfile() {
    currentProfile = new Profile(profileData[profileIndex])
    renderProfile()
}

function renderProfile() {
    document.getElementById('content').innerHTML = currentProfile.getProfileHtml()
}

renderProfile()

function displayEndMessage(){
    if(profileIndex === 3)
    console.log('done')
}

document.getElementById('like').addEventListener('click', liked)
document.getElementById('dislike').addEventListener('click', disliked)