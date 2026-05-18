
document.querySelector(".logo").addEventListener("click",function(){
    alert("welcome to Veloura");
    });


document.addEventListener("DOMContentLoaded",
    function(){
        const reserveButton=
        document.querySelector(".reserve-btn");

        reserveButton.addEventListener("click",
    function(){
        const msg = document.createElement("div");
        msg.innerText = "Reservation request sent successfully ✔ We will contact you shortly.";
        msg.style.position = "fixed";
        msg.style.top = "20px";
        msg.style.right = "20px";
        msg.style.background = "#111";
        msg.style.color = "#fff";
        msg.style.padding = "12px 18px";
        msg.style.borderRadius = "8px";
        msg.style.zIndex = "9999";

        document.body.appendChild(msg);

        setTimeout(() => {
            msg.remove();
        }, 3000);
    });


    });

    document.addEventListener("DOMContentLoaded",
        function(){

    const btn = 
    document.querySelector("#chatBtn");
    const chat =
    document.querySelector("#chatWindow");
    const closeBtn =
    document.querySelector("#chatClose");

    const input =
    document.querySelector("#userInput");
    const sendBtn =
    document.querySelector("#sendBtn");
    const messages =
    document.querySelector("#messages");

    //Open chat
    btn.addEventListener("click",
        function(){
         chat.style.display = "block";
        });
    //Close chat
    closeBtn.addEventListener("click",
        function(){
         chat.style.display = "none";
        });

    //Send message
    sendBtn.addEventListener("click",
        function(){

            const userText =
            input.value.toLowerCase();

            if(userText.trim() === "") return;

            //show user message
            messages.innerHTML +=
            "<P><strong>You:</strong>" + userText +
            "</p>";

            let reply = "";

            if(userText.includes("menu")){
                reply = "Our signature dishes include Truffle pasta,Grilled Salmon, and Tiramisu.";
            }
            else if(userText.includes("hours")){
                reply ="We are Open from 11 AM to 11PM every day.";
            }
            else if(userText.includes("reservation")){
                reply ="You can reserve a table using the reservation button on our websie.";
            }
            else if(userText.includes("hello")){
                reply ="Hello! Welcome to Veloura.How can I help you?";
            }
            else{
                reply = "sorry,I didnt understand that. Try asking about menu,hours or reservations.";
            }
            //show AI reply
            messages.innerHTML +=
            "<P><strong> Veloura AI:</strong>" + reply + "</p>";
            input.value = "";

        });
        });
