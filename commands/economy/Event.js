module.exports ={
    name:"event",
    code:`
$title[Event yang aktif]
$thumbnail[$authorAvatar]
$addTimestamp
$description[
*Tujuh belas Agustus tahun empat lima
Itulah hari kemerdekaan kita
Hari merdeka nusa dan bangsa
Hari lahirnya bangsa Indonesia
Mer-de-ka*

Halo! Bentar lagi 17 Agustus nih.. hari kemerdekaan Indonesia! Jadi, kami para developer akan mengadakan event. Eventnya akan aktif pada hari ini (Jum'at, 5 Agustus) dan akan berakhir pada tanggal 1 September.

\`\`\`md
# Event: "17 Agustus, Hari Kemerdekaan Indonesia."
- Pendapatan dari 'B!kerja' dan 'B!ngemis' ditingkatkan sebanyak 45%.
- Command baru: 'B!lomba'
- Item baru: ['Kerupuk Uyel', 'Piala']
- Kode baru: 'ROADTO17AGUSTUS'
- Cooldown 'B!kerja' telah diturunkan menjadi 5 menit.
\`\`\`
]

$onlyIf[$getGlobalUserVar[profile]==true;{newEmbed:{title:Terjadi Kesalahan..}{description:Kamu tidak memiliki profil! Kamu perlu membuatnya terlebih dahulu untuk bisa meng-akses semua command. Kamu bisa membuatnya dengan menggunakan command#COLON# \`B!start\`}{timestamp}{thumbnail:$authorAvatar}}]
`}