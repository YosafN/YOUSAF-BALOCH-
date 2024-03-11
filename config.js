const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""  // put your app url here,
global.email ="mosesadebayo756@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  = process.env.GURL || "https://chat.whatsapp.com/LibOPIgseMw9Lh0wUizugo";
global.website= process.env.GURL|| "https://chat.whatsapp.com/LibOPIgseMw9Lh0wUizugo"; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347039754751";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false", // disable bot in pm when public mode
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text", // set IMAGE/VIDEO links here
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_28_03_11_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiS0hxZDlsdU0zWEpqeC9IcDlrVGoyNTZvRUVCcGpQT3Y3dXloTERjK0dYYz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjhOVE9DbHdJQWg5OUZRTDBsTDNra3g2WWRka2NETXdJTmVveTRPZng1R289XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwic0x3NWtneEJkSzg4a0VjKzNzSXh4Y2dlWUNpN0tVN2lDMkNlZEt2SnMzND1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInY2allFdGxNdnVpKzhjZ1hGMnVySWxCSm53bzZOaVlrRStnVjNMRnpwd2c9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiOEJoWmg3ZHF1V1JiQkRWWGQ2aDliVHRvWG1WazBjSS9qa3VjKzZkMDEwMD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlAxWHNRbzA0SDFQTVpVWExIYWc5L0lLMU5xczRMTmFiNUg0NUdTc05uMTQ9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJrSk5nUVlWTEVWVVhiNTI1NmQ2ekxHckpzL2hzcHpPZVJVblErcHJCNW5zPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwicU44d0svQUV6SjFjekNKc3BTUk9rM0JXYkJuNUlqU1h6NE84eFZUSkZXQT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJpVGsxRkNmQzhsMUZhZTFSbGpoVGlSY3dCTEZtWUJCcW81cC8vRzZhdlBqbXNWdFh5a3NPaU1QY3RZR2FRQno1c0FDRnpyd1lBT0hXNlZuZ2xIa2xBZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTcsXCJhZHZTZWNyZXRLZXlcIjpcIjB2WDRlWG1ZM3dXSlFxODZCSkVSdWVZQ1RGQkNRR3FXcVE4Rmd4a3NTQjg9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbXSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjAsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCI1TzFMVzFiblRzS0JscDVDUzNLTHZRXCIsXCJwaG9uZUlkXCI6XCI0ODQyNDA4My0yNTAzLTQ2Y2YtYTVhYy04M2ViY2E3MTUxZmZcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImwvUVVvZitnc3pnc3pqSUJYUnJvOFlzOFQzdz1cIn0sXCJyZWdpc3RlcmVkXCI6ZmFsc2UsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiOUJnVmwySG4xVnphT2syUFFyVG90a2VHUERFPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNJckZtZXdGRUtxZ3VhOEdHQUVnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiZUdpTWI3OVc2UWwwbVNtemtoaUovbzZJTHhnQnlxenRpSWZTdytWWDR4cz1cIixcImFjY291bnRTaWduYXR1cmVcIjpcIkV5SnFWeWQzMkpvVVFvUUxjQjdRVUhZQUJEOVN2UEdPOVhYTVFnaU1keDJlZ0p4bFNTRVNleGFnbThjR3dJTEtHd1F0RmtZMkhCZExNTGZ0Qmo0Q0J3PT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiV1BTdUN2NHlXMFArRW1oUTB1eG9oazRsOVVQQW4xVXBxcUM5UkFsd2p4NXpsU0tTKzEyVDY1VVpTTUs2OGZSUFNCbEhleFI1TnhhZXUwVjYySWtLQ0E9PVwifSxcIm1lXCI6e1wiaWRcIjpcIjIzNDcwMzk3NTQ3NTE6OUBzLndoYXRzYXBwLm5ldFwiLFwibmFtZVwiOlwiQWRlYmF5byBNb3Nlc1wiLFwibGlkXCI6XCIyNjQ4NzA5MzUxNzUyMzk6OUBsaWRcIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyMzQ3MDM5NzU0NzUxOjlAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCWGhvakcrL1Z1a0pkSmtwczVJWWlmNk9pQzhZQWNxczdZaUgwc1BsVitNYlwifX1dLFwicGxhdGZvcm1cIjpcInNtYmFcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MTAxMTY5MTB9Igp9 ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.0",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| """,
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "MarvelDesign",
  ownername:process.env.OWNER_NAME|| "IMO",


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
 
