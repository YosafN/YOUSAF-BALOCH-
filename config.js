const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : '923405614773';
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://niluqueen8:M.Arslan78600@cluster0.gswawn9.mongodb.net/?retryWrites=true&w=majority" ;
global.port=5000  ; 
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363023983262391@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363022922797633@g.us' ;
global.email = 'samsamsun789@gmail.com' ;
global.location = 'Lahore Pakistan' ;
global.timezone  = process.env.TIME_ZONE || 'Asia/Karachi'
global.gurl = 'https://youtube.com/c/SuhailTechInfo' ; // add your username
global.sudo =  process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : '923405614773'; ;
global.devs = "923405614773"; //Dont change it From here
global.github  = process.env.YOUR_GITHUB || 'https://github.com/SuhailTechInfo/Suhail-Md';
global.scan  = process.env.QR_URL || 'https://replit.com/@SuhailTechInfo/Suhail-Md?v=1';
global.website = 'https://github.com/SuhailTechInfo/Suhail-Md' ; //wa.me/+923000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.imgur.com/NpA3ZsJ.jpeg' ;
module.exports = {
  sessionName: process.env.SESSION_ID || "FleshCorner",      //Put Your Session Id Here
  botname: process.env.BOT_NAME || '𝑭𝒐𝒍𝒍𝒐𝒘👑𝑭𝒃:𝑴.𝑨𝒓𝒔𝒍𝒂𝒏 𝑴.𝑨𝒃𝒃𝒂𝒔',
  botbgm: process.env.BOT_BGM || 'true',
  ownername:  process.env.OWNER_NAME || `𝑴.𝑨𝒓𝒔𝒍𝒂𝒏`,
  author:  process.env.PACK_AUTHER || '𝑭𝒐𝒍𝒍𝒐𝒘👑𝑭𝒃:𝑴.𝑨𝒓𝒔𝒍𝒂𝒏 𝑴.𝑨𝒃𝒃𝒂𝒔',
  errorChat : process.env.ERROR_CHAT|| 'chat',
  read_status : process.env.AUTO_READ_STATUS || 'false',
  save_status : process.env.AUTO_SAVE_STATUS || 'false',
  packname:  process.env.PACK_NAME || "\t   𓅋 ₊₉₂⃗⃗₃₁᩺₈ͦ₄ͪ₄ᷧ₇ͥ₄ᷞ₁⃗₇₆ 𓃮 \n\nᴋɪss ʍᴇ...💋\n\nᴄʟօsᴇ ყσυɾ ᴇყᴇs...👁️🙈\n\nʍɪss ʍᴇ...♥️\n\n\n   -ᴘʟᴇᴀsᴇ ᴅᴏɴ'ᴛ ᴛᴀӄᴇ 🚮 \n\n--- ρυвʟɪᴄ вσт нᴇʀᴇ ---" ,
  autoreaction: process.env.AUTO_REACTION || 'true',
  antibadword : process.env.ANTI_BAD_WORD || 'xxx,sex,mia,boobs,sexy',
  alwaysonline: process.env.ALWAYS_WAPRESENCE || 'recording', // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
  antifake :   process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'false',
  readcmds : process.env.READ_COMMANDS || 'true',
  HANDLERS: process.env.PREFIX || '.',
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
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "4WzwCChYB82annxe1fzQNZxR",
  caption :process.env.CAPTION || "```ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝑭𝒐𝒍𝒍𝒐𝒘👑𝑭𝒃:𝑴.𝑨𝒓𝒔𝒍𝒂𝒏 𝑴.𝑨𝒃𝒃𝒂𝒔```",   //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'0cOviPToRDHgR7Mgd454T3BlbkFJWQgbDi8B8mU8j6FlPYxZ' ,
  VERSION: process.env.VERSION || 'v.1.0.3',
  LANG: process.env.THEME || '𝑴.𝑨𝒃𝒃𝒂𝒔',
  menu : process.env.MENU || '', /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || 'private'
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
