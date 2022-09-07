module.exports ={
    name:"withdraw",
    aliases:'with',
    code:`
$title[Withdraw]
$thumbnail[$authorAvatar]
$addTimestamp
$description[
Kamu telah berhasil menarik Bcash mu sebanyak $getVar[emoji] \`$numberSeparator[$replaceText[$replaceText[$noMentionMessage;k;000];m;000000]] Bcash\` dari bank.]

$setGlobalUserVar[bank;$sub[$getGlobalUserVar[bank];$replaceText[$replaceText[$noMentionMessage;k;000];m;000000]]]

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$replaceText[$replaceText[$noMentionMessage;k;000];m;000000]]]

$onlyIf[$getGlobalUserVar[bank]>=$replaceText[$replaceText[$noMentionMessage;k;000];m;000000];{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Kamu tidak memiliki Bcash sebanyak \`$numberSeparator[$replaceText[$replaceText[$noMentionMessage;k;000];m;000000]]\` di bank mu.}}]

$onlyIf[$checkContains[$noMentionMessage;-;+;.]==false;{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Tolong masukkan jumlah Bcash yang benar!}}]

$onlyIf[$checkContains[$noMentionMessage;1;2;3;4;5;6;7;8;9;0;k;m]==true;{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Tolong masukkan jumlah Bcash yang benar!}}]

$onlyIf[$getGlobalUserVar[profile]==true;{newEmbed:{title:Terjadi Kesalahan..}{description:Kamu tidak memiliki profil! Kamu perlu membuatnya terlebih dahulu untuk bisa meng-akses semua command. Kamu bisa membuatnya dengan menggunakan command#COLON# \`B!start\`}{timestamp}{thumbnail:$authorAvatar}}]

$argsCheck[>0;{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Tolong masukkan jumlah Bcash yang ingin kamu tarik!}}]
`}