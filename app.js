var count = 0;

function increase() {
  var h1 = document.getElementById("count")
  count++;
  h1.innerHTML = count


}

function decrease() {
  var h1 = document.getElementById("count")

  if(h1.innerHTML>0){
  count--;
  h1.innerHTML = count
  }


}

function reset() {
  var h1 = document.getElementById("count")
  count = 0;
  h1.innerHTML = count


}