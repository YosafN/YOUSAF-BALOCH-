const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Mathara,Colombo,sri lanka."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/"

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/E39qMdWBujOHGVgWBY3XW1";
global.website=process.env.GURL || "https://chat.whatsapp.com/E39qMdWBujOHGVgWBY3XW1" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,94772108460";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94772108460";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_58_03_03_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZ0V3N3h0VEMvR3NzbVJrWGZXMld6bnQvNkxxaklIMmhaMVJUTXBJRC9sND1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjBza2ZBNm5UUDFBOEFrNy8yYzBac2FEMTVyelNGKzlJb0tqcTE1c2g3ajg9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZU9QYmhDS0cwa0ViZUFQMGx3bnVZVFZIK25nVVNHUWhVd0NFQytqZEZtaz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjBlTGpXemlvTy9oR2IvTGpZWksycHZtQ0xicTk2cnl0Q2l1ODJ0TEJWRVU9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwieU9JM29YZ1dMWFM2eDkxV25CbTI3UDhlTjgzZnBCaGg5TEw1WTEyOVFsVT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInNoczhIQldBdUd5aXpaakNVOG1UZ0hQaCtOWGNabG5QVjU5dHRZOWJvQlU9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJrRVRzdU1TcndvSldKSEJ6Q2M3OE5EbnRpakY2M0FHWHBUNlRlbm4yL1hjPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwicXVYaXl4WHlmdXNyQ3VyeHRmREVsaWExUG4wNkVhbXp1VkxqWWljQ0NBMD1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJQR2pKOGlKLzl0WWxUa21Ed1IyUThQbUFCSENURXVURWQ3VlU5cmF1UmRlcjlMVWlTVTNmYmloSjJyUm5TRnJJYUlhMS8rdFhIc2RmZ2VxWXJ1bW9DZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjIwLFwiYWR2U2VjcmV0S2V5XCI6XCI4SDI1V3hJVEoyMFFNQU96dC9WN0Vub2Y4TE5scytjdjQ5YWF4eXQxeWJRPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjU0Nzk4MzQyMzI5QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjM3QjgwMDdCQ0I0QjdFRDkxRERCNTU1OTQyQTU3RUMzXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDk1MDY3MDd9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjU0Nzk4MzQyMzI5QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjk2OTE3OTY2REMwMURBMzU2RDkzRTU0NDRDQjhEMUYwXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDk1MDY3MDd9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJMQjNjZnIwcFRHMmY4VWlzYmQ0dUJnXCIsXCJwaG9uZUlkXCI6XCIxZTQ3ODUyMi03MDE5LTQ4ZDgtYjI3OC0zZWVjNGIyMmFmNzlcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkhGcGJMYjgrUUZDeXNZU2piaENXRGhhcjA0dz1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJPWXV6dUgwekVzMW1EZ1ROZWJQRENJdDNnMms9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiMlRTODhNSFJcIixcIm1lXCI6e1wiaWRcIjpcIjI1NDc5ODM0MjMyOToyN0BzLndoYXRzYXBwLm5ldFwiLFwibGlkXCI6XCI1NTQ3ODE5MzIyNTk2MToyN0BsaWRcIixcIm5hbWVcIjpcIm11bGlib25uaWU3OFwifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDS1dNeFVzUWk0R1Vyd1lZQVNBQUtBQT1cIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcImZ3Ym1IMnZiWDlhWXlZVHhqTnpXdDdLelhMZ0JiZUhNNFJmZDhkSmFIelk9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJNVXVFNmNZaXpYSVIwRFJUS2g3U1Q5RmtKM211am1zb0lTSlhLMkx4eWdQcGpUWFFrQWlJOWtXaXN2SnorWVlCMVBSQ3VLbEhQeFRMM0t4SXg4dU9Bdz09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIjNUMlMyMktPMFR2cnZ3UXUza1F0OWdpd2NndDk4cjVFQzVYTzYrdlBlUFdaRURHVk42empMWnBxZkUzMy81STloVTZYWlR5cDE5SHNsWjUrWXZzWEJ3PT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyNTQ3OTgzNDIzMjk6MjdAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCWDhHNWg5cjIxL1dtTW1FOFl6YzFyZXlzMXk0QVczaHpPRVgzZkhTV2g4MlwifX1dLFwicGxhdGZvcm1cIjpcImFuZHJvaWRcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MDk1MDY3MDMsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBQm1sXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQm1sLmpzb24iOiAie1wia2V5RGF0YVwiOlwicDlTWkc5T0VpQVhIZjExMld4aDJ0RXFIZ2lWQzgzZXoySXlQYk1PK2M4QT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTg0MTg0NjcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.9",
  caption : process.env.CAPTION || "©Kushan²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Dark Shan",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Dark Shan",
  ownername:process.env.OWNER_NAME|| "Kushan",


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
 
