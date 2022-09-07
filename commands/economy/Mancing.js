module.exports = [{
    name:"mancing",
    $if:"v4",
    aliases:'fish',
    code:`
$if[$randomText[sampah;ikan;nothing;rusak]==rusak]

$title[Mancing]
$addTimestamp
$thumbnail[$authorAvatar]
$description[
Kamu mulai memancing di **$randomText[Danau;Laut;Pantai;Sungai]**, Tapi tiba-tiba pancingan mu rusak.. :neutral_face: Kamu sekarang memiliki \`$getGlobalUserVar[pancingan]\` Pancingan.]

$setGlobalUserVar[pancingan;$sub[$getGlobalUserVar[pancingan];1]]

$else
$if[$randomText[sampah;ikan;nothing;rusak]==nothing]

$title[Mancing]
$addTimestamp
$thumbnail[$authorAvatar]
$description[
Kamu mulai memancing di **$randomText[Danau;Laut;Pantai;Sungai]**, Kamu tidak mendapatkan apa-pun..]

$else
$if[$randomText[sampah;ikan;nothing;rusak]==ikan]

$title[Mancing]
$addTimestamp
$thumbnail[$authorAvatar]
$description[
Kamu mulai memancing di **$randomText[Danau;Laut;Pantai;Sungai]**, Dan kamu menangkap $getVar[e_fish] \`$random[1;3]\` Ikan!]

$setGlobalUserVar[ikan;$sum[$getGlobalUserVar[ikan];$random[1;3]]]

$else
$if[$randomText[sampah;ikan;nothing;rusak]==sampah]

$title[Mancing]
$addTimestamp
$thumbnail[$authorAvatar]
$description[
Kamu mulai memancing di **$randomText[Danau;Laut;Pantai;Sungai]**, Dan kamu menangkap $getVar[e_botl] \`$random[1;3]\` Botol!]

$setGlobalUserVar[botol;$sum[$getGlobalUserVar[botol];$random[1;3]]]
$else
$title[Mancing]
$addTimestamp
$thumbnail[$authorAvatar]
$description[
Kamu mulai memancing di **$randomText[Danau;Laut;Pantai;Sungai]**, Dan kamu menangkap $getVar[e_fish] \`$random[1;3]\` Ikan!]

$setGlobalUserVar[ikan;$sum[$getGlobalUserVar[ikan];$random[1;3]]]
$endif
$endif
$endif
$endif

$globalCooldown[1m;{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Kamu perlu menunggu **%time%** untuk mancing lagi.}}]

$onlyIf[$getGlobalUserVar[pancingan]>=1;{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Kamu tidak memiliki Pancingan! Kamu perlu setidaknya 1 Pancingan untuk mancing. Kamu bisa membelinya di \`B!toko\`.}}]

$onlyIf[$getGlobalUserVar[profile]==true;{newEmbed:{title:Terjadi Kesalahan..}{description:Kamu tidak memiliki profil! Kamu perlu membuatnya terlebih dahulu untuk bisa meng-akses semua command. Kamu bisa membuatnya dengan menggunakan command#COLON# \`B!start\`}{timestamp}{thumbnail:$authorAvatar}}]
`}]