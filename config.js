const fs = require("fs-extra");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: __dirname + "/config.env" });

//═══════[Required Variables]════════\\
global.audio = "";
global.video = "";
global.devs = "923184474176";
global.port = process.env.PORT;
global.appUrl =
  process.env.APP_URL ||
  "mongodb+srv://joneltmpkszyu:<password>@cluster0.uvigaem.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // put your app url here,
global.email = "samsamsun789@gmail.com";
global.location = "Lahore,Punjab,Pakistan";
global.mongodb = process.env.MONGODB_URI || "";
global.DATABASE_URI = process.env.DATABASE_URL;
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "120363023983262391@g.us";
global.scan = "https://suhail-md-vtsf.onrender.com/";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github =
  process.env.GITHUB || "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl =
  process.env.GURL || "https://whatsapp.com/channel/0029VaFT0aYHwXbJpqCLAq1m";
global.website =
  process.env.GURL || "https://whatsapp.com/channel/0029VaFT0aYHwXbJpqCLAq1m";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  "https://telegra.ph/file/bb374d9e92afbde2bbbfa.png"; // SET LOGO FOR IMAGE

global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "254756580206";

module.exports = {
  menu:
    process.env.MENU ||
    "" /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/,
  style: process.env.STYLE || "2", // put '1' & "2" here to check bot styles

  HANDLERS: process.env.PREFIX || "/",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "v.1.2.7",
  caption: process.env.CAPTION || "*SIR-ENS😁*", // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),

  author: process.env.PACK_AUTHER || "SIRENS-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "SIRENS-MD",
  ownername: process.env.OWNER_NAME || "It'x SIRENS",

  sessionName: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUFkQVphQVVUYVpmbDRVc1k2YjRPOWh6QUhDK2VvbFdHOTc1RGVjUFNuWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWxaMmk1WndWL1JLOTdVWjRyb0gxRE15Y0V1UWFiVGFPSVJpT05za3pEZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNRVNTZlUvVzZOSG1kbmszeTlqbDhheVpnZ3VRSnV5TUIyUm0xd1hHWldNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIaTl5MVZkTlh4MXdSZ2xTVVdkUlJMYU1acFJvaUd0TmNYSmZ1NGhBb1hRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1MWm5kN0NHRnVDYmpGOWJGano5MWpFL0VvODVRRDJDREZNN0x3cStzbWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imh2b3M4N0dOWHdXMHlvZ1UrUGk5TmQvamdCUVgyTE9BUkNOUWpMYXJVejQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0wwVHVyRGxoNFI0cTgva3hVdmY0N0RLd2lTUEQ0WTJ5eCt4MmhHbERGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlNOYXBSaGtUblNQeFB2LzFmSVJWTmNWc0ZIOVNrOVdQSEd0c1RiOFMyMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVzL2dtUGt4NnY4ZEpITFBUUHNjNlhIYVgvcHZ6ZDlNUzRSUWhaeUltc1J6ckZKRVRjZHdEL3pYQXNZMU0wK1BvR3ZhdVJKZEV6cTVIajU4c2Q5QWd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTQsImFkdlNlY3JldEtleSI6Ik94S3hjbUVtMStwcGdHMEV3ZXlOekgzbWxCRXVZV0g5bzJhc1BUYjMvekk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzU2NTgwMjA2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE0MDcyMkE5RUMzRjRGRTg1RjEzMkI3MjdGNzg2OTZGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTMyNzM2Njd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc1NjU4MDIwNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5NEZBMERGQzRENDg1RUJBREY0NDYxRjY5MzYxRTYxNyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzEzMjczNjY3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJoX0F0Y09CUFJhZXNyeENfUGVEa3dRIiwicGhvbmVJZCI6ImNmOGNkOGQwLTc4OTEtNGFjYS05OTAzLTQ2NDY4ZjU3ZjNkMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaSUtVcmh5cE5wV3E2b1dBVlBQeVFvOTRlTnc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0k1VzNJOXdxVHhycVNzK1EvVUllV056R1F3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IktQTjlYNlFYIiwibWUiOnsiaWQiOiIyNTQ3NTY1ODAyMDY6MThAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVEhFIEZVVFVSRSBDWUJFUiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTXUxdlBJQkVMejIrYkFHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTlc4LzF6UDJoZmpSM1lkbU1aVUlvb3Q4TGFsaFJScGhoM1hyVXo3VzdSND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZjRXVzhGMEI3NWx4SjdrQUxWYUJWdzJqWDA5QXQ5eXF0WXZjWndQVjhtWUIyNHpKdWVJS0QyZmtYUWdid2NHL01VOHVTNC8zZnBncmFpNEkrM1VvQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6ImRUSTdwaUh0cWtlckJJUExheGplMnhSZ0NxUlpBSDhQdzYvaWNzU1ZjRnJWcHRBOGs4MTd4T0xLaGd4SGcyRkFUN2hMNUxaOE04Zy9MMTNuTjlaNmlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzU2NTgwMjA2OjE4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRWdlA5Y3o5b1g0MGQySFpqR1ZDS0tMZkMycFlVVWFZWWQxNjFNKzF1MGUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTMyNzM2NjIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSFVCIn0=", // PUT SESSION ID HERE
  errorChat: process.env.ERROR_CHAT || "",
  warncount: process.env.WARN_COUNT || 3,
  userImages: process.env.USER_IMAGES || "text", // SET IMAGE AND VIDEO URL FOR BOT MENUS
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog: process.env.MSGS_IN_LOG || "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  readcmds: process.env.READ_COMMANDS || "false",
  KOYEB_API: process.env.KOYEB_API || "false",
  readmessage: process.env.READ_MESSAGE || "false",
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  alwaysonline: process.env.WAPRESENCE || "unavailable", // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'

  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  read_status: process.env.AUTO_READ_STATUS || "false",
  save_status: process.env.AUTO_SAVE_STATUS || "false",

  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SIRENS",
};

global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
