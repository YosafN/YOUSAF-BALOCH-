const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="cyrustillerson@gmail.com"
global.location="Bananahill,kenya"
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "0746812431" //
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,0746812431";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,0746812431";

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
  botname : process.env.BOT_NAME  || "kadolly",
  ownername:process.env.OWNER_NAME|| "cyrustm",

  sessionName:process.env.SESSION_ID || "SUHAIL_11_19_02_06_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiYUlsamZ0Y1RBMFFpeklpL0dtenhSQWJWVGlqaDJMNzF3MzM0NkNRbDVuVT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImhLTWk5bVNiZmlQQzVHZXpSdnh6bzlBUFBUWnRreEZoZ25oWFlHOGdJekU9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiUUZLd0FyYnNVcXJwaU9WTEFGNm1WZHVJR1ZJTkMzNG5CQUwvRTFNRXlHQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlZxdDJWdlRnV3dkV1FmQ0ZrY256Qi8rUmd3RmxSOXZoYk9vVFByVTRlbDQ9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiS012cW1xQjZsODgwdHVHVDU4dFd2enRlR1dXYi9Tc2ZaUURHcUd3K0trZz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIm1IdUo0WWVFaXFZMFhnS29SbkxnSXh1RUdaUkFyYmg2dE5pMTBNTGRvME09XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJXQ2ZOUCtvU2JQVnpOcVdhRmd6VTVwR25nY0pjaDVSM0V4ZmxjdGY4aUY0PVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiWnV1dEFLNkNvSUdvTkJFa2VhWWhwb1lySUNmK2JaZ0hNUDJHRThjUVFoUT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJjYVp4a0NsZi9WZis2ck51SFUrckN5d1RZVEpaWHdPQTJlQlNwM0lrcGFZbVZEU3JXZWRGblllUitRdm1EVC96N2twZjl0OCtHdkVGbjhZYzJZZ2FnZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjcsXCJhZHZTZWNyZXRLZXlcIjpcIkdxY0hmR1ZhcjlCbWl3UURlSEFVZjMyeVIrS1JTV1hEeEFJSGNCR3JXeHc9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCIyNTQ3NDY4MTI0MzFAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiQkMxNjU1Njc3RUNERjAwMzNCNzYwOEEwMzcwNDQwODZcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcwNzIxODM3OX1dLFwibmV4dFByZUtleUlkXCI6MzEsXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOjMxLFwiYWNjb3VudFN5bmNDb3VudGVyXCI6MCxcImFjY291bnRTZXR0aW5nc1wiOntcInVuYXJjaGl2ZUNoYXRzXCI6ZmFsc2V9LFwiZGV2aWNlSWRcIjpcInRnalVyV19IU2VtdUJjeUZsWHBUTFFcIixcInBob25lSWRcIjpcIjRjYWVkNWViLTEwOTktNDEwNC05ODk5LTQ5OTY4YmU4MWRlZFwiLFwiaWRlbnRpdHlJZFwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiUjI0RzF1cGRHaUtvZjlydG1jbS9iaUtqK2pBPVwifSxcInJlZ2lzdGVyZWRcIjpmYWxzZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJPTnA4UXhJQkNVaFdpYUEzSjBWKzZ5Q2YxS3M9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJhY2NvdW50XCI6e1wiZGV0YWlsc1wiOlwiQ0tmZ2hKVUhFTUtyaUs0R0dBRT1cIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIlNvWGZyQlowWlpnQ3BjTzdCbzlydUhqYUtVM2xuTThQQmdzY3BGNmVuRFU9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJrcUxXM3pESXRPcHNJUG1jSW5TcXp2VHZBSEUwQW9LQmgzbHdKSUlCakF2YjUvZk5Bb0dLa3NVZkpqL0lMaC9sT3hiajhBd0o1Sk1sUlZ2S2IzM0tDQT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIm02NVdzWkw4VVlnZU9VcjZpdGpxaTRmU3NkbS9YMGZRRVg4eVBWTkt4QlBKMmVzb3lIOVV5NmRwTldMNHdJSHNpUnhobXVoRUxvQi9zQVlVOURSWWdRPT1cIn0sXCJtZVwiOntcImlkXCI6XCIyNTQ3NDY4MTI0MzE6MkBzLndoYXRzYXBwLm5ldFwiLFwibGlkXCI6XCIyMTI1NTM3MjA0MTQyMTU6MkBsaWRcIixcIm5hbWVcIjpcImN5cnVz4oSiXCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiMjU0NzQ2ODEyNDMxOjJAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCVXFGMzZ3V2RHV1lBcVhEdXdhUGE3aDQyaWxONVp6UER3WUxIS1JlbnB3MVwifX1dLFwicGxhdGZvcm1cIjpcImFuZHJvaWRcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MDcyMTgzNzMsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBSmZMXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSmZMLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNy9yVWhQb0wwQWRHV2s5b1dZSXJvN3NEMThHUVhHK0srYnFSclBvbW5CUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTIzMTY2MjQxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKZk0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5dDRhRWkzdG1mUGZlRlRVM0xjMExjUkE1WXJkK2lra3NBaDdhaFI4RWFjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MjMxNjYyNDEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDcyMDQwNzI1OTJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKZk4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNRkR4aU00SVVrTG9makdFS2dGOWhrb1Zodk5pUWxJRzRZRVZNYUpvMWJBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MjMxNjYyNDIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDcyMTcyODQxNDdcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "true",

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
 
