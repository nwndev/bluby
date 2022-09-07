module.exports ={
    name:"buka",
    $if:"v4",
    aliases:'open',
    code:`
$if[$randomText[uang;item]==uang]

$title[Membuka Kotak Misterius]
$description[Kamu membuka 📦 Kotak Misterius sebanyak \`$noMentionMessage\` dan kamu mendapatkan $getVar[emoji] \`$numberSeparator[$multi[$random[1000;10000];$noMentionMessage]] Bcash\`!]
$addTimestamp
$thumbnail[$authorAvatar]

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$multi[$random[1000;10000];$noMentionMessage]]]

$setGlobalUserVar[box;$sub[$getGlobalUserVar[box];$noMentionMessage]]

$else

$title[Membuka Kotak Misterius]
$addTimestamp
$thumbnail[$authorAvatar]
$description[Kamu membuka 📦 Kotak Misterius sebanyak \`$noMentionMessage\` dan kamu mendapatkan $getVar[e_grbg] \`$multi[$random[1;5];$noMentionMessage]\` Sampah dan $getVar[e_botl] \`$multi[$random[1;4];$nomentionmessage]\` Botol!]

$setGlobalUserVar[botol;$sum[$getGlobalUserVar[botol];$multi[$random[1;4];$noMentionMessage]]]

$setGlobalUserVar[sampah;$sum[$getGlobalUserVar[sampah];$multi[$random[1;5];$noMentionMessage]]]

$setGlobalUserVar[box;$sub[$getGlobalUserVar[box];$noMentionMessage]]

$endif

$onlyIf[$checkCondition[$noMentionMessage==0]==false;{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Tolong masukkan jumlah kotak yang benar!}}]

$onlyIf[$noMentionMessage<=999;{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Kamu tidak bisa membuka Kotak Misterius lebih dari 999 sekaligus.}}]

$onlyIf[$checkContains[$noMentionMessage;-;+;.]==false;{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Tolong masukkan jumlah kotak yang benar!}}]

$onlyIf[$getGlobalUserVar[box]>=$noMentionMessage;{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Kamu tidak memiliki cukup kotak misterius untuk di buka! Kamu memiliki \`$getGlobalUserVar[box]\` 📦 Kotak Misterius.}}]

$onlyIf[$isNumber[$noMentionMessage]==true;{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Tolong masukkan jumlah kotak yang benar!}}]

$argsCheck[>0;{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Tolong masukkan jumlah kotak yang ingin kamu buka!}}]
`}