module.exports =[{
    name:"laptop",
    code:`
$title[Laptop $username]
$addTimestamp
$image[https://i.ibb.co/bvYLmX2/video-player.png]
$footer[
Livestream: $replaceText[$replaceText[$if[$get[live]>0;$parseDate[$get[live];time];Perintah Siap!];minutes;menit];seconds;detik]

Selamat datang di laptop mu! Kamu memiliki $getGlobalUserVar[laptop] Laptop. Apa yang ingin kamu lakukan dengan laptop mu? Tekan tombol dibawah ini!]
$addButton[1;Matikan Laptop;danger;mati_$authorID;no;]
$addButton[1;B-Mail;secondary;mail_$authorID;no;]
$addButton[1;Livestream;secondary;livestream_$authorID;no;]

$onlyIf[$getGlobalUserVar[laptop]>=1;{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Kamu tidak memiliki Laptop! Kamu perlu setidaknya 1 Laptop untuk menggunakannya. Kamu bisa membelinya di \`B!toko\`.}}]

$onlyIf[$getGlobalUserVar[profile]==true;{newEmbed:{title:Terjadi Kesalahan..}{description:Kamu tidak memiliki profil! Kamu perlu membuatnya terlebih dahulu untuk bisa meng-akses semua command. Kamu bisa membuatnya dengan menggunakan command#COLON# \`B!start\`}{timestamp}{thumbnail:$authorAvatar}}]

$let[livestream;$getCooldownTime[1m;globalUser;livestream;$authorID;yes]]
`},{
    type:'interaction',
    prototype:'button',
    code:`
$interactionUpdate[;{newEmbed:{title:Laptop $username}{thumbnail:$authorAvatar}{description:Laptop mu telah berhasil dimatikan.}{timestamp}}]

$onlyIf[$get[author]==$interactionData[author.id];]

$onlyIf[$get[customId]==mati;] 
$let[author;$splitText[2]]
$let[customId;$splitText[1]]
$textSplit[$interactionData[customId];_]
`},{
    type:'interaction',
    prototype:'button',
    code:`
$interactionUpdate[;{newEmbed:{title:Laptop $username#COLON# B-Mail}{timestamp}{thumbnail:$authorAvatar}{description:
ℹ - Pengumuman dari Developer Bluby#COLON#
\`\`\`md
$getVar[annc]
\`\`\`}};{actionRow:{button:Kembali:secondary:main-menu_$authorID:no:}}]

$onlyIf[$get[author]==$interactionData[author.id];]

$onlyIf[$get[customId]==mail;] 
$let[author;$splitText[2]]
$let[customId;$splitText[1]]
$textSplit[$interactionData[customId];_]
`},{
    type:'interaction',
    prototype:'button',
    code:`
$interactionUpdate[;{newEmbed:{title:Laptop $username}
{timestamp}
{image:https://i.ibb.co/bvYLmX2/video-player.png}
{footer:
Livestream#COLON# $replaceText[$replaceText[$if[$get[live]>0;$parseDate[$get[live];time];Perintah Siap!];minutes;menit];seconds;detik]

Selamat datang di laptop mu! Kamu memiliki $getGlobalUserVar[laptop] Laptop. Apa yang ingin kamu lakukan dengan laptop mu? Tekan tombol dibawah ini!}};{actionRow:{button:Matikan Laptop:danger:mati_$authorID:no:}
{button:B-Mail:secondary:mail_$authorID:no:}
{button:Livestream:secondary:livestream_$authorID:no:}}]

$onlyIf[$get[author]==$interactionData[author.id];]

$onlyIf[$get[customId]==main-menu;] 
$let[author;$splitText[2]]
$let[customId;$splitText[1]]
$textSplit[$interactionData[customId];_]

$let[livestream;$getCooldownTime[1m;globalUser;livestream;$authorID;yes]]
`},{
    $if:"v4",
    type:'interaction',
    prototype:'button',
    code:`
$if[$randomText[biasa;raid;nothing;rusak]==rusak]

$interactionUpdate[;{newEmbed:{title:Livestream}
{timestamp}
{thumbnail:$authorAvatar}
{description:
Kamu mulai livestream di platform **$randomText[Twix;BTube;Handbook;BlubLive]**, Tapi tiba-tiba laptop mu rusak.. #COLON#neutral_face#COLON# Kamu sekarang memiliki \`$getGlobalUserVar[laptop]\` Laptop.}}]

$setGlobalUserVar[laptop;$sub[$getGlobalUserVar[laptop];1]]

$else
$if[$randomText[biasa;raid;nothing;rusak]==nothing]

$interactionUpdate[;{newEmbed:{title:Livestream}
{timestamp}
{thumbnail:$authorAvatar}
{description:
Kamu mulai livestream di platform **$randomText[Twix;BTube;Handbook;BlubLive]**, Kamu tidak di-donasi apa-pun.. #COLON#sob#COLON#}};{actionRow:{button:Kembali:secondary:main-menu_$authorID:no:}}]

$else
$if[$randomText[biasa;raid;nothing;rusak]==raid]

$interactionUpdate[;{newEmbed:{title:Livestream}
{timestamp}
{thumbnail:$authorAvatar}
{description:
Kamu mulai livestream di platform **$randomText[Twix;BTube;Handbook;BlubLive]**, Kamu DIRAID OLEH STREAMER TERKENAL!! Kamu di-donasi oleh viewer mu sebanyak $getVar[emoji] \`$numberSeparator[$random[2000;3000]]\`, Bcash yang kamu terima telah masuk ke bank mu.}};{actionRow:{button:Kembali:secondary:main-menu_$authorID:no:}}]

$setGlobalUserVar[bank;$sum[$getGlobalUserVar[bank];$random[2000;3000]]]
$else
$if[$randomText[biasa;raid;nothing;rusak]==biasa]

$interactionUpdate[;{newEmbed:{title:Livestream}
{timestamp}
{thumbnail:$authorAvatar}
{description:
Kamu mulai livestream di platform **$randomText[Twix;BTube;Handbook;BlubLive]**, Dan kamu di-donasi oleh viewer mu sebanyak $getVar[emoji] \`$numberSeparator[$random[500;1000]]\`, Bcash yang kamu terima telah masuk ke bank mu.}};{actionRow:{button:Kembali:secondary:main-menu_$authorID:no:}}]

$setGlobalUserVar[bank;$sum[$getGlobalUserVar[bank];$random[500;1000]]]
$else
$interactionUpdate[;{newEmbed:{title:Livestream}
{timestamp}
{description:
Kamu mulai livestream di platform **$randomText[Twix;BTube;Handbook;BlubLive]**, Dan kamu di-donasi oleh viewer mu sebanyak $getVar[emoji] \`$numberSeparator[$random[500;1000]]\`, Bcash yang kamu terima telah masuk ke bank mu.}};{actionRow:{button:Kembali:secondary:main-menu_$authorID:no:}}]

$setGlobalUserVar[bank;$sum[$getGlobalUserVar[bank];$random[500;1000]]]
$endif
$endif
$endif
$endif

$globalCooldown[1m;{
"content": "Kamu perlu menunggu **%time%** untuk livestream lagi.",
"options": {"interaction": true},
"ephemeral": true
}]

$onlyIf[$get[author]==$interactionData[author.id];]

$onlyIf[$get[customId]==livestream;] 
$let[author;$splitText[2]]
$let[customId;$splitText[1]]
$textSplit[$interactionData[customId];_]
`}]