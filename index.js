import Profile from './Profile.js'
import profileData from './data.js'
import animation from './utils.js'

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
        }, 800);

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
        }, 800);
    }

}
//Renders new Profile when user hits like or disliked
function renderNewProfile() {

    currentProfile = new Profile(profileData[profileIndex])
    //If index is at the end of the array then it calls end message function otherwise runs next profile
    profileIndex === profileData.length ? renderEndMessage() : renderFirstProfile()
}

//Renders the homepage profile
function renderFirstProfile() {
    document.getElementById('content').innerHTML = currentProfile.getProfileHtml()
}

renderFirstProfile()


//Renders message when user reaches end of array
function renderEndMessage() {
    //sets index to zero so that it does not try and search for a non existing profile after index 2
    profileIndex = 0
    document.getElementById('content').innerHTML = currentProfile.getEndMessageHtml()
    document.getElementById('like').style.display = 'none'
    document.getElementById('dislike').style.display = 'none'


}


//Even listeners on like and dislike buttons
document.getElementById('like').addEventListener('click', liked)
document.getElementById('dislike').addEventListener('click', disliked)