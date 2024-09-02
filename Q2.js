// Question 2


let arr=[1,2,2,3,2,4];
freq=[];
let maxcount=0;
let mostfreq=null;

for (let i = 0; i < arr.length; i++) {
    var count=0;
  for (let j = 0; j < arr.length; j++) {
    if(arr[i]==arr[j]){
        count++;
        }   
    }   
    if (count>maxcount) {
        maxcount=count;
        mostfreq=arr[i];
        
    }
}
freq.push(mostfreq); 
   
console.log("The frequent element is "+freq+" that occurs "+maxcount+ " in the array");
