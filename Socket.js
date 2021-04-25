var server = new WebSocket("wss://simple-encode-and-send.glitch.me",[
            'user-agent','mozilla'
        ]);
        
server.addEventListener("open",function(evt){
  console.log("we are connected");
   });
   server.addEventListener('message',function(msg){
   var message = JSON.parse(msg.data);
   console.log(message);
  
   if(message.from != to_){
     document.body.innerHTML += `  <div class="message" align="right">
         <div class="glass">${message.body}</div>
       </div>`;
   } else {
     if(message.to == from_){
     document.body.innerHTML += `  <div class="message" align="left">
         <div class="glass-recieved">${message.body}</div>
       </div>`;
   }}
   

   
   })