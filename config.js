//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/e09d574d641e8760a0e6a.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "50935517367";
global.owner = process.env.OWNER_NUMBER || "50938240424";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/kbc224.mp4,https://files.catbox.moe/dhii42.mp4,https://files.catbox.moe/lgj91g.mp4,https://files.catbox.moe/hvjoe6.mp4,https://files.catbox.moe/4ogeum.mp4,https://files.catbox.moe/0cmaxl.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kgtech-v2-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0RFUTY3bmdEYjMwWFhpSUtuSHJVZFBhZzlkYXRQSWN1RlU4SFZRVDVVQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUE9PVXFXWGdMclBOTFJYWUcyd1F4eUlxWUwwN2RDa0VKY0w4OEl0ZThTOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTR3ZxZDI1M1RCS0ErMXdza0JtTUlHSENkZzNkN2gvWk0xY2dPaFRiVVhzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEOTF4S3EyLysvYTJOd2tyMnlTK1o3QXo5MllMYWpvRk80Rnh1dDI4emdJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJKMG5JSXlxQU9TRE1ucExSREd2VXdRYlBCc29hdTZjMDkveEpMeXU2MTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBDV0luQ0w5citpelVrOTR6R3Fia243QjZFTHlOQVhuUE5uMC9SUVRQR0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUY5cGlYcGhHU2IrRGYwNHg4TFhsK3NZWUR6cWwvV043WkJQWDdxSmpWaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiakNIWmtGZjhRK093R29sZTM5MFpjTUc0WHBQVnYyVG0zSWtQZXJDWjFSMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5idU9Wb2lWK3I1Z1hDa241K05XYkFkM0NZaGpuU0c4Qmg3ekhnTjl5KzFpYlBNQzJKQjZiaXMyb2d2c3RjTjVORXpkNkVCblkrdmNwMWFjcS9rL2hBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUsImFkdlNlY3JldEtleSI6InpicWFRRG5iaEN4dWdxam9DYnozS3FpSUljU3A1ZTlEcldkb1VjUmRFNmc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InJTQml6SmpJVHFHRTRmYUdRdXh3enciLCJwaG9uZUlkIjoiNzA0OTBjY2EtZWQ2MS00MTk0LTk1ZjktZDEyZjAzNDU1ZTQ0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitDeUNFN3dPeURQVXlIV20xMHIyLytDZVNNaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJT1Bady9Hd3dLcFBMWWNsNjRPVWdXQnNseVk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMzJXTlBTTVgiLCJtZSI6eyJpZCI6IjUwOTM4MjQwNDI0OjUzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ildpel9wcm9tb211c2ljaHQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0szbDNLWUVFTHZseXJnR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im5TQTNTeDNwbWttdlZGL2pTNG9ORlZMRHdNdnYweTFHS1k2VUhWMFlMeVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImpNL0o0OFNGbFRHNnI4Sm9kNnhxdHlud0hML0J6L0JCbnRUUjFmMHVhRzg4aEtwWGlJU0FVeW41QVRaODVvL0o1LzVrbGxGV3ZhY2x3eUdwYWpvNkNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ1WFg3R3RqSXZhdXgzeWhxR05XZldKRFRDQU96ZS9yMXdYR0tvMnJDeEFxNEFsN2FpbStPNmZscksvb1VUdFhSWm1mQVJNTEVhMG9LVi9Lakg0dWZnZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTM4MjQwNDI0OjUzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlowZ04wc2Q2WnBKcjFSZjQwdUtEUlZTdzhETDc5TXRSaW1PbEIxZEdDOG0ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjkyNzg2NjR9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "null",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜Wiz_Promomusicht🇭🇹⌝☜`",
  author: process.env.PACK_AUTHER || "Wiz_Promomusicht🇭🇹",
  packname: process.env.PACK_NAME || "Wiz_Promomusicht🇭🇹",
  botname: process.env.BOT_NAME || "Wiz_Promomusicht🇭🇹",
  ownername: process.env.OWNER_NAME || "☞⌜Wiz_Promomusicht🇭🇹⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
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
