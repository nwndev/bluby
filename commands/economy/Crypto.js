module.exports =[{
    name:"blypto",
    code:`
$title[Blypto]
$thumbnail[$userAvatar[$clientID]]
$addTimestamp
$description[
💵 **Bitcash** ($getGlobalUserVar[bitcash])
Harga: $getVar[emoji] \`$numberSeparator[$getVar[harga_bitcash]] Bcash\`

:coin: **PoopCoin** ($getGlobalUserVar[poopcoin])
Harga: $getVar[emoji] \`$numberSeparator[$getVar[harga_poopcoin]] Bcash\`

💎 **Ethernal** ($getGlobalUserVar[ethernal])
Harga: $getVar[emoji] \`$numberSeparator[$getVar[harga_ethernal]] Bcash\`

Harga mata uang Blypto bisa berubah kapan saja.

Terakhir berubah pada: <t:$cropText[$getVar[lastrefresh];10]:R>]
$addButton[1;Beli;secondary;belimain;no;]
$addButton[1;Jual;secondary;jualmain;no;]

$onlyIf[$getGlobalUserVar[profile]==true;{newEmbed:{title:Terjadi Kesalahan..}{description:Kamu tidak memiliki profil! Kamu perlu membuatnya terlebih dahulu untuk bisa meng-akses semua command. Kamu bisa membuatnya dengan menggunakan command#COLON# \`B!start\`}{timestamp}{thumbnail:$authorAvatar}}]
`},{
    name:"jualmain",
    prototype:'button',
    type:'interaction',
    code:`
$interactionReply[;{newEmbed:{title:Blypto}{thumbnail:$authorAvatar}{timestamp}{description:Kamu ingin jual mata uang Blypto apa? Kamu memiliki#COLON#

💵 **Bitcash**#COLON# \`$getGlobalUserVar[bitcash]\`

#COLON#coin#COLON# **PoopCoin**#COLON# \`$getGlobalUserVar[poopcoin]\`

💎 **Ethernal**#COLON# \`$getGlobalUserVar[ethernal]\`}{field:Harga:
💵 Bitcash#COLON# \`$numberSeparator[$getVar[harga_bitcash]]\`

#COLON#coin#COLON# PoopCoin#COLON# \`$numberSeparator[$getVar[harga_poopcoin]]\`

💎 Ethernal#COLON# \`$numberSeparator[$getVar[harga_ethernal]]\`}};{actionRow:{button:Bitcash:secondary:jualbitcash:no:💵}{button:PoopCoin:secondary:jualpoopcoin:no:🪙}{button:Ethernal:secondary:jualethernal:no:💎}};;;yes]
`},{
    name:"jualbitcash",
    prototype:'button',
    type:'interaction',
    code:`
$interactionUpdate[;{newEmbed:{title:Blypto}{thumbnail:$authorAvatar}{timestamp}{description:Kamu ingin jual mata uang Blypto apa? Kamu memiliki#COLON#

💵 **Bitcash**#COLON# \`$getGlobalUserVar[bitcash]\`

#COLON#coin#COLON# **PoopCoin**#COLON# \`$getGlobalUserVar[poopcoin]\`

💎 **Ethernal**#COLON# \`$getGlobalUserVar[ethernal]\`}{field:Harga:
💵 Bitcash#COLON# \`$numberSeparator[$getVar[harga_bitcash]]\`

#COLON#coin#COLON# PoopCoin#COLON# \`$numberSeparator[$getVar[harga_poopcoin]]\`

💎 Ethernal#COLON# \`$numberSeparator[$getVar[harga_ethernal]]\`

Kamu telah berhasil menjual \`1\` 💵 **Bitcash!** Kamu sekarang memiliki $nonEscape[$getVar[emoji]] \`$numberSeparator[$getGlobalUserVar[money]] Bcash\`. }};{actionRow:{button:Bitcash:secondary:jualbitcash:no:💵}{button:PoopCoin:secondary:jualpoopcoin:no:🪙}{button:Ethernal:secondary:jualethernal:no:💎}};;;yes]

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$getVar[harga_bitcash]]]

$setGlobalUserVar[bitcash;$sub[$getGlobalUserVar[bitcash];1]]

$onlyIf[$getGlobalUserVar[bitcash]>=1;{
"content": "❌ Kamu tidak memiliki cukup Bitcash untuk dijual!",
"options": {"interaction": true},
"ephemeral": true
}]
`},{
    name:"jualpoopcoin",
    prototype:'button',
    type:'interaction',
    code:`
$interactionUpdate[;{newEmbed:{title:Blypto}{thumbnail:$authorAvatar}{timestamp}{description:Kamu ingin jual mata uang Blypto apa? Kamu memiliki#COLON#

💵 **Bitcash**#COLON# \`$getGlobalUserVar[bitcash]\`

#COLON#coin#COLON# **PoopCoin**#COLON# \`$getGlobalUserVar[poopcoin]\`

💎 **Ethernal**#COLON# \`$getGlobalUserVar[ethernal]\`}{field:Harga:
💵 Bitcash#COLON# \`$numberSeparator[$getVar[harga_bitcash]]\`

#COLON#coin#COLON# PoopCoin#COLON# \`$numberSeparator[$getVar[harga_poopcoin]]\`

💎 Ethernal#COLON# \`$numberSeparator[$getVar[harga_ethernal]]\`

Kamu telah berhasil menjual \`1\` 🪙 **PoopCoin!** Kamu sekarang memiliki $nonEscape[$getVar[emoji]] \`$numberSeparator[$getGlobalUserVar[money]] Bcash\`. }};{actionRow:{button:Bitcash:secondary:jualbitcash:no:💵}{button:PoopCoin:secondary:jualpoopcoin:no:🪙}{button:Ethernal:secondary:jualethernal:no:💎}};;;yes]

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$getVar[harga_poopcoin]]]

$setGlobalUserVar[poopcoin;$sub[$getGlobalUserVar[poopcoin];1]]

$onlyIf[$getGlobalUserVar[poopcoin]>=1;{
"content": "❌ Kamu tidak memiliki cukup PoopCoin untuk dijual!",
"options": {"interaction": true},
"ephemeral": true
}]
`},{
    name:"jualethernal",
    prototype:'button',
    type:'interaction',
    code:`
$interactionUpdate[;{newEmbed:{title:Blypto}{thumbnail:$authorAvatar}{timestamp}{description:Kamu ingin jual mata uang Blypto apa? Kamu memiliki#COLON#

💵 **Bitcash**#COLON# \`$getGlobalUserVar[bitcash]\`

#COLON#coin#COLON# **PoopCoin**#COLON# \`$getGlobalUserVar[poopcoin]\`

💎 **Ethernal**#COLON# \`$getGlobalUserVar[ethernal]\`}{field:Harga:
💵 Bitcash#COLON# \`$numberSeparator[$getVar[harga_bitcash]]\`

#COLON#coin#COLON# PoopCoin#COLON# \`$numberSeparator[$getVar[harga_poopcoin]]\`

💎 Ethernal#COLON# \`$numberSeparator[$getVar[harga_ethernal]]\`

Kamu telah berhasil menjual \`1\` 💎 **Ethernal!** Kamu sekarang memiliki $nonEscape[$getVar[emoji]] \`$numberSeparator[$getGlobalUserVar[money]] Bcash\`. }};{actionRow:{button:Bitcash:secondary:jualbitcash:no:💵}{button:PoopCoin:secondary:jualpoopcoin:no:🪙}{button:Ethernal:secondary:jualethernal:no:💎}};;;yes]

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$getVar[harga_ethernal]]]

$setGlobalUserVar[ethernal;$sub[$getGlobalUserVar[ethernal];1]]

$onlyIf[$getGlobalUserVar[ethernal]>=1;{
"content": "❌ Kamu tidak memiliki cukup Ethernal untuk dijual!",
"options": {"interaction": true},
"ephemeral": true
}]
`},
// BELI BELI BELI BELI
   {
       name:"belimain",
       prototype:'button',
       type:'interaction',
       code:`
$interactionReply[;{newEmbed:{title:Blypto}{thumbnail:$authorAvatar}{timestamp}{description:Kamu ingin beli mata uang Blypto apa? Kamu memiliki $getVar[emoji] \`$numberSeparator[$getGlobalUserVar[money]] Bcash\`.}{field:Harga:
💵 Bitcash#COLON# \`$numberSeparator[$getVar[harga_bitcash]]\`

#COLON#coin#COLON# PoopCoin#COLON# \`$numberSeparator[$getVar[harga_poopcoin]]\`

💎 Ethernal#COLON# \`$numberSeparator[$getVar[harga_ethernal]]\`}};{actionRow:{button:Bitcash:secondary:belibitcash:no:💵}{button:PoopCoin:secondary:belipoopcoin:no:🪙}{button:Ethernal:secondary:beliethernal:no:💎}};;;yes]
`},{
    name:"belibitcash",
    prototype:'button',
    type:'interaction',
    code:`
$interactionUpdate[;{newEmbed:{title:Blypto}{thumbnail:$authorAvatar}{timestamp}{description:Kamu ingin beli mata uang Blypto apa? Kamu memiliki $getVar[emoji] \`$numberSeparator[$getGlobalUserVar[money]] Bcash\`.}{field:Harga:
💵 Bitcash#COLON# \`$numberSeparator[$getVar[harga_bitcash]]\`

#COLON#coin#COLON# PoopCoin#COLON# \`$numberSeparator[$getVar[harga_poopcoin]]\`

💎 Ethernal#COLON# \`$numberSeparator[$getVar[harga_ethernal]]\`

Kamu telah berhasil membeli \`1\` 💵 **Bitcash!** Kamu sekarang memiliki \`$getGlobalUserVar[bitcash]\` Bitcash.}};{actionRow:{button:Bitcash:secondary:belibitcash:no:💵}{button:PoopCoin:secondary:belipoopcoin:no:🪙}{button:Ethernal:secondary:beliethernal:no:💎}};;;yes]

$setGlobalUserVar[bitcash;$sum[$getGlobalUserVar[bitcash];1]]

$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];$getVar[harga_bitcash]]]

$onlyIf[$getGlobalUserVar[money]>=$getVar[harga_bitcash];{
"content": "❌ Kamu tidak memiliki cukup Bcash untuk membeli Bitcash!",
"options": {"interaction": true},
"ephemeral": true
}]
`},{
    name:"belipoopcoin",
    prototype:'button',
    type:'interaction',
    code:`
$interactionUpdate[;{newEmbed:{title:Blypto}{thumbnail:$authorAvatar}{timestamp}{description:Kamu ingin beli mata uang Blypto apa? Kamu memiliki $getVar[emoji] \`$numberSeparator[$getGlobalUserVar[money]] Bcash\`.}{field:Harga:
💵 Bitcash#COLON# \`$numberSeparator[$getVar[harga_bitcash]]\`

#COLON#coin#COLON# PoopCoin#COLON# \`$numberSeparator[$getVar[harga_poopcoin]]\`

💎 Ethernal#COLON# \`$numberSeparator[$getVar[harga_ethernal]]\`

Kamu telah berhasil membeli \`1\` 🪙 **PoopCoin!** Kamu sekarang memiliki \`$getGlobalUserVar[poopcoin]\` PoopCoin.}};{actionRow:{button:Bitcash:secondary:belibitcash:no:💵}{button:PoopCoin:secondary:belipoopcoin:no:🪙}{button:Ethernal:secondary:beliethernal:no:💎}};;;yes]

$setGlobalUserVar[poopcoin;$sum[$getGlobalUserVar[poopcoin];1]]

$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];$getVar[harga_poopcoin]]]

$onlyIf[$getGlobalUserVar[money]>=$getVar[harga_poopcoin];{
"content": "❌ Kamu tidak memiliki cukup Bcash untuk membeli PoopCoin!",
"options": {"interaction": true},
"ephemeral": true
}]
`},{
    name:"beliethernal",
    type:'interaction',
    prototype:'button',
    code:`
$interactionUpdate[;{newEmbed:{title:Blypto}{thumbnail:$authorAvatar}{timestamp}{description:Kamu ingin beli mata uang Blypto apa? Kamu memiliki $getVar[emoji] \`$numberSeparator[$getGlobalUserVar[money]] Bcash\`.}{field:Harga:
💵 Bitcash#COLON# \`$numberSeparator[$getVar[harga_bitcash]]\`

#COLON#coin#COLON# PoopCoin#COLON# \`$numberSeparator[$getVar[harga_poopcoin]]\`

💎 Ethernal#COLON# \`$numberSeparator[$getVar[harga_ethernal]]\`

Kamu telah berhasil membeli \`1\` 💎 **Ethernal!** Kamu sekarang memiliki \`$getGlobalUserVar[ethernal]\` Ethernal.}};{actionRow:{button:Bitcash:secondary:belibitcash:no:💵}{button:PoopCoin:secondary:belipoopcoin:no:🪙}{button:Ethernal:secondary:beliethernal:no:💎}};;;yes]

$setGlobalUserVar[ethernal;$sum[$getGlobalUserVar[ethernal];1]]

$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];$getVar[harga_ethernal]]]

$onlyIf[$getGlobalUserVar[money]>=$getVar[harga_ethernal];{
"content": "❌ Kamu tidak memiliki cukup Bcash untuk membeli Ethernal!",
"options": {"interaction": true},
"ephemeral": true
}]
`}]