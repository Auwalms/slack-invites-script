/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package slackinvite;

import java.io.IOException;
import java.io.InputStream;
import java.io.UncheckedIOException;
import java.net.*;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.json.*;


/**
 *
 * @author mage
 */
public final class Invite {
    public final String TOKEN = "";
    
    public final String[] EMAILS = new String[]{"email1","email2","email3"};
    public final String MENTORS = "CHANNELID1,CHANNELID2,CHANNELID3,CHANNELID4";
    public String charset = "UTF-8";
    public final String FACILITATORS = "CHANNELID1,CHANNELID2,CHANNELID3,CHANNELID4";
    
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        new Invite().sendInvites();
    }
    
    public void sendInvites() {
        for (String email : this.EMAILS) {
            String slackUrl  = "https://slack.com/api/users.admin.invite";
            
            try {
                String query = String.format("token=%s&email=%s&channels=%s&resend=%s", 
                    URLEncoder.encode(TOKEN, charset), 
                    URLEncoder.encode(email, charset),
                    URLEncoder.encode(MENTORS, charset),
                    URLEncoder.encode("true", charset));
                
                URLConnection connection = new URL(slackUrl + "?" + query).openConnection();
                connection.setRequestProperty("Accept-Charset", charset);
                InputStream response = connection.getInputStream();
               
                //Parse JSON Response
                JSONObject obj = new JSONObject(convertStreamToString(response));
                
                //write out the response body
	        System.out.println("*** Response for '"+email+"' ***");
                System.out.println(obj);
                System.out.println('\n');
            }
            catch (JSONException ex) {
                    Logger.getLogger(Invite.class.getName()).log(Level.SEVERE, null, ex);
                }
            catch (IOException ioE) {
                    throw new UncheckedIOException(ioE);
                }
        }
    }

    public static String convertStreamToString(java.io.InputStream is) {
        java.util.Scanner s = new java.util.Scanner(is).useDelimiter("\\A");
        return s.hasNext() ? s.next() : "";
    }
}
