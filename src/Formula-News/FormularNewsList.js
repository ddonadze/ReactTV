import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


const FormulaNewsList = ({ data }) => {

    console.log(data)

    return (
            <Row className="justify-content-md-center nowrap mt-2">

                {data.items.map((item) => {
                    const { snippet = {} } = item;
                    const { thumbnails = {} } = snippet;
                    const { medium } = thumbnails;
                    const { resourceId = {} } = snippet;
                   
                return (
                            <Col key={resourceId.videoId}>
                                 <a href={123}>
                                    <Image width={220} height={140} className="ml-3" src={medium.url} alt="Generic placeholder" />
                                </a>
                            </Col>
                          
                        )                 
                    })}
            </Row>
         );
  }
   
  export default FormulaNewsList;
