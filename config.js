const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.devs=  "+263775789023"

global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || "3000@cluster0.t1wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "CAT";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/IJF0fahUsSB1P1MYD4ri6W" ;
global.website=process.env.GURL || "https://chat.whatsapp.com/IJF0fahUsSB1P1MYD4ri6W" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null+263780597802";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+263780597802";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Sir Dickson",
  ownername:process.env.OWNER_NAME|| "Mr Dickson",

  sessionName:process.env.SESSION_ID || "SUHAIL_10_23_02_21_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwid0IzZTdUL3IrdHRNU0FvRWFaK0k1VDY1L2xMRWQrYjNvN1RwZm91VzFIdz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlp3bVRFQWp2M0pRK3RFMjZqSXo3TzZ2OHE0K2tzSHV5cUd4Z2dnR0dNeUE9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwid0tCdkQ5UnFDeHBWQTV6eDBoTDZQYUQrVDhGbWFOamtDUmFGWXVtRnZuMD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjc1NS84QWVqYzZsODY0eVRxSjVtVmJoUVlSVXJRZThna0J6SnhBRjdYQlU9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiS0k3QTNYc0hGMzIwbkVVR3BUTXIvSnVFMmxrYVNGUVRhT2kxS09wc25Idz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInU5MGttVVlnSER4MStlWUpyajM2TUY5Q0pucFNhS1RGRm1YbWJGcDRZQTA9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJpTzltU1Y3dU1JLzV5bnNINzdPNzNLYzUyczBSRnhJRGxDdEswWC9HNTFZPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiL3FJTjhHalhHSUx5bCtvUTBYenhyd2hWdDVRK0IxdWR2aVpNQmFpeEp5az1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCI3dHp1UjNrbTJOdU55a0pQci9nL0pyZFJRTHViemlUWUdDRml6Qk10ZGZVY1pCZnludjhIRlp2RkFVdzJSSXpJMEk4SFR2R21TcU1QeFI0ZVBuZ0pCdz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjMzLFwiYWR2U2VjcmV0S2V5XCI6XCJJUU10YURuYVNEaVk0em1SZDgzT1Iydm1Ld3NkQWk4YS9waWxMeHBON1Q0PVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjYzNzc1Nzg5MDIzQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIkY2MDNBNzYzMzI3NjI4MUY3RTc2NDk4OUZDNjhBRjFGXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDg1MTA5OTV9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjYzNzc1Nzg5MDIzQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjUzOEMyNDZDMTY4QjFCMzg1NjFGQTIyMjY0MUQ1NUM2XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDg1MTA5OTV9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJSMHotYVR2dFRVaXQzUC1xZlNvd29nXCIsXCJwaG9uZUlkXCI6XCJmYjY3ZDdmOS0wNTY2LTRiMGEtOTFlMi04YzZjMDgwNGQxMTNcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInM4NlNUUUlCV1l4VU9UUzh4OGYvS3lsdElvUT1cIn0sXCJyZWdpc3RlcmVkXCI6ZmFsc2UsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiRFlSOVA5SE9SMkFBRDIvd3BwNTlYTmdIZnhjPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNJR25nTmdERUl5ZTE2NEdHQUVnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwibUNCcDVEYUQ2cUIwWTVVZGU4SWZSZ1c5RllXTVI1QUp6VnhiVCt4MjgyST1cIixcImFjY291bnRTaWduYXR1cmVcIjpcInljTk9lYmx4Y3gwTTlGMDB2RHFnNGNlY0l0MHgrSTdLVUd4SENkQVdXTzZJaXU4bDVtcFBsS21QZC85UUtjY2xzbkZMTXdQSGkvdHhPK1JIT01Wc0JnPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwieVhjWEF6bitXbFpBVUJRMm5NR2pURHlVK1RzUm9RRWxIdFhPM1pUOWxqM0kxVXo1NUwzaTJRemw0NHN0UUNLZnJqMjNXQlFmYTZMUmxSN0UyV3lWQ1E9PVwifSxcIm1lXCI6e1wiaWRcIjpcIjI2Mzc3NTc4OTAyMzoxMUBzLndoYXRzYXBwLm5ldFwiLFwibmFtZVwiOlwiSSBhbSBhIHJvYm90XCIsXCJsaWRcIjpcIjExMzYxMDgyNzI3MjM3NzoxMUBsaWRcIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyNjM3NzU3ODkwMjM6MTFAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCWmdnYWVRMmcrcWdkR09WSFh2Q0gwWUZ2UldGakVlUUNjMWNXMC9zZHZOaVwifX1dLFwicGxhdGZvcm1cIjpcInNtYmFcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MDg1MTA5OTIsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBR2V6XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR2VyLmpzb24iOiAie1wia2V5RGF0YVwiOlwidW9zU3J2QkVwNm1Tcnd4eEd2UC93NWZhNXVjeHhJMGljN014WG9mdzIyMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5ODk4NjA3MzEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdlcy5qc29uIjogIntcImtleURhdGFcIjpcImJvdnlCZE9tNk1kaVBERHp6M05NTDZBTWJlaDVaQmhCY1puVC9CTGRNWmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTg5ODYwNzMxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzA4MjcxMDUwNTc4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR2V0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwidFE3ZUszRmtEMTRjWWlVa1lLZEt5ek10c0dBUXVWQzg5VTdmUDl1MlVmZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5ODk4NjA3MzMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdldS5qc29uIjogIntcImtleURhdGFcIjpcImdPSHBmVXFuancyK255bU4wVmxURHFESjJsanltSFNWOXF2NTR3cGIrSU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTg5ODYwNzMzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzA4Mjg2NTg1MDAyXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR2V2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiaENCYU95VlM4YU9Zd1d2eHBNeE5JTlR5a0svb3dHZU5iQ3VpOCswQjAxaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5ODk4NjA3MzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdldy5qc29uIjogIntcImtleURhdGFcIjpcIjh6Y0ErWXNVd1hlY2tMUm5BaDZCeEtGS0xQVnhSRnQwaE5yUGtKSzA0MkU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTg5ODYwNzM1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzA4MzUyNjM0NzYwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR2V4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiSS9Cb1hwZ1MwL3BlZWQyakpadzR5Qlo1WGF4eXIzU2tEcEFlOUxWOVZXND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5ODk4NjA3MzYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdleS5qc29uIjogIntcImtleURhdGFcIjpcInFkQTJFUXFuMExocHJOWkdkd1dOZ09TbkxCdmc4L0VFMDBSUStjNTZKWU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTg5ODYwNzM2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzA4NDYzMzIzMTUxXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR2V6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwia2NOTjZCb3ZGVDVER2RrUlpmcEttNFYvYytSZ2lBdzNjTVRBK1RxWlF6ST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5ODk4NjA3MzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcwODUxMDk5NTUyOVwifSIKfQ==",  // PUT SESSION ID HERE 
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
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
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
 
