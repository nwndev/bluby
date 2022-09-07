module.exports ={
    name:"weekly",
    code:`
$title[Hadiah Mingguan]
$description[
Kamu berhasil mengambil hadiah mingguan mu! Kamu mendapatkan $getVar[emoji] \`150,000 Bcash\` dan 📦 \`2 Kotak Misterius\`.]
$addTimestamp
$thumbnail[$authorAvatar]

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];150000]]

$setGlobalUserVar[box;$sum[$getGlobalUserVar[box];2]]

$globalCooldown[7d;{newEmbed:{title:Terjadi Kesalahan..}{description:Kamu hanya bisa mengambil hadiah mingguan sekali setiap 1 minggu. Kamu perlu menunggu **%time%** untuk mengambilnya lagi.}{timestamp}{thumbnail:$authorAvatar}}]

$onlyIf[$getGlobalUserVar[profile]==true;{newEmbed:{title:Terjadi Kesalahan..}{description:Kamu tidak memiliki profil! Kamu perlu membuatnya terlebih dahulu untuk bisa meng-akses semua command. Kamu bisa membuatnya dengan menggunakan command#COLON# \`B!start\`}{timestamp}{thumbnail:$authorAvatar}}]
`}