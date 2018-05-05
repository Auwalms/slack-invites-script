<?php
const TOKEN = "";
const EMAIL_LIST = ["email1","email2","email3"];

// Mentors should be invited to #general, #random....
const MENTORS = "CHANNELID1,CHANNELID2,CHANNELID3,CHANNELID4";

// Facilitators should be invited to #general, #random....
const FACILITATORS = "CHANNELID1,CHANNELID2,CHANNELID3,CHANNELID4";


foreach (EMAIL_LIST as $email)
{
    $slack_url = 'https://slack.com/api/users.admin.invite?token='.TOKEN.'&email='.$email.'&channels='.MENTORS.'&resend=true';

    $response = json_decode(file_get_contents($slack_url));

    var_dump($response);

    echo "\n +++";
}