const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL||""                       // put your app url here,
global.email="apermtu1@gmail.com"
global.location="Lahore,Punjab,Pakistan"
global.mongodb= process.env.MONGODB_URI || ""
global.DATABASE_URI=process.env.DATABASE_URL
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.scan = "https://suhail-md-vtsf.onrender.com/";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl = process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website =process.env.GURL|| "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE=process.env.THUMB_IMAGE|| "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 





global.disablepm = process.env.DISABLE_PM || "false",
global.userImages = process.env.USER_IMAGES|| "text",
global.style = process.env.STYLE || "5",  // put '1' to "5" here to check bot styles




global.devs = "923184474176" // Developer Conatact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255711939257";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  //style:process.env.STYLE|| "2",  // put '1' & "2" here to check bot styles


  HANDLERS:process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH  || "main",
  VERSION:process.env.VERSION || "v.1.2.7-qr",
  caption:process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),

 
  author: process.env.PACK_AUTHER || "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "SUHAIL",
  ownername:process.env.OWNER_NAME|| "Ryoba mwasyaga",


  sessionName:process.env.SESSION_ID|| "SESSION_05_04_02_04_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVBKNksrZzFqMW1RTXorbXlZemtaOG5tQkxsK1lNYktWK1BaRTV4QkFVcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOWc3UE02Vzh3SWxsSGU5akl0c0RKRVFyeVZ2Y1FoaFkxU1BOcFZCb29tRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNRUk5UTgwSXhmbjREZXNTYUhMZWkyZTBxTTVaVVRLM3hFUWN6YTdnSGtRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMbmtSZXFWNEhOUnJNY3U0Nm1kWDlBejRWSXpadmE5b2tJSVE5SFpTV1VzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndQTkZPSWNXQmowN2pFOWpkclJiUGtUT2JMYituU0NiZnMxT1VsQTNNbW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJwWkMxNWIzallGUEhINFJickx1TGJvZWtYTXJmUFQvb1FxR1FrZWhORzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0RMc1FmL0ZqZy9wUEZkemZINUNiZkVCYVRoM3NqQm45dS8yNnJmUktXcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1A3S3J1RnhDeWQxNDZVUkhOMEhISVA4a2k4NGVUUHJSS0ErS3p3d1N4WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlU4UDRwODdldU9VTkZoeTRkTCtKUXlIbG5ycEtiZ2JmNjhTVXFWb3VpTEtHNThCbjVITEFOS3hXMDJJREdRWDZwd3VRSHh3MHo5WFhlSDZEVk5nMkNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc3LCJhZHZTZWNyZXRLZXkiOiJBbUk2WXllc3ZuWHRrNHBpcUVtaTVpaGhkQjkrZzFxODFBR3pTUyt1L1FVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NTcxMTkzOTI1N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3NEE0RThCNUI3OERFQkFEOTdCMEUxMzUxQjQyODNFQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzA3MDIzMDgzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTU3MTE5MzkyNTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNUJFNjM4RjFBNjQzRUI2NDI5NTg2MzU4RUU5NENGRTIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcwNzAyMzA4M31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiUlNlQlZLVVFRN2lYYlMzT2ozbTdadyIsInBob25lSWQiOiI4MDFkOTgzZi1hN2EwLTRiYTAtOWY5My02NDU5NDA1NjdkZTAiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaEM4WlQ1NjFIMWltR205RnplTUtSZVNoZkhRPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZibHBnbk90WWxPRjhlZE5tTmVKVVpya0VTcz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJGU1hWNDZYTCIsIm1lIjp7ImlkIjoiMjU1NzExOTM5MjU3OjEzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuC8kuG2puG1g+G1kCBVcGRhdGVyIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOK3gxT29GRU9PMS9LMEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJRNGJvYmcvWE9BZWZIY0NDNHlFMGxRZGUyd3J3djQ5RUVsN1NsL2VreVJRPSIsImFjY291bnRTaWduYXR1cmUiOiJBZXNVdDd6a3BNNUhLUXg4WkVCclhtVmFYakwrRmh2Q1FhNTVMTEppK1JjTnB2SWFPWEdsakVQRGpITXZkZVZyaUdtanE1TVNmZXZFY3lmdStoZTVEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoia050ZE9sSXJlSEpXeEp6VWt5RnZBM0ZQUno5SE43dHZmZDN5ZFZ3RGFTRHNiR2N4QzlIdFdKcm95cGlxYW1VYU1DZnZmNVloVEcyNUdrQnoxZWppRHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTU3MTE5MzkyNTc6MTNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVU9HNkc0UDF6Z0hueDNBZ3VNaE5KVUhYdHNLOEwrUFJCSmUwcGYzcE1rVSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwNzAyMzA3OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFR0wifQ==",  // PUT SESSION ID HERE 
  errorChat: process.env.ERROR_CHAT || "",
  warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  readcmds:process.env.READ_COMMANDS|| "false", 
  KOYEB_API: process.env.KOYEB_API  || "false",
readmessage:process.env.READ_MESSAGE|| "false",
 aitts_Voice_Id:process.env.AITTS_ID|| "37",
 alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
 
 
  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY|| "",
  read_status: process.env.AUTO_READ_STATUS || "true",
  save_status: process.env.AUTO_SAVE_STATUS || "false",


  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",

};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 
