module.exports ={
    name:"leaderboard",
    aliases:'lb',
    code:`
Orang-orang terkaya di **Bluby:**
\`\`\`
$globalUserLeaderboard[money;asc;#{top} | {username} : {value} Bcash;30]
\`\`\`

$onlyIf[$getGlobalUserVar[profile]==true;{newEmbed:{title:Terjadi Kesalahan..}{description:Kamu tidak memiliki profil! Kamu perlu membuatnya terlebih dahulu untuk bisa meng-akses semua command. Kamu bisa membuatnya dengan menggunakan command#COLON# \`B!start\`}{timestamp}{thumbnail:$authorAvatar}}]
`}