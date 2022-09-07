module.exports ={
    name:"balance",
    aliases:'bal',
    code:`
$title[Dompet $username[$get[u]]]
$thumbnail[$userAvatar[$get[u]]]
$addTimestamp
$description[
$getVar[emoji] Bcash: \`$numberSeparator[$getGlobalUserVar[money;$get[u]]]\`
$getVar[e_kristal] Kristal: \`$getGlobalUserVar[kristal;$get[u]]\`

🏦 Bank: \`$numberSeparator[$getGlobalUserVar[bank;$get[u]]] Bcash\`

💰 Total: \`$numberSeparator[$sum[$getGlobalUserVar[money;$get[u]];$getGlobalUserVar[bank;$get[u]]]]\`]

$let[u;$findUser[$message;yes]]

$onlyIf[$getGlobalUserVar[profile]==true;{newEmbed:{title:Terjadi Kesalahan..}{description:Kamu tidak memiliki profil! Kamu perlu membuatnya terlebih dahulu untuk bisa meng-akses semua command. Kamu bisa membuatnya dengan menggunakan command#COLON# \`B!start\`}{timestamp}{thumbnail:$authorAvatar}}]
`}