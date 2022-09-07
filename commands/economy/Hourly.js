module.exports ={
    name:"hourly",
    code:`
$title[Hadiah Per Jam]
$description[
Kamu berhasil mengambil hadiah per jam mu! Kamu mendapatkan $getVar[emoji] \`1,000 Bcash\`.]
$addTimestamp
$thumbnail[$authorAvatar]

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];1000]]

$globalCooldown[1h;{newEmbed:{title:Terjadi Kesalahan..}{description:Kamu hanya bisa mengambil hadiah per jam sekali setiap 1 jam. Kamu perlu menunggu **%time%** untuk mengambilnya lagi.}{timestamp}{thumbnail:$authorAvatar}}]

$onlyIf[$getGlobalUserVar[profile]==true;{newEmbed:{title:Terjadi Kesalahan..}{description:Kamu tidak memiliki profil! Kamu perlu membuatnya terlebih dahulu untuk bisa meng-akses semua command. Kamu bisa membuatnya dengan menggunakan command#COLON# \`B!start\`}{timestamp}{thumbnail:$authorAvatar}}]
`}