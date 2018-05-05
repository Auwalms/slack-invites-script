const TOKEN = ""; //add your token here, generate from https://api.slack.com/custom-integrations/legacy-tokens
const EMAIL_LIST = ["email1", "email2", "email3"];

//add all IDs of the channels you will want the users to be added automatically to
//you can get a list of your channels at https://api.slack.com/methods/conversations.list
const CHANNELS = "CHANNELID1,CHANNELID2,CHANNELID3";

//loop through the array of emails and send the invite
EMAIL_LIST.forEach(email => {
  sendInvite(email);
});

function sendInvite(email) {
  const INVITATION_URL = `https://slack.com/api/users.admin.invite?token=${TOKEN}&email=${email}&channels=${CHANNELS}`;

  fetch(SLACK_URL)
    .then(response => response.json())
    .then(function(response) {
      console.log(`${email} invitation status:`, response);
    })
    .catch(function(error) {
      console.log(`${email} invitation status:`, response);
    });
}
