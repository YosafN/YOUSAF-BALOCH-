const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="olamidemhi.001@gmail.com"
global.location="Ibadan,Nigeria."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://OLAMIDE:3000@cluster0.11wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/Olamide-24";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/BoIuy0X3gHe5t4Qyo7iHWG";
global.website=process.env.GURL || "https://chat.whatsapp.com/BoIuy0X3gHe5t4Qyo7iHWG" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "2348120769923" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348120769923";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348120769923";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348120769923,2348120769923";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©Saheed" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "🖕💔 Olamide 🫠❤️‍🩹",
  packname: process.env.PACK_NAME || "🖕💔 Olamide 🫠❤️‍🩹",
  botname : process.env.BOT_NAME  || "🖕💔 Olamide 🫠❤️‍🩹",
  ownername:process.env.OWNER_NAME|| "©Saheed",

  sessionName:process.env.SESSION_ID || "SUHAIL_12_13_02_18_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiVUhYMkZsUHlxRldNVVlLdUlaL2hHck1FTDdIZGdUczhLQ2xvdloyV25HMD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImI2ZlUyY0RNMURYTDdpZFBBdHpXaXBNWmpiSXRWVmNua1ZaMGNRdHJNd0k9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQ0ZuYUowdDNQTHdhL0tJdnBjVEZGck5FZUtscVN3RFoycENFdTlrUkRWQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlE3bzRIaVN5UmZGZ2FLTDc5N3Fqb1BhMmdEcmNyOFJ2ckthMlNsVUNBWGM9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiaVB4Qkp4U0RCTjBjWXFOMm9ZbStJVFdUZit2WWJldExTNUNVcWNQTTVuMD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlUxSy9pTEp5VDlHSGVIVFBoL2d6UUc4K3JmNlhFRVljc2VxNXd2Y3ZySGc9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJRRkFxWVEwbFpNUFI5WkpSbjZBTjJ5dkN1b2FCdkhpeEgzeTQ5M0hzTW1VPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiT2FVcXZaRWFudmpqSS80aWVrU0NMR2VwOG13SjFIWlA5Vy9QNmRUS3N3QT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ0aktvR3dIa0hTSko4UWRqK0VFS1RvdVFaem5LTk11UUtQSjhOTVNlc1hsTER1T0R0VS9Mb0ZhTWxVc2FhTEF0dmxJUUQwNW00Q045ZU1wY0U1Uk1oUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6NjAsXCJhZHZTZWNyZXRLZXlcIjpcIm5QL0M1RFRZQ3pOM2gxU29VbE5GYWNNQy9KdW5QQldhWkUyZDJibTJoQUU9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbXSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjAsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJabjdHMjhvblIxdXBqcnVYc1U2eWVRXCIsXCJwaG9uZUlkXCI6XCI4YjNlMjFiMC1lZGEzLTRjNzktYjlkOS0wN2JjMjYyYTEwZThcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIllEbkRybTMzZjdNeHFVTzFxaFJ2djAzNjJmQT1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJoRE1HUFVlQWlMWUErWTVMWmZQU0FpZ0NqZ3c9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiQ0dHSjdGRzJcIixcIm1lXCI6e1wiaWRcIjpcIjIzNDgxMjA3Njk5MjM6NUBzLndoYXRzYXBwLm5ldFwiLFwibGlkXCI6XCIyNTk4MzMwMjIzODIxNTg6NUBsaWRcIixcIm5hbWVcIjpcIvCflpXwn5KU8J+roOKdpO+4j+KAjfCfqblcIn0sXCJhY2NvdW50XCI6e1wiZGV0YWlsc1wiOlwiQ0orSnV1SURFTTdveDY0R0dBVWdBQ2dBXCIsXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6XCJJOGxJLzNabkE4RnJKV1BjSzJ5dk8zWTE0UkVveDdzMW8wbVhSSVhqTlMwPVwiLFwiYWNjb3VudFNpZ25hdHVyZVwiOlwiQUJqVmR5ZzluMHFQNEl1QmVmNUI2am9NL09yeXFsTWNzSEc5ZE5Oa2M0VHgvQXVzbWtNTWQvbUkyUUdSYzVwZUptLzc1ZCtQZlNoMUNQblROM1NUQ2c9PVwiLFwiZGV2aWNlU2lnbmF0dXJlXCI6XCJ4YXFDVVBna0xyQmhBT2crWXZRMXBBdnRCVitsaTNXR2IvK2FDd1B1RTZvRlYxY2ZuSS8xek52T3ArVk1xQnRWUmVQM3VpUkJ2RDhUeklqN1M3K2xoUT09XCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiMjM0ODEyMDc2OTkyMzo1QHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQlNQSlNQOTJad1BCYXlWajNDdHNyenQyTmVFUktNZTdOYU5KbDBTRjR6VXRcIn19XSxcInBsYXRmb3JtXCI6XCJhbmRyb2lkXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzA4MjU4Mzg3LFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQUhmUlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhmUi5qc29uIjogIntcImtleURhdGFcIjpcIlBwbGYyY2x4Q1BUckVZVnl3cVNCeldwb3pKWjltVE5kdmZQVnhNU2FjMnM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAxMTc3ODcxOSxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiwzLDRdfSxcInRpbWVzdGFtcFwiOlwiMTcwODIwNDc2NTExMlwifSIKfQ==",  // PUT SESSION ID HERE 
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
 
