const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="allykhuzaima31@gmail.com "
global.location="dar es saaalam, Tanzania "
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+255 614 112 247 ";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "available " ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,+255 614 112 247 ";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "+255 614 112 247 ,923xxxxxxxx";

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
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_13_33_02_29_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiK0hRbjMyMzMvMUhGZjltTW1OS1hXZWU2ckozZG03RWtOWTlPSVRTTmNVbz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIm1TMldpQi9GN2dhNTUzcExhbmJmbTNHY25MRFlkempneFJvcFdOWXl3VkU9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwic0QrbEp2RHl5WXpNWk1WMTI1aVUwS0FHZDF1Vm5kTUNYWi9zU3FZZVUwOD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInNlcjRtaXJNT29yc0FaNzc0MHBhK25HRUZnVVkwTGFkZDZ0enBmUCs3VVE9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwia01rcm12UW9EV2xndWZGanBWUENxUzhFZ3ZTY3MvUXBDbTU0UGNhclMxTT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjRkYldJQWtzMGIzcTRNTGJJZU8xeWlBNVQ4dkN1cThRMjZwZWRIdjhoam89XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ1RWE2a0RUVmhvK1JSTXNPM3A2MXcybVFnUWxLSi9ESVh3N3FPNDJxYkhBPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiSWZqYlBHajVUTHFCcmFIejU1MUdJUjIzZmhtYkxCV3Q5STBqRUZPbG9YQT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJLNW11eGhCZEpHSkZvYU52SktpUnh1WjVyWHIxcHhyNTAwMkZBM3E1NGpFelFSU1ZyOFowc2c4NllGeDF4VnlEUzNiRzBFZWl4b2hEbFhYZjB0U0pqZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTY5LFwiYWR2U2VjcmV0S2V5XCI6XCJUMEtJK2RUeFBPeEUrK1ZBbTB4UkFIWjlQTm1BL05QM3ZCNXBCTVRWY00wPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjU1NjE0MTEyMjQ3QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjY5OUVGRDgzRkNBRDBFNjk1NTVEREFDQUQwMjBERENFXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDkyMTM1ODJ9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjAsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJOSXhNdTF2ZVRVQ0g2Y0kwTzNBczZ3XCIsXCJwaG9uZUlkXCI6XCI3NTBmZmEzMC0yYmVhLTQyNDUtYmM3MC03YWMwNmQxY2Y3N2JcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInRoR0Q0d3hiY3dYS0FLSDVDR3ltZUFQZ01Nbz1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCIyelFrZjNJYjJUY2FVMmhxcC9xK0QxZTJ3UUE9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiV0RXNlc4NDZcIixcIm1lXCI6e1wiaWRcIjpcIjI1NTYxNDExMjI0NzoxMEBzLndoYXRzYXBwLm5ldFwiLFwibGlkXCI6XCIxMjk0NTA2ODM0MjQ4NDc6MTBAbGlkXCIsXCJuYW1lXCI6XCJTbGVwYWxvbml48J+kk1wifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDT1AwK05nQ0VJaVBncThHR0FVZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcInZ4bWppemUvdVk3aVdQZU5pNWxadG9wd3V3QlEvNFpqYmpHaUNESm1KakE9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJML0lwbU1TN3R3MFJDdXpVMHFQRnZXMmpCVVJlWjdESTlYNmhONXFhZzBrdnBSMm0vYTBQV3VIajNLME44MFJuY2lwcHkxRTd3cmx1RXU4OGZVNkhEdz09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcInVFd2RrbFhvZ0RFSDBYbWlLSjRTYWNHaTNIZFBlTHkvMG1rbHl6UnVpbzdRMlE0UFQrNFdpbW82QklibHJZUXdqcVVRYyt1enpsMEhweVRGbUlja2dRPT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyNTU2MTQxMTIyNDc6MTBAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCYjhabzRzM3Y3bU80bGozall1WldiYUtjTHNBVVArR1kyNHhvZ2d5WmlZd1wifX1dLFwicGxhdGZvcm1cIjpcImFuZHJvaWRcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MDkyMTM1NzksXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBQ0E0XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ0E0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiUEI5dUdnbFBjNmJWbTFBUGhPcmdUM1pUSW5Bc3lUbjJFdFNDcFJlZ3o4bz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MjM0MDEzMTMsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==",  // PUT SESSION ID HERE 
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
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
