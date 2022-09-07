module.exports ={
    name:"cari",
    aliases:'search',
    $if:"v4",
    code:`
$if[$randomText[y;n]==y]
$title[Mencari]
$thumbnail[$authorAvatar]
$addTimestamp
$description[
Kamu mulai mencari di **$randomText[Rumah;Hotel;Pantai;Gedung;Backrooms 💀;Taman;Kebun Binatang;Rumah Rehan wangsaf 😱;Anjing;Pesawat;Xbox;PS5;Lemari;Meja;Kursi;Pintu;TV;Bakso;Handphone]** dan Kamu mendapatkan $getVar[emoji] \`$random[100;200] Bcash\`!]

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$random[100;200]]]

$else

$title[Mencari]
$thumbnail[$authorAvatar]
$addTimestamp
$description[
Kamu mulai mengemis di **$randomText[Rumah;Hotel;Pantai;Gedung;Backrooms 💀;Taman;Kebun Binatang;Rumah Rehan wangsaf 😱;Anjing;Pesawat;Xbox;PS5;Lemari;Meja;Kursi;Pintu;TV;Bakso;Handphone]** dan Kamu tidak mendapatkan apa-apa! :sob:]

$endif

$globalCooldown[20s;{newEmbed:{title:Terjadi Kesalahan}{thumbnail:$authorAvatar}{timestamp}{description:Kamu perlu menunggu **%time%** untuk mencari lagi.}}]

$onlyIf[$getGlobalUserVar[profile]==true;{newEmbed:{title:Terjadi Kesalahan..}{description:Kamu tidak memiliki profil! Kamu perlu membuatnya terlebih dahulu untuk bisa meng-akses semua command. Kamu bisa membuatnya dengan menggunakan command#COLON# \`B!start\`}{timestamp}{thumbnail:$authorAvatar}}]
`}