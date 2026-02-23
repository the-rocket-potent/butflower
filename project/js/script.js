/* 나무 생성 */
for(let i=0;i<6;i++){
  const tree=document.createElement("img");
  tree.src="assets/sakura_tree.png";
  tree.className="tree";
  tree.style.left=Math.random()*85+"%";
  document.body.appendChild(tree);
}

/* 꽃잎 생성 */
for(let i=0;i<40;i++){
  const petal=document.createElement("img");
  petal.src="assets/petal.png";
  petal.className="petal";
  petal.style.left=Math.random()*100+"%";
  petal.style.animationDuration=(6+Math.random()*5)+"s";
  document.body.appendChild(petal);
}


const dialog = document.getElementById("dialog");
const choice = document.getElementById("choice");
const noBtn = document.getElementById("noBtn");const cat = document.getElementById("cat");

let x = -820; // 화면 왼쪽 밖
let y = window.innerHeight/2 - 325;
let targetX = window.innerWidth/2 - 410;
let speed = 2;
let bounce = 0;

function createPetal() {
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.style.left = Math.random() * window.innerWidth + "px";
    petal.style.top = "-20px";
    document.body.appendChild(petal);

    let fallSpeed = 2 + Math.random()*2;
    let drift = Math.random()*2 - 1;

    function fall() {
        let top = parseFloat(petal.style.top);
        let left = parseFloat(petal.style.left);

        petal.style.top = top + fallSpeed + "px";
        petal.style.left = left + drift + "px";

        if (top < window.innerHeight) {
            requestAnimationFrame(fall);
        } else {
            petal.remove();
        }
    }

    fall();
}

setInterval(createPetal, 200);

function update() {

    if (x < targetX) {
        x += speed;
    }

    bounce += 0.15;
    let walkOffset = Math.sin(bounce) * 8;

    cat.style.left = x + "px";
    cat.style.top = (y + walkOffset) + "px";

    requestAnimationFrame(update);
}

update();

/* 등장 이동 */
setTimeout(()=>{
  cat.style.transition = "left 4s linear";
  cat.style.left = "45%";
},500);

/* 이동 끝나면 걷기 멈춤 */
setTimeout(()=>{
  cat.style.animation = "none";
},4500);

/* 타이핑 */
const text="누나 벚꽃 보러 갈래요?";
let index=0;

setTimeout(()=>{
  dialog.style.display="block";
  const typing=setInterval(()=>{
    dialog.textContent+=text[index++];
    if(index>=text.length) clearInterval(typing);
  },100);
},4700);

setTimeout(()=>{
  choice.style.display="block";
},7000);

function no(){
  noBtn.style.transform="translateX(400px) rotate(720deg)";
  noBtn.style.opacity="0";
}

function yes(){
  alert("🌸 같이 벚꽃 보러 가요 🌸");
}