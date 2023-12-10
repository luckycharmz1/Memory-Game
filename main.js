//Define arrays of emojis
const b1 = ["😍"];
const b2 = ["😍"];
const b3 = ["😎"];
const b4 = ["😎"]; 
const b5 = ["❤️"];
const b6 = ["❤️"];
const b7 = ["😁"];
const b8 = ["😁"];
const b9 = ["🤑"];
const b10 = ["🤑"];
const b11 = ["🤔"];
const  b12 = ["🤔"];
const b13 = ["👌"];
const b14 = ["👌"];
const b15 = ["💩"];
const b16 = ["💩"];
const b17 = ["🥹"];
const b18 =["🥹"];
const b19 =["😜"];
const b20 = ["😜"];
const b21 = ["😷"];
const b22 = ["😷"];
const b23 = ["😇"];
const b24 = ["😇"];
const b25 =["🤓"];
const b26 = ["🤓"];
const b27 = ["🙈"];
const b28 = ["🙈"];
const b29 = ["👻"];
const b30 = ["👻"];

//Combine sets into a single array
const emojisSets = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30];

//Flatten teh array of arrays to get a single arrat of emojis
const emojis = emojisSets.flat();

var shuf_emojis = emojis.sort(() => (Math.random()> .5) ? 1 : -1);
for (var i=0; i<emojis.length; i++){
    let box = document.createElement('div')
    box.className = 'item';
    box.innerHTML = shuf_emojis[i]

    box.onclick = function(){
        this.classList.add('boxOpen');
        setTimeout(function(){
            if(document.querySelectorAll('.boxOpen').length > 1){
                if (document.querySelectorAll('.boxOpen')[0].innerHTML ==
                document.querySelectorAll('.boxOpen')[1].innerHTML){
                document.querySelectorAll('.boxOpen')[0].classList.add
                ('boxMatch')
                document.querySelectorAll('.boxOpen')[1].classList.add
                ('boxMatch')

                document.querySelectorAll('.boxOpen')[1].classList.remove
                ('boxOpen')
                document.querySelectorAll('.boxOpen')[1].classList.remove
                ('boxOpen')

                if(document.querySelectorAll('.boxMatch').length == emojis.
                length){
                    alert('win')
                }
                }else{
                    document.querySelectorAll('.boxOpen')[1].classList.remove
                    ('boxOpen')
                    document.querySelectorAll('.boxOpen')[0].classList.remove
                    ('boxOpen')
                }
            }
        },500)
    }

    document.querySelector('.game').appendChild(box);
}

//Reset button functionality 
document.querySelector('.reset').addEventListener('click', function () {
    //Reshuffulle emojis and update game board
    shuf_emojis = emojis.sort(() => Math.random() > 0.5 ? 2: -1 );
    var items = document.querySelectorAll('.item');
    items.forEach((item, index) => {
        item.innerHTML = shuf_emojis[index];
    });
});
