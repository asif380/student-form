
const calcy =()=>{
    let wd = document.getElementById('wd').value;
    let maths = document.getElementById('maths').value;
    let comp = document.getElementById('comp').value;
    let phy = document.getElementById('phy').value;
    let grade ='';   
 let totalNum = parseFloat(wd) + parseFloat (maths) + parseFloat(comp) + parseFloat(phy);
   alert(totalNum);
   let perc =(totalNum/400)*100;
   alert(perc);
if(perc <= 100 && perc >= 80){
    grade ='a+';
}else if(perc < 80 && perc >= 70)
 {grade ='a';}else if(perc < 70 && perc >= 60)
 {grade = 'a-';}else{
     grade = 'f';
 }
 document.getElementById('showdata').innerHTML =
 `Your total number is ${totalNum} and percentage is ${perc}% and <br>
  grade is ${grade}.`
}
 