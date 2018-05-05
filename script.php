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

	$ch = curl_init();
    $headers = ['Accept: application/json','Content-Type: application/json',];

    curl_setopt($ch, CURLOPT_URL, $slack_url);

    //Set request headers
	curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
	curl_setopt($ch, CURLOPT_HEADER, 0);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

	// Timeout in seconds
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);

	$response = curl_exec($ch);

	//Display response
	echo "<br /> ---Response for '{$email}'";
    var_dump(json_decode($response));
    echo "\n +++";
}