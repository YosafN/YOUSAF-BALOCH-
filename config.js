const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://m-saad001:<password>@saad01.268bdgk.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923418595810" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923418595810";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923418595810";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923418595810,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_21_04_17_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQ0UzNEVCRFNXRnpBVnBwYXRGYm1nREtJWG5NNXFBRXUrMEtKdVdCVmRHST1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjRLdzNDbzBmc2FPK3Fqdk9leVlzQVJBRHJhSDZtbnVpUk5WOTh3NXdzR0k9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNkxndEt4a0c4UWZDek1sRFRUZHdlRTlGYjJnYVMwUExvSGIwZ3pITWhIMD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjY1K0RpQzlNemJRQkJJUDBFMkYvMVlQNjRpcWs3cFpPT2MySjc5SldtRUE9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiME1TOEtsOHdqdit2YndmNVBHcEdsVnRlWWd0cWI3YngydWhPTTZrcTNGQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIml0aEJjVTljbFUrbzlOckYzWUNrRWM5T2sxcTlDZE8xbzFpRVBWYWh6MDg9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCI2R3N0ZFhiS3ExSmR1V054L0wzZHhVMVRuaTFyQmF5MXBUT05jWGRoQUY4PVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMmNBU2dkZHFXVTlyZEVTTktudlIyNHVEeFFsdWpjYTFaOHRpTkxwc2xpND1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJPR3U2Q1J0UWNKZm92Vkt0UVpSMHk4TTQzZEI1cWdYOEdCWVJkZWZtZFQvd2x1NTFjeHFnM0JwTjJldjNaV3FkZU1vd0tBR1kyRS9FT2RBbjc3TjRCQT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTMxLFwiYWR2U2VjcmV0S2V5XCI6XCJyWmQyZ2wrNGZ1NUUxTldqZ1hDVWY1UnVNT0FUcFNxK01ybWlQMXRWcE5JPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzNDE4NTk1ODEwQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIkE2RjU0MjkyQ0NDQzI5Nzc1NjcyODZDNTdEN0RCMDIzXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTMzMzEyNzh9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzNDE4NTk1ODEwQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjUxMzRDODcxMjAwNzM3RTQ3Q0IyRDM3NzE2REMyMTNFXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTMzMzEyNzl9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJCV0UtWTZIWFJCaWVaeHJsRU1VNTFnXCIsXCJwaG9uZUlkXCI6XCJiMTViZTllYS0zZTMyLTQ0ZGEtOTRkYy1iODU2MzliNjkxZjBcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlRETFNYTEtnWE5od1RGNElDY3hNVVRGRXJkND1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJpQ0J2SGswZk5aSTFBMDVQbUgwYXE1dXE3MkU9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiWUpXUTVLQ1ZcIixcIm1lXCI6e1wiaWRcIjpcIjkyMzQxODU5NTgxMDoyQHMud2hhdHNhcHAubmV0XCIsXCJuYW1lXCI6XCJg4riZ8JOGqcKr4Y+a5LmI5LmI4Y6g8JSSncK76pyb2Jzwk4aqYFxcbiBcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4gICBcXG5cXG5cXG7wk4ap8JakjfCThqpcIixcImxpZFwiOlwiMjI4MTA5NzQxNjc5NToyQGxpZFwifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDTVdudHJFR0VNYTQvYkFHR0FJZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIkZRZjZickpuUFJyVFlKdXBSRVNNOGRIeUNBdGlUM3c0ODZha0pKdmxpUUU9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJWcTlIWUVRL1pxQkNZKzUxeVhiM20yREVzZ2pNZTRtNy80cU9GRWFQM0k0THMrT2hHTzV4TFNndWhPdmoraUxxV3ArYjRNeTk5UksvNkRNV2RWejdDZz09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcImgycDh0K3RkelpPZmpNL285aUloRTZqdlNPRTZydVlmQnduWHliakJmZko0OXhzVXptN0dTQkY2NGRnN3Azc3NyZklickxwS2JPMFNybCt0VE50ekJBPT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCI5MjM0MTg1OTU4MTA6MkBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJSVUgrbTZ5WnowYTAyQ2JxVVJFalBIUjhnZ0xZazk4T1BPbXBDU2I1WWtCXCJ9fV0sXCJwbGF0Zm9ybVwiOlwic21iYVwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMzMzMTI3NSxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFLOWdcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLOWcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzeHV2OEhMOHR2QmlGQU1kYkFsckkxZVh6c1NNK29DM0w5c1dYMUFvbW53PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MTQyNjI5ODEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxMTM3NjIzOTI1NVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Saad, 2: SAAD_A17, 3: Saad-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©𓆩Ꮪ么么Ꭰ𔒝𓆪" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Saad 』```", //*"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Ꮪ么么Ꭰ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "𓆩Ꮪ么么Ꭰ𔒝𓆪",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SAAD"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
