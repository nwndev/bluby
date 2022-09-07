module.exports =[{
    name:"bertani",
    $if:"v4",
    code:`
$if[$noMentionMessage[1]==]
$title[Bertani]
$description[
Kamu telah berhasil menanam \`1\` $getVar[e_seed] Biji-bijian, kamu bisa memanen-nya pada **$random[10;15] Menit** kedepan.]
$addTimestamp
$thumbnail[$authorAvatar]

$setGlobalUserVar[farmstatus;ongoing]
$setGlobaluserVar[farmmulti;1]
$setGlobalUserVar[farmtime;$random[10;15]]
$setGlobalUserVar[seed;$sub[$getGlobalUserVar[seed];1]]

$setTimeout[farmongoing;$random[10;15]m;{
"id": "$authorID"
}]

$onlyIf[$getGlobalUserVar[seed]>=1;{newEmbed:{title:Terjadi Kesalahan..}{description:Kamu perlu setidaknya \`1\` $getVar[e_seed] Biji-bijian untuk bertani.}{timestamp}{thumbnail:$authorAvatar}}]

$else

$title[Bertani]
$description[
Kamu telah berhasil menanam \`$noMentionMessage[1]\` $getVar[e_seed] Biji-bijian, kamu bisa memanen-nya pada **$multi[$random[10;15];$noMentionMessage[1]] Menit** kedepan.]
$addTimestamp
$thumbnail[$authorAvatar]

$setGlobalUserVar[farmstatus;ongoing]
$setGlobalUserVar[farmmulti;$noMentionMessage[1]]
$setGlobalUserVar[farmtime;$multi[$random[10;15];$noMentionMessage[1]]]
$setGlobalUserVar[seed;$sub[$getGlobalUserVar[seed];$noMentionMessage]]

$setTimeout[farmongoing;$multi[$random[10;15];$noMentionMessage[1]]m;{
"id": "$authorID"
}]

$onlyIf[$checkContains[$noMentionMessage[1];0;1;2;3;4;5;6;7;8;9]==true;{newEmbed:{title:Terjadi Kesalahan..}{description:Tolong masukkan jumlah biji-bjiian yang benar.}{timestamp}{thumbnail:$authorAvatar}}]

$onlyIf[$getGlobalUserVar[seed]>=$noMentionMessage[1];{newEmbed:{title:Terjadi Kesalahan..}{description:Kamu tidak memiliki \`$noMentionMessage[1]\` biji-bijian untuk ditanam.}{timestamp}{thumbnail:$authorAvatar}}]

$endif

$onlyIf[$getGlobalUserVar[farmstatus]==undefined;{newEmbed:{title:Terjadi Kesalahan..}{thumbnail:$authorAvatar}{timestamp}{description:Kamu baru saja menanam biji-bijian barusan, kamu tidak bisa menanam biji-bijian lagi. Kamu bisa menunggu biji-bijian mu tumbuh untuk bertani lagi.}}]

$onlyIf[$noMentionMessage[1]<=64;{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Kamu tidak bisa menanam biji-bijian lebih dari 64 sekaligus!}}]

$onlyIf[$getGlobalUserVar[profile]==true;{newEmbed:{title:Terjadi Kesalahan..}{description:Kamu tidak memiliki profil! Kamu perlu membuatnya terlebih dahulu untuk bisa meng-akses semua command. Kamu bisa membuatnya dengan menggunakan command#COLON# \`B!start\`}{timestamp}{thumbnail:$authorAvatar}}]
`},{
    name:"farmongoing",
    type:'timeout',
    code:`
$sendDm[{newEmbed:{title:Sesuatu telah tumbuh!}{timestamp}{thumbnail:$authorAvatar}{description:Biji-bijian mu yang kamu tanam telah tumbuh! Gunakan \`B!panen\` untuk memanen.}};$timeoutData[id]]

$setGlobalUserVar[farmstatus;finished;$timeoutData[id]]
`},{
    name:"panen",
    $if:"v4",
    code:`
$if[$random[1;10]==5]

$title[Panen]
$addTimestamp
$thumbnail[$authorAvatar]
$description[
Kamu mencoba untuk memanen biji-bijian mu yang tumbuh, Tetapi biji-bijian mu telah busuk! Kamu tidak mendapatkan apa-apa.]

$else

$title[Panen]
$addTimestamp
$thumbnail[$authorAvatar]
$description[Kamu telah berhasil memanen \`$multi[$random[1;5];$getGlobalUserVar[farmmulti]]\` $get[item] dari hasil bertani mu!]

$setGlobalUserVar[$get[setItem];$sum[$getGlobalUserVar[$get[setItem]];$multi[$random[1;5];$getGlobalUserVar[farmmulti]]]]

$endif

$setGlobalUserVar[farmstatus;undefined]

$let[setItem;$randomText[padi;jagung]]
$let[item;$replaceText[$replaceText[$randomText[padi;jagung];padi;$getVar[e_padi] Padi];jagung;$getVar[e_corn] Jagung]]

$onlyIf[$getGlobalUserVar[farmstatus]==finished;{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:$replaceText[$replaceText[$getGlobalUserVar[farmstatus];ongoing;Kamu tidak bisa memanen karena biji-bijian mu belum tumbuh!];undefined;Kamu tidak menanam biji-bijian apa-apa pun.]}}]

$onlyIf[$getGlobalUserVar[profile]==true;{newEmbed:{title:Terjadi Kesalahan..}{description:Kamu tidak memiliki profil! Kamu perlu membuatnya terlebih dahulu untuk bisa meng-akses semua command. Kamu bisa membuatnya dengan menggunakan command#COLON# \`B!start\`}{timestamp}{thumbnail:$authorAvatar}}]
`}]