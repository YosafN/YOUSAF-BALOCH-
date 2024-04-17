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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_45_04_17_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwid0JYUzJBUG9ndFZXWXhlcG1RTStPenpqQW1scUl2amg1eTk0R2FsU21GND1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImRoKzBYZzNaUkZyb1ZOTlljQ0xUMnBPV1NpZDNMSUxNVDYzZCthTUcrU2M9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMkMzRTdwUFJ3bFNlZnZPUG1QekxwVnlPSkQvV2tkVDVidTE1bXlkYlUzTT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImVBcWhHa1F2OGJkbnZMdmdYVzY3NWplVnpkcVNEU1k0UE1GbVUxRTJBZ3M9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiWU14SGNGclI3WWp4Y1JyRzh0NkZ2VWRSNmlReWlnQTJqMHNoN2xJUDFXTT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkQrZ3VHREorb1o2ZVJYTjBkSkFPRmRXN0Jlb210TlVzWjVYc2xWZndzUjA9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJVRG5KWlVwbEFFUjh6R3U1UWM2cnZ4VHNmQVYrZVV3TC9QM0VodC9zdTMwPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiY3NhbXNaQnc1K00vbG5BbUZVbk01aFU3VDZqTWpSUTFvbHpFWEo0UTNTOD1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJDNzlJZnVIQzU1SmlFamE3UzZ6a0owZlNZdFliWXFHM2Vta2VJeUZaaHN4a1lvWXp4RXBYem1rc2pUdWlqNGxPWXBWemFCYlFSR3NZd1duMkJvVy9Cdz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjEzLFwiYWR2U2VjcmV0S2V5XCI6XCJ0Qm9OdnkrVVl0QXpIeE8ybnFLQzBDYVpvdGdJZUFRVTJETDNUYUVlYlljPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzMjM5NjI2NDI0QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjU0NjA4ODNDQkJBMTI1M0ZCRjQ5QjlENjk5OTZGMjdGXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTMzMjkxNDh9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzMjM5NjI2NDI0QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjEyRUM4NEVEQ0Q3RENDQUI5NTYzNTVFMDU0OTI5NTUxXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTMzMjkxNDl9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJFRVZDb3lKZFQyU3VQbHZwYUZHdVFBXCIsXCJwaG9uZUlkXCI6XCJjMDYzZjAxMi02MTFiLTQxMjgtOTA0Ny00OWU4ZWNjYzY3ZWZcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIitFSlJPNGxzRDJMQytaTEVLalozcnBBU0xJdz1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJMRUU4TDh6aFBhdTNtSDVEcU1HdmNZQlVlT2M9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiNVM1VEZBVkxcIixcIm1lXCI6e1wiaWRcIjpcIjkyMzIzOTYyNjQyNDoyNEBzLndoYXRzYXBwLm5ldFwiLFwibGlkXCI6XCIxMDQ4ODc4NjYxMTgzNTg6MjRAbGlkXCIsXCJuYW1lXCI6XCLiuJnwk4apwqvhj5rkuYjkuYjhjqDwlJKdwrvqnJvYnPCThqpcIn0sXCJhY2NvdW50XCI6e1wiZGV0YWlsc1wiOlwiQ1B2MjZlSUVFUGVuL2JBR0dBRWdBQ2dBXCIsXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6XCJYV2wxNEhTcTZmbUNLNlB2RXBjM3Y1Z0I5aW1wZG55UEM5Q2sva1dmbVhZPVwiLFwiYWNjb3VudFNpZ25hdHVyZVwiOlwidkdrMWc1NkZ4UzN2ZGtZWmxYcXE2TStVcVljQkkwS2IxQjROMElqcDZMUXpZc09pWTA4cVdNL3RpNWlZR0cvK3RpRTFqZ3JMa2ZRNXFVUDBEaHRhQ3c9PVwiLFwiZGV2aWNlU2lnbmF0dXJlXCI6XCJBRjJpajZhWk5lTEM0TURWTSsxWERUUHhVUjVtOWpVd3dQcDlIbWcwVHZaOWRaOHFzc1ZIemFIb3o0WW4zUGlUN05DaGwzbnJKVXJsR3ZkYi8rMVlBUT09XCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiOTIzMjM5NjI2NDI0OjI0QHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQlYxcGRlQjBxdW41Z2l1ajd4S1hONytZQWZZcHFYWjhqd3ZRcFA1Rm41bDJcIn19XSxcInBsYXRmb3JtXCI6XCJhbmRyb2lkXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzEzMzI5MTQ2LFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQUpqaFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpqaC5qc29uIjogIntcImtleURhdGFcIjpcIlJiKzgxd0dsWVZyTUdJcitXYTc3L1M4OEFib1UrbjRIRThrVVIzdTdBWVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI4MDk5ODI2NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzEzMzI5MTQ3MTQyXCJ9Igp9"  // PUT your SESSION_ID 


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
