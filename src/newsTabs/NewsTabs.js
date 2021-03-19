import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import MtavariNews from '../MtavariNews';
import FormulaNews from '../Formula-News/FormulaNews';

const NewsTabs = () => {
    return (
      
      <Tabs transition={false} className=" mt-5">
        <Tab eventKey="Main" title="Main" active>
          <div>Matavi gverdi</div>
        </Tab>
        <Tab eventKey="Mtavari" title="Mtavari">
          <MtavariNews />
        </Tab>
        <Tab eventKey="Pormula" title="Pormula">
          <FormulaNews/>
        </Tab>
      </Tabs>

      );
}
 
export default NewsTabs;