## Deploy on VPS or PC.
- You need to Install git,ffmpeg,curl,nodejs,yarn with pm2 
   1. Install git ffmpeg curl 
      ``` 
       sudo apt -y update &&  sudo apt -y upgrade 
       sudo apt -y install git ffmpeg curl
      ``` 
   2. Install nodejs  
      ```   
      sudo apt -y remove nodejs
      curl -fsSl https://deb.nodesource.com/setup_lts.x | sudo bash - && sudo apt -y install nodejs
      ```
  
   3. Install yarn
      ```
      curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - 
      echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
      sudo apt -y update && sudo apt -y install yarn
      ```  
  
   4. Install pm2
      ```
      sudo yarn global add pm2
      ```
  
   5. Clone Repo and install required packages
      ```
      git clone https://github.com/SuhailTechInfo/Suhail-Md
      cd Suhail-Md
      yarn install --network-concurrency 1
      ```

   6. Create an env file for ENV. 
      ```
      touch config.env
      nano config.env
      ```
      copy paste lines below.

      ```
      OWNER_NUMBER="254725233512"
      SESSION_ID = "SESSION_01_01_20_24_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU1aY1kvWUcrLzEwNkNKQU4xenhqeXV3Wll1YUhGZnZ0Y3RBc09aUDVrST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNU1rZEFRMFdYMEE2OWdhVkdHaUhvSXN1TXZBb3MxU2tSR0tLMjNqSWRWZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVRWphZW84eDJiRHhPTFVMVEhGaGg4K3FwaXh1Z0I4d3lCTnphaXhadjNZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsVXZ2WktUZkJjRVJzK1BiRHdNMldYMU9NODBVdTZDVkd0dE9Ea2JwcUFnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktMZnlzSWdkNllTaTZPbVBwck5yWndLTmRSVjFRck56TUQvY3ZCR0RmWE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZpMnVuWnJPTGlzSmNVWExuU01Pek5mOTB6cWxHa0JCM2xxVFRPSnFxRWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNENROTI5NFNhQ3FVZi9FMy93cllmcE1sbFlVK0llRXlmWTgybFViNTgyUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWDA1clZIcDJrR1FXenNXenJiNW5XTUlvcThyUzZFdFpLd1VmUVVSMnpFZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVyZU0xcHliOU1EUk12RVg5cDc4ZTBnUUVueTQydHZzcHBhcVJRMzZMMzhTMWg0K0wvdWZZS29DS2VhTmswT3R5Q2s1ZnZscmFPYTFDaUFUM2E4OUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjU0LCJhZHZTZWNyZXRLZXkiOiJvUUxuTmQxT3VlYUsveDZNdVdZRHNXRVU4Z0JqZk9ndVoyRUpZNXVsQ0xNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJBTnZLTkxuWlI5bWJ6WlR1aWw1dl93IiwicGhvbmVJZCI6IjdmNDNhNThkLTY0OGYtNGQ3MC04ODMxLWI3ZjRiNWY1NGFlNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkOWZ0aXFHci93SVg0RitwU2dOOGQ5Zm1UaFE9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1mL2VERUlWb2c2YTkrYWZuRmVpaU9xVVlBQT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0t5RDM2WUhFS1hRNUt3R0dBTT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiOGR1MThhMWNWTjBveGtDUVVCNis5M3p5eXZjcFBaT2sxWENmV29RQi8yND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRGpqdHJYYmJSZnMvbVgwcmRYem9FWDJvbUVUbllWNy82Uy9CUzY2bUhzbEUxS1ZsREtYREVpQ2lxRGNXNmlKbDF4ZnBVY0w2OXE0MCtINTZ5T090QlE9PSIsImRldmljZVNpZ25hdHVyZSI6IkM1OFJGTU85REFjWjc3UEttYkhBekVaaFV6UytkcHdZTHlFY1JxdEx6OWZ0R0o0YUNUeG9uSmhEYmtYMVF1S3pscFFWdndqZVByci9qWDJ1Q1puOERnPT0ifSwibWUiOnsiaWQiOiIyNTQ3MjUyMzM1MTI6NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJNYW51dWgifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzI1MjMzNTEyOjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZkhidGZHdFhGVGRLTVpBa0ZBZXZ2ZDg4c3IzS1QyVHBOVnduMXFFQWY5dSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwNDUzNjEwNSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHUUEifQ=="
      THUMB_IMAGE = "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg"
      OWNER_NAME = "Suhail"
      PREFIX = .
      WARN_COUNT = 3
      DISABLE_PM = "false"
      THEME= "SUHAIL"
      MODE = "public"
      ANTILINK_VALUES = "https://,chat.whatsapp.com"
      
      ```
      ctrl + o and ctrl + x, To save and exit

   7. start and stop bot

      To start bot ``` npm start ```,
      To stop bot ``` npm stop ```




