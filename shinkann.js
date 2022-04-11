hand = new Array("img/M-j_gu01.png","img/M-j_ch01.png","img/M-j_pa01.png");

msg = new Array("なにをだそうかなん","勝ちだよん","まけだよん","あいこで");

timer = 0;
count = 0;

handreset(0);

function getbhand(btn) {
  clearTimeout(timer);
  r = Math.floor(Math.random() * 3);
  document.getElementById("ahand").innerHTML = "<img src='" + hand[r] + "'>";
  document.getElementById("bhand").innerHTML = "<img src='" + hand[btn] + "'>";

  document.janken.elements[0].disabled = true;
  document.janken.elements[1].disabled = true;
  document.janken.elements[2].disabled = true;
  document.janken.elements[3].disabled = false;

  //あいこ
  var num = 3;
  //グー
  if (btn == 0 && r == 1) num = 1;
  if (btn == 0 && r == 2) num = 2;
  //チョキ
  if (btn == 1 && r == 0) num = 2;
  if (btn == 1 && r == 2) num = 1;
  //パー
  if (btn == 2 && r == 0) num = 1;
  if (btn == 2 && r == 1) num = 2;
  //表示
  if(r==btn){
    handreset(3);
  }
  document.getElementById("message").innerHTML = msg[num];
}

function handreset(num) {
  document.janken.elements[0].disabled = false;
  document.janken.elements[1].disabled = false;
  document.janken.elements[2].disabled = false;
  document.janken.elements[3].disabled = true;
  document.getElementById("message").innerHTML = msg[num];
  getahand()
}

function getahand() {
  document.getElementById("ahand").innerHTML = "<img src='" + hand[count] + "'>"; 
  document.getElementById("bhand").innerHTML = "<img src='" + hand[count] + "'>";
  count++;
  if (count > 2) count = 0;
  timer = setTimeout("getahand()",500);
}