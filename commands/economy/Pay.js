module.exports = {
 name: "kasih",
 aliases: ['bayar','transaksi'],
 code: `
$title[Transaksi Berhasil!]
$addTimestamp
$thumbnail[$authorAvatar]
$description[
Kamu telah berhasil memberi $getVar[emoji] \`$numberSeparator[$noMentionMessage] Bcash\` ke **$username[$mentioned[1]]**! Kamu sekarang memiliki \`$numberSeparator[$getGlobalUserVar[money]] Bcash.\`
]

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$mentioned[1]];$noMentionMessage];$mentioned[1]]

$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$noMentionMessage];$authorID]

$onlyIf[$noMentionMessage<=$getGlobalUserVar[money;$authorID];{newEmbed:{title:Terjadi Kesalahan..}{description:Kamu tidak memiliki Bcash sebanyak \`$numberSeparator[$noMentionMessage]\` untuk diberi.}{thumbnail:$authorAvatar}{timestamp}}]

$onlyIf[$mentioned[1]!=$authorID;{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Kamu tidak bisa memberi Bcash ke diri mu sendiri #COLON#moyai#COLON#}}]

$onlyIf[$mentioned[1]!=;{newEmbed:{title:Terjadi Kesalahan..}{description:Mention se-seorang yang ingin kamu beri Bcash! \`B!kasih <bcash> <@user>\`}{timestamp}{thumbnail:$authorAvatar}}]

$onlyIf[$isBot[$mentioned[1]]!=true;{newEmbed:{title:Terjadi Kesalahan..}{thumbnail:$authorAvatar}{timestamp}{description:Kamu tidak bisa memberi Bcash kepada bot.}}]

$onlyIf[$checkContains[$noMentionMessage;.;+;-]==false;{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Tolong masukkan jumlah Bcash yang ingin diberi dengan benar!}}]

$onlyIf[$checkContains[$noMentionMessage;0;1;2;3;4;5;6;7;8;9]==true;{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Tolong masukkan jumlah Bcash yang ingin diberi dengan benar!}}]

$onlyIf[$getGlobalUserVar[profile]==true;{newEmbed:{title:Terjadi Kesalahan..}{description:Kamu tidak memiliki profil! Kamu perlu membuatnya terlebih dahulu untuk bisa meng-akses semua command. Kamu bisa membuatnya dengan menggunakan command#COLON# \`B!start\`}{timestamp}{thumbnail:$authorAvatar}}]`
}