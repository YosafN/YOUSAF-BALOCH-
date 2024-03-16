const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""  // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,india."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/india";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  = process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website= process.env.GURL|| "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "918086950927" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "918086950927";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false", // disable bot in pm when public mode
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text", // set IMAGE/VIDEO links here
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_20_03_16_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiS0RELzdRYzFFM3hTZEFkL2V1dmM2TDRUZEpMUUlJYzVXNHlnMzB1cU1rST1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImwvd05HT21OODF0WmZWVTFQN1ZlQVBIaXVnamdmYnZEWHArWHl0cnBOQzQ9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiRUd3dE5QVmFiaTNMRzBjL2VnQW05QUUwb1crNWNLeTBYczNadW56WFRuZz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjBEZUtWNTRib2RVSS9CWmxydkhQV2dDSXdDbTE4ZVNOSTNVdFFtWHdiU3M9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwia0Zxb0M0cnJkMWpLTnc4YXpnUnE5clY4ejRvbmxMM1JJdi9oSmE0RURWND1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInhneDJrdm5YWTVhNytBeVcyY0d2VU5JOWsrRHAxcG5ZNXgyK3dBdWNxSDQ9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJpUHVnbkI2NzZxblNmeEJleFBPajlLWEJpenVTUE9HTThSTnFkRkI1UEhzPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwicTZGTmVwUzlPTWRYZ3dYbis5cFA3VTIxa1JReHdUb1ZxWDg5eEFHOXlUYz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCIwY3lJMitKeS9ib2FNbzdkRjY2a0REbmszTGxrQ08rdldBTDdVdlFHODgwWnllY0N2NFNGVHlOQXViUHFGM2M3TzA3SS96NkFsQnk3UldSUTkzY1lpUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTYzLFwiYWR2U2VjcmV0S2V5XCI6XCJwRzl3TTBrV1NZQVRpeWZzcE5nckYzRWFIRWNCazdpNk5mR2VudW9Sc0E4PVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTE4MDg2OTUwOTI3QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjhDMjhCMzVGRUZGNzVEOTJBQjZFMTQwNzVFOTA4REVBXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTA1OTUyNDN9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTE4MDg2OTUwOTI3QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjlFNDQxNTIyN0JCNjYxRTlGQjg0NDNBRUU3RjUwQ0VEXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTA1OTUyNDR9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJkLXlDbHRTb1NYLWhiZUluLTJwOTNRXCIsXCJwaG9uZUlkXCI6XCIyNDQ3MTgwMi1hNDMzLTQ3NmYtYWJmNS01NzliMmQ4ZWYwOTlcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlJvdkc4aHdzUlRMQ1gzY0VJR3pQT1N3U1A5Yz1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCIvTmQ1YTJoVmxsaUYzK3BJb2hZSzhqRXB2V2c9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiTjgxS0ZSS1ZcIixcIm1lXCI6e1wiaWRcIjpcIjkxODA4Njk1MDkyNzoxNkBzLndoYXRzYXBwLm5ldFwiLFwibmFtZVwiOlwizaLhrIPHusa8xpzGlsadzaLgoIvhrYRcIixcImxpZFwiOlwiMjM1NTk2NjM5Mzg3OTAwOjE2QGxpZFwifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDSlRXdmJnRkVLSzUxcThHR0JBZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIko0S0dzQXhoQlQ4Zy82SjhPcjB1VnZTakNkeDNWWGpQR1ZlOEMxbXpxeDQ9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJhMEo0ZHgvbDVBUW1SUlRpMTZleHh2aEpYL0YrRHFQM0NmeUZ5cHVGZlVUUmwvRUs0SndXSStydGk2L1BMYjVmWHZJTDFHTUFZUzdOOGZPLzZZNmpCQT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIkl3Z1BtZE5Ta1RiSFBBRnhXNDROKzI1V3dyOS9pc3YxdEZhUjdBM0RwZGxMelU4ejZaeFp6SjdjaXFuc1lHMTRndW9TenJUckJIVVRCcFhwYk90Y2lnPT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCI5MTgwODY5NTA5Mjc6MTZAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCU2VDaHJBTVlRVS9JUCtpZkRxOUxsYjBvd25jZDFWNHp4bFh2QXRaczZzZVwifX1dLFwicGxhdGZvcm1cIjpcInNtYmFcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MTA1OTUyMzgsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBSUlxXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSUlxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNm01L3Q2RFFETVF2RGN5Skt6VUlUTWRQaVRBMHFOSXU4cEdOVUFmZmZnOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDYwNjI4MjQ0LFwiY3VycmVudEluZGV4XCI6MTAsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiw1LDhdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || ".", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.0",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Aswinmp-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Aswin-md",
  ownername:process.env.OWNER_NAME|| "It'x aswin",


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
 
