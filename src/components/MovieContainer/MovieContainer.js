import numeral from 'numeral';
import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);
function MovieContainer({data}) {
    const arrayTostring = (list)=>{
        let list_array = [];
        let list_String = ""
        if(list){
            list.forEach(element => {
                list_array.push(element.name);
            });
            list_String = list_array.join(", ");
            return list_String;
        }else{
            return "";
        }
    }
    let Listproductions = arrayTostring(data.production_companies);
    let Listgenre = arrayTostring(data.genres);
    let totalRevenue = data.revenue;
    if (totalRevenue === 'undefined' || totalRevenue === 0) {
        totalRevenue = "-";
    } else {
        totalRevenue = numeral(data.revenue).format('($0,0)');
    };
    return ( 
        <div className={cx("wrapper")}>
            <div className={cx("poster")}>
                <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="poster" />
            </div>
            <div className={cx("movie_infor-container")}>
                <h1 className={cx("title")}>{data.original_title}</h1>
                <p className={cx("decription")}>{data.overview}</p>
                <p className={cx("movie-genre")}>{Listgenre}</p>
                <p className={cx("moviemaker")}>{Listproductions}</p>
                <div className={cx("number_infor")}>
                    <div className={cx("number_infor--container")}>
                        <div className={cx("number_infor-type")}>
                            Original Release:
                        </div>
                        <div className={cx("number_infor-value")}>
                            {data.release_date}
                        </div>
                    </div>
                    <div className={cx("number_infor--container")}>
                        <div className={cx("number_infor-type")}>
                            Running Time:
                        </div>
                        <div className={cx("number_infor-value")}>
                            {data.runtime} mins
                        </div>
                    </div>
                    <div className={cx("number_infor--container")}>
                        <div className={cx("number_infor-type")}>
                            Box Office:
                        </div>
                        <div className={cx("number_infor-value")}>
                            {totalRevenue}
                        </div>
                    </div>
                    <div className={cx("number_infor--container")}>
                        <div className={cx("number_infor-type")}>
                            Vote Average:
                        </div>
                        <div className={cx("number_infor-value")}>
                            {data.vote_average} / 10
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default MovieContainer;