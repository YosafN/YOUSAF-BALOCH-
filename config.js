const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : '+254716637803';
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Suhail:suhail@cluster0.rzhkoqf.mongodb.net/?retryWrites=true&w=majority" ;
global.port= false // Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000  ; 
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363023983262391@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363022922797633@g.us' ;
global.email = 'samsamsun789@gmail.com' ;
global.location = 'Nakuru kenya' ;
global.timezone  = process.env.TIME_ZONE || 'Nakuru,kenya'
global.gurl = 'https://youtube.com/c/SuhailTechInfo' ; // johntez
global.sudo =  process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : '254716637803'; ;
global.devs = "923184474176"; //Dont change it From here
global.github  = process.env.YOUR_GITHUB || 'https://github.com/SuhailTechInfo/Suhail-Md';
global.scan  = process.env.QR_URL || 'https://replit.com/@SuhailTechInfo/Suhail-Md?v=1';
global.website = 'https://github.com/SuhailTechInfo/Suhail-Md' ; //wa.me/+923000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.imgur.com/NpA3ZsJ.jpeg' ;
module.exports = {
  sessionName: process.env.SESSION_ID || "",      //eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVA3My9TODVGeHYvMW9XcXBJUUpIcDVuSkl1cmMzbDNXcktzUW5nOGZYdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0JpTkE5ZzBmYlZWNFljVi9oNk1ta3hrNnNoNkJUdmZMZFg2bmxrOUx6cz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPS3RFbmNsMVlIcTJrWlRDOHZjSGVhbkdpaGJlcUJibm1vRm9lM2RPQUdBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5bUhaTjA3eWNYNi93cnNFeWRZSGR1UUlwL3R5TTVuK1gzTEVNVXFZdEFBPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdBNUtEeUxVdFA2cWZaUHJrMEFVWGRaaW5JQ1JTY2JIZjQwNXRsVlVybDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhxL1RtRzdSeGhqZkMyT0FPcWZRUXdJVVM2SU93SGhVc3dJQ2pLZjBrVEE9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVNjhTcXk0aUtvYmZQZG5LMWQ0cnVnYnk5TlNVZTI4b05lanBMKzlrTk1YZ0xlNS8wcDNWZng0dHhQSFc0Wk5tTkhXUi9ua1FjeUpvcTkzMUd3L1NoQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE2MiwiYWR2U2VjcmV0S2V5IjoibnU1eXprZXM0cSt0YzlsVjdWZ0JsZFZSUnhGbE5KWVU2UkZ2TmcxMlFBQT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiZ3JJLVhxX3VSVU9sQXBJdDdFOFhwZyIsInBob25lSWQiOiI3MmFmYzBhMC1jMjMwLTQ5OTQtYjExZi0wMmVjZTdhY2YwOWMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiblIvMUtjQlc0bU9xakp5dTFFV3hacElRR0E0PSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTVjFNMTFQQkRKYmMvQ1JseVVBQmtUeGovM1U9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNLdWdzZEVFRU1Id3E2Z0dHQTQ9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkdVQ2RRT2N2MGZVQTlzZEE5VFhybUs1Z0JCU2lQYUdKN2ZHaVhlSGt3Z3c9IiwiYWNjb3VudFNpZ25hdHVyZSI6InR2S1lORHhVTnNxQndmMExpRHoxUTEvczAxMGhRV2ZNWVhPT0c0U25qSjVYK1J3eTVMdEFwZGUraGJsTjh5cFByeThMZFp6a1dCTlpDYlVOQjhMK0JBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI0aU5hRFlzY0FmMm5qRUlQQVN0Q2pjYjdXeFJMdzh6U3diVTFaNnNxdXFXUTlIdi95V29KWUkvdjArZ2VLNm9YUFJUSGFYS3VsZmpleENXQmFZN2dpdz09In0sIm1lIjp7ImlkIjoiMjU0NzE2NjM3ODAzOjQ1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFsaSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3MTY2Mzc4MDM6NDVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUmxBblVEbkw5SDFBUGJIUVBVMTY1aXVZQVFVb2oyaGllM3hvbDNoNU1JTSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTY5NTIxNzczNiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKV1AifQ==
  botname: process.env.BOT_NAME || 'try me',
  botbgm: process.env.BOT_BGM || 'false',
  ownername:  process.env.OWNER_NAME || `johntez`,
  author:  process.env.PACK_AUTHER || '',
  errorChat : process.env.ERROR_CHAT|| '', // put 'chat' here to send error in chat ,where it accures
  read_status : process.env.AUTO_READ_STATUS || 'true',
  save_status : process.env.AUTO_SAVE_STATUS || 'false',
  packname:  process.env.PACK_NAME || "\t   𓅋 ₊₉₂⃗⃗₃₁᩺₈ͦ₄ͪ₄ᷧ₇ͥ₄ᷞ₁⃗₇₆ 𓃮 \n\nᴋɪss ʍᴇ...💋\n\nᴄʟօsᴇ ყσυɾ ᴇყᴇs...👁️🙈\n\nʍɪss ʍᴇ...♥️\n\n\n   -ᴘʟᴇᴀsᴇ ᴅᴏɴ'ᴛ ᴛᴀӄᴇ 🚮 \n\n--- ρυвʟɪᴄ вσт нᴇʀᴇ ---" ,
  autoreaction: process.env.AUTO_REACTION || 'true',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokeyuntillYouPutAnWordHere',
  alwaysonline: process.env.WAPRESENCE || '', // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
  antifake : 'null', // process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'true',
  readcmds : process.env.READ_COMMANDS || 'true',
  HANDLERS: process.env.PREFIX || '.',
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog:process.env.MSGS_IN_LOG ||'false',
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'false',
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'true',
  antilink_values: process.env.ANTILINK_VALUES || 'https://,chat.whatsapp.com',
  //antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  caption :process.env.CAPTION || "```ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ```",   //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'' ,
  VERSION: process.env.VERSION || 'v.1.2.1',
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : 'SUHAIL',
  menu : process.env.MENU || '', /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || 'private',
  KOYEB_API : process.env.KOYEB_API || ''
};

global.isMongodb = true; 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
