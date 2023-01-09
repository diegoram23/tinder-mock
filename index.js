import Profile from './Profile.js'
import profileData from './data.js'




let intro = document.querySelector('.intro')
let logo = document.querySelector('.logo-header')
let logoSpan = document.querySelectorAll('.logo')

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {

        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400);
        });

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {

                setTimeout(() => {
                    span.classList.remove('active')
                    span.classList.add('fade')
                }, (idx + 1) * 50);
            })
        }, 2000);

        setTimeout(() => {
            intro.style.top = '-100vh'
        }, 2300);
    });
})













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
    renderProfile()
    renderEndMessage()
}


//Renders message when user reaches end of array
function renderEndMessage() {
    if (profileIndex === 3) {
        document.getElementById('content').innerHTML = currentProfile.getEndMessageHtml()
        document.getElementById('like').style.display = 'none'
        document.getElementById('dislike').style.display = 'none'

    }
}

function renderProfile() {
    document.getElementById('content').innerHTML = currentProfile.getProfileHtml()
}

renderProfile()

//Even listeners on like and dislike buttons
document.getElementById('like').addEventListener('click', liked)
document.getElementById('dislike').addEventListener('click', disliked)