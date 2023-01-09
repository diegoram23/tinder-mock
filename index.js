import Profile from './Profile.js'
import profileData from './data.js'

let profileIndex = 0;
let currentProfile = new Profile(profileData[profileIndex])
let isWaiting = false //When set to true, user cannot hit like/dislike button

function disliked() {
    if(!isWaiting){
    document.getElementById('disliked-badge').style.display = 'block'
    //Goes to the next object in the profile array
    profileIndex++
    isWaiting = true
    setTimeout(() => {
        //Displays like badge and calls function to render the next profile
        document.getElementById('disliked-badge').style.display = 'none'
        renderNewProfile()
        isWaiting = false
    }, 1000);

    }
}

function liked() {
    if (!isWaiting){
    document.getElementById('liked-badge').style.display = 'block'
    //Goes to the next object in the profile array
    profileIndex++
    isWaiting = true
    setTimeout(() => {
        //Displays like badge and calls function to render the next profile
        document.getElementById('liked-badge').style.display = 'none'
        renderNewProfile()
        isWaiting = false
    }, 1000);
}

}

function renderNewProfile() {
    currentProfile = new Profile(profileData[profileIndex])
    renderProfile()
    displayEndMessage()
}



function displayEndMessage(){
    if(profileIndex === 3)
    document.getElementById('content').innerHTML = currentProfile.getEndMessageHtml()
}

function renderProfile() {
    document.getElementById('content').innerHTML = currentProfile.getProfileHtml()
}

renderProfile()

document.getElementById('like').addEventListener('click', liked)
document.getElementById('dislike').addEventListener('click', disliked)