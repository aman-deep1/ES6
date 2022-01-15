class Student
{
    constructor(roll,name,age){
        this.roll=roll,
        this.name=name,
        this.age=age
    }

    show (){
        console.log(this.roll,this.name,this.age)
    }
}

class cs extends Student{

    constructor(roll,name,age,marks){

        super(roll,name,age)
        this.marks=marks

    }
    show (){
        super.show()
        console.log(this.marks)
}
}

class it extends Student{

    constructor(roll,name,age,marks){

        super(roll,name,age)
        this.marks=marks

    }
    show (){
        super.show()
        console.log(this.marks)
}
}

var ob1=new cs(01,"Aman",21,{aws:95,db:97})
var ob2=new it(02,"Akash",22,{net:45,cloud:97})
var ob3=new cs(03,"Abhay",23,{aws:54,db:67})
var ob4=new it(04,"Srikar",24,{net:95,cloud:87})
var ob5=new cs(05,"Prajwal",25,{aws:35,db:33})


var arr=[ob1,ob2,ob3,ob4,ob5]

function getPercentage(obj){

    var marks=obj.marks 
    var data=Object.values(marks)
   var total=data.reduce((a,b)=>{
       return a+b;

   },0);
   var per=total/2;
   return per
}

var num=75;
var arr2=arr.filter ((ob)=>getPercentage(ob)>num)

console.log(arr2)


//console.log(arr)
/* let marks=[77,67,88,90,54,45,66,98,34,60]

    function filterEven(num)
        {
            return num>=50   
        }
        var arr2 = marks.filter(filterEven)






ob1.show()
ob2.show() 

console.log(arr2)
 */
