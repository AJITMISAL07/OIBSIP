var i=0;
var Texts=[];
var time=3000;

//text list
Texts[0]="Mother";
Texts[1]="Sister";
Texts[2]="Wife";

//chnege text
function chengetext() {
        if (i<Texts.length-1) {
            i++;
        } else {
            i*0;
        }
    setTimeout("chengetext()",time)
}

window.onload =chengetext;  