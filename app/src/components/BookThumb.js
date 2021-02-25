import 'materialize-css';
import { Card, Col, Button, Icon, Row, Modal, CardTitle} from 'react-materialize';
import BookView from './BookView';


function BookThumb(props) {

    return (
      <div>    
        <Col m={6} s={6}>
        <Card 
        header={<CardTitle image={props.book.bookImg}></CardTitle>}
        >
        <Row>
            <Col m={12} s={12}>
            <h4>{props.book.bookName}</h4>
            <h5>{props.book.bookAuthor}</h5>
            </Col>
        </Row>
        <Row>
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
                startingTop: '4%',
                
            }}
            trigger={<Button
                className="red"
                floating
                node="button"
                icon={<Icon>edit</Icon>}
                ></Button>}
            >
            <BookView book={props.book} ></BookView>
            </Modal>
        </Row>
        </Card>
        </Col>
    </div>
    );
  }
  
  export default BookThumb;