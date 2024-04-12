const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://m-saad001:<password>@saad01.268bdgk.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/37eb4b3bfd06279104182.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923418595810" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923418595810";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/37eb4b3bfd06279104182.jpg,https://telegra.ph/file/37eb4b3bfd06279104182.jpg,https://telegra.ph/file/37eb4b3bfd06279104182.jpg,https://telegra.ph/file/37eb4b3bfd06279104182.jpg" // Saad
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923418595810,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923418595810,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_28_04_12_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwicU1ZSGhENlZXOExXRmlHMFUwRzhUWVMzWnRsQUhTYkJha1JZNGFmTGZrdz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIk5hVjZ4NU9jSXpZQ05saEIvTGJSeWZFSmhtS2FnOHF1SFI4ZmtMc1NKUnc9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMEp3cTZGeTBXeE41QmpDR3FJTkpVcU4vK3NYWTVtN2xVcEpDdFJHdFhGaz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInl1YW1ndFRRZ0RYbnB3L0hNeGlTbjJOTWp1OFkxSmN2WUdnbndHZnk3d2c9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiU0NRMFIyTDdyY1JpVU9ONzQ3bC8wZ1QzR0E4QnBiNE4rbUFNdU5vK1RGcz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImZHeVNBUHpDN0R1Vkk2RElwYXNWYmE1Ym42RnBiL2NtelVZRDl5K0tUWE09XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJDR2VWaElDTzZucUZFWnhyelNsVi9oQlhLZmhWa3loaDBPdlNaUGdPQzNZPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiSkIrRFRFWUM5VVZFdXoxc2xOY1I1R2xGRnFjWUt4Y3NnT1BsSE05cnZ3dz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ5czJSeGd4R3p4RVJjemVielJ5MDF4OFZNaENUeHZndUlJdGpQTjJyck10WjI1SjA2SDc4b2l6VmNxT1lUU09zSnBpQVJ1UWQzbnZwR20rTW5MMHJDZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTEyLFwiYWR2U2VjcmV0S2V5XCI6XCJFaHdLazlQSjF6QjBsS01NSUNwejRRMlZ4NnBFQVdzcEc2RllGaGVNai9RPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzMjM5NjI2NDI0QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIkFEQUQyRDAxNzBDRTY0RDBBOTlCMDU3NUI1QzhENTBEXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTI5MjEyODJ9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzMjM5NjI2NDI0QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjUyQTBEOEE0MEZGRkVCMUUwQkIyNkZBRTBGQUUyRDcxXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTI5MjEyODJ9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzMjM5NjI2NDI0QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjUyRkM0ODg1OENEQ0JFNkFBRjgyNTJFNUNFNUQ3RkU0XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTI5MjEyODZ9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzMjM5NjI2NDI0QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjhEMEIzQkY5Mzg0QzExQzc4RjI0OTQ4NjNBODMzOTdDXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTI5MjEyODd9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCIxMGlMd0IxVlNidXZsYVhDVVJFZE1nXCIsXCJwaG9uZUlkXCI6XCI3MjFlMGMwYy05MTY2LTQ0NGMtOWJjZS03NzY5ZmE3ZjAwZDFcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjlTK29KM2JSODExWWdDRk92MG1VRTVNWUNIbz1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJtMHluVlFHenFkdTl3YkQ4T0U4MmRMeGxFSGc9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiUjczTDdBVDJcIixcIm1lXCI6e1wiaWRcIjpcIjkyMzIzOTYyNjQyNDoxN0BzLndoYXRzYXBwLm5ldFwiLFwibGlkXCI6XCIxMDQ4ODc4NjYxMTgzNTg6MTdAbGlkXCIsXCJuYW1lXCI6XCLiuJnwk4apwqvhj5rkuYjkuYjhjqDwlJKdwrvqnJvYnPCThqpcIn0sXCJhY2NvdW50XCI6e1wiZGV0YWlsc1wiOlwiQ1BYMjZlSUVFTDYxNUxBR0dBY2dBQ2dBXCIsXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6XCJYV2wxNEhTcTZmbUNLNlB2RXBjM3Y1Z0I5aW1wZG55UEM5Q2sva1dmbVhZPVwiLFwiYWNjb3VudFNpZ25hdHVyZVwiOlwiaTBSNTdPNndLWmlxdlZrYUdBUUFzaHdxeUNHeVZnVUEzODB0dDNvdTd6Vlk2emZycXRpcW9wOWY5RnVyZ1QvblN6bG9DMmRRc2VYVnVLeWkwMzVFQ0E9PVwiLFwiZGV2aWNlU2lnbmF0dXJlXCI6XCJ2aHNMTmZlbWZ0K1NuOElCQWk2S1lhWWpabEVMS0g3K0cxblhtSFppOFNEM1M1VFkvc2dlRTRBRDYveWxSYjVUcFpkcXhNSU9tQzVSU3Rja0IxdkFEUT09XCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiOTIzMjM5NjI2NDI0OjE3QHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQlYxcGRlQjBxdW41Z2l1ajd4S1hONytZQWZZcHFYWjhqd3ZRcFA1Rm41bDJcIn19XSxcInBsYXRmb3JtXCI6XCJhbmRyb2lkXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzEyOTIxMjgwLFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQUp5VVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUp5VS5qc29uIjogIntcImtleURhdGFcIjpcIkZlTTZSSThrVEVoZFFKVXRQWDczOGxBazBtOTZLTFl0cUhMaEJsQ3E4SFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI4MDk5ODI1NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Saad",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Ꮪ么么Ꭰ",
  ownername:process.env.OWNER_NAME|| "𓆩«Ꮪ么么Ꭰ𔒝𓆪",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "Ꮪ么么Ꭰ𔒝"  ).toUpperCase(),



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
