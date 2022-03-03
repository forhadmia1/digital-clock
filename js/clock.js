setInterval(()=>{
    const h2 = document.getElementById('time')
    const date = new Date();
    let hours = date.getHours();
    let munites = date.getMinutes();
    let seconds = date.getSeconds();
    let format= 'AM'
    if(hours>12){
        hours= hours-12
        format= 'PM'
    }
    if(seconds<10){
        seconds= '0'+seconds;
    }
    if(munites<10){
        munites= '0' +munites;
    }
    if(hours<10){
        hours='0'+hours;
    }
    h2.innerText= `${hours}: ${munites}: ${seconds} ${format}`;
},1000)