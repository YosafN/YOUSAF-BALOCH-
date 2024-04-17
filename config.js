const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "16399990192" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "16399990192";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,16399990192";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "16399990192,16399990192";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_02_04_17_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNEVFSkZtTEFoUy9RWC9XbUdmM1ZNNDVocUNyNWUzd3htdEdmMnVVbkFWTT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkZJckpqbnU1VndDL1FaWjhpWDVFWTVTUlp0M1VxaU5pbjZrcnp6bjBSUjQ9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZUJJV0k3WkswWDhhMmx0bWxuUENNdVdSQ2lKcTd3cFJDMGE5STNTdXlrUT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkFuc1U2cktQQU5vTm1rRmRYN3l2OGhoTGJtM21Cd2ZBUUhSYUI2cHd4MGM9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwib01mL05uWWtCTDAydkRGNyt2ejBmUGFEbFVnSlVudFc5NmxwYWJGU1dVND1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjFjdk82WGhEREdTVzNGTG9BL2JiVmZxVHpSbE5JTkRKUWp2UGJRejFpVE09XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJLS0tQL2tWNmovU2UrN2o5dEVBTG54cC9aNzV6R053UkdWdkUxcHNvcGxBPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiejJOUytPWHdjVFkyRkRiZUcxN1dzK1VYeWQwY1Q2WGJZSzh3dDZQaHB6dz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJsa3o1aHFzQndrdXBDQjhTSTRpVldrY3lHUlpWOVBnV21mSXg4ODVVckUyV2VsWTIvNzdQZEhuQVE4ZzdtaXA0dXMrWHVQZVNBdERQa1NhczByUGRCUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTI3LFwiYWR2U2VjcmV0S2V5XCI6XCIrQzN1bEwxZ2U2UUJ3cDhJa0x1QWVPWC84NVRpdDU4QStTdEFveWRMVWhBPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiMTYzOTk5OTAxOTJAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiM0FBQzQ0NkUyODM1MTYwNjg2QThcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMzMzMDE1MX0se1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCIxNjM5OTk5MDE5MkBzLndoYXRzYXBwLm5ldFwiLFwiZnJvbU1lXCI6dHJ1ZSxcImlkXCI6XCIzQTc4NzdGMkRDMkZCNzM0MzY2OVwifSxcIm1lc3NhZ2VUaW1lc3RhbXBcIjoxNzEzMzMwMTU2fV0sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjoxLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiUnN1ODBZcGRUY2V3MGdCY0J5Zmh5Z1wiLFwicGhvbmVJZFwiOlwiOWMyZWVjNDAtNGYxZi00Mjc1LWE4ZmQtYjFhNjVlM2JhNTMzXCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJpbHI3cWxlaks2MWRpM3h2VWVGSTNmY0JBZUk9XCJ9LFwicmVnaXN0ZXJlZFwiOmZhbHNlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkdsWjBRcWxrRG5YMmZzV2I0YWZCMFl5VzI4bz1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDSmVqaE1jREVPU3YvYkFHR0FRZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIkdhb1d2MlRZKzdGc1RNQWNSTnpzTUZDYTMzeTRXOHY4S3U5Ukw4dkNraUE9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJ1SlJteERxbVk0dlIvTnk5dGJ5NWFSem9MRHI1anhHYmtpZnZwQkZqQ0hXWUNiMjBFb1NNVTlkdThsdCs4YlVyVERWS2JJK3I5N1ZpY3MzSlNqS3NDQT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcInBRZU1BQnFVa3RBd1FtVmYzV3d1Y25OZnhxVFFqZDlzRUVBTEcxeW9vWGVKUmNWc0dzY2hHcVlWRThhSmRzdkpaYnJNNHhNSXpBdldGUlJTeUlhMEJnPT1cIn0sXCJtZVwiOntcImlkXCI6XCIxNjM5OTk5MDE5MjoxNkBzLndoYXRzYXBwLm5ldFwiLFwibGlkXCI6XCIzNDU4MzQ0NTgwNzE1NDoxNkBsaWRcIixcIm5hbWVcIjpcIi5cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIxNjM5OTk5MDE5MjoxNkBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJSbXFGcjlrMlB1eGJFekFIRVRjN0RCUW10OTh1RnZML0NydlVTL0x3cElnXCJ9fV0sXCJwbGF0Zm9ybVwiOlwiaXBob25lXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzEzMzMwMTUwLFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQUtYWFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtYWC5qc29uIjogIntcImtleURhdGFcIjpcIjRSMVBBNkVVMUJDeitFa1pKdndzNVhJaW1MdElVb1RQTk8xK01EQ3Q4RUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTU0Mjc0MTk5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTMxOTk4MTAxMzVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©YEAT" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "IMMORTAL JOEL",
  packname: process.env.PACK_NAME || "❤️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "immortal joel",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
