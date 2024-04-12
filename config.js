const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//═══════[Required Variables]════════\\
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || ""; // put your app url here,
global.email = "njokuchisomjoseph@gmail.com";
global.location = "Portharcourt,Nigeria.";

global.mongodb =
  process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";

global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github =
  process.env.GITHUB || "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl =
  process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website =
  process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg"; // SET LOGO FOR IMAGE

global.devs = "923184474176"; // Developer Contact
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "2348058600003";

//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE || "0"; // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false"; // Make it "false" for disable WELCOME

global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"), // disable bot in groups when public mode
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "false"); // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg"; // ramadan Theme Images
global.waPresence = process.env.WAPRESENCE || "available"; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'

//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom =
  process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";

//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://suhail-md-vtsf.onrender.com/";

// global.SESSION_ID = process.env.SESSION_ID || "RecreateRandomly";
global.SESSION_ID =
  process.env.SESSION_ID ||
  "SUHAIL_19_33_04_07_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiYUN4NUNJUUJPZXk3SVFGQVVmUmI2akJMbmNvcXZTZU4xeFVTbFJ4ZXFXcz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIk1JQUM5cE53R2FhWGVYeGszTDZDTmZLNTNWM2VpRmV1VHRRclc3KzZUV3M9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwib09NY2dSajhVQ25mdTFUOW0ra1dqcmIrSWh1ajRDSW4yemxrSWkwcVdVdz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInZDZDlRVWdhZFZvM0FGQ1A1Rng3S09haTJnYklneXVvNHp5N2c0cmt3aVU9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiWU9NQS8rVk1UVS9QcWgrRnhJSSs5ZE15TFZ1RS90Z2kxRjdzS3BzMkxrbz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlQ4WXBIU3JCRCtJejBSd21kMHdIeFVadDVQa0M4aGZrNWo2SlMwc1FJQkk9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCIwREtIaWticW85WDBoSk1ndGFlYmxyQ09qWjl5Z0Vza3gvbUpHZDRmRVVZPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwieXJ2dForMU15Mll5R2J5MmtMUEZheG05a2Zsd2NWWUtxb0lpYmcxZ0dpVT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJRYmhETmVocDZUcURnODkwYU15bytMZ3Y2TnpXei9waGZIaWNWcDk2dWZhSEw3bXh2eWY2ODVtVi93NFhhSjNQZ2xtZnNMKysxSjdVbjZVSW1uaTdqQT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjA3LFwiYWR2U2VjcmV0S2V5XCI6XCI3WktnUzVEckppQnZUWW5BR1RFMmN3T0cxNy8vRW5iMU5LMnRIUWNPR0FJPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiMHRPUXE1RlVTVUtCVldfU2haMFFpd1wiLFwicGhvbmVJZFwiOlwiNGVhNDAzMDYtMjI2ZS00N2FhLWFjMjEtZDA3NDFiNjJmNDI2XCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJwQktiNDllUzZCY2IvM0tRL2NBUHJibytWMDQ9XCJ9LFwicmVnaXN0ZXJlZFwiOmZhbHNlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIm4xSklUcmRXdng0bkpMaTJTbHFiRzVsOFJqOD1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDTmIzOW93RUVPTHB5N0FHR0FFZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcImlnbVhoSVl5ZTNVL3Z6NXR3MEFNeUQrdUg5SUlkTHd1cjM3UkJ1MTJNejQ9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJjcUtielVhU1dldHBnMVo4Y2tUblAxYkxBQXQ2Rlh5WjJaMDhMZWt1Z0V4ck5IekpsY0RjOWdtUm4yVWc4dkFsbnNWbW4rZDRhOG1seGk5WUpCbjJDQT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcImVlQ0p3Y0VQMVB1emxUTENhRlR5dGczQis0NnoyMDV3cU14bjVFTWZXV014NkF3WEJjVnF0dTBRbWtRYmJlVVJ2TW5PNSt3bVB3aC96RHQ2NEN0eWd3PT1cIn0sXCJtZVwiOntcImlkXCI6XCIyMzQ4MDU4NjAwMDAzOjc0QHMud2hhdHNhcHAubmV0XCIsXCJuYW1lXCI6XCJOam9rdSBDaGlzb20gSm9zZXBoIFdlYiBhbmQgTW9iaWxlIGFwcCBkZXZlbG9wZXJcIixcImxpZFwiOlwiNTkyMTkwOTI5NzE3MjU6NzRAbGlkXCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiMjM0ODA1ODYwMDAwMzo3NEBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJZb0psNFNHTW50MVA3OCtiY05BRE1nL3JoL1NDSFM4THE5KzBRYnRkak0rXCJ9fV0sXCJwbGF0Zm9ybVwiOlwic21iaVwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMjUxODM3M30iCn0=";

module.exports = {
  menu:
    process.env.MENU ||
    "" /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/,

  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ", // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),

  author: process.env.PACK_AUTHER || "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "Some Buddy",
  ownername: process.env.OWNER_NAME || "Njoku Chisom Joseph",

  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",

  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "SUHAIL").toUpperCase(),
};

global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

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
