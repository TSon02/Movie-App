import { useParams } from 'react-router-dom';

import CatalogHeader from '~/components/CatalogHeader';
import { category as cate } from '~/api/tmdbApi';
import MovieGrid from '~/components/MovieGrid';

const Catalog = () => {
    const { category } = useParams();
    return (
        <div>
            <CatalogHeader>{category === cate.movie ? 'Movies' : 'TV Series'}</CatalogHeader>
            <MovieGrid category={category}></MovieGrid>
        </div>
    );
};

export default Catalog;
