import useFetch from './service/UseFetch'
import MtavariNewsList from './MtavariNewsList';


const MtavariNews = () => {
    const playlistId = 'playlistId=PLqcIpeZWxYsh3G12IpOAAKAR0XVnAIDuY';
    const {data} = useFetch(playlistId)


    return (
            <div>
                {data && <MtavariNewsList data={data} />}
            </div>
          );
}
 
export default MtavariNews;