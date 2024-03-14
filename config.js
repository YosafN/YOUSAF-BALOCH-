const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""  // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://ShahFahad:<password>@cluster0.sjl1xjv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  = process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website= process.env.GURL|| "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_18_03_14_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiY0pzSld1S3JYRTRCK1I5dnVkSHFRcWx4SWRlMS9JMkcrb1lSQzc0cVozbz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJya01wU3JFTVBLcWRWVVNLUXppRWhKOC8xQUF4azZ2R05HS1hodUdNSGc9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiV1ArTVBIdzRieEFxS3dtbnloaWxOZFZ1d3pqWHhzYjQvTEJ4ZExWSWhGST1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIitaQXZ6MS9BSjZMZW42aHptNjVFbUlrY2h6RUk1a0xsNFVER01BVnF2bUE9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiSUNKbHVPbWhUdkoxZi82YkNXbFp6UHZYekxsNWI4ckRzY2V3SHhMM3JtUT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlFyaUhZUEEwT1BQSk1jdnlueDh1WFpMKzdmZW9xL0N1UklaSXY4TXJyeUk9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCI0SEVnUTYxMHJGSDl1M1JCcFJhS20yZUwvZThQV1ZmNVplQW9tb2t5ZG5RPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZnJZZFo0MHZ0c0ltZ0E5TklyWXpLbTl5NmUyM2NkRUJSNE8rcUhwRy9pOD1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ5bEVCelUvd1hiOUp1b2V3eG96VCtESjdkbkZqM0NQNXVYTXZGMDFVenZyM2xla1FFYXJ4TDNGOXk0ZDVKcGJrZFNNT2ZBTlc1a2Era282c25qSG5BQT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTgyLFwiYWR2U2VjcmV0S2V5XCI6XCJSOEo1YXkyMExITGp3MW0ybGJSOE41SE1LcmdtcnllWVRLMFJRbkpXeUVJPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzNDE3Njc0NDgyQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjFGRjg2QkVGQjFGOEM4MjlEMDVCRTNFMUJDQzgxQTlBXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTA0MjU5MjB9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzNDE3Njc0NDgyQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjBDQjYyRjE4MjA0ODdGNjU0MEIzMzlBNTVCNkJBNTNCXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTA0MjU5MjF9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzNDE3Njc0NDgyQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjZGQkQ5RDVFMTQ4RDcyM0I1NjdCOTY2MTU2N0U4NzY2XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTA0MjU5MjR9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzNDE3Njc0NDgyQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjMyQTk5NDZFOTU4RURFQjM2QTk1RUE4NTYyQ0FFNjdDXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTA0MjU5MjV9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCIwZmxyY2NVSFFDMm82Z1pOa3kzTVRBXCIsXCJwaG9uZUlkXCI6XCI5Y2Y4YzMyZC04YTUwLTRkZGEtYjlhNy04MWQzNmVhZDE4OGRcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlluSUlWVXFEZ3pid3BRYnR2S244VUhNK2dXND1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ5R1c2RnpEMXFvS2FwZ25ZbHRSa1FhY0FEaTA9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiWTJINEdKRTRcIixcIm1lXCI6e1wiaWRcIjpcIjkyMzQxNzY3NDQ4Mjo2QHMud2hhdHNhcHAubmV0XCIsXCJuYW1lXCI6XCJVbmtub3duXCIsXCJsaWRcIjpcIjExOTkyODY0MDMwMzI0NTo2QGxpZFwifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDTjc5c3ZjRkVMdU96SzhHR0FFZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIkt2RUEvdnZrTFZYa2U0Vk40ZGhlQ1FZY0J1YkV2MmRhWHFiSFB3b0hjaEU9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJrYmFBNVM0cTNIZjBEWlEzZTRkczhBeVlSUUFGRFdhcVU4TmNWb1VWdG1WTDlmNkRTSElXNjNCK2JlbkpqVEJ1bE5oV2ZnVDBQOFdlbHpMaHVxMHJCZz09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIlF4YWUvR2U3SWdxcWdJWmlnTW1zclFUTm56M1lReXcxYU9BbUJmUUg3UW1VTkNUOTYrenhaVnRYeFE4bDBTbVQ4YVhjWGFFK0ZTS1h6ZFgwd1M0YUN3PT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCI5MjM0MTc2NzQ0ODI6NkBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJTcnhBUDc3NUMxVjVIdUZUZUhZWGdrR0hBYm14TDluV2w2bXh6OEtCM0lSXCJ9fV0sXCJwbGF0Zm9ybVwiOlwic21iYVwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMDQyNTkxOCxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFBazJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBazIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJWMTQwR2tjclBCRzlaU2lVZ3ZKYTk0RzRBNGVzOXl4ZGFIb0dvWUpiR2tjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1OTI1NzM2NjIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxMDQyNTkyMDEwNlwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.0",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
 
