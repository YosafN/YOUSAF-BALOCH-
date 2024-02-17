const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Adobe:<vinei12>@cluster0.h7rjgnm.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://shor.by/MoreAccounts";
global.website=process.env.GURL || "https://shor.by/MoreAccounts" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://mallucampaign.in/images/img_1707943853.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Vinei_TV",
  packname: process.env.PACK_NAME || "Vinei",
  botname : process.env.BOT_NAME  || "Vinei Bot",
  ownername:process.env.OWNER_NAME|| "It'x Adobe",

  sessionName:process.env.SESSION_ID || "-SUHAIL_20_37_02_14_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwidUtYcWl1Ty9BcDI4UGF5QnkzRktkNW5EU0FqYTBnQlVuVzJxOThCR29FWT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjdLbi9NWTNMZmk2LzdDakFCVnlyVkd2bTNHbG5xS1l6VU9NVHlqT3RwaFE9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiVUFFajlmbTZtSEg0bFNHTEthUlAwWWhnMFNjWjlkWDdBV2lSQ0xjeEVGMD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlpBRThQV2gyZFZNZHQyc1NuOTR0UGFlRkZRM1BxS3YxNGpZK2E5S0sxZ3c9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiR09ERmFacXNyWFZteWhncThyVTE2UDdWMWIzdXJyK2NHQ2M2bzNvVGkxaz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlIyVkQxaXRZUzFqNHBJcU56dmlkZ3ovOFRFcmw1bTNrZE5MUmtIdGdEQkU9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ3TUVIS3VTWWpDMSszd1JxQXArUHloYWZTZVpibE9WSytEbEJmWWp1UTNrPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZ1I0aDhxVys0VlhCZGhqeFNGem1LL2ZYOTcxcmgrZ056dmF0TTRkR0Zscz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJocFRUcWlBdndWYmVwc2J2WURKSmhhdmgwaXRBVWhFWEp2U2tnL09UQ2ttOEZMRDYyblJLSDRwbC9uTTQ1Z1hhWitBZVpEU0hMOU1xWkpXQzN6ZDVDdz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTYyLFwiYWR2U2VjcmV0S2V5XCI6XCJsQlpJcmtYMXp3N0xlclcwOEk4dFZoMUViMkhsL3dYMUpFWXg1VnhlYWxrPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjU1NjI0NzQxNjA3QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjAzOEFCQkNDQzk3RDFDRjcwRjNFRDMyMDUyRDRFRDZCXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDc5NDMwMTV9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjAsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCI1SktOaVcxVlM4QzlhVGktcTZlQmJ3XCIsXCJwaG9uZUlkXCI6XCJlN2I1ZWQxZS1mZTQ5LTQxZGItODdlZi0yY2M0ZmJiZjU1M2ZcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkRhcGVZQkRvY1NqaS9xOXJ1eVl4R2t4R3owYz1cIn0sXCJyZWdpc3RlcmVkXCI6ZmFsc2UsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiV0QvK0NKL000ZVExUStDbkk1bjNWa3Q3SmQwPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNQaWZ1OVFFRU9ESXRLNEdHQUU9XCIsXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6XCJpL3R0WE1nYjArWVNRMWo0eDZycnAxdncxVHV3UWh4QTJOYkU2SDNYVFRBPVwiLFwiYWNjb3VudFNpZ25hdHVyZVwiOlwiVmJsTnlrOXdQdFFDSkZScFVSYzk1NWlXRDM2THBFR1JkcGFoWm8rUk11Mk81dVQrNnVLcmdBVFpVbmk2RnVOaVB2bVpQMVJXQlNiMDViaXZlUG00Q3c9PVwiLFwiZGV2aWNlU2lnbmF0dXJlXCI6XCJNQjRGaTNFRkdTOEo4SUtZTW5YWFhVSXZxL01vVW04c3pKcWZDZ3R3M0tYK3c0aTZhMEZyRXpTd2JzclEwNk5mUDB0Ty9SZXRzVFNZTFQwcjN3elVEQT09XCJ9LFwibWVcIjp7XCJpZFwiOlwiMjU1NjI0NzQxNjA3OjEyQHMud2hhdHNhcHAubmV0XCIsXCJsaWRcIjpcIjEyNzU3ODE5NTEzMjQxNjoxMkBsaWRcIixcIm5hbWVcIjpcIlZpbmVpXCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiMjU1NjI0NzQxNjA3OjEyQHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQll2N2JWeklHOVBtRWtOWStNZXE2NmRiOE5VN3NFSWNRTmpXeE9oOTEwMHdcIn19XSxcInBsYXRmb3JtXCI6XCJhbmRyb2lkXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzA3OTQzMDEyLFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQUpaV1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpaVi5qc29uIjogIntcImtleURhdGFcIjpcImoyOEpiZFJMQnJzalVlVnZtMGt1U00wcWR4bjNJZWlJY0FVL1NHYTZLcjQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI1MDg3MzMzNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcwNjY1NDkyOTI3MlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpaVy5qc29uIjogIntcImtleURhdGFcIjpcIkRneXpJMHZQdVp5RzVzZG92OHZXNGpHTGxNdmlpcU9EczEzVWdaUzl6S0U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI1MDg3MzMzNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzA2NjU1NDY2MDk4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSlpYLmpzb24iOiAie1wia2V5RGF0YVwiOlwidGhEN0V3S0NTVkIzbk1OTXFCL2JYRXBNVStxUkxlWk9sV0FPT09WeE9Scz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjUwODczMzM1LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpaWS5qc29uIjogIntcImtleURhdGFcIjpcImFqczhjV2dnMEZPbXloUE1JdzRkaU96cW5lYzE4ZFBlYi9Dbi9WUXFBdzg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI1MDg3MzMzNSxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDc5NDI4NjM3MzBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKWlouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZZFAwTXVZQzRDM2w3NDJFWVlaQVlXYWZLOVhDSzdzbE9ENW13NHB0OVZjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyNTA4NzMzMzUsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcwNzk0Mjg2NzQ0NVwifSIKfQ==",  // PUT SESSION ID HERE 
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
 
