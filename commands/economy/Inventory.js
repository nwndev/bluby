module.exports ={
    name:"inventory",
    aliases:'inv',
    code:`
$title[Inventory $username[$get[u]]]
$thumbnail[$userAvatar[$get[u]]]
$addTimestamp
$description[
**Yang Dapat Digunakan:**
$getVar[e_rod] Pancingan: \`$getGlobalUserVar[pancingan;$get[u]]\`
$getVar[e_laptop] Laptop: \`$getGlobalUserVar[laptop;$get[u]]\`
:pick: Beliung: \`$getGlobalUserVar[pickaxe;$get[u]]\`
$getVar[e_pistol] Pistol: \`$getGlobalUserVar[pistol;$get[u]]\`
📦 Kotak Misterius: \`$getGlobalUserVar[box;$get[u]]\`
$getVar[e_pot] Ramuan Energi: \`$getGlobalUserVar[potion;$get[u]]\`

**Yang Dapat Dijual:**
$getVar[e_grbg] Sampah: \`$getGlobalUserVar[sampah;$get[u]]\`
$getVar[e_botl] Botol: \`$getGlobalUserVar[botol;$get[u]]\`
📰 Kertas: \`$getGlobalUserVar[kertas;$get[u]]\`
$getVar[e_fish] Ikan: \`$getGlobalUserVar[ikan;$get[u]]\`
🦌 Rusa: \`$getGlobalUserVar[deer;$get[u]]\`
🐻 Beruang: \`$getGlobalUserVar[beruang;$get[u]]\`
🍖 Daging: \`$getGlobalUserVar[daging;$get[u]]\`
:rock: Batu: \`$getGlobalUserVar[batu;$get[u]]\`
$getVar[e_emas] Emas: \`$getGlobalUserVar[emas;$get[u]]\`
$getVar[e_seed] Biji-bijian: \`$getGlobalUserVar[seed;$get[u]]\`
$getVar[e_padi] Padi: \`$getGlobalUserVar[padi;$get[u]]\`
$getVar[e_corn] Jagung: \`$getGlobalUserVar[jagung;$get[u]]\`
$getVar[e_melon] Semangka: \`$getGlobalUserVar[melon;$get[u]]\`
$getVar[e_apel] Apel: \`$getGlobalUserVar[apel;$get[u]]\`
$getVar[e_wortel] Wortel: \`$getGlobalUserVar[wortel;$get[u]]\`

**Koleksi:**
$getVar[e_kerupuk] Kerupuk Uyel: \`$getGlobalUserVar[kerupuk;$get[u]]\`
$getVar[e_trophy] Piala: \`$getGlobalUserVar[piala;$get[u]]\`

$getVar[emoji] Bcash: \`$numberSeparator[$getGlobalUserVar[money;$get[u]]]\`]

$onlyIf[$getGlobalUserVar[profile]==true;{newEmbed:{title:Terjadi Kesalahan..}{description:Kamu tidak memiliki profil! Kamu perlu membuatnya terlebih dahulu untuk bisa meng-akses semua command. Kamu bisa membuatnya dengan menggunakan command#COLON# \`B!start\`}{timestamp}{thumbnail:$authorAvatar}}]

$let[u;$findUser[$message;yes]]
`}