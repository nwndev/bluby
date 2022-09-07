module.exports ={
    name:"lomba",
    $if:"v4",
    code:`
$if[$randomText[win;lose]==win]
$title[Lomba]
$addTimestamp
$thumbnail[$authorAvatar]
$description[
Kamu telah berhasil mengikuti lomba **$randomText[Makan Kerupuk;Estafet Tuang Air;Makan Bakso;Balap Karung;Panjat Pinang;Tarik Tambang]** di **$randomText[Sekolah;Lapangan;Rumah;Kota]** dan kamu me-menangkan lombanya! Kamu mendapatkan $getVar[emoji] \`$numberSeparator[$random[4000;15000]] Bcash\` dan $get[item].]

$setGlobalUserVar[$randomText[piala;kerupuk];$sum[$getGlobalUserVar[$randomText[piala;kerupuk]];1]]

$setGlobalUserVar[money;$sum[$getGlobaluserVar[money];$random[4000;15000]]]

$let[item;$replaceText[$replaceText[$randomText[piala;krupuk];piala;$getVar[e_trophy] \`1\` Piala];krupuk;$getVar[e_kerupuk] \`1\` Kerupuk]]

$globalCooldown[20m;{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Kamu perlu menunggu **%time%** untuk mengikuti lomba lagi.}}]

$else

$title[Lomba]
$addTimestamp
$thumbnail[$authorAvatar]
$description[
Kamu telah berhasil mengikuti lomba **$randomText[Makan Kerupuk;Estafet Tuang Air;Makan Bakso;Balap Karung;Panjat Pinang;Tarik Tambang]** di **$randomText[Sekolah;Lapangan;Rumah;Kota]** dan kamu kalah.. Kamu tidak mendapatkan apa apa. :neutral_face:]

$endif

$onlyIf[$getGlobalUserVar[profile]==true;{newEmbed:{title:Terjadi Kesalahan..}{description:Kamu tidak memiliki profil! Kamu perlu membuatnya terlebih dahulu untuk bisa meng-akses semua command. Kamu bisa membuatnya dengan menggunakan command#COLON# \`B!start\`}{timestamp}{thumbnail:$authorAvatar}}]
`}