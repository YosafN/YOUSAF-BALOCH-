const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[MaXwrld Md]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="maxwrld254@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI=process.env.DATABASE_URL || ""
global.scan = "https://suhail-md-vtsf.onrender.com/";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "254742516017" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254742516017";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  || "254742516027,923xxxxxxxx";



module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS : process.env.PREFIX || ".",
  BRANCH : process.env.BRANCH   || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "© MaXwrld md" , // ```『 MaXwrld memes 』```", //*『MaXwrld md• 999』*\n youtube.com/@suhailtechinfo0"),
 
  author: process.env.PACK_AUTHER || "MaXwrld-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "MaXwrld md",
  ownername:process.env.OWNER_NAME|| " MaXwrld❤️‍🩹💌memes",

  sessionName:process.env.SESSION_ID|| "SUHAIL_08_15_02_21_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZ0FldWlMdU0wM3UxdmFHQnFiZTUxcWRiMFJKcGZEeFNlQ3JILzJHWE9Ybz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkd3VFJHa2RQcXNUM3JKdGZpbW9NRVpUdjRMcFE5QW1XTG8vM05oN3FXamM9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwibUtTQ3B0cC9wU1lhVUVQMjM4YXJidUhWcjRUN3llbVFmMFFia2o0YVNXaz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjZUOStYTTFzQkhQOFZ6RStJQjMwZmZkdzRxVEFrOE1hZDBWZ1A1cFlqZ289XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiSUlpcUhla1I2aG1EY3cvbTJOdTFpN0Nqb29zTkpuKzVKV2duVWVvMGpYaz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImhQWDk2ZWRDTk1LVzlSMUU2QVJ3bkx3UlI3bU1PWDZreThERFJSRVI4QnM9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJnRXNKR3MyQUM1TysxMXFYWnI3VHFIMmFrUks3TmhIaFFjV1hLSlhaQUVnPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZmd6RWxIWCtzSjlUZGpQQktPd0tSdDBlMEtVbUt2TnNHU1U3VSs2Unp6QT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJOOVE1OXQveExIdi9NZEVRbDVsVzVpbWVhWVVFLy9SQ1ZBYVpoZFVUVlJlNkdUbm9WeGxsTUtlN1dDb3I3WGVDYlRlbWN5V2oxUEV0OU5Oc0RyMVpEdz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6NjQsXCJhZHZTZWNyZXRLZXlcIjpcIkdsQmlLTkRlcVZ1OTVCUExBUmZmdVBDYUhXSkFrZjZ0WDZGY1E5bG5nWXc9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCIyNTQ3NDI1MTYwMTdAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiMDhBNkRFRjIyNUYwMzUzMTBDQ0NBQjI4RDZBODg5MkZcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcwODUwMzMwOX1dLFwibmV4dFByZUtleUlkXCI6MzEsXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOjMxLFwiYWNjb3VudFN5bmNDb3VudGVyXCI6MCxcImFjY291bnRTZXR0aW5nc1wiOntcInVuYXJjaGl2ZUNoYXRzXCI6ZmFsc2V9LFwiZGV2aWNlSWRcIjpcImpBMlZzNDhIUV9HMHp6cTNUaTBOUkFcIixcInBob25lSWRcIjpcImUzMDk3ZmQxLTRlNDYtNGNjNC04OTJmLTZmY2UwNzNiOWM3Y1wiLFwiaWRlbnRpdHlJZFwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiY2lCanh0WVVYUGtKWWpBTXlubXQ4U2EySE9zPVwifSxcInJlZ2lzdGVyZWRcIjp0cnVlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJvSXRQRm0rTXFPVlQ1UDZwQWt1QmZNTVV0cz1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcInBhaXJpbmdDb2RlXCI6XCJKUUZXWUFaRFwiLFwibWVcIjp7XCJpZFwiOlwiMjU0NzQyNTE2MDE3OjQxQHMud2hhdHNhcHAubmV0XCIsXCJsaWRcIjpcIjE1MDc3OTU0MTMzNjE1ODo0MUBsaWRcIixcIm5hbWVcIjpcIk3Do1h3cmxk8J+Sk/CfkoxNZW1lc1wifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDUFhEMDk4Q0VJVGkxcTRHR0FFZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIk1VRk5oMWxCblRyZUxsWHoyL0ZjYTBLWUFNbUp3OEdVeEhxWnI4OWhEaGc9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJJcVVKWWNWNk5zTU9ObHJMV2wweDlSc2hVbS93TTJVNXVOdE9kcVpRclNTaWlZeGFTOUIyczNnTkdrb1NscEtJVzhBcit4MHFOMnk4R2Rxd0pUTFRDQT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIitGQUVoMVVyYkY5OFdJRm1vbFJIQktZMjdxbGxtc2xmNkF4enVnZjZCazVkSGdqdDZQczFYOGc2VzJxbTJYZStBV0l4QlMrQUxEa3EycWVwTCtIT0FnPT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyNTQ3NDI1MTYwMTc6NDFAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCVEZCVFlkWlFaMDYzaTVWODl2eFhHdENtQURKaWNQQmxNUjZtYS9QWVE0WVwifX1dLFwicGxhdGZvcm1cIjpcImFuZHJvaWRcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MDg1MDMzMDMsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBTGZmXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGZmLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTTNoM0JSYVlDRDJQcnljZUxxdlVrejVrRTFXT0o3NVJDUUtybFF1VnVRZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3Mzc0Njg5MTEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDg0OTkxNjMxMTlcIn0iCn0=",  // PUT SESSION ID HERE 
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
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "MaXwrld",



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
 
