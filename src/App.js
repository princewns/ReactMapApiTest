import './App.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Location from './ccc/map';


function App() {
  const gridStyle = {
    backgroundColor : 'aqua',
    
  }
  return (
    <div className="App">
      <Button variant='primary'>Primary</Button>{''}
      <Container style={gridStyle}>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
      <Location />
    </div>
  );
}

export default App;
