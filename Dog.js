function Dog(data){
    Object.assign(this, data)

    this.getDogHtml = function(){
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this
        return ``
    }
}

export default Dog