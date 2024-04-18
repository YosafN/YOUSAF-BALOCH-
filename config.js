const fs = require("fs")

if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "mongodb+srv://joneltmpkszyu:<password>@cluster0.uvigaem.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/sirenscode";
global.gurl  =process.env.GURL  || "https://wa.me/254707589396";
global.website=process.env.GURL || "https://wa.me/254707589396" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/bb374d9e92afbde2bbbfa.png" ; // SET LOGO FOR IMAGE 



global.devs = "254707589396" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254707589396";




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
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0tvb3pmejBLczhScnZQNDZHT281YXRReFAyWmN6UHVMb1ZzQW9WTG8yZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidlV1bi9Qd0hHRTdYRTNQSEdnQkZaV2pScGFWbGk3eGJqNDB6VEJ1V3h3Yz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrREx3bWJHM2FQR2hITGtla3AxdGl5WE03UldocmJnZGszcWpXd01mNEZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOWUtweFE5WXBqcS9JeklPMzFHZ1JSUk5qWnJURUhGTjZDUVZyQVVvQmswPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVQdzVDeVpjbzYxMVpJNURBdUVDWFh0RTdKNmZtRU9WeTdQZ1NSQlp1RXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNDaGZSYi9YYXk4RGlKcXBDdEJId1VISGlaQ2lrenlIUE0yVTJDeGNGd1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUZxMHB2WnVTTTVJM1VtanVXTG9DZGVuczl2RUM4Z01FUmlqN2x5S1FsWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV3FmZUg2U29za001VjVJLzlYVk9EWkxxTXVZOGRkMXlNWGRvLzVqSlRHND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNIWGNWM0h2K1orM3FkbXRSYmhwZTcySE52SU1TU21Obit2TC9oSXBqSHdlWjNDQVZvcEFxY1ZydWcvdXVUcWxPdjhtZHY3OElDbG1KSmdhNnBzaEJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NSwiYWR2U2VjcmV0S2V5IjoiOTlvSGVldzE1a0hoK3ZnalcxYWZZMnpFQmQ5dVZ3bk10Z3JFQ25hZGpXWT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiTHF3TDlYRkZTQVNSNmY2aDFTeW5WQSIsInBob25lSWQiOiJmNjgyZmRiNy1iN2I1LTRkYjktYmE1My1lYmRjMTBkYTM5YjMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1VsYjlkeng5Ym1jTzBuWXBuUUF3NTZUbjFRPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhoeDY5U0hlc1V5S1h2Y1ZWQkJIaWNpQVJVMD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJYWlFNTFhaNCIsIm1lIjp7ImlkIjoiMjU0NzA3NTg5Mzk2Ojg0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IjwvPvCfmJwifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xURXpQY0hFTGIyL3JBR0dCRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImY0NE5WTUo1MlNlZHJoeUtTQXFhZjIwd3dhNkIrNktYN0t5M2JtVE5rQlk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkVSRWZ0Z3B3MURVbEhVKzFSSlF6SzBSbVE0Kzh1cC9NQUNJbWxqdFhackRqL3Z6b3p4d2h3Rmo5ekhhTjA4QTNwM3RiMFREclMyaHJ5eVRlUWxDVENBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI0VEdPb0svdHZpTW9CYjNOZW4rZlk2MXNXMmk2ajdJMEFZWW9IWUhMMkRzTjBTdXV4elVSVmdNa2pVUE02bUViL3hhOGhHY0hKSU1ZeHIzR3ZvazBBZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcwNzU4OTM5Njo4NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYK09EVlRDZWRrbm5hNGNpa2dLbW45dE1NR3VnZnVpbCt5c3QyNWt6WkFXIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzEzMzU1NTc3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUU0RyJ9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "*©SIRENS-MD*" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ SIRENS-MD 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "SIRENS-MD",
  ownername:process.env.OWNER_NAME|| "*It's SIRENS😁*",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
