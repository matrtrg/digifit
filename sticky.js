var aText = [
    "Hi love. This letter is all about your <span style='color:#ff4081; font-weight:bold;'>kindness</span>.",
    "I want to start this letter by going back to the first time we talked.",
    "I know we started off having this <span style='color:#ff1493;'>kalog energy</span> and flirting type,",
    "pero dun palang I can already see how <span style='color:#ff4081;'>kind</span> you are po.",
    "Habang tumatagal yung relationship natin and mas nakikilala kita,",
    "mas nakikita ko yung warmth sa words mo and the way you choose them so carefully,",
    "as if you always want to make others feel <span style='color:#ff69b4;'>understood</span> and <span style='color:#ff69b4;'>valued</span>.",
    "You have this quiet yet profound way of showing kindness that leaves a mark",
    "on everyone you meet, including me.",
    "",
    "I’ve seen how <span style='color:#ff4081;'>kind</span> you are not just to others, but to yourself too,",
    "how you find balance between what’s <span style='color:#ff69b4;'>right</span> and <span style='color:#ff69b4;'>wrong</span>,",
    "and how you always strive to do what’s <span style='color:#ff1493;'>better</span> and <span style='color:#ff1493;'>best</span>.",
    "Even when it’s hard, even when others don’t make it easy,",
    "you still manage to stay <span style='color:#ff4081;'>patient</span> and <span style='color:#ff4081;'>loving</span>, and true to yourself hihi.",
    "I’m so <span style='color:#ff4081;'>proud</span> of you love, and I feel so lucky to be loved",
    "by someone as wonderful as you.",
    "<span style='color:#ff1493; font-size: 22px; font-weight: bold;'>ILOVEEEYOUSOMUCCCHH ❤</span>"
];

var iSpeed = 50;
var iIndex = 0;
var iArrLength = aText[0].length;
var iTextPos = 0;
var sContents = "";
var iRow;

function typewriter() {
    var destination = document.getElementById("typedtext");
    sContents = "";
    iRow = Math.max(0, iIndex);

    // Add previous lines as full paragraphs
    for (var j = 0; j < iIndex; j++) {
        sContents += "<p>" + aText[j] + "</p>";
    }

    // Add current typing line with blinking cursor
    sContents += "<p>" + aText[iIndex].substring(0, iTextPos) + "<span class='cursor'></span></p>";
    destination.innerHTML = sContents;

    if (iTextPos++ === iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex !== aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout(typewriter, 300);
        }
    } else {
        setTimeout(typewriter, iSpeed);
    }
}

typewriter();