module.exports ={
    name:"tukar",
    $if:"v4",
    code:`
$if[$noMentionMessage[1]==]
$title[Tukar]
$thumbnail[$authorAvatar]
$addTimestamp
$description[
Kamu telah berhasil menukar \`$getVar[itempricebox]\` $getVar[itemtradedisplay] dan kamu mendapatkan \`$getVar[boxamountrefresh]\` 📦 Kotak Misterius.]

$setGlobalUserVar[box;$sum[$getGlobalUserVar[box];$getVar[boxamountrefresh]]]

$setGlobalUserVar[$getVar[itemtradebox];$sub[$getGlobalUserVar[$getVar[itemtradebox]];$getVar[itempricebox]]]

$onlyIf[$getGlobalUserVar[$getVar[itemtradebox]]>=$getVar[itempricebox];{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Kamu tidak memiliki \`$getVar[itempricebox]\` $getVar[itemtradedisplay] untuk di tukar menjadi kotak misterius.}}]

$else
$title[Tukar]
$thumbnail[$authorAvatar]
$addTimestamp
$description[
Kamu telah berhasil menukar \`$multi[$getVar[itempricebox];$noMentionMessage[1]]\` $getVar[itemtradedisplay] dan kamu mendapatkan \`$multi[$getVar[boxamountrefresh];$noMentionMessage[1]]\` 📦 Kotak Misterius.]

$setGlobalUserVar[box;$sum[$getGlobalUserVar[box];$multi[$getVar[boxamountrefresh];$noMentionMessage[1]]]]

$setGlobalUserVar[$getVar[itemtradebox];$sub[$getGlobalUserVar[$getVar[itemtradebox]];$multi[$getVar[itempricebox];$noMentionMessage[1]]]]

$onlyIf[$getGlobalUserVar[$getVar[itemtradebox]]>=$multi[$getVar[itempricebox];$noMentionMessage[1]];{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Kamu tidak memiliki \`$getVar[itempricebox]\` $getVar[itemtradedisplay] untuk di tukar menjadi kotak misterius.}}]

$onlyIf[$checkContains[$noMentionMessage[1];1;2;3;4;5;6;7;8;9;0]==true;{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Tolong masukkan jumlah yang benar!}}]
$endif

$onlyIf[$getGlobalUserVar[profile]==true;{newEmbed:{title:Terjadi Kesalahan..}{description:Kamu tidak memiliki profil! Kamu perlu membuatnya terlebih dahulu untuk bisa meng-akses semua command. Kamu bisa membuatnya dengan menggunakan command#COLON# \`B!start\`}{timestamp}{thumbnail:$authorAvatar}}]
`}