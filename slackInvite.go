package main

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	"strconv"
)

var token string
var channels string

//Declaring variables
//This way it avoids getting nil pointer exceptions, IKR this happens in golang too

func checkErr(err error){
	if err != nil {
		panic(err)
	}
}

func sendInvite(email string, token string, channels string){
	var err error
	var res *http.Response
	var jsonObject map[string]interface{}
	var invitationURL string
	invitationURL = "https://slack.com/api/users.admin.invite?token="+token+"&email="+email+"&channels="+channels

	println("Sending email to",email)

	res, err = http.Get(invitationURL);
	checkErr(err)
	bytes, err2 := ioutil.ReadAll(res.Body)
	checkErr(err2)
	json.Unmarshal(bytes,&jsonObject)
	if res.StatusCode == http.StatusOK {
		if jsonObject["ok"] == true {
			println("Email sent successfully")
		} else {
			println("Failed request for reason : ",jsonObject["error"].(string))
		}
	} else {
		println("Error ("+strconv.Itoa(res.StatusCode)+") : ",string(bytes))
	}
}

func main(){
	var emailList []string

	token = "" //TODO : Add token here
	channels = "c1,c2,c3" //Channels
	
	emailList = []string{"dev1@gmail.com","dev2@yahoo.co.uk"} 

	//Send invite for each email in emailList

	for index := range emailList {
		sendInvite(emailList[index],token,channels)
	}
}