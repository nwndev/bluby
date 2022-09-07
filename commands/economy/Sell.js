module.exports ={
    name:"jual",
    $if:"v4",
    code:`
$if[$toLowerCase[$noMentionMessage[1]]==botol]
$title[Jual]
$addTimestamp
$thumbnail[$authorAvatar]
$description[
Kamu telah berhasil menjual $getVar[e_botl] Botol sebanyak \`$get[amount]\`. Kamu mendapatkan $getVar[emoji] \`$numberSeparator[$multi[50;$get[amount]]] Bcash\`.]

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$multi[50;$get[amount]]]]

$setGlobalUserVar[botol;$sub[$getGlobalUserVar[botol];$get[amount]]]

$onlyIf[$getGlobalUserVar[botol]>=$noMentionMessage[2];{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Kamu tidak memiliki \`$noMentionMessage[2]\` Botol untuk dijual.}}]

$else
$if[$toLowerCase[$noMentionMessage[1]]==sampah]
$title[Jual]
$addTimestamp
$thumbnail[$authorAvatar]
$description[
Kamu telah berhasil menjual $getVar[e_grbg] Sampah sebanyak \`$get[amount]\`. Kamu mendapatkan $getVar[emoji] \`$numberSeparator[$multi[50;$get[amount]]] Bcash\`.]

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$multi[55;$get[amount]]]]

$setGlobalUserVar[sampah;$sub[$getGlobalUserVar[sampah];$get[amount]]]

$onlyIf[$getGlobalUserVar[sampah]>=$noMentionMessage[2];{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Kamu tidak memiliki \`$noMentionMessage[2]\` Sampah untuk dijual.}}]

$else
$if[$toLowerCase[$noMentionMessage[1]]==ikan]
$title[Jual]
$addTimestamp
$thumbnail[$authorAvatar]
$description[
Kamu telah berhasil menjual $getVar[e_fish] Ikan sebanyak \`$get[amount]\`. Kamu mendapatkan $getVar[emoji] \`$numberSeparator[$multi[65;$get[amount]]] Bcash\`.]

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$multi[65;$get[amount]]]]

$setGlobalUserVar[ikan;$sub[$getGlobalUserVar[ikan];$get[amount]]]

$onlyIf[$getGlobalUserVar[ikan]>=$noMentionMessage[2];{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Kamu tidak memiliki \`$noMentionMessage[2]\` Ikan untuk dijual.}}]

$else
$if[$toLowerCase[$noMentionMessage[1]]==emas]
$title[Jual]
$addTimestamp
$thumbnail[$authorAvatar]
$description[
Kamu telah berhasil menjual $getVar[e_emas] Emas sebanyak \`$get[amount]\`. Kamu mendapatkan $getVar[emoji] \`$numberSeparator[$multi[250;$get[amount]]] Bcash\`.]

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$multi[250;$get[amount]]]]

$setGlobalUserVar[emas;$sub[$getGlobalUserVar[emas];$get[amount]]]

$onlyIf[$getGlobalUserVar[emas]>=$noMentionMessage[2];{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Kamu tidak memiliki \`$noMentionMessage[2]\` Emas untuk dijual.}}]

$else
$if[$toLowerCase[$noMentionMessage[1]]==rusa]
$title[Jual]
$addTimestamp
$thumbnail[$authorAvatar]
$description[
Kamu telah berhasil menjual 🦌 Rusa sebanyak \`$get[amount]\`. Kamu mendapatkan $getVar[emoji] \`$numberSeparator[$multi[150;$get[amount]]] Bcash\`.]

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$multi[150;$get[amount]]]]

$setGlobalUserVar[deer;$sub[$getGlobalUserVar[deer];$get[amount]]]

$onlyIf[$getGlobalUserVar[deer]>=$noMentionMessage[2];{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Kamu tidak memiliki \`$noMentionMessage[2]\` Rusa untuk dijual.}}]

$else
$if[$toLowerCase[$noMentionMessage[1]]==kertas]
$title[Jual]
$addTimestamp
$thumbnail[$authorAvatar]
$description[
Kamu telah berhasil menjual 📰 Kertas sebanyak \`$get[amount]\`. Kamu mendapatkan $getVar[emoji] \`$numberSeparator[$multi[30;$get[amount]]] Bcash\`.]

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$multi[30;$get[amount]]]]

$setGlobalUserVar[kertas;$sub[$getGlobalUserVar[kertas];$get[amount]]]

$onlyIf[$getGlobalUserVar[kertas]>=$noMentionMessage[2];{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Kamu tidak memiliki \`$noMentionMessage[2]\` Kertas untuk dijual.}}]

$else
$if[$toLowerCase[$noMentionMessage[1]]==batu]
$title[Jual]
$addTimestamp
$thumbnail[$authorAvatar]
$description[
Kamu telah berhasil menjual :rock: Batu sebanyak \`$get[amount]\`. Kamu mendapatkan $getVar[emoji] \`$numberSeparator[$multi[45;$get[amount]]] Bcash\`.]

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$multi[45;$get[amount]]]]

$setGlobalUserVar[batu;$sub[$getGlobalUserVar[batu];$get[amount]]]

$onlyIf[$getGlobalUserVar[batu]>=$noMentionMessage[2];{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Kamu tidak memiliki \`$noMentionMessage[2]\` Batu untuk dijual.}}]

$else
$if[$toLowerCase[$noMentionMessage[1]]==emas]
$title[Jual]
$addTimestamp
$thumbnail[$authorAvatar]
$description[
Kamu telah berhasil menjual :bear: Beruang sebanyak \`$get[amount]\`. Kamu mendapatkan $getVar[emoji] \`$numberSeparator[$multi[200;$get[amount]]] Bcash\`.]

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$multi[200;$get[amount]]]]

$setGlobalUserVar[bear;$sub[$getGlobalUserVar[bear];$get[amount]]]

$onlyIf[$getGlobalUserVar[gold]>=$noMentionMessage[2];{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Kamu tidak memiliki \`$noMentionMessage[2]\` Emas untuk dijual.}}]

$else
$title[Terjadi Kesalahan..]
$addTimestamp
$thumbnail[$authorAvatar]
$description[
Barang tersebut tidak ada. Tolong masukkan nama barang yang benar!]
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif

$onlyIf[$isNumber[$noMentionMessage[2]]==true;{newEmbed:{title:Terjadi Kesalahan..}{thumbnail:$authorAvatar}{timestamp}{description:Tolong masukkan jumlah barang yang ingin dijual dengan benar!}}]

$onlyIf[$checkContains[$noMentionMessage[2];+;-;.]==false;{newEmbed:{title:Terjadi Kesalahan..}{thumbnail:$authorAvatar}{timestamp}{description:Tolong masukkan jumlah barang yang ingin dijual dengan benar!}}]

$onlyIf[$checkCondition[$noMentionMessage[2]==0]==false;{newEmbed:{title:Terjadi Kesalahan..}{thumbnail:$authorAvatar}{timestamp}{description:Tolong masukkan jumlah barang yang ingin dijual dengan benar!}}]

$onlyIf[$checkContains[$noMentionMessage[1];ikan;emas;botol;sampah;rusa;beruang;batu;kertas]==true;{newEmbed:{title:Terjadi Kesalahan..}{thumbnail:$authorAvatar}{timestamp}{description:Tolong masukkan nama barang yang benar!}}]

$onlyIf[$getGlobalUserVar[profile]==true;{newEmbed:{title:Terjadi Kesalahan..}{description:Kamu tidak memiliki profil! Kamu perlu membuatnya terlebih dahulu untuk bisa meng-akses semua command. Kamu bisa membuatnya dengan menggunakan command#COLON# \`B!start\`}{timestamp}{thumbnail:$authorAvatar}}]

$argsCheck[>0;{newEmbed:{title:Terjadi kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Tolong masukkan jumlah barang yang ingin dijual!}}]
$argsCheck[>1;{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Tolong masukkan nama barang yang ingin dijual!}}]

$let[amount;$noMentionMessage[2]]
`}