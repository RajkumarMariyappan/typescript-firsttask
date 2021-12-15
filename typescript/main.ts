export class like{
    constructor(private count:number,private isSelected:boolean){

    }
    onclick(){
        this.count+=(this.isSelected)?-1:1;
        this.isSelected=!this.isSelected;
        console.log(this.count,this.isSelected);
    }
}