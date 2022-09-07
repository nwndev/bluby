module.exports ={
    name:"penukaran",
    code:`
$title[Penukaran Kotak Misterius]
$thumbnail[$authorAvatar]
$addTimestamp
$description[
\`$getVar[boxamountrefresh]\` 📦 **Kotak Misterius:**
- \`$getVar[itempricebox]\` $getVar[itemtradedisplay]

Jumlah kotak misterius, barang tukaran, dan jumlah barang tukaran akan berubah kapan saja.

\`B!tukar <jumlah>\`

Terakhir berubah pada: <t:$cropText[$getVar[lastboxrefresh];10]:R>]

$onlyIf[$getGlobalUserVar[profile]==true;{newEmbed:{title:Terjadi Kesalahan..}{description:Kamu tidak memiliki profil! Kamu perlu membuatnya terlebih dahulu untuk bisa meng-akses semua command. Kamu bisa membuatnya dengan menggunakan command#COLON# \`B!start\`}{timestamp}{thumbnail:$authorAvatar}}]
`}