"use strict"

document.getElementById("inviteForm").addEventListener("submit", sendInvite)

function showAlert(message, alertType) {
    const alertBox = document.getElementById("alertBox");
    alertBox.classList.remove("hidden")
    alertBox.innerText = message
    alertBox.classList.add(alertType)
}

function sendInvite(event) {
    event.preventDefault();
    const userEmail = document.getElementById("userEmail").value;
    const userTrack = document.getElementById("tracks").value;
    /**
     * Add in the token that you've generated from the slack api site
     * to enable the system recognise you and perform the action as yourself.
     * eg. xoxp-...........-635688190788-667177835942-................................
     */

    const tokens = {
        android: "",
        cloud: "",
        mws: ""
    }
    /**
     * List out Ids of the channel that the user will be invited to once they join
     * e.g. CGHR389493,CJS8907KR,CE930SJDJK
     */
    const channels = {
        android: "",
        cloud: "",
        mws: ""
    };
    userTrack === "android" ?
        inviteToSlack(tokens.android, userEmail, channels.android) :
        userTrack === "cloud" ? inviteToSlack(tokens.cloud, userEmail, channels.cloud) :
        userTrack === "mws" ? inviteToSlack(tokens.mws, userEmail, channels.mws) :
        null;
}

function inviteToSlack(TOKEN, userEmail, Channels) {
    const submitBTN = document.getElementById("sendInvite");
    submitBTN.setAttribute("disabled", "")

    const SLACK_URL = `https://slack.com/api/users.admin.invite?token=${TOKEN}&email=${userEmail}&channels=${Channels}`;

    fetch(SLACK_URL)
        .then(response => response.json())
        .then(function (response) {
            if (!response.ok && response.error == "already_invited") {
                showAlert("Email already invited, please check your email to continue", "alert-danger")
            } else if (!response.ok && response.error == "already_in_team") {
                showAlert("User Already Exist, please click on the link to your track below to login", "alert-danger")
            } else {
                showAlert("Invitation sent, please check your mailbox", "alert-success")
            }
            submitBTN.removeAttribute("disabled")
        })
        .catch(function (error) {
            showAlert("Error Sending Invite, Try again later!", "alert-danger")
            submitBTN.removeAttribute("disabled")
        });
}