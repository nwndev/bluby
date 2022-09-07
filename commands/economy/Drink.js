module.exports =[{
    name:"minum",
    code:`
$title[Meminum Ramuan Energi]
$addTimestamp
$thumbnail[$authorAvatar]
$description[
Kamu telah meminum ramuan energi mu, sekarang pendapatan mu dari \`kerja\` dan \`ngemis\` ditingkatkan sebanyak 20% selama **15 Menit.** Kamu sekarang memiliki $getVar[e_pot] \`$getGlobalUserVar[potion]\` Ramuan Energi.]

$setGlobalUserVar[potion;$sub[$getGlobalUserVar[potion];1]]
$setGlobalUserVar[potionstatus;used]
$setGlobalUserVar[salarywork;$sum[$getGlobalUserVar[salarywork];2000]]
$setGlobalUserVar[salarybeg;$sum[$getGlobalUserVar[salarybeg];240]]

$setTimeout[potongoin;15m;{
"id": "$authorID"
}]

$onlyIf[$getGlobalUserVar[potion]>=1;{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Kamu tidak memiliki ramuan energi untuk diminum.}}]

$onlyIf[$getGlobalUserVar[potionstatus]==undefined;{newEmbed:{title:Terjadi Kesalahan..}{timestamp}{thumbnail:$authorAvatar}{description:Ramuan Energi mu sedang aktif! Kamu tidak bisa meminum nya lagi.}}]

$onlyIf[$getGlobalUserVar[profile]==true;{newEmbed:{title:Terjadi Kesalahan..}{description:Kamu tidak memiliki profil! Kamu perlu membuatnya terlebih dahulu untuk bisa meng-akses semua command. Kamu bisa membuatnya dengan menggunakan command#COLON# \`B!start\`}{timestamp}{thumbnail:$authorAvatar}}]
`},{
    name:"potongoin",
    type:'timeout',
    code:`
$sendDm[{newEmbed:{title:Sesuatu telah  kadaluwarsa!}{timestamp}{thumbnail:$authorAvatar}{description:Ramuan Energi mu telah kadaluwarsa, pendapatan mu telah dikembalikan seperti semula.}};$timeoutData[id]]

$setGlobalUserVar[potionstatus;undefined]
$setGlobalUserVar[salarywork;$getVar[salarywork]]
$setGlobalUserVar[salarybeg;$getVar[salarybeg]]
`}]