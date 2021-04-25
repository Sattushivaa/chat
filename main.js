console.log('Hello World!');

document.body.style.backgroundSize = `${screen.availWidth}px ${screen.availHeight}px`;

function jsonify(){
  var obj = {
    body : body_,
    to : to_,
    from : from_,
    type : type_
  }
  return obj;
}

var mod = 'room';
var to_ = 'shivam';
var from_ = 'satyam';
var type_ = 'none';
var body_ = '';

var send_btn = document.getElementById('send');

var textchange = (evt) => {
  body_ = evt.target.value;
}
document.getElementById('text_to_send').addEventListener('onchange',textchange)
var sendinfo = () => {
  body_ = document.getElementById('text_to_send').value;
  server.send(JSON.stringify(jsonify()));
  document.getElementById('text_to_send').value = '';
  console.log('info sent');
}

send_btn.addEventListener('click',sendinfo);

document.getElementById('reciever').onchange = function(evt){
  to_ = evt.target.value;
  evt.target.value += ' ...connecting...';
  console.log(to_);
  evt.target.value = evt.target.value.replace('...connecting...','✓');
};

