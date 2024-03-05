const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://chat.whatsapp.com/E39qMdWBujOHGVgWBY3XW1";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/E39qMdWBujOHGVgWBY3XW1";
global.website=process.env.GURL || "https://chat.whatsapp.com/E39qMdWBujOHGVgWBY3XW1" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,918509320573";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "918509320573";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_22_03_05_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiS0YxcnRJUkJleGZxMlJTOW1SLzRSaHplWGhIa29EbThONUpUbmZFNG0zcz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInpvT0N2dG03Z0E5MDNvcXh4RlA4dDZHdk5oUlF1OTdNa05hOG54NE9wSHM9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiOERLMVM3VExONkNxaHZ0b1BkTDVaMTBYbWtlV09wT2FXeXhKRFd2ME1FQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImNTZlV0VEZKanJuMTFpZTVXT29ZaU1jb1pkQlQ2NlhNRjZMSy9pdHJFRGM9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiWUl1bnZ0RGNJRUZqcmtSdkZ1RTBPZmxHME9UejIrV01SMzVVcnMxOXJHTT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkx1QWM1SnZhQXY4VWFZV0tCTDR4aEpzeGFJUkZRTVR6ZWVOMS8wNFNyejg9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJjT3pQWVpHWFkrZVc0WlRBaURyNWdVNy91M3pzOHRwR1NKMlVPeTNMcDNZPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwicFdEaC9odERvVVAxODBMYitBS2xQOTZYT09NVHBQRmZJL0FPODhXblhGYz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJQaTc4dHk2aHBsRzZJWGYxbjFQZ0JGeEl4NGxmWHNRZUtWYVMwbWlNWUh6NzJvdEQ2UDZZRW5DWDNqbFRHUk15dWdZSi9RYldDSXVpaVBsTlJVdXVnUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjksXCJhZHZTZWNyZXRLZXlcIjpcIjdOUXNDenR0YlNCVER3OFdwZkhwb3pzdWt0MFR6OGRHaTlrM21iRklEdzQ9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI5MTk4ODM5ODcyMjhAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiQzNGQTFERjgxNjE5NjAxQTUzRTEyQzE3REY5QjNDQzdcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcwOTY1NTcyOH0se1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI5MTk4ODM5ODcyMjhAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiQ0RBNEM5ODhBOUYxQkFCNjczMTZBNUQ1RTUwNTUzMDJcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcwOTY1NTcyOX1dLFwibmV4dFByZUtleUlkXCI6MzEsXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOjMxLFwiYWNjb3VudFN5bmNDb3VudGVyXCI6MSxcImFjY291bnRTZXR0aW5nc1wiOntcInVuYXJjaGl2ZUNoYXRzXCI6ZmFsc2V9LFwiZGV2aWNlSWRcIjpcIjAwMks3c1NOU25Lbm16WnIwLTM2Z0FcIixcInBob25lSWRcIjpcIjAyYWZlZTUyLWQ5M2ItNDA1NS04NGE2LTY5MjM4MmFjMThhMlwiLFwiaWRlbnRpdHlJZFwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiYlllaStwdFNZeGhUY3kvc2dzU1IvSW4rc25FPVwifSxcInJlZ2lzdGVyZWRcIjp0cnVlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkhVcmlmdDVHalpCMTA3U3N3eE5ScE1saFRlND1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcInBhaXJpbmdDb2RlXCI6XCJCQzVMUE5LRFwiLFwibWVcIjp7XCJpZFwiOlwiOTE5ODgzOTg3MjI4OjEwQHMud2hhdHNhcHAubmV0XCIsXCJsaWRcIjpcIjEwNzE1NTQ3NDY0OTExMzoxMEBsaWRcIixcIm5hbWVcIjpcIk5vIERwXCJ9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNLZndpc3dGRUtxTm5hOEdHQUlnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiY2tUb1dNYVF4M2hva2NqVHR0S09RVkthby9IaFlUWHJIVnpVK3FGS3gzND1cIixcImFjY291bnRTaWduYXR1cmVcIjpcInA0cWxlT0FkUzJvSlZTV0xGbGY5cEszckQzOGdMbXowMThJMk55dXVQa1pmS01NbDR3Y2dtbTlpcmtGZENtMDJKUzU4R2wzR3BHd2IzRVcyQlhnS0FRPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwicDVFbHp1SlZBN0Y2WWUrR3F2cUxMS1dCdWdkNHRNcnRHR2NwbVVHb3NwNU03R0VGYzV4VFk0NmZjWXRvVzJJNS9LclowNVpxamVrTlQrZGlvWmxOZ2c9PVwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjkxOTg4Mzk4NzIyODoxMEBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJYSkU2RmpHa01kNGFKSEkwN2JTamtGU21xUHg0V0UxNngxYzFQcWhTc2QrXCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcwOTY1NTcyNixcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFQcGpcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQcGouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2eWg0MTFvYnp1QXptZ0NjVEoxUGsrK2l4NmppaHpMemtZZ3BGN3JGbWprPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MDE3MzkwNDcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcwODE5MjIxMDQxOFwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.9",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "DARK HACKING",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "DARK HACKING",
  ownername:process.env.OWNER_NAME|| "its SUDIPTA",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



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
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
