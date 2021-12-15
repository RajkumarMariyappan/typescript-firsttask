export class dog{
    private x:number;
   private y:number;
    //constructor
    constructor(x:number,y:number){
        this.x=x;
        this.y=y;
    }
    bark()
    {
        console.log(this.x+this.y);
    }
}


