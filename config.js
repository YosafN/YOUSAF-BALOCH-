const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="jamesmakani5@gmail.com"
global.location="Eldoret,Kenya."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Kenya";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/E39qMdWBujOHGVgWBY3XW1";
global.website=process.env.GURL || "https://chat.whatsapp.com/E39qMdWBujOHGVgWBY3XW1" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "254758732775" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,254104567966";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254758732775,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Maldives-MD",
  packname: process.env.PACK_NAME || "🔥",
  botname : process.env.BOT_NAME  || "Maldives-mak",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_12_39_02_13_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwia1BRUGJoY3gyQ1VFVHh0cnZmcEVyaHdSbnJpWXpMTHdkZFczbUU3cVZFQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkZtajV3bEN5VGN1UGY0Sk5lNCtIaTJjUzF2U091cDlkOHhmNnRHRlgzVTA9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwidU9yMkNlL3lWY1A0aDNJL1ZLaHlja2drTXBzcHB0MTVJeWtMblBqN0NtST1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjhpSmV1VzF2QW9BTEs1eHh2d05LWlkvUmFmTUVXeWcrSEFtWG1TY2toVWM9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiUU9uMURDMXh4R0xZa2lzdUdiSWF5QmJVVDB4cHJHYVRoWlRaR2Yxd1luQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlRnZ2ROVWJ1Z2hzMllDU2hOOWkySndBek5KVzVJcGlmQ0VKVCttQjFObE09XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJTSDFDVkV4UzY3dlhvazhLc1RzUU5ra0JkRUxEOG9mSmlGNmFKU2hKWFdJPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiM24xK2RvZ3Vtc1paVFplamw4UmJKeVd3MG0vRkhFWEFLRk45a0RxS3cxWT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ0VGU5TmE3ckgwZkNNclAyM2xEQUM4R3pDRDN1TitGVWlpWEZtYnV1M1JTN2tuemo4dm9vK1FwbjVkbjR1TllJRHpEN2RTcm55dGt5WHZ4RUlhSEtBZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTQ0LFwiYWR2U2VjcmV0S2V5XCI6XCIvaUpybWgrc0RWL2NVWndwRHJzc1grejVDLzRtc1ZpaWNoUWRyRFJHSlpnPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjU0MTA0NTY3OTY2QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjAzNkM2Q0E3M0NDOEE4MDc4QUY1MTY3N0FGNzcxM0ZCXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDc4Mjc5OTJ9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjU0MTA0NTY3OTY2QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIkVGRTE3NkQyQzYyQkRFRTFGMjhDOUNGQjkwMTU0MzgxXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDc4Mjc5OTJ9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjU0MTA0NTY3OTY2QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjMyQTIyQ0I3QjQxOEEwRDYyMjE4NzVCRTREOEQyNzk4XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDc4Mjc5OTV9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjU0MTA0NTY3OTY2QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjVBNEEzQjkyRjU5OEZBN0NEQkFFREYyODQ4NjU2ODAzXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDc4Mjc5OTZ9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCI2LXExRHRfRFRLR2UxWC1fWXQyZ0x3XCIsXCJwaG9uZUlkXCI6XCJiOWM3MzAyMS0yZGUwLTQ5OTUtYWFiMS1hOTRkYTc1Njc5ODFcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkM5dVgvWmM0ZEYwMnNLNmszU2loY29FRUwyVT1cIn0sXCJyZWdpc3RlcmVkXCI6ZmFsc2UsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiL25ZWXVWQVg2SzJlNXJKR0VYamxNYmtGUGw0PVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNQSCtyTlVCRUpMR3JhNEdHQUU9XCIsXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6XCIzbDkyYUYrZFNYQjN0alMzVGV6SzFsTkwya2E4MkRWSE1HaGJNN0NVTFFJPVwiLFwiYWNjb3VudFNpZ25hdHVyZVwiOlwibGtoNHAwazIxMjdlU3ZEZFYvQWhjK2c1UkVKcmRrbjFHR05kUWk0VEJSRzZ2b0JaOEUwK3c2ZDUzK2d4UzVKbStPeXlGRjltZ1Jnelp0aURkWTZ5Q2c9PVwiLFwiZGV2aWNlU2lnbmF0dXJlXCI6XCJCRXVySlh6bTdrZWljSmFxaXZ1eFFZcVkxbTA0YzJ5OGtGNE5DV1JxZzYyNjhkeXIzdnpWQTk0MkE3by9OekdvWXh1Qm1nMFA1WG5tL2lTbFRWV1BBdz09XCJ9LFwibWVcIjp7XCJpZFwiOlwiMjU0MTA0NTY3OTY2OjhAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiNzIyODQ3MDIyNTcxOTM6OEBsaWRcIixcIm5hbWVcIjpcIjcgNyA1IEtpcGxpbmdcIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyNTQxMDQ1Njc5NjY6OEBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJkNWZkbWhmblVsd2Q3WTB0MDNzeXRaVFM5cEd2TmcxUnpCb1d6T3dsQzBDXCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcwNzgyNzk5MCxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFOY25cIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOY24uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJVktrZXR2a21QdHNkdlIxYjFBQzdFbU1uYThTSkwxRU52WkxJWWhXSW5RPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ0NzQzMDUxMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzA3ODI3OTkxMDk2XCJ9Igp9",  // PUT SESSION ID HERE 
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
 
