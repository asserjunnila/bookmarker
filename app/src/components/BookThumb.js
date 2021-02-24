import 'materialize-css';
import { Card, Col, Button, Icon, Row, Modal} from 'react-materialize';


function BookThumb(props) {
    return (
      <div>    
        <Col m={4} s={6}>
        <Card>
        <img alt="img" src={props.img}></img>
        <Row>
            <Col m={6} s={6}>
            <h4>{props.name}</h4>
            <h5>{props.author}</h5>
            </Col>
        </Row>
        <Row>
            <Col m={8} s={8}>
            </Col>
            <Col m={4} s={4}>
            
            <Modal
            actions={[
                <Button 
                flat modal="close" 
                node="button" 
                waves="red">Close
                </Button>
            ]}
            bottomSheet={false}
            fixedFooter={false}
            id="Modal-0"
            open={false}
            options={{
                dismissible: true,
                endingTop: '10%',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: '4%'
            }}
            trigger={<Button
                className="red"
                floating
                icon={<Icon>edit</Icon>}
                ></Button>}
            >
            <img alt="img" src={props.img}></img>
            <h2>{props.name}</h2>
            <h3>{props.author}</h3>
            <p>
            </p>
            </Modal>
            </Col>
        </Row>
        </Card>
        </Col>
    </div>
    );
  }
  
  export default BookThumb;