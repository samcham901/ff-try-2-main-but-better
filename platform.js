class Platform{
    constructor(x,y,w,h,color){
        this.sprite = createSprite(x, y, w, h)
        this.sprite.shapeColor=color
    }
}