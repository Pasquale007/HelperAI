// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const { Configuration, OpenAIApi } = require('openai');

//Konfiguraitions for openAI
const configuration = new Configuration({
	apiKey: process.env.API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helperai" is now active!');
	const editor = vscode.window.activeTextEditor;
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('helperai.help', async function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		let document = editor.document;

		// Get the document text
		let fileContent = document.getText();
		console.log('Running the request');

		//send request
		let data = await openai.createCompletion({
			model: "text-davinci-003", //old
			//model: "text-embedding-ada-002", // new
			prompt: "What is wrong with the following code? \n\n" + fileContent,
			temperature: 1.0,
			max_tokens: 1000,
			top_p: 1.0,
			frequency_penalty: 0.0,
			presence_penalty: 0.0,
		}).then((response) => {
			let result = response['data']['choices'][0]['text']
			console.log(result)
			return result;
		}).catch((err) => {
			console.log(err);
			return "Sorry. An error occured please try again later";
		});
		console.log('Recieved data');
		console.log(data);
		vscode.window.showInformationMessage(data);

	});
	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
