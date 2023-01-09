import Profile from './Profile.js'
import profileData from './data.js'

//Starts array of profiles at first index
let profileIndex = 0;

//Profile rendered is determined by current position of array
let currentProfile = new Profile(profileData[profileIndex])

//When set to true, user cannot activate like/dislike functions
let isWaiting = false

function disliked() {
    if (!isWaiting) {
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
    if (!isWaiting) {
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
//Renders new Profile when user hits like or disliked
function renderNewProfile() {
    currentProfile = new Profile(profileData[profileIndex])
    renderProfile()
    renderEndMessage()
}


//Renders message when user reaches end of array
function renderEndMessage() {
    if (profileIndex === 3)
        document.getElementById('content').innerHTML = currentProfile.getEndMessageHtml()
}

function renderProfile() {
    document.getElementById('content').innerHTML = currentProfile.getProfileHtml()
}

renderProfile()

//Even listeners on like and dislike buttons
document.getElementById('like').addEventListener('click', liked)
document.getElementById('dislike').addEventListener('click', disliked)