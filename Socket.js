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
     chatbox.innerHTML += `<div style='margin:0px; background:brown; height: auto; width: 8em; margin: 2px ; border-radius: 10px; padding:5px;'>${ message.body }</div>`;
   } else {
     if(message.to == from_){
     chatbox.innerHTML += `<div style='margin:0px; background:blue; height: auto; width: 8em; margin: 2px ; border-radius: 10px; padding:5px; margin-left:90px'>${ message.body }</div>`;
   }}
   
   })