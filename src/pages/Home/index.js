import { Link } from 'react-router-dom';
import { category, movieType } from '~/api/tmdbApi';
import Button from '~/components/Button';
import HeroSlide from '~/components/HeroSlide';
import MovieList from '~/components/MovieList';

function Home() {
    return (
        <>
            <HeroSlide />
            <div className="container">
                <div className="movies-list">
                    <div className="movies-list__item mb-3">
                        <div className="movies-item__heading mb-2">
                            <h2>Trending Movies</h2>

                            <Link to="/movie">
                                <Button outline small>
                                    View More
                                </Button>
                            </Link>
                        </div>

                        <MovieList cate={category.movie} type={movieType.popular}></MovieList>
                    </div>

                    <div className="movies-list__item mb-3">
                        <div className="movies-item__heading mb-2">
                            <h2>Top Rated Movies</h2>

                            <Link to="/movie">
                                <Button outline small>
                                    View More
                                </Button>
                            </Link>
                        </div>

                        <MovieList cate={category.movie} type={movieType.top_rated}></MovieList>
                    </div>

                    <div className="movies-list__item mb-3">
                        <div className="movies-item__heading mb-2">
                            <h2>Trending TV</h2>

                            <Link to="/tv">
                                <Button outline small>
                                    View More
                                </Button>
                            </Link>
                        </div>

                        <MovieList cate={category.tv} type={movieType.popular}></MovieList>
                    </div>

                    <div className="movies-list__item mb-3">
                        <div className="movies-item__heading mb-2">
                            <h2>Top Rated TV</h2>

                            <Link to="/tv">
                                <Button outline small>
                                    View More
                                </Button>
                            </Link>
                        </div>

                        <MovieList cate={category.tv} type={movieType.top_rated}></MovieList>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
