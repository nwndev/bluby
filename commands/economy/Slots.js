module.exports ={
    name:"slot",
    aliases:'slots',
    $if:"v4",
    code:`
$if[$random[1;5]==4]
$title[Mesin Slot 69 Oomaaga]
$addTimestamp
$thumbnail[$authorAvatar]
$description[
$randomText[🟡 : 🍞 : 🟢;🔵 : 🟢 : 🔵;🟢 : 🍋 : 🔵]
$randomText[🔵 : 🍞 : 🟡;🟡 : 🟢 : 🍞;🔵 : 🍋 : 🟢;🟢 : 🔵 : 🍋] ⬅
$randomText[🟡 : 🟢 : 🟡;🔵 : 🟢 : 🔵;🔵 : 🟡 : 🟢;🔵 : 🔵 : 🟡;🍋 : 🔵 : 🍞;🍞 : 🔵 : 🔵;🍋 : 🔵 : 🍞]
Kamu kalah! :sob:, Kamu kehilangan $getVar[emoji] \`$numberSeparator[$noMentionMessage[1]] Bcash\`]
$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];$noMentionMessage[1]]]
$else
$title[Mesin Slot 69 Oomaaga]
$addTimestamp
$thumbnail[$authorAvatar]
$description[
$randomText[🟡 : 🔵 : 🟢;🔵 : 🟢 : 🔵;🟢 : 🟡 : 🔵;🔵 : 🍋 : 🔵;🍞 : 🔵 : 🍋;🔵 : 🔵 : 🍋]
$randomText[🟢 : 🟢 : 🟢;🟡 : 🟡 : 🟡;🔵 : 🔵 : 🔵;🍋 : 🍋 : 🍋;🍞 : 🍞 : 🍞] ⬅
$randomText[🟡 : 🟢 : 🟡;🔵 : 🟢 : 🔵;🔵 : 🟡 : 🟢;🔵: 🔵 : 🟡;🔵 : 🍋 : 🍞;🍞 : 🔵 : 🍋]
Kamu menang! :money_mouth:, Kamu mendapatkan $getVar[emoji] \`$numberSeparator[$noMentionMessage[1]] Bcash\`]
$setglobalUserVar[money;$sum[$getglobalUserVar[money];$noMentionMessage[1]]]
$endif

$globalCooldown[15s;{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Jangan terlalu banyak berjudi, Itu gak baik lho! Kamu perlu menunggu **%time%** untuk menggunakan mesin slot lagi.}}]

$onlyIf[$getGlobalUserVar[money]>=$noMentionMessage[1];{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Kamu tidak memiliki Bcash sebanyak \`$numberSeparator[$noMentionMessage]\` untuk bermain mesin slot.}}]

$onlyIf[$checkContains[$noMentionMessage;-;+;.]==false;{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Tolong masukkan jumlah Bcash yang benar!}}]

$onlyIf[$isNumber[$noMentionMessage[1]]==true;{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Tolong masukkan jumlah Bcash yang benar!}}]

$onlyIf[$getGlobalUserVar[profile]==true;{newEmbed:{title:Terjadi Kesalahan..}{description:Kamu tidak memiliki profil! Kamu perlu membuatnya terlebih dahulu untuk bisa meng-akses semua command. Kamu bisa membuatnya dengan menggunakan command#COLON# \`B!start\`}{timestamp}{thumbnail:$authorAvatar}}]

$argsCheck[>0;{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Tolong masukkan jumlah Bcash yang ingin kamu judikan!}}]
`}