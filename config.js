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



global.devs = "254787527753" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254787527753";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254787527753,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254787527753,254xxxxxxxx";

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
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Bruce Bera",

  sessionName:process.env.SESSION_ID || "SUHAIL_21_03_02_23_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwicUxoSmRndWloQjBDdmNoVXBaaWp3TkE5R0M5S3A1NlVyMzBXYUh0bDkxVT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjhqZjlTNmoyZDU4ZnFNL3VEV0lheE4vZUlRaWJOSllGblkxeFVxVHI4bEk9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwicUFUL3BubGw4cm1xOE5uWGZJYWR5RVBpNFcwTlNPN2llQVJtRTBDR2hrcz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlYrSTYxRG5wbTZwVFdDalhsNVl6eDJBRE5CbzRlMTA0ZGxLaVdyb0k3QVk9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiRUhUa3FjM3FoRm1VM2hoVDFtUEdycUtHZWlOVkYxUXJOQmh5Z084b0xuVT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlk1Yzl6d2xySUpSV0RJWGl0VDJYTWpmdG8wakhCVEZmc1pNejJyV01DMUE9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ1RC9qYVVUU0FhbHJBcGhJTFZxV0FKaU9aZ284alBsaGhTeWNWaWEyNVZvPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwianQ5KzRUWFVtRmdIaHROajl0ZzN1OXFPTU52eGRKUDlUdGdEMW40eCt6QT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJOaVJSTnpyVS81Q3JsbjZHTzJlQVF0bUVBekgzWVVXSlR1eExJL29UcWlXUWUyV1Myak9QN1pCLy8ybEVEL0licERvbjZhRFZyaytzT1Jzbmo5aVhnZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTgxLFwiYWR2U2VjcmV0S2V5XCI6XCJiUTFLZk1WUEZFR2tpWXBpYlRrdEpzckpsWk1acVdjM2hsZFg4RFBhcFM0PVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwieFZDT1ZUaGFSSXkwLWpDYVdaYnhid1wiLFwicGhvbmVJZFwiOlwiYjQ1MDY2NGEtMDBjNC00NDcxLTgyZDYtMDJiYzY5NTVmZDU3XCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCVWJ6NEpVRGpYY0R2L0VndEx6QnNEQkd0SG89XCJ9LFwicmVnaXN0ZXJlZFwiOnRydWUsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQmI0cURHV2NjbHNhQjIvQXp5MUVMeE5lUzJRPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwicGFpcmluZ0NvZGVcIjpcIlhBUURQTVpUXCIsXCJtZVwiOntcImlkXCI6XCIyNTQ3ODc1Mjc3NTM6MTlAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiMjMzNjIwODM2OTc0NjIwOjE5QGxpZFwiLFwibmFtZVwiOlwiX2lfdF96X0JlcmFcIn0sXCJhY2NvdW50XCI6e1wiZGV0YWlsc1wiOlwiQ09Ycis1UUVFSmlRNUs0R0dBNGdBQ2dBXCIsXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6XCJsN3lqL0gzTXpacnEwOEVHUWZrSFJRdGRWejZtOEVldEY0M09vVEdkSlNNPVwiLFwiYWNjb3VudFNpZ25hdHVyZVwiOlwianpmM1JvQ2xiRGVGY2w5WnVacy9PVEFheFNwbEZzYk44eEZ5YUJHR1JVa1VETk1qbWRKYnZldUZYWXpnYlBQWDE3OTRQOElZYUYrbXRlK09MMHRmQ3c9PVwiLFwiZGV2aWNlU2lnbmF0dXJlXCI6XCIxR0xDMHhqdFFNb05sdHB4ZU5hVVV2WndUYUN0ZUpyQ3diajBYU3pybDNVM1M4cGE5Q1gzVWdFcUpLOXZwUWQ4Z2FValR5TGZhZmF1ZEdpREttamhpQT09XCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiMjU0Nzg3NTI3NzUzOjE5QHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQlplOG8veDl6TTJhNnRQQkJrSDVCMFVMWFZjK3B2QkhyUmVOenFFeG5TVWpcIn19XSxcInBsYXRmb3JtXCI6XCJhbmRyb2lkXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzA4NzIyMjA4LFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQUM0ZVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUM0ZS5qc29uIjogIntcImtleURhdGFcIjpcImFmZVlpNGdJN2d3cTlYNEtLZ0dhajJISmMwOGdkckErVmFpaEZFeFJ0R1U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTExNzcxMzg5MyxcImN1cnJlbnRJbmRleFwiOjgsXCJkZXZpY2VJbmRleGVzXCI6WzAsNCw3LDhdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==",  // PUT SESSION ID HERE 
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
 
