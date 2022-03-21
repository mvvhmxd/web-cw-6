// هنا سوف تنشئ دالة calculate 



function calculate(){
    let height =document.getElementById("height").value;
    let weight =document.getElementById("weight").value;

   if(height === '') {
       alert( "height is required")
   }
if(weight === '') {
    alert( "weight is required")
}
    let bmi = weight/(height*height);
    let status = " ";
    if (bmi <18.5)
    {
        status= "you are underweight"
    }else if (bmi<25){
    status ="your weight is healthy"}
    if (bmi <30){
    status="you are over weight"  } 
    if( bmi > 30){
        status="you have obesity"
    }
    
    bmi = bmi.toFixed(2);
    document.getElementById("result").innerHTML = bmi;
document.getElementsByClassName("comment")[0].innerHTML = status;

}
