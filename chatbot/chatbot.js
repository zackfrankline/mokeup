const dialogflow = require('dialogflow');
const config = require("../config/devkeys");

const projectId = config.googleProjectsId;
const sessionId = config.dialogflowSessionID;

const credential = {
    client_email: config.googleClientEmail,
    privateKey: config.googlePrivateKey
}
const sessionClient = new dialogflow.SessionsClient({ projectId, credential });

const textQuery = async(userText, userId) => {
    
    const sessionPath = sessionClient.sessionPath(projectId, sessionId+userId);
    const request = {
        session : sessionPath,
        queryInput: {
            text: {
                text: userText,
                languageCode: config.dialogflowSessionLanguageCode
            }
        }
    }

    try{
        const response = await sessionClient.detectIntent(request);
        console.log("success mapla")
    }catch(err){
        console.log("err mapla", err)
    }
}

module.exports = {
    textQuery
}
