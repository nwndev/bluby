module.exports = [{
    name:"nambang",
    $if:"v4",
    aliases:'mine',
    code:`
$if[$randomText[emas;batu;nothing;rusak]==rusak]

$title[Nambang]
$addTimestamp
$thumbnail[$authorAvatar]
$description[
Kamu mulai menambang di **$randomText[Gua Gelap;Gua Pasir;Gua Dalam]**, Tapi tiba-tiba beliung mu rusak.. :neutral_face: Kamu sekarang memiliki \`$getGlobalUserVar[pickaxe]\` Beliung.]

$setGlobalUserVar[pickaxe;$sub[$getGlobalUserVar[pickaxe];1]]

$else
$if[$randomText[emas;batu;nothing;rusak]==nothing]

$title[Nambang]
$addTimestamp
$thumbnail[$authorAvatar]
$description[
Kamu mulai menambang di **$randomText[Gua Gelap;Gua Pasir;Gua Dalam]**, Kamu tidak mendapatkan apa-pun..]

$else
$if[$randomText[emas;batu;nothing;rusak]==batu]

$title[Nambang]
$addTimestamp
$thumbnail[$authorAvatar]
$description[
Kamu mulai menambang di **$randomText[Gua Gelap;Gua Pasir;Gua Dalam]**, Dan kamu mendapatkan :rock: \`$random[1;3]\` Batu!]

$setGlobalUserVar[batu;$sum[$getGlobalUserVar[batu];$random[1;3]]]

$else
$if[$randomText[emas;ikan;nothing;rusak]==emas]

$title[Nambang]
$addTimestamp
$thumbnail[$authorAvatar]
$description[
Kamu mulai menambang di **$randomText[Gua Gelap;Gua Pasir;Gua Dalam]**, Dan kamu mendapatkan $getVar[e_emas] \`$random[1;3]\` Emas!]

$setGlobalUserVar[emas;$sum[$getGlobalUserVar[emas];$random[1;3]]]
$else
$title[Nambang]
$addTimestamp
$thumbnail[$authorAvatar]
$description[
Kamu mulai menambang di **$randomText[Gua Gelap;Gua Pasir;Gua Dalam]**, Dan kamu mendapatkan :rock: \`$random[1;3]\` Batu!]

$setGlobalUserVar[batu;$sum[$getGlobalUserVar[batu];$random[1;3]]]
$endif
$endif
$endif
$endif

$globalCooldown[1m;{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Kamu perlu menunggu **%time%** untuk menambang lagi.}}]

$onlyIf[$getGlobalUserVar[pickaxe]>=1;{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Kamu tidak memiliki Beliung! Kamu perlu setidaknya 1 Beliung untuk nambang. Kamu bisa membelinya di \`B!toko\`.}}]

$onlyIf[$getGlobalUserVar[profile]==true;{newEmbed:{title:Terjadi Kesalahan..}{description:Kamu tidak memiliki profil! Kamu perlu membuatnya terlebih dahulu untuk bisa meng-akses semua command. Kamu bisa membuatnya dengan menggunakan command#COLON# \`B!start\`}{timestamp}{thumbnail:$authorAvatar}}]
`}]