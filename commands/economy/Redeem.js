module.exports ={
    name:"kode",
    aliases:'redeem',
    $if:"v4",
    code:`
$if[$toLowerCase[$message]==$getVar[code]]
$title[Tukar Kode]
$addTimestamp
$thumbnail[$authorAvatar]
$description[
Kamu telah berhasil menukar kode \`$toUpperCase[$get[c]]\`! Kamu mendapatkan $getVar[emoji] \`500,000 Bcash\`.]

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];500000]]

$setGlobalUserVar[coderedeemed;true]

$onlyIf[$getGlobalUserVar[coderedeemed]==false;{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Kamu sudah menukar kode tersebut!}}]

$let[c;$getVar[code]]

$else

$title[Terjadi Kesalahan..]
$addTimestamp
$thumbnail[$authorAvatar]
$description[
Kode tersebut tidak valid atau sudah kadaluwarsa.]

$endif

$onlyIf[$getGlobalUserVar[profile]==true;{newEmbed:{title:Terjadi Kesalahan..}{description:Kamu tidak memiliki profil! Kamu perlu membuatnya terlebih dahulu untuk bisa meng-akses semua command. Kamu bisa membuatnya dengan menggunakan command#COLON# \`B!start\`}{timestamp}{thumbnail:$authorAvatar}}]
`}