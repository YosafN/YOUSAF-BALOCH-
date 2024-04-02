const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="virtualacademycls@gmail.com"
global.location="Colombo,Sri Lanka."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "94705613713" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94705613713";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "94705613713";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,94705613713";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94705613713";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_54_04_02_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwia0RvYzJvbm1Db2pORmsyK0huZC9Ea0xrY1ZCR3U1Z2JtaVVvb1Q1ck4wST1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlhkY3MzZ0Y1Z3grRm9MN3pPQytpSm1UYzhjZ0YwNGRMT2ZsZDNaODlEaE09XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiRUhjckRGTkxJWTdLcTI3Uk5SWnBkR1cyQk84UlZoNEFLbm45YU5xZ1Yxcz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInBGVDNnSkw4UVVkMW5kRU15ckZ0YkNqTWpBTE9BaWs4bExibmJsNWIrSFE9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZ0JmaDNzUWY1NUljaktQdXhLNVlCcWRHRTVpRzJEUzBqOUNDTVVkZTZsST1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIm1iY09ldUkycnRaRXROZFQrbERiNHlvbFFhMkdWOGViQlZDS3UxZ1B1MWs9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJzSE05ZlNVR004ZHk0ejEwSExMNEdMZXhKY05OeHNsZGt5Sm1vS0V5WldrPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiWTg0OSs0bDBmcE1QcDJkVzNPTGNPMjkwUmE4K1YvcjZvTkRSQ0paWVpHMD1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJzd0xDWkZxbGpKdml6MFFwSlRidjFCMU82ckhjajJkNktQWmRqSElWbEVkUnd6RVVtS1VCM25yU1l1bGxURjc2UFhOc2xleTE2dTRXY0hmUTBJOU1nUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTM3LFwiYWR2U2VjcmV0S2V5XCI6XCI5VkUxTkQzK2ZSc2VmUXgxdm1mUjNmVFBlYUY0U3NUU3NtVHU0Q3l3cDVzPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTQ3MDU2MTM3MTNAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiNEMwQzU4MTVFRUJEMkMwRDNDMjQ2MkJENDlEOEEwNTNcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMjA0ODA2Mn0se1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI5NDcwNTYxMzcxM0BzLndoYXRzYXBwLm5ldFwiLFwiZnJvbU1lXCI6dHJ1ZSxcImlkXCI6XCI0NkZCNkY1ODdERDU4QTIwRjMyQTA0RjY1M0MwOEE1QlwifSxcIm1lc3NhZ2VUaW1lc3RhbXBcIjoxNzEyMDQ4MDYyfV0sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjoxLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwibGlTbXVEWjdScG05aHhKZEJWdTFLd1wiLFwicGhvbmVJZFwiOlwiYzM1NzlhNjMtNTM3My00MDI3LWI4NGUtOTk2ZTRkY2Q4MDViXCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJHbFIyL3ZFb1A0WDIzM3V4dXZkTG8vbUJoRVU9XCJ9LFwicmVnaXN0ZXJlZFwiOnRydWUsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZHRLb3NFR3pTTlN5NjRsSEJxa3QyTHdNTkxJPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwicGFpcmluZ0NvZGVcIjpcIkZDRzhTMzJRXCIsXCJtZVwiOntcImlkXCI6XCI5NDcwNTYxMzcxMzozQHMud2hhdHNhcHAubmV0XCIsXCJuYW1lXCI6XCJNUl9JTlRST1ZFUlRcIixcImxpZFwiOlwiMTcyNzc4MzgwNjQ4NjI4OjNAbGlkXCJ9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNJNlc0MnNRdUkrdnNBWVlBU0FBS0FBPVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiRFlJRnpQcVN3ZnlBWCt6cW1LblJtNGVzeWEyaHBVN0tzZGN0VkR6ZXppTT1cIixcImFjY291bnRTaWduYXR1cmVcIjpcInZLckpjMEhZOGVtaUpDK21HVUhkMWR0RUluY2g2NjNLTmVSL2l0bXB0djdJa08zZ1ZaTEV3aWVMcmVyOW4rcXJFcXdpMCtDVU4vbkZyZjlmQ3kyYUF3PT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiSk9XZFdSa0tzS1NkdmJQMS9lc1l5U3VSZTBBRXo2UHFZRklzUXFrb2lJT21HUlZRdlMxN0V1cVhmQVRRVUIycWdPNHdESVRoZDlua0NOUCs1ajBnamc9PVwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjk0NzA1NjEzNzEzOjNAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCUTJDQmN6NmtzSDhnRi9zNnBpcDBadUhyTW10b2FWT3lySFhMVlE4M3M0alwifX1dLFwicGxhdGZvcm1cIjpcInNtYmFcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MTIwNDgwNTksXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBSjd6XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSjd6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiY3BRb1RyZk9RQTU2cUZjNHA1QkVFNWNSaHhDUm5lOEdnYWdBSWRLU3VzRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMjYwMjAxMTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxMjA0ODA2MDYyOVwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: BLACKDEVIL-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©Blackdevil²²¹-ᴍᴅ"
 
  author : process.env.PACK_AUTHER|| "Blackdevil-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Mr-Blackdevil",
  ownername:process.env.OWNER_NAME|| "It'x Blackdevil",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "BLACKDEVIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
