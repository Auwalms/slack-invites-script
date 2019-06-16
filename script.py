
import requests

# add your token here, generate from https: // api.slack.com/custom-integrations/legacy-tokens
token = "xoxp-410696815025-410696815393-411131764179-0c0b008eb159906e67d80e8d80f5ba2c"

# add all IDs of the channels you will want the users to be added automatically to
# you can get a list of your channels at https: // api.slack.com/methods/conversations.list
channels = "CHANNELID1,CHANNELID2,CHANNELID3"


mailList = ["email1", "email2", "email3"]

for email in mailList:
    url = "https://slack.com/api/users.admin.invite?token=%s&email=%s&channels=%s" % (
        token, email, channels)
    r = requests.get(url)
    print("%s invitation status:" % email)
    print(r.json())
