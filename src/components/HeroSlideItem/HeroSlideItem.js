import classNames from 'classnames/bind';
import styles from './HeroSlideItem.module.scss';
import style from '~/components/Modal/Modal.module.scss';
import apiConfig from '~/api/apiConfig';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import tmdbApi, { category } from '~/api/tmdbApi';
const cx = classNames.bind(styles);
function HeroSlideItem({ item, className }) {
    let navigate = useNavigate();
    async function setActiveModal() {
        const modal = document.querySelector(`#modal_${item.id}`);

        const iframe = document.querySelector(`#modal_${item.id} > ${'.' + style.modalContainer} > iframe`);

        const videos = await tmdbApi.getVideos(category.movie, item.id);
        if (videos.results.length > 0) {
            const videoSrc =
                'https://www.youtube.com/embed/' +
                (videos.results[0].key ? videos.results[0].key : videos.results[1].key);
            iframe.setAttribute('src', videoSrc);
        } else {
            modal.querySelector(`${'.' + style.modalContainer}`).innerHTML = 'No Trailer';
        }
        modal.classList.toggle('Modal_active__mhkOu');
    }

    const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slide-item', [className])} style={{ backgroundImage: `url(${background})` }}>
                <div className={cx('item-content')}>
                    <div className={cx('item-info')}>
                        <h2 className={cx('title')}>{item.title}</h2>
                        <p className={cx('overview')}>{item.overview}</p>

                        <div className={cx('btns')}>
                            <Button
                                main
                                large
                                onClick={() => {
                                    navigate(`/movie/${item.id}`);
                                }}
                            >
                                Watch now
                            </Button>
                            <Button outline large onClick={setActiveModal}>
                                Watch trailer
                            </Button>
                        </div>
                    </div>
                    <div className={cx('item-poster')}>
                        <img src={apiConfig.w500Image(item.poster_path)} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSlideItem;
