import useFetch from '../service/UseFetch';
import FormulaNewsList from './FormularNewsList';


const FormulaNews = () => {
    const playlistId = 'playlistId=PL_6QL2NLq4jgfTyNrczFI4d9C23XiKsuW';
    const {data} = useFetch(playlistId)


    return (
            <div>
                {data && <FormulaNewsList data={data} />}
            </div>
          );
}
 
export default FormulaNews;