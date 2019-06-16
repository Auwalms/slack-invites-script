function invite() {
    const TOKEN =
        "xoxp-410696815025-410696815393-411131764179-0c0b008eb159906e67d80e8d80f5ba2c"; //add your token here, generate from https://api.slack.com/custom-integrations/legacy-tokens
    const EMAIL_LIST = [
        "michaelsinkolongo@gmail.com",
        "eke.joseuka@gmail.com",
        "jumakeya@gmail.com",
        "rexben.rb@gmail.com",
        "kabagambestephen44@gmail.com",
        "kayub007@yahoo.com",
        "olayiwolaodunsi@gmail.com",
        "umarmanofpeace@gmail.com",
        "sdaura1@gmail.com",
        "udojieloka@gmail.com",
        "edson.mutombene@gmail.com",
        "codeismail@gmail.com",
        "landrykapela@googlemail.com",
        "oumaimaniki12@gmail.com",
        "khattabu@gmail.com",
        "ibnahmadbello@gmail.com",
        "hrodney5@gmail.com",
        "bassoudadja@gmail.com",
        "cnjagik@gmail.com",
        "houcem.krichen@gmail.com",
        "davidkathoh@gmail.com",
        "olayiwolaodunsi@gmail.com",
        "akeemex@yahoo.com",
        "atandaminat@gmail.com"
    ];

    //add all IDs of the channels you will want the users to be added automatically to
    //you can get a list of your channels at https://api.slack.com/methods/conversations.list
    const CHANNELS = "CC3BY78PP,CC3BFNZMK,CC33EUZ8T";

    //loop through the array of emails and send the invite
    EMAIL_LIST.forEach(email => {
        sendInvite(email);
    });

    function sendInvite(email) {
        const INVITATION_URL = `https://slack.com/api/users.admin.invite?token=${TOKEN}&email=${email}&channels=${CHANNELS}`;

        fetch(INVITATION_URL)
            .then(response => response.json())
            .then(function(response) {
                console.log(`${email} invitation status:`, response);
            })
            .catch(function(error) {
                console.log(`${email} invitation status:`, response);
            });
    }
}
