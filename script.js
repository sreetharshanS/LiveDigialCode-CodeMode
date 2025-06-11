function clockCall(){
    const now = new Date();

    const hours24 = now.getHours().toString().padStart(2,'0');
    const hours12 = (hours24 % 12 || 12).toString().padStart(2,'0'); 
    const minutes = now.getMinutes().toString().padStart(2,'0');
    const seconds = now.getSeconds().toString().padStart(2,'0');
    const ampm = hours24 >= 12 ? 'PM' : 'AM';
    document.getElementById("clockId").innerText =`${hours12}: ${minutes}:${seconds} ${ampm}`;
}
function greetByTime() {
    
    let greeting = "";
    const now = new Date();
    const hours24 = now.getHours();
    if (hours24 >= 6 && hours24 < 12) {
        greeting = "Good Morning";
    } else if (hours24 >= 12 && hours24 < 17) {
        greeting = "Good Afternoon";
    } else if (hours24 >= 17 && hours24 < 20) {
        greeting = "Good Evening";
    } else {
        greeting = "Good Night";
    }

    document.getElementById('response').innerText = greeting;
}
greetByTime()
clockCall()
setInterval(clockCall,1000);


