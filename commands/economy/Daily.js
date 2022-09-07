module.exports ={
    name:"daily",
    code:`
$title[Hadiah Harian]
$description[
Kamu berhasil mengambil hadiah harian mu! Kamu mendapatkan $getVar[emoji] \`100,000 Bcash\` dan 📦 \`1 Kotak Misterius\`.]
$addTimestamp
$thumbnail[$authorAvatar]

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];100000]]

$setGlobalUserVar[box;$sum[$getGlobalUserVar[box];1]]

$globalCooldown[24h;{newEmbed:{title:Terjadi Kesalahan..}{description:Kamu hanya bisa mengambil hadiah harian sekali setiap 24 jam. Kamu perlu menunggu **%time%** untuk mengambilnya lagi.}{timestamp}{thumbnail:$authorAvatar}}]

$onlyIf[$getGlobalUserVar[profile]==true;{newEmbed:{title:Terjadi Kesalahan..}{description:Kamu tidak memiliki profil! Kamu perlu membuatnya terlebih dahulu untuk bisa meng-akses semua command. Kamu bisa membuatnya dengan menggunakan command#COLON# \`B!start\`}{timestamp}{thumbnail:$authorAvatar}}]
`}