import React, {useState} from 'react';
// import { createTuit } from '../reducers/tuits-reducer';
import { useDispatch } from 'react-redux';
import { createTuitThunk } from '../../services/tuits-thunks';


const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        const newTuit = {
            userName: "NASA",
            handle: "@spacex",
            time: "3h",
            image: "../../images/web_dev_nasa_logo.png",
            title: "Cybertrucks driving up Olympus Mons",
            description: whatsHappening,
            retuits: 150,
            likes: 350,
            liked: false,
            dislikes: 10,
            replies: 100,

        }
        dispatch(createTuitThunk(newTuit));
    }
    return(
        <div className='row'>
            <div className='col-auto'>
                <img src='../../../images/web_dev_nasa_logo.png' width={60} alt="nasa_logo" />
            </div>
            <div className='col-10'>
                <textarea
                    className='form-control border-0'
                    value={whatsHappening}
                    placeholder="What's Happening?"
                    onChange={(event)=> setWhatsHappening(event.target.value)}
                >
                </textarea>
                <div>
                    <button
                        className='rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold'
                        onClick={tuitClickHandler}
                        >Tuit
                    </button>
                    <div className="text-primary fs-2">
                        <i className="bi bi-card-image me-3"></i>
                        <i className="bi bi-filetype-gif me-3"></i>
                        <i className="bi bi-bar-chart me-3"></i>
                        <i className="bi bi-emoji-smile me-3"></i>
                        <i className="bi bi-geo-alt"></i>
                     </div>
                </div>
            </div>
            <div className="col-12"><hr/></div> 
        </div>
    );
}

export default WhatsHappening;