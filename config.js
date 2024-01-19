const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL||""                       // put your app url here,
global.email="samsamsun789@gmail.com"
global.location="Lahore,Punjab,Pakistan"
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://sathil:<STJ12345>@cluster0.it1npgn.mongodb.net/"
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




global.devs = "94776789069" // Developer Conatact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "947767890696";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  //style:process.env.STYLE|| "2",  // put '1' & "2" here to check bot styles


  HANDLERS:process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH  || "main",
  VERSION:process.env.VERSION || "v.1.2.7-qr",
  caption:process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ꧁•⊹٭𝙸𝚃' 𝚉 𝙼𝙴 𝚂𝙰𝚃𝙷𝙸𝙻 𝚃𝙷𝙰𝚁𝚄𝙺𝙰٭⊹•꧂ 』```", //*『sᴜʙsᴄʀɪʙᴇ •꧁•⊹٭𝚁𝙺 𝚃𝙴𝙲𝙷 𝚂𝙻٭⊹•꧂ 』*\n youtube.com/@rktechsl202"),

 
  author: process.env.PACK_AUTHER || "░▒▓█ D▪A▪R▪K▪ ▪S▪A▪T▪H▪I▪ ▪M▪D █▓▒░",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "░▒▓█ D▪A▪R▪K▪ ▪S▪A▪T▪H▪I▪ ▪M▪D █▓▒░",
  ownername:process.env.OWNER_NAME|| "꧁•⊹٭𝙸𝚃' 𝚉 𝙼𝙴 𝚂𝙰𝚃𝙷𝙸𝙻 𝚃𝙷𝙰𝚁𝚄𝙺𝙰٭⊹•꧂",


  sessionName:process.env.SESSION_ID|| "SESSION-ID ==> SESSION_12_42_01_19_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0hnZG5SRW56RUV3N05pWEN1UGdITVNzUVBuR3ZueDJOTThyVnhtYUlrOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVnFxejIzK3ZWOHE1clUrMGRCV0JwNXdxK0FrQXlPY1BYWWhIakJZc0VSaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhUDNzVlg5dlptcUhmOWdvc0tlVEFRZzNLd3ZhV2ZDVXdFaDM3Q1BQNVdzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzL0NvMU4wOU5QYWpKMFppMXoybk9DYnpPaEtHSFBrK093N0s1T1lwRFZzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNNajl6ZGJRREd4SEJ1SVNOek9RM2NYbmNCM01WWVpmZ3cwWGsrODV4bVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik02ckZzUHNTNG8vRXVsUzlDTDFYckJ1MzRZdEl4aVl0NWNBcVN0TjhVRlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0VuWTZhSXVremIxTEFSV3NwbHRFRVBRKzlpbkNRbjdxYmZqZjI1TDkwQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUhPb1JNcWlxQzJhNjNCMHk3T05DRXlQK2djWWp1SCthRmpPWE5SY0VDdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1ZbTduVm9YSnBWRllsR3hZSkhaRTRlRjllcGNPRmFJdUV6ZHRJQXVvSXV0RWdPVlFHbGpjM3p3WElicENyT0NCaXcwaThjUnRaeG1DMkpGNzBobUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAyLCJhZHZTZWNyZXRLZXkiOiJJd25VK1lsbkxVdW43MnNEM25id0tFdEZoK2xWVy8vSThXc2pMa2VTbi9VPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc2Nzg5MDY5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkVDOUMwNTkxMzM3MzIzNDVCQTc3QjNGQzg3RjUzOEZCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MDU2NjgxMzV9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc2Nzg5MDY5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkVDQUNDMEU4MUY5ODQxMENGNjk4NzNDRDM5MkEwNUQyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MDU2NjgxMzZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik5ac01XRmZiU3ZXNFVqR0xqSWRabnciLCJwaG9uZUlkIjoiMzVlYmEzZGYtMGJkNy00OTM4LTg0MzItYzcwZDIzYTE4OGViIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9WY1VPN05GTzlSdGhxUlNLK0x0K2IySmhXYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCRjlpUEhPOHNjcE43ODVQRmdUZmRTYTF1eTA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRjhUV1RROUQiLCJtZSI6eyJpZCI6Ijk0Nzc2Nzg5MDY5OjQ0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlNB4Lat4LeSTCBUSEHgtrvgt5RLQSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTmFock9ZQkVKN2NxYTBHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRVJHQlFlRXJvd2lpdUFJZnBlaUkwUGlMSC9HblZ6NjFGblJUUjRPV2VGST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMXJGK2V5bWQ1MURyR3ZqenFQNVZ2bEhLL0xsMzNpRjZ1alNYNldxL3k2TGlvU2NBZTY4VkJqRUtmeUt1d3gyR1lXOGUrYkoxV2RaaC9adXduSjNBQkE9PSIsImRldmljZVNpZ25hdHVyZSI6ImVjMHB0ZXdUd1Y3TFNub21ySnk1d21DbDlkWi85dWVrMU1Ld3R3Wkx6SlV2cm13NGVKYXJXNldpemdXUWtFUklrZytubGRvTnRyaERKODRJcEQrMUJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzY3ODkwNjk6NDRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUkVSZ1VIaEs2TUlvcmdDSDZYb2lORDRpeC94cDFjK3RSWjBVMGVEbG5oUyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwNTY2ODEzMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBTUEifQ==",  // PUT SESSION ID HERE 
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",

};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 
