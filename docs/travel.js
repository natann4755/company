idd=0
let citys = [
    {code:1,name:'yerushalaym',prich:100},
    {code:2,name:'london',prich:200},
    {code:3,name:'brisel',prich:20},
    {code:4,name:'teiman',prich:2000},
    {code:5,name:'prag',prich:10},
    {code:6,name:'hongkong',prich:500},
    {code:7,name:'maroko',prich:-50},
    {code:8,name:'sumalya',prich:180},
    {code:9,name:'sry lanka',prich:130},
    {code:10,name:'varsha',prich:400}]
console.log(citys)
let orders = [] 


str2 = strrr()
let v =document.getElementById('b1')
    v.innerHTML=str2

   function travl(){
    console.log("travl start");
       let namme=document.getElementById("name").value
       let personId=document.getElementById("pid").value
         console.log(namme)
       let tid=document.getElementById("tid").value
       let city1 = citys.find(alement=>{return tid==alement.code})
       console.log(city1.name)
       let passengers =document.getElementById("passengers").value
       let totale = city1.prich*passengers
       console.log(totale)
       orderss (namme,personId,city1.name,passengers,totale)
       document.getElementById("name").value=""
   }






   function orderss(namme,personId,city1name,passengerss,totalee){
       idd++
       orders.push({id:idd,name:namme,personid:personId,city:city1name,passengers:passengerss,totale:totalee})
       console.log(orders)
       let str4 ="<tr><td>"+idd+"</td><td>"+namme+"</td><td>"+personId+"</td><td>"+city1name+"</td><td>"+passengerss+"</td><td>"+totalee+"</td></tr>"
       let v1 = document.getElementById('b2')
       v1.innerHTML+=str4

   }

   function findd(){
    console.log("findd start")
    let snam=document.getElementById("sname").value
    console.log(snam)
    let arr= orders.filter(travl => {return travl.name==snam})
    let str7 =str6(arr)
    let v4= document.getElementById("b3")
    v4.innerHTML=str7

   }



   function strrr(){
    let str1="<tr><td>#code</td><td>#name</td><td>#prich</td></tr>"
    let str2=''
    citys.forEach(alement=>
        str2 +=str1.replace('#code',alement.code)
                .replace('#name',alement.name)
                 .replace('#prich',alement.prich)  )
                 console.log(str2);
                 return str2

   }
   function str6(arr){
       let str7=""
       arr.forEach(alement=>
        {str7+=("<tr><td>"+alement.id+"</td><td>"+alement.name+"</td><td>"+alement.passengers+"</td><td>"+alement.totale+"</td></tr>")
    })
    return str7
    // let v4= document.getElementById("b3")
    // v4.innerHTML=str7
   }
   function chang(){
    let cityy  = document.getElementById("selec").value;
    console.log(cityy+99999);
    let arr= orders.filter(travl => {return travl.city==cityy})
    let str8 = str6(arr)
    let v4= document.getElementById("b4")
    v4.innerHTML+=str8
    let total =0;
    arr.forEach(alement=>total+=alement.totale)
    let p = document.querySelector('#total')
    console.log(p)
    p.innerHTML+=total

    

    


   }