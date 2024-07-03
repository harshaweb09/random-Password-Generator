const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

function generateRandomPasswords(){
    let randomIndex;
    let randomPassword1 = "";
    let randomPassword2 = "";
    let characterLenght = 15;
   for(let i = 0; i < characterLenght; i += 1){
        randomIndex = Math.floor(Math.random() * 91);
        randomPassword1 += characters[randomIndex]
        randomIndex = Math.floor(Math.random() * 91);
        randomPassword2 += characters[randomIndex]
   }
   document.querySelector("#random-password-1").value = randomPassword1;
   document.querySelector("#random-password-2").value = randomPassword2;
}