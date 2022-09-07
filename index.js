const aoijs = require("aoi.js")
const { token }  = require('./config.json');
const bot = new aoijs.Bot({
sharding: true,
shardAmount: 11,
token: token,
prefix: "$getServerVar[prefix]",
intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"]
})

bot.status({
  text: "B!help • v1.0.3",
  type: "WATCHING",
  time: 24
})

bot.status({
  text: "di $serverCount server!",
  type: "WATCHING",
  time: 24
})

bot.status({
  text: "Ada event yang aktif! Silahkan cek \'B!event\'.",
  type: "WATCHING",
  time: 24
})

bot.command({
    name:"eval",
    code:`
$eval[$message]

$onlyForIDs[$botOwnerID;]
`})

bot.command({
    name:"shardID",
    code:`
Guild's Shard: $shardID
`})

let refresh = Math.floor(Math.random() * 10800000)+3600000;

let refreshbox = Math.floor(Math.random() * 3600000)+1800000;

let refreshseed = Math.floor(Math.random() * 600000)+300000;

bot.loopCommand({
    code:`
$title[Harga Biji-bijian telah berubah.]
$addTimestamp
$thumbnail[$userAvatar[$clientID]]
$description[
$getVar[e_seed] Harga biji-bijian telah berubah menjadi $getVar[emoji] \`$numberSeparator[$random[1000;5000]] Bcash.\` Silahkan cek \`B!shop\`!]

$setVar[seedprice;$random[1000;5000]]
$setVar[refreshseedtime;$dateStamp]
`,
    channel:"998097354806804480",
    executeOnStartup: true,
    every: refreshseed
})

bot.loopCommand({
    code:`
$title[Penukaran Kotak Misterius]
$thumbnail[$authorAvatar]
$addTimestamp
$description[
⚠ **TRADE OFFER** ⚠

**YOU GET:**
\`$random[1;30]\` 📦 Kotak Misterius

**I GET:**
\`$random[1;100]\` $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$randomText[padi;sampah;botol;emas;batu];padi;$getVar[e_padi] Padi];sampah;$getVar[e_grbg] Sampah];botol;$getVar[e_botl] Botol];emas;$getVar[e_emas] Emas];batu;:rock: Batu]]

$setVar[boxamountrefresh;$random[1;30]]
$setVar[itempricebox;$random[1;100]]
$setVar[itemtradebox;$randomText[padi;sampah;botol;emas;batu]]
$setVar[lastboxrefresh;$dateStamp]
$setVar[itemtradedisplay;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$randomText[padi;sampah;botol;emas;batu];padi;$getVar[e_padi] Padi];sampah;$getVar[e_grbg] Sampah];botol;$getVar[e_botl] Botol];emas;$getVar[e_emas] Emas];batu;:rock: Batu]]
`,
    channel:"CHANNEL_ID",
    executeOnStartup: true,
    every: refreshbox
})

bot.loopCommand({
    $if:"v4",
    code:`
$if[$randomText[naik;turun]==naik]
$title[Harga Mata Uang Blypto]
$thumbnail[$userAvatar[$clientID]]
$addTimestamp
$description[
💵 **Bitcash**
Harga: $getVar[emoji] \`$numberSeparator[$random[1000000;5000000]] Bcash\`

:coin: **PoopCoin**
Harga: $getVar[emoji] \`$numberSeparator[$random[90000;8000000]] Bcash\`

💎 **Ethernal**
Harga: $getVar[emoji] \`$numberSeparator[$random[1200000;3000000]] Bcash\`]

$setVar[harga_bitcash;$random[1000000;5000000]]
$setVar[harga_poopcoin;$random[90000;8000000]]
$setVar[harga_ethernal;$random[1200000;3000000]]

$setVar[blypto_refresh;$random[3600000;10800000]]

$else

$title[Harga Mata Uang Blypto]
$thumbnail[$userAvatar[$clientID]]
$addTimestamp
$description[
💵 **Bitcash**
Harga: $getVar[emoji] \`$numberSeparator[$random[100000;1000000]] Bcash\`

:coin: **PoopCoin**
Harga: $getVar[emoji] \`$numberSeparator[$random[70000;1000000]] Bcash\`

💎 **Ethernal**
Harga: $getVar[emoji] \`$numberSeparator[$random[500000;3000000]] Bcash\`]

$setVar[harga_bitcash;$random[100000;1000000]]
$setVar[harga_poopcoin;$random[70000;1000000]]
$setVar[harga_ethernal;$random[500000;3000000]]
$endif

$setVar[lastrefresh;$dateStamp]
$setVar[blypto_refresh;$random[3600000;10800000]]
`,
    channel:"CHANNEL_ID",
    executeOnStartup: true,
    every: refresh
})

bot.onMessage()
bot.onGuildJoin()
bot.onGuildLeave()
bot.onInteractionCreate()
bot.onJoin()
bot.onLeave()

bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID] | $getBotInvite]`
})

bot.variables(require(`./variables/variables.js`))

const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd,'./commands/')
