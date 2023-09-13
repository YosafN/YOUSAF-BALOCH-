const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : '923017616186';
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Suhail:suhail@cluster0.rzhkoqf.mongodb.net/?retryWrites=true&w=majority" ;
global.port= false // Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000  ; 
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363023983262391@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363022922797633@g.us' ;
global.email = 'samsamsun789@gmail.com' ;
global.location = 'Lahore Pakistan' ;
global.timezone  = process.env.TIME_ZONE || 'Asia/Karachi'
global.gurl = 'https://youtube.com/c/SuhailTechInfo' ; // add your username
global.sudo =  process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : '923184474176'; ;
global.devs = "923184474176"; //Dont change it From here
global.github  = process.env.YOUR_GITHUB || 'https://github.com/SuhailTechInfo/Suhail-Md';
global.scan  = process.env.QR_URL || 'https://replit.com/@SuhailTechInfo/Suhail-Md?v=1';
global.website = 'https://github.com/SuhailTechInfo/Suhail-Md' ; //wa.me/+923000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/80ea336860e86084db365.jpg' ;
module.exports = {
  sessionName: process.env.SESSION_ID || "",      //Secktor;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVBUUkJJZ1ZqaDN5K0pBMEFRczFMZkdSdllKSWk2SkI4LzdQZWh4b0lWcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME81bDZURTFkc0Y4SHdYQVBVUW5kRXZpclhmQ3BZNnV2N29PaUg1Vkdobz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlUE9IZ3B1VW1NVVhBV0MrcFdJdXFXR2RFSWpxNkE5VDVzTWNvSEh1SjBFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2UllKTVlSc1RvRUFNV3p0ajNHUEM0YkJ2ZjRrUnE4SnV6eXRFdFFDVmd3PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFGN3ZhSjBSVHF4NHpPUmtsMEY0WE9TSkFHZVR2MmpYbWZvSzhjSFlLVkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktoNXRCNGVvanBTS0xWc1VabXJOeUVsOFhXdzJMUERFYkV4UE1SeVNoelU9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMN3dCcWkwQnpyVFRRbTdVTVhyUEtia1VFUy9GaGtGYVZnMEVRNUw2UlRXdm12dGtGTTJvVVlJSEhydFUzdEQ4R0JqbnFYTyt0MlE2bzlUZzhybjJpdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE3NiwiYWR2U2VjcmV0S2V5IjoiaTNQVlJNdGJKandlQTNZbXkvN2J2TVR1eSs2bXN0L09NSi9uY3dVbXhNZz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiOWhzT3MxbE1UemlSQ2NHd3BiY1hBUSIsInBob25lSWQiOiIxZTBlN2ZkNC01YzQ0LTQ0M2QtYWE5ZS1jMzI0MDNiMzMwNzIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM09mQjhzYXNvT1FIOU8wTXlhZ2lEdVU5akdjPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuai8zSFVhNlZ0NU4xYVNEcWluenQzK0puMUE9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNQaSs2TFFDRU4rNWhxZ0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjR0Mm5BZlZyLzRFOUdTZWNIMWZBbmdHdzB1SmRyUi92OVkzbGNIZjRwUmc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjY0M01QcGVUV1VKcnRHR0VybThtVW5pbmtDSjZWcnVtcllXSUZFZHlmNUJ4emNBSEw4bEp4Smw3LzRoQTNhT05hWUQvQTNTS2RlbnBtZk55VkdlekRRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ2Z1JYYVNkSjN2TENxTndHMS93dGhFZVFtK2krWUVMQktBb2p2TWp2czh0UE54MklpZTN4dGUvenpNZm1ScTMxV0lVSnlFSWJPQ2xjWmFUTWZGOU1oUT09In0sIm1lIjp7ImlkIjoiOTIzMDE3NjE2MTg2OjkyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuKCiuKOr+qvrcy92b7ZgNmA2ZHZks2i2LHZiNmB24zZgNmA2ZHZks2i2LPZgNiU2LHijq/qr63MvSDYudmA2Y3ZgNmY2YTbjCBcblxuXG5cblxuXG5cblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICBcblxuXG5cbjwzIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzAxNzYxNjE4Njo5MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlTGRwd0gxYS8rQlBSa25uQjlYd0o0QnNOTGlYYTBmNy9XTjVYQjMrS1VZIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNjk0NjA0NTE0fQ==
  botname: process.env.BOT_NAME || 'ˎ˗ 𓍊𓋼𓍊☄︎*⁀➷ · ˚ˏˋ° ₊⎯꯭̽پــّْ͢رو چــّْ͢وہـؔدری عـٍـ٘لی چــّْ͢و : )                         [sʏᴄᴏ-𝐏]· ͟͟͞͞➳❥⋆',
  botbgm: process.env.BOT_BGM || 'false',
  ownername:  process.env.OWNER_NAME || `It'ˎ˗ 𓍊𓋼𓍊☄︎*⁀➷ · ˚ˏˋ° ₊⎯꯭̽پــّْ͢رو چــّْ͢وہـؔدری عـٍـ٘لی چــّْ͢و : )                         [sʏᴄᴏ-𝐏]· ͟͟͞͞➳❥⋆`,
  author:  process.env.PACK_AUTHER || '',
  errorChat : process.env.ERROR_CHAT|| '', // put 'chat' here to send error in chat ,where it accures
  read_status : process.env.AUTO_READ_STATUS || 'false',
  save_status : process.env.AUTO_SAVE_STATUS || 'false',
  packname:  process.env.PACK_NAME || "\t   𓅋 ₊₉₂⃗⃗₃₁᩺₈ͦ₄ͪ₄ᷧ₇ͥ₄ᷞ₁⃗₇₆ 𓃮 \n\nᴋɪss ʍᴇ...💋\n\nᴄʟօsᴇ ყσυɾ ᴇყᴇs...👁️🙈\n\nʍɪss ʍᴇ...♥️\n\n\n   -ᴘʟᴇᴀsᴇ ᴅᴏɴ'ᴛ ᴛᴀӄᴇ 🚮 \n\n--- ρυвʟɪᴄ вσт нᴇʀᴇ ---" ,
  autoreaction: process.env.AUTO_REACTION || 'false',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokeyuntillYouPutAnWordHere',
  alwaysonline: process.env.WAPRESENCE || '', // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
  antifake : 'null', // process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'false',
  readcmds : process.env.READ_COMMANDS || 'true',
  HANDLERS: process.env.PREFIX || ',',
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog:process.env.MSGS_IN_LOG ||'false',
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'false',
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink_values: process.env.ANTILINK_VALUES || 'https://,chat.whatsapp.com',
  //antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  caption :process.env.CAPTION || "```PROFESSOR```",   //*ALI*\n youtube.com/@suhailtechinfo0"),
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'' ,
  VERSION: process.env.VERSION || 'v.1.2.1',
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : 'ALI',
  menu : process.env.MENU || '', /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Ali Asgher Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || 'private',
  KOYEB_API : process.env.KOYEB_API || ''
};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
