const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="olamidemhi.001@gmail.com"
global.location="Ibadan,Nigeria."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://olabtcminer:olabtcminer@cluster97.qutc3mq.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/Olamide-24";
global.gurl  =process.env.GURL  ||"";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "2347044903733" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347044903733";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347044903733";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
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
  caption : process.env.CAPTION || "©🌴🌹Ølã Mhî Dhë🥷🌓" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "🖕💔 Olamide 🫠❤️‍🩹",
  packname: process.env.PACK_NAME || "🖕💔 Olamide 🫠❤️‍🩹",
  botname : process.env.BOT_NAME  || "🖕💔 Olamide 🫠❤️‍🩹",
  ownername:process.env.OWNER_NAME|| "🌴🌹Ølã Mhî Dhë🥷🌓",

  sessionName:process.env.SESSION_ID || "SUHAIL_02_13_02_24_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiU0xvQ01KR3FDdUdxaC9PNlZBOHZHVm5GblhCU0JtOEY2ZGVJMjNGQmFuWT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIm1sYzJsL2h4QTlUbmFLQXZNMUsvc3RIRGRhRmZlclNBVnhHbkpxVHVqUjg9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwicUJnZ0xkdVlWT0xlZ1VOZEw5aEMwbnVXODVrT1ptSDhXNjZvTWxZZUgzRT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlFEZU9jQ3RXMUtSODM5ZGxpN1dCd2FZa3hydnVSeFJ5ZERFTURCVnUzMGs9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwid0hMNHFEUngvTDVDcjg3V1BJN1V0TG4vNGdodGp3U21lam9SZkY3b0JVdz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlV5Y0xNZERsZWVOazVRZnl5NjhFSjJaL2hFbEhpSlNnVDJ1UGdTVElBUzg9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJHREJVUldZenFCMUpVZkhSOVNDRWlOZER1b0k3ZlFwR281ZmJ1YjV5U1ZvPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiaGtVR2xJMnJ1cnZ0MkhZTVJXRHFHNWVlVTFKeDBKeEkwcUNwcDFSYkhUcz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJxTGtOOEEzQnhEblZnb3BmMVFUc1NsR2wxdk8xbys0UFlHZGZ2UTNzYmV3amhrUzFlNVpsV0xTRk9vbVNReG5XYXY1a05CRXFRWFhvdEhEUTM0YzloZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTg0LFwiYWR2U2VjcmV0S2V5XCI6XCJqOHB4QmhCY3A1STlDc3ZQaWp6U285YThQd0hzanBOaVZMcUlGOVJrNFgwPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjM0NzA0NDkwMzczM0BzLndoYXRzYXBwLm5ldFwiLFwiZnJvbU1lXCI6dHJ1ZSxcImlkXCI6XCJBN0U5RDEwNUZGQzc4MjQ5MzgzNTg0OTMyMTYxRThEQ1wifSxcIm1lc3NhZ2VUaW1lc3RhbXBcIjoxNzA4NzQwODA3fSx7XCJrZXlcIjp7XCJyZW1vdGVKaWRcIjpcIjIzNDcwNDQ5MDM3MzNAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiREY4NzFFMjlCMkZDNEQ2M0JGQjE5NDg1NEU3QkEwNkVcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcwODc0MDgwN31dLFwibmV4dFByZUtleUlkXCI6MzEsXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOjMxLFwiYWNjb3VudFN5bmNDb3VudGVyXCI6MCxcImFjY291bnRTZXR0aW5nc1wiOntcInVuYXJjaGl2ZUNoYXRzXCI6ZmFsc2V9LFwiZGV2aWNlSWRcIjpcInZyc1B4dldjU1h1d2I4eEpleGVtOXdcIixcInBob25lSWRcIjpcIjAzMGYyZGU3LWRmYzctNGJhOC05OWI3LTIxYTlmZTc5NDYyMFwiLFwiaWRlbnRpdHlJZFwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNEU3MjkwSFJtK1NFWmJIVlo2K3RBK1ZFanI0PVwifSxcInJlZ2lzdGVyZWRcIjp0cnVlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInVGaGJMWWFBTDA3UGNKRTZEQnI5SnRwQWZDND1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcInBhaXJpbmdDb2RlXCI6XCJQR0NCQzJSNFwiLFwibWVcIjp7XCJpZFwiOlwiMjM0NzA0NDkwMzczMzoxQHMud2hhdHNhcHAubmV0XCIsXCJsaWRcIjpcIjIzNjM0ODAwNzAyMjc5NDoxQGxpZFwiLFwibmFtZVwiOlwi8J+MtPCfjLnDmGzDoyBNaMOuIERow6vwn6W38J+Mk1wifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDUFhiNldVUXZhSGxyZ1lZQVNBQUtBQT1cIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcImorOTdUYlZ0RHU5Ym9xUGZhQytHSFFPSHdhaUxBSTcxVkZuWE1veCtwM0U9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJndzcyNGdZOU9iRGVEK3pJNVI4eE13WWlIV2wyeGtXMXdFSjJEZzhZbHJ5Y0twY2NrR3JMMWorTHdWM0lNdnJtZXlHOU1VU3Jtd0d6cHdZZG5qYmNBZz09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcImZXVFgxMng4TWpPeGlJNzhMMVF5RUFJdU9SUllSWlVTckhCWkVzeHdUNDB5eFRrc1UzTGljUFErc3d0QWt6cnhEeFlWMHhjUXl4aVhIK29UY1AySmdRPT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyMzQ3MDQ0OTAzNzMzOjFAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCWS92ZTAyMWJRN3ZXNktqMzJndmhoMERoOEdvaXdDTzlWUloxektNZnFkeFwifX1dLFwicGxhdGZvcm1cIjpcImFuZHJvaWRcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MDg3NDA4MDF9Igp9",  //  SESSION ID HERE 
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
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
