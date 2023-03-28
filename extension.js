const vscode = require('vscode');
const { Configuration, OpenAIApi } = require('openai');

//Konfiguraition for OpenAI
const user_key = process.env.HELPER_AI_KEY;
let configuration = null;

//Temp solution for migrating from master_key to user_key  
configuration = new Configuration({
	apiKey: user_key,
});


const openai = new OpenAIApi(configuration);

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
/**
 * @param {vscode.ExtensionContext} context
 */

function activate(context) {
	const editor = vscode.window.activeTextEditor;

	let whatIsWrong = vscode.commands.registerCommand('helperai.help', async function () {
		let document = editor.document;
		let fileContent = document.getText();
		sendRequest(fileContent);
	});

	context.subscriptions.push(whatIsWrong);

	function printResponse(response) {
		console.log('Recieved data');
		console.log(response);
		vscode.window.showInformationMessage(response);
	}

	function sendRequest(fileContent) {
		console.log('Running the request');
		//send request
		openai.createCompletion({
			model: "text-davinci-003",
			prompt: "What is wrong with the following code? \n\n" + fileContent,
			temperature: 1.0,
			max_tokens: 1000,
			top_p: 1.0,
			frequency_penalty: 0.0,
			presence_penalty: 0.0,
		}).then((response) => {
			let result = response['data']['choices'][0]['text']
			console.log(result);
			printResponse(result);
		}).catch((err) => {
			console.error(err.response.data.error.code);
			printResponse(err.response.data.error.code + ". Please raise issue at: https://github.com/Pasquale007/HelperAI/issues ");
		});
	}

}


// This method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
