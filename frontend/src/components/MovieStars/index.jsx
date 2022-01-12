import {ReactComponent as StarFull} from 'assets/starfull.svg';
import {ReactComponent as StarHalf} from 'assets/starmid.svg';
import {ReactComponent as StarEmpty} from 'assets/satrempty.svg';
import './styles.css';


function MovieStars() {
    return (
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    );
}

export default MovieStars;