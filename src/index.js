import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Subheader from 'material-ui/Subheader';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton';
import ExitToApp from 'material-ui/svg-icons/communication/chat';
import Person from 'material-ui/svg-icons/social/person';
import Done from 'material-ui/svg-icons/action/done';
import Feedback from 'material-ui/svg-icons/communication/chat';
import Timer from 'material-ui/svg-icons/image/timer';
import TtCard from './components/tCard';
import {
  white,
  blue700,
  amber100,
  green500,
  grey900,
  grey700,
  grey400,
  orangeA700
} from 'material-ui/styles/colors';
import './index.css'

const appBarStyle = {
  backgroundColor: grey900,
  marginBottom: '1em'
};
const listLabel = {
  fontSize: '.75em',
  display: 'block',
  marginTop: '10px'
};
const chatDivider = {
  marginTop: '1em'
};
const Active = {
  color: blue700
};
const whiteIcon = {
  color: white
};
const ListIcon = {
  color: grey700,
  width: '1em',
  marginBottom: '-.5em'
};
const textfieldChat = {
  padding: '1em 1em 1em 2em',
  flexGrow: '9'
};
const buttonsChat = {
  padding: '1em 2em 1em 1em',
  flexGrow: '3'
};
const repChat = {
  padding: '1em',
  marginTop: '.5em',
  background: amber100
};
const titleChat = {
  fontSize: '.85em',
  color: orangeA700
};
const timeStampChat = {
  position: 'relative',
  fontStyle: 'italic',
  float: 'right',
  borderRadius: 0
};
const custChat = {
  padding: '1em',
  marginTop: '1em',
  background: 'white'
};
const custTitleChat = {
  fontSize: '.85em',
  color: '#2B9CFE'
};

const App = () => (<MuiThemeProvider>

  {/* This is the app bar */}

  <AppBar title="Trouble Ticket" style={appBarStyle} iconElementRight={<IconButton> < ExitToApp style = {
      whiteIcon
    } />< /IconButton>}/> {/* this is the ticket list panel */}

  <div id="container" class="flexChild rowParent">
    <div id="ticketListPanel" class="flexChild rowParent">

      {/* this is the menu with the differe kind of tickets */}
      <div id="ticketListColumn" class="flexChild rowParent">
        <div  class="flexChild">
          <Menu id="ticketMenu">
            <MenuItem primaryText="New tickets" focus={true} secondaryText="4" leftIcon={<Feedback color = {
                blue700
              } />} style={Active}/>
            <Divider/>
            <MenuItem primaryText="In progress" secondaryText="8"/>
            <MenuItem primaryText="@You" secondaryText="2" leftIcon={<Person color = {
                green500
              } />}/>
            <MenuItem primaryText="@John Smith" secondaryText="1" leftIcon={<Person color = {
                green500
              } />}/>
            <MenuItem primaryText="@Jane Smith" secondaryText="2" leftIcon={<Person color = {
                green500
              } />}/>
            <MenuItem primaryText="@Jordan Smith" secondaryText="0" leftIcon={<Person color = {
                grey400
              } />}/>
            <Divider/>
            <MenuItem primaryText="Processed" secondaryText="2" leftIcon={<Done color = {
                blue700
              } />}/>

          </Menu>
        </div>
      </div>

      {/* this is the list of tickets */}
      <div id="ticketList" class="flexChild columnParent">
          <Paper zDepth={0} rounded={false} id='titleTicketList' class="flexChild">
            <h2>New tickets</h2>
          </Paper>

                  {/* These are the tickets listed */}
        <div id='ticketCardColumn' class="flexChild columnParent">

          <TtCard/>
          <TtCard/>
          <TtCard/>
          <TtCard/>
          <TtCard/>
          <TtCard/>
        </div>
      </div>
    </div>

    {/* Card Column */}
    <div id="chatListColumn" class="flexChild columnParent">

      {/* Title */}
      <div id="chatTitle" class="flexChild columnParent">

        <div class="flexChild">
          <Paper zDepth={0} rounded={false} style={{paddingLeft: "1em"}}>
            <h2>Ticket title</h2>
          </Paper>

        </div>
        <div id="buttonsTicket" class="flexChild">
          <Paper zDepth={0} rounded={false}>
            <FlatButton>OPEN IN USER EXPLORER</FlatButton>
            <FlatButton label="Transfer ticket"/>
            <FlatButton label="Mark as resolved" style={{float:"right"}}/></Paper>

        </div>
      </div>

      {/* Chat */}
      <div id="chatPanel" class="flexChild rowParent">
        <div id='ticketInfo' class="flexChild columnParent">
          <div class="flexChild">
            {/* Ticket info */}

            Ticket ID 89329-01
            <span style={listLabel}>Duration</span>
            <Timer style={ListIcon}/>
            00:05:00
            <Divider style={chatDivider}/>
            <span style={listLabel}>SSID</span>
            SHAW-C598E0-EXT
            <span style={listLabel}>Frequency</span>
            2412
            <span style={listLabel}>dBM</span>
            -55
            <Divider style={chatDivider}/>
            <span style={listLabel}>Name</span>
            LeBron James
            <span style={listLabel}>Email</span>
            leb@james.com
            <span style={listLabel}>SSID</span>
            +1 403=966-3323
            <span style={listLabel}>Device</span>
            Samsung (Android 24)
          </div>

        </div>
        {/* Message */}
        <div id='chatMessages' class="flexChild columnParent">
          <div class="flexChild">
            <div style={custChat}>
              <div style={custTitleChat}>John Smith
                <span style={timeStampChat}>3 m ago</span>
              </div>
              <div>Hey my LTE connection is no bueno, why?</div>
            </div>
            <div style={repChat}>
              <div style={titleChat}>You
                <span style={timeStampChat}>Just now</span>
              </div>
              <div>Hello, I am sorry to hear that, when was the last time it happened?</div>
            </div>
          </div>
        </div>
      </div>
      {/* ChatInput */}
      <div id='chatInput' class="flexChild">
        <div class="flexChild rowParent">
          <div class="flexChild" style={textfieldChat}>
            <TextField hintText="Type message" fullWidth={true}/>
          </div>
          <div class="flexChild" style={buttonsChat}>
            <RaisedButton label="Send" primary={true} fullWidth={true} />
          </div>
        </div>
      </div>
    </div>

  </div>

</MuiThemeProvider >);
ReactDOM.render(<App/>, document.getElementById('app'));
