module.exports.config = {
  name: `ai`,
  version: "1.1.0",
  hasPermssion: 0,
  credits: "CYBER-CHAT",
  description: "",
  commandCategory: "without prefix",
  usages: `ai (question)`,
  cooldowns: 3,
  dependencies: {
    "hercai": ""
  }
};

module.exports.run = async function({api, event, args}) {
  const message = args.join(" ");
  if (!message) {
    return api.sendMessage('please provide a question');
  }
const { Hercai } = require('hercai');
const herc = new Hercai();
herc.question({
  model: "v3",
  content: message
}).then(response => {
api.sendMessage(response.reply, event.threadID, event.messageID);
});
}
