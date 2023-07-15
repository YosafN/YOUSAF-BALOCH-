const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '918010431346' ;
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Ghost:33jcrpXJmh4CQfxD@cluster0.ya4uhjm.mongodb.net/?retryWrites=true&w=majority" ;
global.port=5000 ;
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363023983262391@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363022922797633@g.us' ;
global.email = '' ;
global.github = 'https://github.com' ;
global.location = 'maharastra, mumbai' ;
global.gurl = 'https://youtube.com' ; // add your username
global.sudo =  process.env.SUDO || "919823642839" ;
global.devs = "918010431346"; //Dont change it From here
global.website = 'https://github.com' ; //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png' ;
module.exports = {
  sessionName: process.env.SESSION_ID || 'Put Your Session Id Here',
  botname: process.env.BOT_NAME || '𝐷𝛯𝛻𝛪𝐿 🖤⛓️✨',
  ownername:  process.env.OWNER_NAME || `It'x ∂εѵเℓ`,
  author:  process.env.PACK_AUTHER || '', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'true',
  packname:  process.env.PACK_NAME || "\t♡ 𝐷𝛯𝛻𝛪𝐿 𓃮 \n\nᴋɪss ʍᴇ...💋\n\nᴄʟօsᴇ ყσυɾ ᴇყᴇs...👁️🙈\n\nʍɪss ʍᴇ...♥️\n\n\n   -ᴘʟᴇᴀsᴇ ᴅᴏɴ'ᴛ ᴛᴀӄᴇ 🚮 \n\n--- ρυвʟɪᴄ вσт нᴇʀᴇ ---" ,
  autoreaction: process.env.AUTO_REACTION || 'on',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'false',
  antifake :   process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'false',
  HANDLERS: process.env.PREFIX || ',',
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "true",
  MsgsInLog:process.env.MSGS_IN_LOG ||'false',
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'false',
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'true',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  caption :process.env.CAPTION || "    *•ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐷𝛯𝛻𝛪𝐿•* ",   //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com"),
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE  ,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'' ,
  VERSION: process.env.VERSION || 'v.0.0.3',
  LANG: process.env.THEME|| 'LUFFY',
  WORKTYPE: process.env.WORKTYPE || 'Private'
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
