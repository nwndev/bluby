module.exports ={
    name:"start",
    aliases:'mulai',
    code:`
$title[Berhasil Membuat Profil!]
$description[
Kamu sekarang sudah bisa meng-akses semua command ku! Kamu juga mendapatkan $getVar[emoji] \`150,000 Bcash\` untuk memulai petualangan mu!]
$thumbnail[$authorAvatar]
$addTimestamp

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];150000]]
$setGlobalUserVar[profile;true]

$onlyIf[$getGlobalUserVar[profile]==false;{newEmbed:{title:Terjadi Kesalahan!}{description:Kamu sudah memiliki profil, Kamu tidak bisa membuatnya lagi.}{timestamp}{thumbnail:$authorAvatar}}]
`}