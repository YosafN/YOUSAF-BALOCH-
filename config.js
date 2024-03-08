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
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_27_02_19_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwic01WVGVWZFI5bENQK01oaENBTG0yWXpZMkhwdzI4cnE2bGdtTUtMM0FWcz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkZ5cXZMemovdlp2NVhkeURwTTNrNXQ4NVpVcnA3NjZ1SjJ0N0U0Z3gzeU09XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwieUN5U2E4bHgrKzVseFBtRHlmRmIyOTBKQms4RGVPTHVNMmRtTEhYTnhYOD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjB1RFlTWjR6S2lmcHpDNUJxc1gxUXY4aHY5VzJqc0YzZVlxdEdoMFZoUnM9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiVVBYVTJZc0orajNRdkY5aGNLN3dsNTBoQno3WHFBZDFTKzN3Qk9KMExVZz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlZnclcvUFVSaGdUNnRPWkVmUlc3dVROaWZ3RExKT21QMEp1dXRsSUpod3M9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJBTWZQYmRIdmN3YjA5eEVtQklqNDFVdGhHNGN4LzRudHZZaWEwZjVpb0UwPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZFk4MFBmWFM0eHo2VjB5SzI2WW5mWWdJY3diM2puYnAxazQxaE1KcXNoQT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJmWW83Y2NEV3VHS2htVWNYUmo4Ui9EMmlJZFMvcVZlNFNncnZsb0lXdFpnRklITmoxTHNBODN3OXBKbWFTajFObnlnUFR4SVcwWDlLSlJsN21jL29BZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6NTksXCJhZHZTZWNyZXRLZXlcIjpcIndBZlUvOWZnZlB6SDNyRkV0OFJXZ0YwTnRnTVlZSVkvVU56czgwb2ZTR0k9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbXSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjAsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCIzNkVYX2RuR1JxV01yNHViR0JtZ1RRXCIsXCJwaG9uZUlkXCI6XCIyMTEyNDU5NS04YTgyLTQxNjktOTk2OS01ZDk5NmEyNjYxNDNcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImtMMFBEL0NYZFkzOFREa3VvdTNnSWJOLzlZbz1cIn0sXCJyZWdpc3RlcmVkXCI6ZmFsc2UsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNGRwVElzUm0vMVo0V2dNYWNzVDJaaFRLNzhvPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNNL2p5SklIRUtqWHpxNEdHQUVnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwidmx0dC81U2hwRzNuck5GTjg2bVBaQmcrK1hxRUZjMTJ2MUJUQk0zTS93MD1cIixcImFjY291bnRTaWduYXR1cmVcIjpcIllqa3k0TWJXbjNFNm1reEZoWUdWNWNtTVMwc2ZSSXFCUXJPR28yZE5hVmdYcnhhT3BydlRjN0Q2cXdDbW8zUWg3SDFLOEtiMnRJeFRNZjdrb3dRdUJ3PT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiOEs5M3RHVkRBelJXNk5JanB0SUFxakY3cS9UZjA3dW1rV1cvUituM0t0MlVtL3M0VUx4NVUwd2pjYU1ybHJCeURCcm5hMXR1V2dESFlyQnUvdGpJREE9PVwifSxcIm1lXCI6e1wiaWRcIjpcIjIzNDcwNjk5MzQ1MzQ6NDJAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiMTk0MzA3MTczMTMyMjk6NDJAbGlkXCIsXCJuYW1lXCI6XCLntKDmmbTjgonjgZfjgYToirjooZPwn5Go4oCN8J+OqPCfjq3wn46oXCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiMjM0NzA2OTkzNDUzNDo0MkBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJiNWJiZitVb2FSdDU2elJUZk9wajJRWVB2bDZoQlhOZHI5UVV3VE56UDhOXCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcwODM3MDg2MCxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFHV2RcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHV2EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJlaDFnelloZ1RTVjFtK29BcVdVdWpJMGRSbXM0NWNxSW1vZHBtV3E5SlJvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MTc5ODkzMjUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdXYi5qc29uIjogIntcImtleURhdGFcIjpcIitvWXFremVKQTdTczRuSXZVY1JXVDJXUG5Xbmd6NDlKTlNIdGp6YVFUNXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkxNzk4OTMyNSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzA4MTYyNTA1MTc5XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR1djLmpzb24iOiAie1wia2V5RGF0YVwiOlwiM0dyWW9zeThvZUUxMzEzMHAyUXBkaUsrYnIvank2a04zQ1d2MUF5dlFsdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTE3OTg5MzI2LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcwODE2NDE0NjA5M1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdXZC5qc29uIjogIntcImtleURhdGFcIjpcInRPWnZPQk9wZi9EZE1LSlVYOUg3alhvendDK05UL1RDeGVoODFpeG1jbEk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkxNzk4OTMyNixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR1dlLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMHZPZ0N4MXliWUJ1YSsyTU5iMkZkYlZtQ1JxejJ0emNPQ2lHUlZTVjZFST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTE3OTg5MzI2LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDgyMDMyNDY3MzJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHV2YuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzV3prenFydER6dEs1a3EyeXI5NkhWQjhEb3lPM253b3o1R2piRlNyODFrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MTc5ODkzMjYsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDMsNV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR1dnLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQk9XditHV2t3L0YvMExvWkVRbndhN0ZkR0F4VnFBN09hcnREWVlrZ1VkST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTE3OTg5MzI2LFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCw1XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHV2guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI0Y2dSNklnbG5uelpFTHBwR0l6QmVYOUpsZzdRNG44QWRtYnpJWnkxZm5jPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MTc5ODkzMjYsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDVdfSxcInRpbWVzdGFtcFwiOlwiMTcwODM3MDcwOTU2OFwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.9",
  caption : process.env.CAPTION || "©HêåÐ§hð†👾🎮🎯" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "HêåÐ§hð†👾🎮🎯",
  packname: process.env.PACK_NAME || "HêåÐ§hð†👾🎮🎯",
  botname : process.env.BOT_NAME  || "HêåÐ§hð†👾🎮🎯",
  ownername:process.env.OWNER_NAME|| "HêåÐ§hð†👾🎮🎯",


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
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
