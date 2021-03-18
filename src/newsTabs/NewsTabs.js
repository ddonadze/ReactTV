import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import MtavariNews from '../MtavariNews';

const NewsTabs = () => {
    return (
      
      <Tabs transition={false} className=" mt-5">
        <Tab eventKey="Main" title="Main">
          <MtavariNews />
        </Tab>
        <Tab eventKey="Mtavari" title="Mtavari">
          <div>david1</div>
        </Tab>
        <Tab eventKey="Pormula" title="Pormula">
          <div>david2</div>
        </Tab>
      </Tabs>

      );
}
 
export default NewsTabs;