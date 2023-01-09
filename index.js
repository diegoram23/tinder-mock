import Dog from './Dog.js'

const rex = {
    name: "Rex",
    avatar: "images/diegoT.jpg",
    age: 25,
    bio: "Art. Literature. Natural wine. Yoga.",
    hasBeenSwiped: false,
    hasBeenLiked: false
}

const bella = {
    name: "Bella",
    avatar: "images/georgeT.jpg",
    age: 43,
    bio: "Yup, that's my owner. U can meet him if you want",
    hasBeenSwiped: false,
    hasBeenLiked: false
}

const teddy = {
    name: "Teddy",
    avatar: "images/tacoT.jpg",
    age: 30,
    bio: "How you doin?",
    hasBeenSwiped: false,
    hasBeenLiked: false
}




/*--------------Constructor-----------*/
const teddyTheDog = new Dog(bella)
teddyTheDog.getDogHtml()


/*-------------Constructor------------*/



