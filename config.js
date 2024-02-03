const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="kegalle,sri lanka."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI=process.env.DATABASE_URL || ""
global.scan = "https://suhail-md-vtsf.onrender.com/";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "94750663509" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94750663509";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || "5",  // put '1' to "5" here to check bot styles
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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";



module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS : process.env.PREFIX || ".",
  BRANCH : process.env.BRANCH   || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©NAVEEN²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author: process.env.PACK_AUTHER || "Naveen",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "GOD",
  ownername:process.env.OWNER_NAME|| "NAVEEN",

  sessionName:process.env.SESSION_ID|| "SUHAIL_09_31_02_03_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiaUtQUFFaa2ppNzR1eDU2dmxkMVdKOG03bHVmZ0dmYkhSMUJiQjErQ0htQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIm52MWM2Q2RXVjBUWi9NMTU4MWxmNGhoY1lhemo4N1BLbmZVYlBqeitmVE09XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiUVB1YXVJTkoxaHUrOEdYVVhGZlJWNWswZmNOYnhaU2V0L2I0eXlTUW5GOD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImkySkVNK1JCdWFGMmk1OHE5RkhRbXdzMmo4THZYcDBNaE1LdkpiTFF3ajA9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiU0ZDS1Z3NlhGK3FXSzUrQmQwenpUdVh0bWhybm1XNC9CNEhCS0RndXJFVT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImtuSEo2b3Y0bVhpMFZhcDBSSTFlVmJkaUtCQUIwb3JEUFpGZllOcWVveW89XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJLTnk3UmNZb3Q0aWlzbUdLYUVSOXJYVGZIaXYzZE5iRTRHbDM4TnZ1MjF3PVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMjI3aEI0bk91aDVDeVM3V3d5NjRoUE1RMjVkQW4vdFovSzNtOHk4cXMyOD1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJUUlFKcy95enl0UXpoQzhNZXd1TGFtcHdtRXBsb0g4WnpYaEkyQ2gzbnpEQTU2c0liNDRFb2ZtRzhnVmZFRDBrVXFoVFUvR1kvRjJ3aXhPV0lrSVpCUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjAzLFwiYWR2U2VjcmV0S2V5XCI6XCJkVGs0aFF4SlRVM3ZHaEE4ZFB0dkdHT3NKbnF5R2hMVERPSDg5YXpkZ2V3PVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTQ3NTA2NjM1MDlAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiOTEwMjEyQkUxMTVGNERDQ0M4MDc0NkZCRDQ0QTIyQkJcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcwNjk1MjcwNH1dLFwibmV4dFByZUtleUlkXCI6MzEsXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOjMxLFwiYWNjb3VudFN5bmNDb3VudGVyXCI6MCxcImFjY291bnRTZXR0aW5nc1wiOntcInVuYXJjaGl2ZUNoYXRzXCI6ZmFsc2V9LFwiZGV2aWNlSWRcIjpcImxVWXl0LXVHUTBxbmNwWmZWbk5lNEFcIixcInBob25lSWRcIjpcImU5MzU3N2VhLThmNTktNGVhYS1hZmVlLWE0NDNhMGEyZTVmNVwiLFwiaWRlbnRpdHlJZFwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiYWxsemNjVkN3dVVmUjZpZi96WkpoSHZ2QXM0PVwifSxcInJlZ2lzdGVyZWRcIjpmYWxzZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJXSGJuV1lpYmFoTHdZUkJya2Y1NllaTlh3akE9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJhY2NvdW50XCI6e1wiZGV0YWlsc1wiOlwiQ092RnBzd0RFUGFQK0swR0dBRWdBQ2dBXCIsXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6XCJOTzd1ZktEOVBwdStSNk15bmtqb05UL0tpU0UrdjBPNDdkZjJBbVNFRFJrPVwiLFwiYWNjb3VudFNpZ25hdHVyZVwiOlwiajFyTjBySFRTMzdmcHY2bExlZDVJYURWYitTL2Npc3BNOHRpQ3hkTzNZamdEYTV3TjJkSWdzSWF0eHo2aTZxOXVLWXRUYVhYaysvT3ViNDIrRHkyQXc9PVwiLFwiZGV2aWNlU2lnbmF0dXJlXCI6XCJNaTBWWXAvdjFtNkFtcFpsUEJCVnZ3REVPcGwzSjNHKzkySFAwamdQTGtHTmRRc1Z6K2NzR240K0hveWwzQjAwYURGTU0wVnZNV3NwdlRYZm95bXNBZz09XCJ9LFwibWVcIjp7XCJpZFwiOlwiOTQ3NTA2NjM1MDk6NEBzLndoYXRzYXBwLm5ldFwiLFwibmFtZVwiOlwiTmF2ZWVuflwiLFwibGlkXCI6XCIyNzU2ODExMTYxNzI0MDI6NEBsaWRcIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCI5NDc1MDY2MzUwOTo0QHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQlRUdTdueWcvVDZidmtlak1wNUk2RFUveW9raFByOUR1TzNYOWdKa2hBMFpcIn19XSxcInBsYXRmb3JtXCI6XCJzbWJhXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzA2OTUyNjk4LFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQUVIN1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVINy5qc29uIjogIntcImtleURhdGFcIjpcIlZPckljSm9ORE9RakR6VXdCbE9laThoR2FzdDdlZFMva2IwZzRkTDBZNms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTY1MzIxNDUwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFSDguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJUOU05SGhxZkNKaUZsUGcxKzkrVzMrQkVhWnJQYktsa09STkRQdFdyZUZNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk2NTMyMTQ1MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcwNjk1MjIxNjMxMlwifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API  || "false",

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
 
