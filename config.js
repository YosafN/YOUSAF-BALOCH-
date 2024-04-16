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

  sessionName:
    process.env.SESSION_ID ||
    "SESSION_04_39_01_15_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVBIWDlDWVBoTTRvTVl5UVAreU5HSGhtY2lOUnZVWWpRM3dFVlo4YUxVND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUJQbWtYelQwQzNhMDdYbTFuTHVPRTdLUzRZZnBNYlgrcjN0cG9odWFGST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1QktZZFU2bXJKY0xkNUdnaEtFL0N4MlBPQTM3ZUhueURzcm05QmlhMGx3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKWlA2cUhtNGZPVDFUNEFOcCtZTWlTdWZUbXVvbG9ZYmxzNG9FNmRWMUdrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFIZlcrZEtsd0ZydjRhTElaWGF3ay9uTGU4N3htdXVJZy9MK2RSQk9EMGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNjMWtpZXE3ZXhDTmJoRUo2WTRRbTBYekRNSkFzbUJyM2FqYzBkWDZmV2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkI2dmZrNXlpYmpxaGlNNU9leG5IZ2VMVWRjQXk4NzIyaXJ1bkhNNGtXVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidDNWdUZUSmZsTk02YisxUHprZkdpY3hRTkQ4ckhqUXk3U0FKUVFWT2dSND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllFTy9BL001REFuS1ZIb0g3ZmJqMlZ3UlhvV3Vnc0VxWTdrcXVqSzFoY2JpOVFWTmFmNzdmVlFIemVzQy9yZ2VoMlYxUWlVSzBsL0VYc1BrQWgweGdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE5LCJhZHZTZWNyZXRLZXkiOiJBd2VFUkRmV2NCVjRkdEE1VnoweU9KMTEwR2dLM3ZFZXZkdEhDaVJlcWdjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc1NjU4MDIwNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGMTY2NUEwQkJBMjU5RjVBMkNDOUYzNTUwRDNBMjJEQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzA1MjkzNTY4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3NTY1ODAyMDZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzE2QzNDMUUwNEYzREQzQUQwNTI2RUMyNUVDOEExMDkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcwNTI5MzU2OX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiZDFJM0dKN09SLXVrXzk2aDEtSjByUSIsInBob25lSWQiOiIzZTEwNmNiNi00N2U3LTQ3MjYtOTg4Ny03MDYxNTg5ZWU4ZGYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWlR5QSs0N0Q1VE5CMm5rcjFvVnoxSjhzUUhrPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhSUEx4K3p5RGpKY3YvV0dpWGxxSE10RkEvMD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJUWVhKSjdFNyIsIm1lIjp7ImlkIjoiMjU0NzU2NTgwMjA2OjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoidGhlc2lyZW5zIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNYTF2UElCRVBydGtxMEdHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJOVzgvMXpQMmhmalIzWWRtTVpVSW9vdDhMYWxoUlJwaGgzWHJVejdXN1I0PSIsImFjY291bnRTaWduYXR1cmUiOiJqazRYbXF6cXg3Um1uaDNrOG9JNzlXamNiZGtaQ0dEaFBIUFp4Q1o0bjJHV0hqTUc5MFAzc1VtL1pRaTFFWVpGNkRITkpTRGFFVU00VjMvWmJxTW9CUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiN285ZGJhTjNLTFhDTG9tVG5hUXVKMFpJaE53VlBQbU55NnU5UW9mRzN1ZzZ1K2p1WmxpNzVMNXNNelpsMWdKUHBQbUJlaStqaWFKVVpjVUhLTjVOaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3NTY1ODAyMDY6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUVnZQOWN6OW9YNDBkMkhaakdWQ0tLTGZDMnBZVVVhWVlkMTYxTSsxdTBlIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzA1MjkzNTY1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9STSJ9", // PUT SESSION ID HERE
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
