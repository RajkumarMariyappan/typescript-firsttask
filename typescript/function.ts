//function call
function run(par:any){
    console.log(par);
    }
    var par='Rajkumar';
    run(par);
    //console.log('\t');
    
    
    //function declaration..
    function loggin(mesg:any){
        console.log(mesg);
    }
    //variable 
    var x= 5;
    var z= 100;
    var mesg=x+z;
    loggin(mesg);
    
    
    //Arrow function ( shortest way...)
    let ab= (variable) => console.log(variable);
    var variable=19;
    ab(variable);
    
    
//evaluate the javascript code and execute it..
    let var1=3;
    let var2=5;
    console.log(eval("var1+var2"));
    console.log(var1+var2);

    //objects  (everything in the javscript is an object)
    let person = {
        //property : value
        firstName: "John",
        lastName: "Doe",
        age:50,
        eyeColor: "blue"
      };
      
      const x1 = person;
      x1.age = 10; //object are mutable  || objects are referenced by the address...
      console.log(person.age,person.eyeColor);

      //interface
interface hai{
    z1:number,
    z2:number
    
}

let func= (para:hai)=>{
    console.log(para);
}
func({
    z1:10,
    z2:80
})
