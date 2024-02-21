const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="olamidemhi.001@gmail.com"
global.location="Ibadan,Nigeria."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Olamide24:Olamide24@cluster0.5occolg.mongodb.net/"
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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "";

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

  sessionName:process.env.SESSION_ID || "SUHAIL_06_27_02_21_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwidU9hRUFIVDFMa2R3N3hpVDZDS2QyMDkwQ1RvNlZGSkJlbURhNHhsQkZrUT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImpOZVAyZ1EwWEIzQ2xTQ21iS2k0SUdzbjBmQzBFenM3c0U1VkwvWXZZQ2c9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiK0lNVDRkdGUzOWxicG9xem5ZaXVxM3UyUGlJSDltQkcvOVJvOGVrUGowWT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlAwdFdNYTczOXk2MW5kNmY1UXp3RytXL3BncUN0VEZ2ZDVyQUFmRVNGUWc9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiYUN1Y1Y3Um1keDYyTmJpazhtelBjbG1sdUY4RzM4L1N1aWRFZ2Q3WUMxbz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImdPWXZILzEyRHZUM1Zjem52UUx4QXhEcEhtNUREVlBnekN2VHdaaXVFWDg9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJvTFRybzZqM2ZmN3VVN2FhYXplWVlqYyswOEw1L3ErQjZ4N2JJcnhxL25zPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwieHY3WkFnT2dxUmZiL3d4S3Jqc0oranZVYU1KUWVTTXZyaDdXZGxNUFRqTT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJhLzhpTms3Z21CcHJxclcwdnhoNUhVcCtaRkVUUWNOSWYybUpYWkpJWjA5RGgyQmtIMkZhbVhrUWdvaDAxc2NIUW1pZGxWd2I5NEc2REQrWTJaS21qZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTM3LFwiYWR2U2VjcmV0S2V5XCI6XCJWL09FSTd3RFVJaWlld09Rc2IvQjV5cGNpdWI5WGdkL0t2cGFuUzRnRW5RPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiS04xelVqSExSbUNoUjFWVWFkRkJMUVwiLFwicGhvbmVJZFwiOlwiZTE0YTg2ODYtZWUzYy00ODllLWE3YmEtZjM0ZGE5MTVjOWRmXCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCI5MStlaHphTUsyU3lNU0FHN2p1ck5pRDAxWDg9XCJ9LFwicmVnaXN0ZXJlZFwiOnRydWUsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZHIrOXUvRUlydlc4V2VmYW1GRUVaYXVSemlnPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwicGFpcmluZ0NvZGVcIjpcIlJFWTdEVDQ0XCIsXCJtZVwiOntcImlkXCI6XCIyMzQ4MTIwNzY5OTIzOjdAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiMjU5ODMzMDIyMzgyMTU4OjdAbGlkXCIsXCJuYW1lXCI6XCLwn5aV8J+SlCBPbGFtaWRlIPCfq6DinaTvuI/igI3wn6m5XCJ9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNKK0p1dUlERU15djFxNEdHQWNnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiSThsSS8zWm5BOEZySldQY0syeXZPM1kxNFJFb3g3czFvMG1YUklYak5TMD1cIixcImFjY291bnRTaWduYXR1cmVcIjpcIkxBekZNT0pGMzg2QUQweUhrRUFQcnd1Q01RSHl4bk5ERE9JRU9MUDJTRytYZmNiN2ZVYi9DemhYaEdJRUd2ZFhNcEo2eFhNQTcwUStrNkgya3pNUUJBPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiRkcwYS9LRjErcUZDYmlzMUpPWU1ZN1puNGtjS0h0TlJvdlVwajZyUHV6UUNPbEhxRGtNZFBhZ1ZzYWNRVERkZnBOK3E1eW01b3lWWFpaSFgyQzJTZ3c9PVwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjIzNDgxMjA3Njk5MjM6N0BzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJTUEpTUDkyWndQQmF5VmozQ3Rzcnp0Mk5lRVJLTWU3TmFOSmwwU0Y0elV0XCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcwODQ5Njg0OCxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFIZlJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIZlIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJQcGxmMmNseENQVHJFWVZ5d3FTQnpXcG96Slo5bVROZHZmUFZ4TVNhYzJzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMTE3Nzg3MTksXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsMyw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=",  //  SESSION ID HERE 
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
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
