module.exports ={
    name:"ngemis",
    aliases:'beg',
    $if:"v4",
    code:`
$if[$randomText[y;y;n]==y]
$title[Mengemis]
$thumbnail[$authorAvatar]
$addTimestamp
$description[
Kamu mulai mengemis di **$randomText[Pinggir Jalan;Jalan tol;Rumah;Hotel;Pantai;Gedung;Backrooms 💀;Taman;Kebun Binatang;Rumah Rehan wangsaf 😱]** dan **$randomText[Rehan wangsaf 😱;The Rock 💪;Thomas Slebew :cold_face:;NotViper;Mang Adi;nwn;Hengker;Begula;Nafree;Sipaling developer :nerd:;JavaScript 👀;Google;Abang Bakso;Intel 💀;Bapak do'eng;Garox;deng mimer;Goofy ah 💀;CyberBot 😱;yeahbois;Penyatir 😅👆;Badut;Wibu hengker tzy;Windah Bocil]** memberi mu $getVar[emoji] \`$numberSeparator[$random[100;$getGlobalUserVar[salarybeg]]] Bcash\`!]

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$random[100;$getGlobalUserVar[salarybeg]]]]

$else
$if[$randomText[y;y;n]==n]

$title[Mengemis]
$thumbnail[$authorAvatar]
$addTimestamp
$description[
Kamu mulai mengemis di **$randomText[Pinggir Jalan;Jalan tol;Rumah;Hotel;Pantai;Gedung;Backrooms 💀;Taman;Kebun Binatang;Rumah Rehan wangsaf 😱]** dan **$randomText[Rehan wangsaf 😱;The Rock 💪;Thomas Slebew :cold_face:;NotViper;Mang Adi;nwn;Hengker;Begula;Nafree;Sipaling developer :nerd:;JavaScript 👀;Google;Abang Bakso;Intel 💀;Bapak do'eng;Garox;deng mimer;Goofy ah 💀;CyberBot 😱;yeahbois;Penyatir 😅👆;Badut;Wibu hengker tzy;Windah Bocil]** menghampiri mu, Kamu tidak diberi apa pun! :sob:]
$endif
$endif

$globalCooldown[25s;{newEmbed:{title:Terjadi Kesalahan}{thumbnail:$authorAvatar}{timestamp}{description:Kamu perlu menunggu **%time%** untuk mengemis lagi.}}]

$onlyIf[$getGlobalUserVar[profile]==true;{newEmbed:{title:Terjadi Kesalahan..}{description:Kamu tidak memiliki profil! Kamu perlu membuatnya terlebih dahulu untuk bisa meng-akses semua command. Kamu bisa membuatnya dengan menggunakan command#COLON# \`B!start\`}{timestamp}{thumbnail:$authorAvatar}}]
`}