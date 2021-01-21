# react-streams
This is an application enabling users to view other users' streaming channels and also to create/edit/delete their own streaming channels.

To run the application locally, follow the steps as follows:
1. Download the entire project package
2. Download OBS from https://obsproject.com 
3. Enable three separate services in three separate terminals on a Mac(or command line window on Windows)
  1) in the folder 'api' run the command 'npm start'
  2) in the folder 'rtmpserver' run the command 'npm start'
  3) in the folder 'client' run the command 'npm start'
  At this point, a new browser window will pop up showing the home page of the application. You can view the stream channels created by other users.
  
To create a new sream, you need to open the OBS first and create a 'scene' in the OBS
  1) log in with the Google button on the top right corner
  2) sign in with your Google account
  3) click 'create stream' button on the buttom right corner
  4) input the title and the description in the textbox
  5) click 'submit'
  6) click the stream that you created on the home page
  7) copy the number in the address bar of the browser after 'http://localhost:3000/streams/'. 
     For example, if the address of the stream is 'http://localhost:3000/streams/7', then the number to be copied is '7'
  7) in OBS:
    a) go to 'settings' --> 'Stream'
    b) choose 'Custom...' in the 'Service' section and input 'rtmp://localhost/live' in the 'Server' section
    c) enter number copied from step 7) into the 'Stream Key' section
    d) click 'OK'
    e) in the main pannel of OBS, after choosing the input video source and audio source, click 'Start Streaming' in the 'pannel controls' section.
 8) In the browser: refresh the current streaming channel web page and you are all set!
  
