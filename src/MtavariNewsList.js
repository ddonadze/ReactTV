import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';




const MtavariNewsList = ({ data }) => {

    console.log(data)

    return (
            <Row className="justify-content-md-center nowrap mt-3">

                {data.items.map((item) => {
                    const { snippet = {} } = item;
                    const { thumbnails = {} } = snippet;
                    const { medium } = thumbnails;
                    const { resourceId = {} } = snippet;
                   
                return (
                        <Media key={resourceId.videoId}>
                            <Media.Body>
                            <Col>
                                 <a href={123} hover zoom>
                                    <img width={220} height={140} className="ml-3" src={medium.url} alt="Generic placeholder" />
                                </a>
                            </Col>
                            </Media.Body>
                        </Media>
                        )                 
                    })}
            </Row>
         );
  }
   
  export default MtavariNewsList;
