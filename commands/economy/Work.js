module.exports ={
    name:"work",
    aliases:'kerja',
    code:`
$title[Bekerja]
$thumbnail[$authorAvatar]
$addTimestamp
$description[
Kamu telah bekerja sebagai **$randomText[Polisi;Dokter;Kuli Jawa 😎;Penyatir 😅👆;Tentara;Penjaga Toko;Satpam Bank;Developer;Artis :money_mouth:;Yutuber geming 😱]** dan kamu mendapatkan $getVar[emoji] \`$numberSeparator[$random[5000;$getGlobalUserVar[salarywork]]] Bcash\`!]

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$random[5000;$getGlobalUserVar[salarywork]]]]

$globalCooldown[5m;{newEmbed:{title:Terjadi Kesalahan..}{thumbnail:$authorAvatar}{timestamp}{description:Kamu perlu menunggu **%time%** untuk bekerja lagi.}}]

$onlyIf[$getGlobalUserVar[profile]==true;{newEmbed:{title:Terjadi Kesalahan..}{description:Kamu tidak memiliki profil! Kamu perlu membuatnya terlebih dahulu untuk bisa meng-akses semua command. Kamu bisa membuatnya dengan menggunakan command#COLON# \`B!start\`}{timestamp}{thumbnail:$authorAvatar}}]
`}
//15m cd