module.exports ={
    name:"saran",
    code:`
$title[Saran]
$addTimestamp
$thumbnail[$authorAvatar]
$description[
Terima kasih telah memberi saran! Saran mu telah dikirim ke developer. Tenang saja, saran mu anonimus.]

$sendDm[{newEmbed:{title:Saran baru!}{thumbnail:$authorAvatar}{timestamp}{footer:Saran oleh $usertag}{description:
\`\`\`
$message
\`\`\`}};$botOwnerID]

$onlyIf[$charCount[$message]<=360;{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Kamu tidak bisa memberi saran dengan menggunakan lebih dari 360 karakter/huruf.}}]

$argsCheck[>0;{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Tolong masukkan saran yang ingin diberi ke developer.}}]

$onlyIf[$getGlobalUserVar[profile]==true;{newEmbed:{title:Terjadi Kesalahan..}{description:Kamu tidak memiliki profil! Kamu perlu membuatnya terlebih dahulu untuk bisa meng-akses semua command. Kamu bisa membuatnya dengan menggunakan command#COLON# \`B!start\`}{timestamp}{thumbnail:$authorAvatar}}]
`}