module.exports = [{
    name:"berburu",
    $if:"v4",
    aliases:'hunt',
    code:`
$if[$randomText[bear;deer;nothing;rusak]==rusak]

$title[Berburu]
$addTimestamp
$thumbnail[$authorAvatar]
$description[
Kamu mulai berburu di **Hutan**, Tapi tiba-tiba pistol mu rusak.. :neutral_face: Kamu sekarang memiliki \`$getGlobalUserVar[pistol]\` Pistol.]

$setGlobalUserVar[pistol;$sub[$getGlobalUserVar[pistol];1]]

$else
$if[$randomText[bear;deer;nothing;rusak]==nothing]

$title[Berburu]
$addTimestamp
$thumbnail[$authorAvatar]
$description[
Kamu mulai berburu di **Hutan**, Tapi kamu tidak mendapatkan apa-pun..]

$else
$if[$randomText[bear;deer;nothing;rusak]==deer]

$title[Berburu]
$addTimestamp
$thumbnail[$authorAvatar]
$description[
Kamu mulai berburu di **Hutan**, Dan kamu menangkap 🦌 \`$random[1;2]\` Rusa!]

$setGlobalUserVar[deer;$sum[$getGlobalUserVar[deer];$random[1;2]]]

$else
$if[$randomText[bear;deer;nothing;rusak]==bear]

$title[Berburu]
$addTimestamp
$thumbnail[$authorAvatar]
$description[
Kamu mulai berburu di **Hutan**, Dan kamu menangkap 🐻 \`$random[1;2]\` Beruang!]

$setGlobalUserVar[bear;$sum[$getGlobalUserVar[bear];$random[1;2]]]
$else
$title[Berburu]
$addTimestamp
$thumbnail[$authorAvatar]
$description[
Kamu mulai berburu di **Hutan**, Dan kamu menangkap 🦌 \`$random[1;2]\` Rusa!]

$setGlobalUserVar[ikan;$sum[$getGlobalUserVar[ikan];$random[1;2]]]
$endif
$endif
$endif
$endif

$globalCooldown[1m;{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Kamu perlu menunggu **%time%** untuk berburu lagi.}}]

$onlyIf[$getGlobalUserVar[pistol]>=1;{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Kamu tidak memiliki Pistol! Kamu perlu setidaknya 1 Pistol untuk berburu. Kamu bisa membelinya di \`B!toko\`.}}]

$onlyIf[$getGlobalUserVar[profile]==true;{newEmbed:{title:Terjadi Kesalahan..}{description:Kamu tidak memiliki profil! Kamu perlu membuatnya terlebih dahulu untuk bisa meng-akses semua command. Kamu bisa membuatnya dengan menggunakan command#COLON# \`B!start\`}{timestamp}{thumbnail:$authorAvatar}}]
`}]