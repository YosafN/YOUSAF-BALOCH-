const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : '6797309646';
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Suhail:suhail@cluster0.rzhkoqf.mongodb.net/?retryWrites=true&w=majority" ;
global.port= true // Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000  ; 
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363023983262391@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363022922797633@g.us' ;
global.email = 'bhell8552@gmail.com' ;
global.location = 'kyoto' ;
global.timezone  = process.env.TIME_ZONE || 'Asia/japan'
global.gurl = 'https://youtube.com/c/SuhailTechInfo' ; // add your username
global.sudo =  process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : '6797309646'; ;
global.devs = "923184474176"; //Dont change it From here
global.github  = process.env.YOUR_GITHUB || 'https://github.com/SuhailTechInfo/Suhail-Md';
global.scan  = process.env.QR_URL || 'https://replit.com/@SuhailTechInfo/Suhail-Md?v=1';
global.website = 'https://github.com/SuhailTechInfo/Suhail-Md' ; //wa.me/+923000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.imgur.com/NpA3ZsJ.jpeg' ;
module.exports = {
  sessionName: process.env.SESSION_ID || "Secktor;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU9qUGx1ZU1wWnkvelZueGxmK3JnemxlNzNGc2xYTG9aUkx3cW1oN0wxND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUytCN1NTUTNjSE5mSkJOSTFCbGtJaTY1WHkyQWQ3N3NwYkRVVERrRzh4az0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrTmtRNWZaa3ZVR3U5Ti9UTFFyWnhZTWVLbm1sOVBpZWFsUWJiSy9FQzBRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKU2lUQkFzaVFXamQyRFJvR1o3OWdkc1lTQXBiSHE2cStWVkpLRlNwODJJPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBOckZLZFN5VEJrMkkydmNmVEZTTWRCWXU2em91dWdvM3Y1M3BPVlZ3WDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1CelVxYnZ0OGVUVjY5eGRxRWFiYzZKbHN5SFVmT2RIMUt6cDA4NWYzMkE9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSnVaTWZvenFWZExvczBvcjJTYTEzUDlWemkwK2lXSm9HT3ZzK0o4L3BOU1d2MDBtdkpqZVZGWCtzR0hXVjJQUUU1YUlsVXd5bG9zWFNNaldjTHpnUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE5MSwiYWR2U2VjcmV0S2V5IjoiWGpNLzF5OHVlSm9LekMyLzZxeXRCR0FqNUxJRldaTkxydkJhMFh3aW1Dcz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNjNrQmFHUXBRUnk5eFVYNFRoWWw5dyIsInBob25lSWQiOiIwZjU0NDY1Yi04OGE4LTQ4YzctOGQ1YS1lNjEyZjAyNDgwYjEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTjFUOVkwSWVnSGZEa0ZPck9qeWg2YkRNYUU0PSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4aUhHK3pQZ3ltMWwrZUpvUS9WMUZPQ3BVN0E9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNNNzhqNWNIRU1ucG9xZ0dHQUk9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imhpc3hlUTNsVXVYSHZKbEpDcjJPSXlwWDMwNVBIdEVWNlo4OHBRME9vRkk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkdQbitIT1NNekNRaDBsMkVKbTl6dExhNU1MSXVKeVJqaHZtVm9ydk9iNjNIUklCc2tqQXZyZTNGcExoZSsreWgxTHhYYUlyMUphdzdwaXZOSUZpM0NBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIxRzdTWm9UcU9qWnZ5aXB5cG1wSTMzamd1N0IybW5mN0tweWo2QWRNWnp0VXM5MEx5OUlhSDF3MlBYS0YrSys2NkNLeFhmZXJWVGFjR3ZuSzVWT01oZz09In0sIm1lIjp7ImlkIjoiMjYwNzYyNDMyMTAyOjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiWGx1c2lvbiJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjA3NjI0MzIxMDI6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZWXJNWGtONVZMbHg3eVpTUXE5amlNcVY5OU9UeDdSRmVtZlBLVU5EcUJTIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNjk1MDY5Mzg5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdMUiJ9",      //Put Your Session Id Here
  botname: process.env.BOT_NAME || 'J•I•N•X',
  botbgm: process.env.BOT_BGM || 'True',
  ownername:  process.env.OWNER_NAME || `¥^M•I•R•A•I^¥,
  author:  process.env.PACK_AUTHER || '¥^M•I•R•A•I^¥',
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
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : '¥^M•I•R•A•I^¥',
  menu : process.env.MENU || '', /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || 'public',
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
 
