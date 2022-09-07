module.exports ={
    name:"cooldown",
    aliases:'cd',
    code:`
$title[Cooldown]
$thumbnail[$authorAvatar]
$addTimestamp
$addField[Hadiah;
$replaceText[$replaceText[$replaceText[$replaceText[
\`weekly\` | \`$if[$get[minggu]>0;$parseDate[$get[minggu];time];Perintah Siap!]\`
\`daily\` | \`$if[$get[harian]>0;$parseDate[$get[harian];time];Perintah Siap!]\`
\`hourly\` | \`$if[$get[jam]>0;$parseDate[$get[jam];time];Perintah Siap!]\`;hours;jam];days;hari];minutes;menit];seconds;detik];yes]

$addField[Uang Cepat;
$replaceText[$replaceText[
\`kerja\` | \`$if[$get[kerja]>0;$parseDate[$get[kerja];time];Perintah Siap!]\`
\`ngemis\` | \`$if[$get[beg]>0;$parseDate[$get[beg];time];Perintah Siap!]\`
\`cari\` | \`$if[$get[cari]>0;$parseDate[$get[cari];time];Perintah Siap!]\`;seconds;detik];minutes;menit];yes]

$addField[Lainnya;
$replaceText[
\`slot\` | \`$if[$get[slot]>0;$parseDate[$get[slot];time];Perintah Siap!]\`
\`mancing\` | \`$if[$get[mancing]>0;$parseDate[$get[mancing];time];Perintah Siap!]\`
\`berburu\` | \`$if[$get[berburu]>0;$parseDate[$get[berburu];time];Perintah Siap!]\`
\`nambang\` | \`$if[$get[nambang]>0;$parseDate[$get[nambang];time];Perintah Siap!]\`;seconds;detik]
\`lomba\` | \`$if[$get[lomba]>0;$replaceText[$replaceText[$parseDate[$get[lomba];time];seconds;detik];minutes;menit];Perintah Siap!]\`;yes]

$let[lomba;$getCooldownTime[20m;globalUser;lomba;$authorID;yes]]

$let[nambang;$getCooldownTime[1m;globalUser;nambang;$authorID;yes]]

$let[berburu;$getCooldownTime[1m;globalUser;berburu;$authorID;yes]]

$let[mancing;$getCooldownTime[1m;globalUser;mancing;$authorID;yes]]

$let[slot;$getCooldownTime[15s;globalUser;slot;$authorID;yes]]

$let[cari;$getCooldownTime[20s;globalUser;cari;$authorID;yes]]

$let[beg;$getCooldownTime[25s;globalUser;ngemis;$authorID;yes]]

$let[kerja;$getCooldownTime[15m;globalUser;work;$authorID;yes]]

$let[jam;$getCooldownTime[1h;globalUser;hourly;$authorID;yes]]

$let[minggu;$getCooldownTime[7d;globalUser;weekly;$authorID;yes]]

$let[harian;$getCooldownTime[24h;globalUser;daily;$authorID;yes]]

$onlyIf[$getGlobalUserVar[profile]==true;{newEmbed:{title:Terjadi Kesalahan..}{description:Kamu tidak memiliki profil! Kamu perlu membuatnya terlebih dahulu untuk bisa meng-akses semua command. Kamu bisa membuatnya dengan menggunakan command#COLON# \`B!start\`}{timestamp}{thumbnail:$authorAvatar}}]
`}