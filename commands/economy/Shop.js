module.exports = [{
    name:"toko",
    aliases:'shop',
    code:`
$title[Toko Mang Adi 100% ril]
$thumbnail[https://media.discordapp.net/attachments/889766192154284075/999233306379943936/shop.png?width=427&height=427]
$addTimestamp
$description[
Jika ingin membeli barang, tekan dropdown bawah ini dan pilih barang yang ingin kamu beli.

$getVar[e_seed] **Biji-bijian**
Harga: $getVar[emoji] \`$numberSeparator[$getVar[seedprice]]Bcash\` | Terakhir berubah pada: <t:$cropText[$getVar[refreshseedtime];10]:R>

$getVar[e_rod] **Pancingan**
Harga: $getVar[emoji] \`100,000 Bcash\`.
> *Mancing mania mantap!* 😎 👍

:pick: **Beliung**
Harga: $getVar[emoji] \`110,000 Bcash\`.
> *Mining is.. life? bruh* 💀

$getVar[e_laptop] **Laptop**
Harga: $getVar[emoji] \`150,000 Bcash\`.
> *Cita-cita ingin menjadi yutuber*

$getVar[e_pistol] **Pistol**
Harga: $getVar[emoji] \`230,000 Bcash\`.
> *Memicu Adrenalin*

$getVar[e_pot] **Ramuan Energi**
Harga: $getVar[e_kristal] \`10 Kristal\`.
> *Minuman ber-energi yang mantap enak menyegarkan berkualitas tinggi dari penyihir yang profesional* 💪 💀]
$addSelectMenu[1;beli;Pilih barang...;1;1;no;Biji-bijian:Dengan barang ini, kamu bisa bertani.:biji::<:bijih:1002183030296809542>;Pancingan:Dengan barang ini, Kamu bisa memancing!:pancingan::<:pancingan:997763172771573781>;Laptop:Dengan barang ini, Kamu bisa live stream!:laptop::<:leptop:997783302993883197>;Beliung:Dengan barang ini, Kamu bisa nambang!:pickaxe::⛏️;Pistol:Dengan barang ini, Kamu bisa berburu hewan!:pistol::<:pistoljir:999230445273239592>;Ramuan Energi:Ramuan yang membuat mu menjadi lebih semangat bekerja dan mengemis!:potion::<:ramuan:999264973488398406>]

$onlyIf[$getGlobalUserVar[profile]==true;{newEmbed:{title:Terjadi Kesalahan..}{description:Kamu tidak memiliki profil! Kamu perlu membuatnya terlebih dahulu untuk bisa meng-akses semua command. Kamu bisa membuatnya dengan menggunakan command#COLON# \`B!start\`}{timestamp}{thumbnail:$authorAvatar}}]
`},{
    name:"beli",
    prototype:'selectMenu',
    type:'interaction',
    code:`
$interactionReply[;{newEmbed:{title:Toko Mang Adi 100% ril}{timestamp}{thumbnail:https://media.discordapp.net/attachments/889766192154284075/999233306379943936/shop.png?width=427&height=427}{description:
Kamu telah berhasil membeli $nonEscape[$getVar[e_rod]] **Pancingan** dengan harga $nonEscape[$getVar[emoji]] \`100,000 Bcash\`!}};;;;yes]

$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];100000]]

$setGlobalUserVar[pancingan;$sum[$getGlobalUserVar[pancingan];1]]

$onlyIf[$getGlobalUserVar[money]>=100000;{
"content": "❌ Kamu tidak memiliki cukup Bcash untuk membeli Pancingan!",
"options": {"interaction": true},
"ephemeral": true
}]

$onlyIf[$interactionData[values[0]]==pancingan;]
`},{
    name:"beli",
    prototype:'selectMenu',
    type:'interaction',
    code:`
$interactionReply[;{newEmbed:{title:Toko Mang Adi 100% ril}{timestamp}{thumbnail:https://media.discordapp.net/attachments/889766192154284075/999233306379943936/shop.png?width=427&height=427}{description:
Kamu telah berhasil membeli $nonEscape[$getVar[e_laptop]] **Laptop** dengan harga $nonEscape[$getVar[emoji]] \`150,000 Bcash\`!}};;;;yes]

$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];150000]]

$setGlobalUserVar[laptop;$sum[$getGlobalUserVar[laptop];1]]

$onlyIf[$getGlobalUserVar[money]>=150000;{
"content": "❌ Kamu tidak memiliki cukup Bcash untuk membeli Laptop!",
"options": {"interaction": true},
"ephemeral": true
}]

$onlyIf[$interactionData[values[0]]==laptop;]
`},{
    name:"beli",
    prototype:'selectMenu',
    type:'interaction',
    code:`
$interactionReply[;{newEmbed:{title:Toko Mang Adi 100% ril}{timestamp}{thumbnail:https://media.discordapp.net/attachments/889766192154284075/999233306379943936/shop.png?width=427&height=427}{description:
Kamu telah berhasil membeli $nonEscape[:pick:] **Beliung** dengan harga $nonEscape[$getVar[emoji]] \`110,000 Bcash\`!}};;;;yes]

$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];110000]]

$setGlobalUserVar[pickaxe;$sum[$getGlobalUserVar[pickaxe];1]]

$onlyIf[$getGlobalUserVar[money]>=110000;{
"content": "❌ Kamu tidak memiliki cukup Bcash untuk membeli Pickaxe!",
"options": {"interaction": true},
"ephemeral": true
}]

$onlyIf[$interactionData[values[0]]==pickaxe;]
`},{
    name:"beli",
    prototype:'selectMenu',
    type:'interaction',
    code:`
$interactionReply[;{newEmbed:{title:Toko Mang Adi 100% ril}{timestamp}{thumbnail:https://media.discordapp.net/attachments/889766192154284075/999233306379943936/shop.png?width=427&height=427}{description:
Kamu telah berhasil membeli $nonEscape[$getVar[e_pistol]] **Pistol** dengan harga $nonEscape[$getVar[emoji]] \`230,000 Bcash\`!}};;;;yes]

$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];230000]]

$setGlobalUserVar[pistol;$sum[$getGlobalUserVar[pistol];1]]

$onlyIf[$getGlobalUserVar[money]>=230000;{
"content": "❌ Kamu tidak memiliki cukup Bcash untuk membeli Pistol!",
"options": {"interaction": true},
"ephemeral": true
}]

$onlyIf[$interactionData[values[0]]==pistol;]
`},{
    name:"beli",
    prototype:'selectMenu',
    type:'interaction',
    code:`
$interactionReply[;{newEmbed:{title:Toko Mang Adi 100% ril}{timestamp}{thumbnail:https://media.discordapp.net/attachments/889766192154284075/999233306379943936/shop.png?width=427&height=427}{description:
Kamu telah berhasil membeli $nonEscape[$getVar[e_pot]] **Ramuan Energi** dengan harga $nonEscape[$getVar[kristal]] \`10 Kristal\`!}};;;;yes]

$setGlobalUserVar[kristal;$sub[$getGlobalUserVar[kristal];10]]

$setGlobalUserVar[potion;$sum[$getGlobalUserVar[potion];1]]

$onlyIf[$getGlobalUserVar[kristal]>=10;{
"content": "❌ Kamu tidak memiliki cukup Kristal untuk membeli Ramuan Energi!",
"options": {"interaction": true},
"ephemeral": true
}]

$onlyIf[$interactionData[values[0]]==potion;]
`},{
    name:"beli",
    prototype:'selectMenu',
    type:'interaction',
    code:`
$interactionReply[;{newEmbed:{title:Toko Mang Adi 100% ril}{timestamp}{thumbnail:https://media.discordapp.net/attachments/889766192154284075/999233306379943936/shop.png?width=427&height=427}{description:
Kamu telah berhasil membeli $nonEscape[$getVar[e_seed]] **Biji-bijian** dengan harga $nonEscape[$getVar[emoji]] \`$numberSeparator[$getVar[seedprice]] Bcash\`! Kamu sekarang memiliki \`$getGlobalUserVar[seed]\` Biji-bijian.}};{actionRow:{button:Beli Lagi:primary:beliseed:no:}};;;yes]

$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];$getVar[seedprice]]]

$setGlobalUserVar[seed;$sum[$getGlobalUserVar[seed];1]]

$onlyIf[$getGlobalUserVar[money]>=$getVar[seedprice];{
"content": "❌ Kamu tidak memiliki cukup Bcash untuk membeli Biji-bijian!",
"options": {"interaction": true},
"ephemeral": true
}]

$onlyIf[$interactionData[values[0]]==biji;]
`},{
    name:"beliseed",
    prototype:'button',
    type:'interaction',
    code:`
$interactionUpdate[;{newEmbed:{title:Toko Mang Adi 100% ril}{timestamp}{thumbnail:https://media.discordapp.net/attachments/889766192154284075/999233306379943936/shop.png?width=427&height=427}{description:
Kamu telah berhasil membeli $nonEscape[$getVar[e_seed]] **Biji-bijian** dengan harga $nonEscape[$getVar[emoji]] \`$numberSeparator[$getVar[seedprice]] Bcash\`! Kamu sekarang memiliki \`$getGlobalUserVar[seed]\` Biji-bijian.}};{actionRow:{button:Beli Lagi:primary:beliseed:no:}};;;yes]

$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];$getVar[seedprice]]]

$setGlobalUserVar[seed;$sum[$getGlobalUserVar[seed];1]]

$onlyIf[$getGlobalUserVar[money]>=$getVar[seedprice];{
"content": "❌ Kamu tidak memiliki cukup Bcash untuk membeli Biji-bijian!",
"options": {"interaction": true},
"ephemeral": true
}]
`}]