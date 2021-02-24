const input = document.getElementById("js-input");
const submit = document.getElementById("js-span");
const main = document.getElementById("js-main");

//time
function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
}

//add message
function addMessage(message) {
    const content = document.createElement("span");
    const time = document.createElement("span");
    const innerDiv = document.createElement("div");
    const outterDiv = document.createElement("div");
    content.innerHTML = message;
    time.innerHTML=getTime();
    innerDiv.appendChild(content);
    innerDiv.appendChild(time);
    outterDiv.appendChild(innerDiv);
    main.append(outterDiv);
    content.className='message__bubble';
    time.className='message_time';
    innerDiv.className='message__info';
    outterDiv.className='message-row message-row--own';
}


function handleSubmit() {
    const value = input.value;
    addMessage(value);
    input.value="";
}

function init() {
    handleSubmit();
}