const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.image= "" ;
global.xvideo= "" ;
global.devs= "923261405169
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="abdurrehman78866@gmail.com"
global.location="nathara,Sir lanka."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://abdurrehman78866:<rjc6dc-z.Hu2V@t@cluster0.1wq3joc.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI=process.env.DATABASE_URL || ""
global.scan = "https://suhail-md-vtsf.onrender.com/";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null"923261405169;
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923261405169";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923261405169";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923261405169";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923461584582,923261405169";



module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS : process.env.PREFIX || ".",
  BRANCH : process.env.BRANCH   || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author: process.env.PACK_AUTHER || "ART",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "ART",
  ownername:process.env.OWNER_NAME|| "It'x ART",

  sessionName:process.env.SESSION_ID|| "SUHAIL_12_30_02_02_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiT1B6WkIxNVhpZUFVbEtuR0s3SkhHZFE4d2MwVWdUamFmcU44LzJBQzMxTT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInY3SSs5b0dHTUtiY2c3VlFYQU9sVjQveTRma2YzUHYxVlNQUm51K29XRXM9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNERNdmI5UFoxdjlENGQ0dGhqQ1cya1d6OTI3WUdQaDZ4cFVtTERVYnhtdz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIm8xSE5GdTg3MFFQcDFNS3docUZCVFp0TENQQmhXazJrL1VmZHU3L2hvaTg9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiY0h3ZGxYY2REQUszaktCaC9Lc2NCNHZFYzhQN0tWcFBvN2VtbDBUL1MyZz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjJaZGxXbHhjMDAwUmVXSmMrZVVsellFMXcxaE5nWlVaVjl0MUFXa2drV2c9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJjRE96TXk3aEs5K3R4WnBnQ0VDTWVnUTNpMDlrTTYxTzlzYWdQczFkMUVjPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiYklPdFFFZDdVempDaGJHQjdCcWhXakJxTmdZSW4zR1hNa2dYSXhHY1lRZz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJsVXdpUk9jUkU1MTMxaUtWcUxrZXJCZDlmelZGcW1DSFZNcXZBOW9oMWlCNXc5WkpJZUhJbSs3K0szRU9nQi95b2hEc3JTSWpaWWFFWEo5Wm43UDBqUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjE4LFwiYWR2U2VjcmV0S2V5XCI6XCI1SDBYMjM5Vjh6RU1QWEFIMStTQnl0YkVkSXlBYTMwbnM5cTFKVHJsSkdzPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzMjYxNDA1MTY5QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjFBMDI2Q0U2QzFFN0Y1NDk0NzQ3NzRFOTI2ODk1N0M5XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDY4NzcwMTh9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzMjYxNDA1MTY5QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIkIwQTQ5OTdFRDZDRTk1QkJDRTE5ODA4OTcwQkJCNzE3XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDY4NzcwMTl9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJYSS1FdmJCelFFZWFUZ3ZZYmZTM0FnXCIsXCJwaG9uZUlkXCI6XCJlNzc0YmYxZi03MzBiLTQyODUtOTU0Yi1iNDU0MzU3Mjc1YzRcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIk1RaFNFUUYvbkRzenNJZGdobWRSQWxVRHUyMD1cIn0sXCJyZWdpc3RlcmVkXCI6ZmFsc2UsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwic1F1b3NFRWlxNDlic3BadjhVekhsUTNWT3JFPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNNcXlxZklERU5MQTg2MEdHQUVnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiOUovaDRGOHlxUHZrK0lMVlh5R2FjN2RVNDk3eERqRmZSeUNjaGQ1azZBQT1cIixcImFjY291bnRTaWduYXR1cmVcIjpcImJWMTQ5ZmpOQVNudWxGeFNUc0ZSeUlCaW1HZ3pWSkdSUlNtSUR3WVpmU2hid01HdjZxWnY1RFVibHpzcnUvYVBSVFFUTno0RFRqVzFRK1UvdGxtUEFnPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiaXgyQnhzby9hWXhtYmlka2EwdVNINE14Z0lnSVB1a2pXY2tBQTVYZGRlVTdObXl0TGgyY1RCZ2svNlgrWVZ1MnMvUEViV2JGSGZuaHhialUzRjVZaHc9PVwifSxcIm1lXCI6e1wiaWRcIjpcIjkyMzI2MTQwNTE2OToxMkBzLndoYXRzYXBwLm5ldFwiLFwibmFtZVwiOlwiYWJkdXJyZWhtYW50YWxhdDAyXCIsXCJsaWRcIjpcIjE3NDc0NTM3NDk4NjQ4MjoxMkBsaWRcIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCI5MjMyNjE0MDUxNjk6MTJAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCZlNmNGVCZk1xajc1UGlDMVY4aG1uTzNWT1BlOFE0eFgwY2duSVhlWk9nQVwifX1dLFwicGxhdGZvcm1cIjpcInNtYmFcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MDY4NzcwMTQsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBRUkvXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRUkrLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUzBCd3MyR2p3TFJlYUdtN2JOVlZkb1ZkOFlCQzhmV0JFais3ZXBGNmhEND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDQ1MDU5OTEzLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzA2ODc3MDAyODE0XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRUk2Lmpzb24iOiAie",  // 
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
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
