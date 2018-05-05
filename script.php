<?php
const TOKEN = "";
const EMAIL_LIST = ['mails4mage@gmail.com','mails4mage@gmail.com','mails4mage@gmail.com'];

// Mentors should be invited to #general, #random....
const MENTORS = "";

// Facilitators should be invited to #general, #random....
const FACILITATORS = "";


foreach (EMAIL_LIST as $email)
{
    $slack_url = 'https://slack.com/api/users.admin.invite?token='.TOKEN.'&email='.$email.'&channels='.MENTORS.'&resend=true';

    $response = json_decode(file_get_contents($slack_url));

    var_dump($response);

    echo "\n +++";
}