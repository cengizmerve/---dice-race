var zarbir = document.getElementById("oyuncubir").children[3];
var sallabir = document.getElementById("oyuncubir").children[6];
var skorbir = document.getElementById("skorbir").children[3];

var zariki = document.getElementById("oyuncuiki").children[3];
var sallaiki = document.getElementById("oyuncuiki").children[6];
var skoriki = document.getElementById("skoriki").children[3];

sallaiki.disabled = true;

var sira = 0;
var rdn = 0;
var skrbir = 0, skriki = 0;
var oyunbitti = false;

function salla(oyuncu) {
    if(!oyunbitti) {
        sira= oyuncu;
        zarSalla = setInterval(zar, 200);
    }

}

var zar = function () {
    rdn = Math.ceil(Math.random()*6);
    if (sira === 1) {
        sallabir.disabled = true;
        switch (rdn) {
            case 1:
                zarbir.src = 'zars/zar-' +1+'.png';
                break;
            case 2:
                zarbir.src = 'zars/zar-' +2+'.png';
                break;
            case 3:
                zarbir.src = 'zars/zar-' +3+'.png';
                break;
            case 4:
                zarbir.src = 'zars/zar-' +4+'.png';
                break;
            case 5:
                zarbir.src = 'zars/zar-' +5+'.png';
                break;
            case 6:
                zarbir.src = 'zars/zar-' +6+'.png';
                break;
        }
    }
    if (sira === 2) {
        sallaiki.disabled = true;
        switch (rdn) {
            case 1:
                zariki.src = 'zars/zar-'+1+'.png';
                break;
            case 2:
                zariki.src = 'zars/zar-'+2+'.png';
                break;
            case 3:
                zariki.src = 'zars/zar-'+3+'.png';
                break;
            case 4:
                zariki.src = 'zars/zar-'+4+'.png';
                break;
            case 5:
                zariki.src = 'zars/zar-'+5+'.png';
                break;
            case 6:
                zariki.src = 'zars/zar-'+6+'.png';
                break;
        }
    }

}


function at () {
    clearInterval(zarSalla);
    if ( sira === 1) // 1. oyuncu tıklamış daha 2.oyuncu tıklamamış
    {
        skrbir += rdn;
        skorbir.innerHTML = skrbir
        if(skrbir >= 50) {
            oyunbitti = true;
            alert("Kazanan oyuncu: Bir numaralı oyuncu")

        } else{
            sallaiki.disabled = false;
        }

    }

    if ( sira === 2) //
    {
        skriki += rdn;
        skoriki.innerHTML = skriki
        if(skriki >= 50) {
            oyunbitti = true;
            alert("Kazanan oyuncu: İki numaralı oyuncu")
        } else {
            sallabir.disabled = false;
        }

    }
}