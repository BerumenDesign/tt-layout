import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

const cardStyle = {
  margin: '.5em'
};
const timeStampStyle = {
  position: 'relative',
  top: '-59px',
  fontStyle: 'italic',
  float: 'right',
  color: '#666',
  borderRadius: 0
};


const TtCard = () => (<div>

            <Card style={cardStyle}>
              <CardHeader style={{paddingBottom: 0}} title="Lebron James" subtitle="403-808-8997" avatar="jsa-128.jpg"/>
              <CardText>
                <span style={timeStampStyle}>5 min</span>
                I cannot connect to LTE</CardText>
            </Card>
          </div>
);

export default TtCard;
