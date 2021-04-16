console.log('Hello World!');

var mod = 'room';
var to_ = 'shivam';
var from_ = 'satyam';
var type_ = 'none';
var body_ = '';

var username = document.getElementById('user_name').onchange = (evt) => {
  from_ = evt.target.value;
}
var text = document.getElementById('text_to_send').onchange = (evt) => {
  body_ = evt.target.value;
}
var sender = document.getElementById('send').onclick = () => {
  server.send(JSON.stringify(jsonify()));
}
var chatbox = document.getElementById('chatting');



document.getElementById('reciever').onchange = function(evt){
  to_ = evt.target.value;
  evt.target.value += ' ...connecting...';
  console.log(to_);
  evt.target.value = evt.target.value.replace('...connecting...','✓');
};

function jsonify(){
  var obj = {
    body : body_,
    to : to_,
    from : from_,
    type : type_
  }
  return obj;
}

