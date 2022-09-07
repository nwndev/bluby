module.exports =[{
    name:"$alwaysExecute",
    code:`
$sendDm[{newEmbed:

{title:Perintah Di Gunakan}
{thumbnail:$authorAvatar}
{timestamp}
{description:
Oleh: \`$userTag\`
Di server: \`$guild\`
Perintah yang digunakan: \`$message\`

Akun dibuat pada: \`$creationDate[$authorID]\`
User ID: \`$authorID\`
Di channel: <#$channelID>

Jumlah member pada server: \`$membersCount\`}};$botOwnerID]

$onlyIf[$checkContains[$toUpperCase[$message];B!]==true;]
`},{
    channel:"1002458916564770856",
    type:'join',
    code:`
> Selamat datang, <@$authorID>!
>       **TOP THINGS TO DO HERE:**
> - Sebelum mengobrol, silahkan baca <#1002458618223919196> terlebih dahulu!
> - Ambil role notifikasi mu di <#1002458698058305547>!
> - Mulai bermain dengan orang lain di <#1002460127695208468>.
>       **SEMOGA BETAH YAH!**

$giveRoles[$guildID;$authorID;1002466566811697172]

$onlyforservers[1002457920446943324;]
`},{
    channel:"1002458916564770856",
    type:'leave',
    code:`
Yah.. $username[$authorID] telah meninggalkan server ini :sob: Selamat tinggal!
$onlyForServers[1002457920446943324;]
`}]