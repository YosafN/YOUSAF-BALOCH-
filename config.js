const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://vacaja:<1234>@cluster0.gh3syzk.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://shor.by/MoreAccounts";
global.website=process.env.GURL || "https://shor.by/MoreAccounts" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://mallucampaign.in/images/img_1707943853.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255693440878;




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255693440878";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "mpatch-1",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©Vinei_Adobe" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Vinei_TV",
  packname: process.env.PACK_NAME || "Vinei",
  botname : process.env.BOT_NAME  || "Vinei Bot",
  ownername:process.env.OWNER_NAME|| "It'x Adobe",

  sessionName:process.env.SESSION_ID || "SUHAIL_00_20_02_20_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiRUNqQVlSMGg3bnZIOVZkVk9xNU15Y1YyakUveWpJR2hwNGh2QlNCYVVsND1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImJUbTBKTC80c2FFWWRvdnNlME1PV2VZb00veThXa2ZYbjlHcHl1bGlzak09XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwidUQzbU1jQ0pCL2IwM1gzeDFtZnZiMmNDMzFCd3BhMUZTTDBBUVRZQWFXQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImRyclQwb01DQXdVNEdTMnNQTUIvbUNYM04rSkt5QURpUHRsWER3VkpaVTA9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwidUw0dTJ3RkZnVFNKa3BkUENzeWl2RmRkQVMyMk41NE05MDFLUmp1bmxIdz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInYreVFNckNaLy8xaitLQWhsNjhjSXlUMkZIa0hwUk1EVWRiWU02YlNqeTA9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJxR2FsdjdDeklmMmxpRnFxWUJ6UUVsZXl3QlVpTEp2U2VBb0ljQjRiT0VjPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiYy9qR3V2L0dpYzZLZUFHUTkvaGJNc2MvK09mYzFJOW5yNXduYTlIOFNIWT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCI3clBjRW15TkU1UWo1RWdWY0tIdEU4a3pxUHErbGJERGFWN0xPUlJWbFVCWDBMSjJweVdETGFIQzZQU2xjMHUyYXZaMnEyWlNnZ1QveVJnSnFGaTVEUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTI0LFwiYWR2U2VjcmV0S2V5XCI6XCJHelRvM2h0c05XajhYL3BxVktaUWRzVlZxNngyK0Fsd2ZhYThyYm9xZU40PVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjU1NjkzNDQwODc4QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIkFGMjM0MjVCNkRCRTRERjk3RkY3M0NBNkY0QTY1QTIzXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDgzODg0MzB9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjAsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCI4N29PeW9GVlFTT2FqeHk1MkVHYXVRXCIsXCJwaG9uZUlkXCI6XCIzNjU3MTI5OC01NjhiLTRiYWEtYThjMS00NThkNmIxN2Y5YTFcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImhsYzFuaGZBNXNBTEp5Yng0eWFCUnh0ZUNKUT1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJsTGlqZnBTcjAvY09KaHdNczNQdW9qeXhQMFk9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiMjVUQzRBQTVcIixcIm1lXCI6e1wiaWRcIjpcIjI1NTY5MzQ0MDg3ODo0QHMud2hhdHNhcHAubmV0XCIsXCJsaWRcIjpcIjk3ODc4MzQ1Mjc3NTEzOjRAbGlkXCIsXCJuYW1lXCI6XCJWaW5laVwifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDT0NrenIwSEVNbmd6NjRHR0FJZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIkg1ckJvM2dEZ3BBK1QrQ2k3TWdVaDBTaUs5Wm1SMFAxY2lHVW44Qlp3eU09XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJ2VndVdEs5b1pWeFRleEZWRGlrOTRja1pIdnlhckxWUUhGck5GVTMrclFLalZHTW5jcWdSVHl6bkFKbFlNUTZIV0RscDhpNHFYUlZLOFVqOGpGbFVEUT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcInpobzZ4ZThWYS9YdlBhTWY1dzFUOUxsR2ptNzFSa1lZQkRNNlduTHdlSThVei92aTgrZ2U1OU9zSk96NkI2WXhwTEpQU3FaWG5Kb2pxNlU0MkxkMUJ3PT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyNTU2OTM0NDA4Nzg6NEBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJSK2F3YU40QTRLUVBrL2dvdXpJRklkRW9pdldaa2REOVhJaGxKL0FXY01qXCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcwODM4ODQyOCxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFKQ2tcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKQ2suanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJEV2NzOURkRFRPTWVGQ3dkZHdYalpDQ2lkOVBGcmxMSXhiUWhWUW5zRXpnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMDgyNTcxMjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcwODM4NzIyMjUwOFwifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "c8935065-5f47-4f90-b3e5-3f04bb934692",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "vinei",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "VINEI",



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
 
