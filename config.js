const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://vacaja:<1234>@cluster0.gh3syzk.mongodb.net/?retryWrites=true&w=majority"
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255624741607";




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
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255624741607";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "mpatch-1",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©Vinei_Adobe" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Vinei_TV",
  packname: process.env.PACK_NAME || "Vinei",
  botname : process.env.BOT_NAME  || "Vinei Bot",
  ownername:process.env.OWNER_NAME|| "It'x Adobe",

  sessionName:process.env.SESSION_ID || "SUHAIL_22_06_02_17_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwid0F5TEl4SkRJcjVpeDR1cnU0eW5PRmkydXpLVGEyRHdKRUZzQTFhanNHUT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInlSSlJrNzJlUG9FWTNZQlZpZm4zUmdPZkR4TGZ4aXRpR0ZMemV5czFpV1k9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiOEdTWXdvTW12a2VqR3pVS2lMVFR3THBNeXZwcVFKMkUvOGI1bjBncFRXQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIm1mU3BtSGZmVFhsK0tSdDhybzRaOTd2WFAwSGVvTFpMVHNJV1kvSXVKQlE9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiWUpTbnhaZy9HUFNwUHV3MUxGdEUxRWNPMG5BMEl0L2I4V2pJY3MxcWszST1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlJOa3kxSHVnUm1UWlBxeW1DcDdnR1RpS0I4Q3FMcFBOVE1KRW9mMmxiSGM9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJNRkpmY0NVemhoQUtQNnlXWFFWbDRFVEppS1ZHbTlWNS9DWGNmS1ZEY0dFPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiV3o0TnJselF3S1lQanZhOFRSYVNGSUlpMFUvT1o4TkNMS1NpRlJ5U3h4ST1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJvRnpncVNyM1FjbG1SMGlWbTFUN3ltSk5acXNvZVRSVFR1S2g5cDE4NGxiM1YyalFPcTBWbi9JNFg1YkYzMHQwRytHeDFqaGNvdklMUXdHenNHU3FoUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MzQsXCJhZHZTZWNyZXRLZXlcIjpcInl6TFdwaGE2RDRHeHlPNkR6TXVrOHhlQUVzbHZpdGtQaXJVQll3NGliR0k9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCIyNTU2MjQ3NDE2MDdAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiMEZGMjlFMzQ4QkZGOTU4QUNBQTJBMzk3QzY2RjJGMzBcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcwODIwNzU5MX1dLFwibmV4dFByZUtleUlkXCI6NjEsXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOjYxLFwiYWNjb3VudFN5bmNDb3VudGVyXCI6MCxcImFjY291bnRTZXR0aW5nc1wiOntcInVuYXJjaGl2ZUNoYXRzXCI6ZmFsc2V9LFwiZGV2aWNlSWRcIjpcInNuZzJQLVQxUjRLZEh5d2RZQXpYUEFcIixcInBob25lSWRcIjpcImVkNzVjNDQ5LWE3NzctNDk5MS05NjZiLTM0YzMxZDg3NWY0N1wiLFwiaWRlbnRpdHlJZFwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiVml6T3MwWEw1bmxsVU9hKzFTbUZWbS8rdk5jPVwifSxcInJlZ2lzdGVyZWRcIjp0cnVlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIko4Tjl0NWlXQnJJd2NiUXVPVCt3MUI3THM1UT1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcInBhaXJpbmdDb2RlXCI6XCI3V1JGU0VHOFwiLFwibWVcIjp7XCJpZFwiOlwiMjU1NjI0NzQxNjA3OjI0QHMud2hhdHNhcHAubmV0XCIsXCJsaWRcIjpcIjEyNzU3ODE5NTEzMjQxNjoyNEBsaWRcIixcIm5hbWVcIjpcIlZpbmVpXCJ9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNQcWZ1OVFFRU9IYnhLNEdHQVU9XCIsXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6XCJpL3R0WE1nYjArWVNRMWo0eDZycnAxdncxVHV3UWh4QTJOYkU2SDNYVFRBPVwiLFwiYWNjb3VudFNpZ25hdHVyZVwiOlwiRjk1QmdhQ2NDSGlSdkxob3phUmFDSUtzWFY0SU5rQVpnU1p2N0kzWUpoR0JhV1JST2wrOUczdjI1dXIwOWJ0K3NVbWZTMG4ySmpuTVJ4VzF5MGppQUE9PVwiLFwiZGV2aWNlU2lnbmF0dXJlXCI6XCJGTmp4TW9qKy96THNZMXI0b28yWjg5L08rVjF3c04ra3Y5N0NPcFpiV2JQM200WGdqY2xJc3VIRDFtbEVhNVlHWUNldFNJMUd3SUdlbmFiVldRWWVnQT09XCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiMjU1NjI0NzQxNjA3OjI0QHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQll2N2JWeklHOVBtRWtOWStNZXE2NmRiOE5VN3NFSWNRTmpXeE9oOTEwMHdcIn19XSxcInBsYXRmb3JtXCI6XCJhbmRyb2lkXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzA4MjA3NTg4LFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQUpaZVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpaZS5qc29uIjogIntcImtleURhdGFcIjpcIklFNFEwNFNRak5nN2duc28zcUVqcmhXWWhBZjdiU2tMdkpXVGg2blRPYk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI1MDg3MzMzNixcImN1cnJlbnRJbmRleFwiOjksXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw1LDgsOV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "95e554b5-0a36-44c7-a861-9d51bb8f33f4",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "vinei",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "VINEI",



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
 
