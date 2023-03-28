# HelperAI - Your personal AI assistant

Do you need help with your development? Then this extension is exactly what you need. Your personal AI assistant is there to support you when you wonder why something doesn't work. 
## Setup
 After you installed the extension you need to configurate your own API key from OpenAI. This is fairly simple. Just create a API Key on https://platform.openai.com. Then you need to save that key because you will need that soon. Now act like following:
 ### On Windows
 1. Open the Command Prompt by pressing the Windows key + R, typing "cmd" and pressing Enter.
 2. Type the following command, creating "USER_API_KEY" with the actual API key:
  `setx HELPER_AI_KEY <USER_API_KEY>`
 3. Press Enter to set the environment variable.
 ### On MacOS
 1. Open the Terminal app.
 2. Type the following command, creating "USER_API_KEY" with the actual API key:
  `export HELPER_AI_KEY=<USER_API_KEY>`
 3. Press Enter to set the environment variable.
 > Important 1: Your key must been namened HELPER_AI_KEY else the configuration is not valid!
 
 > Important 2: You need to replace <USER_API_KEY> with your API Key you've saved earlier.

After setting up the environment just restart the extension and you are ready to go.
## Features

 Just press `STRG + SHIFT + P` to open the command executor and type "What's Wrong". After a few seconds you will get a push message with possible compiler and logic errors in the current file.

Consider the following example of a React application:

![Show usecase](images/Fix.gif "Usecase")

> Hint: Activate key bindings so that you can work more quickly

___
## Known Issues
Nothing to see here... yet
## Release Notes
Here you can find the last release notes
### 0.0.3
- Migrate to new VSCode version
### 0.1.0
- Add error Message
### 0.1.1
- Fix bug "invalid_api"
### 0.2.0
- Migrating from a master key to a user-specified key
- Offering a short term solution for both API_KEYs to make the migration easier
### 1.0.0
- Removing master key and only support user specific key

If you like my extension and want to support me, consider buying me a coffee: 
<br/>
[Paypal](https://www.paypal.com/paypalme/PascalThurow)
