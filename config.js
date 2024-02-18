const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.image= "" ;
global.shutdown= "" ;
global.restart= "" ;
global.poweron= "" ;
global.sticker= "" ;
global.status= "" ;
global.pornvideo= "" ;
global.pornimage= "" ;
global.videoxvideo= "" ;
global.imagexmiakhalifa= "" ;
global.xnxx= "" ;
global.cyberxbot= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://laibatalat95:L5AQ0pX4zdPIcL2q@cluster0.2btdsqr.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923461584582" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923461584582";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923461584582,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923461584582,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "£",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "ART-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x ART",

  sessionName:process.env.SESSION_ID || "SUHAIL_14_21_02_16_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiY0NRTWNpYkdLSlh1dnJRVXRJdWZnNUtNbUlSaGdtaTBWOTZHc3RtbVNGOD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInFnL1U0am5lV2ptYXVvTkdVSHYyVzJPdk9RUW1uSDZKb2tRQkxRM1ZPUkU9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiY0Y0TzBuQjZZL3Z2dGNheDJyQXhEcnJrdXV2ZGU3VXVlOWNrMjM1SDNWUT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImFRMk9pS0xjd2FTYVJVVUl4SHlURzdiZUY1aHNjMldHUFZBeUJxcmtseUk9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwibVBxblpoWWNtdGtkZy9aL1NmQitkS2I5enBjNDh3MGNzSE51MlluM3hGbz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInBYcWpuYWNkelk5WDJuMkhCQ1FOVjRzSzlzR3M4RWl5T1BVWm5LWTQ3aFk9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJDRUwxRGV2S3hSbmFQSVY1RHBhZXh2L1hTZGNNblFkSjRtbkxZUVlRUlVZPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiejNNaW1uTVdpSG8wY1I2TmNtUlNJWXVnaVl4UDBsWUtaTEtlbkRyN2hCZz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ5dzlaQ2xkZXVvZVdQdURHY2lrNlRnTjNTQXR0WnAwbVNld0NPVzlHNWhJbVRmY0hCUk9rdXN3YmZtQ3dqZjVHbHhFLzZFRjJFanNDOXZ1NEEzdldpQT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6NzAsXCJhZHZTZWNyZXRLZXlcIjpcInJhOTBYaEs1U0RxaElWT1FlYUFRNFA4cmxqLzcxR1hzYldEdlBSNWdmalk9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI5MjM0NjE1ODQ1ODJAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiMjk1MDIzQzZEMjIxMTgxRjUwN0E3RTRDMUY2MEU0QTRcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcwODA5MzI2MX0se1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI5MjM0NjE1ODQ1ODJAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiQkVCNDZCMkI4NkQ0OTZBQ0NCNjIwNDBDQzI3NjdFOThcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcwODA5MzI2M31dLFwibmV4dFByZUtleUlkXCI6MzEsXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOjMxLFwiYWNjb3VudFN5bmNDb3VudGVyXCI6MSxcImFjY291bnRTZXR0aW5nc1wiOntcInVuYXJjaGl2ZUNoYXRzXCI6ZmFsc2V9LFwiZGV2aWNlSWRcIjpcIjNhOUM1dHlLUmVPNWQ0M1RnNF9rQndcIixcInBob25lSWRcIjpcIjNlNTk2YjljLTM4ZjUtNGM5ZC05NjlkLTRjMjM0ZDcxOWY0MVwiLFwiaWRlbnRpdHlJZFwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwibFdLRm5odklMcVN0eFdiZ0l1TEN0SVU3U0o0PVwifSxcInJlZ2lzdGVyZWRcIjpmYWxzZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJuQ255Q2w3am8zTGJIeDJnWGtwclRUc1BsU289XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJhY2NvdW50XCI6e1wiZGV0YWlsc1wiOlwiQ0lQSit0c0NFTWpldmE0R0dBTT1cIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIkFUbXBvaHBOc21nM0gyVXF4ckZaYWtxejU1QUVJZExXWSs5OU5VV0I4QWs9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJkd0RGbnkvWU5UcER5clFoK256bjdlS3BTUkNXZWFCdkRCUHNXN0piakd5Snk1K2tDOTBNejhkWlJGaU9EQmd4WHQvTG9PdlZUeXhvZFV3RTl5R29Cdz09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIlUvMTZ2cFNHMGlDaG93R09oL2EvZ2JFOEtNZEdxenpaRndzQnZUdU9xVXNFQ2Y1U2RqQkNGOFZQN0d2aFh5NFlya0dQcnA0eU1IQkxDTlEyR3d5aGl3PT1cIn0sXCJtZVwiOntcImlkXCI6XCI5MjM0NjE1ODQ1ODI6MTVAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiMTAxMDgyMzc0MDk5MDUzOjE1QGxpZFwiLFwibmFtZVwiOlwiQVwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjkyMzQ2MTU4NDU4MjoxNUBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJRRTVxYUlhVGJKb054OWxLc2F4V1dwS3MrZVFCQ0hTMW1QdmZUVkZnZkFKXCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcwODA5MzI1OSxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFIdG9cIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIdG8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJleDArelF1ZU9WMUw5MVlpTGlWZFZKMXZOMktMem1Ra0hoN3JiU0hSN3B3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcyOTcxOTkzOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9",  // PUT SESSION ID HERE 
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
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "ART",



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
 
