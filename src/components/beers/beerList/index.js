import { useEffect, useState } from "react";
import BeerItem from "../beerItem";
import EndMessage from "../beerMessages/endMessage";
import Loader from "../beerMessages/loader";
import { fetchBeersList, searchBeerName} from "services/beerService";
import InfiniteScroll from "react-infinite-scroll-component";
import classes from './BeersList.module.css';

const BeersList = ({ filters }) => {
    const [beers, setBeers] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(2);

    useEffect(() => {
        if (filters) {
            setBeers([]);

            const getBeersByName = async () => {
                const response = await searchBeerName(filters);

                setBeers(response);
            };
            getBeersByName();
        };
    }, [filters]);

    useEffect(() => {
        const getBeers = async () => {
            const response = await fetchBeersList(1, 12)
            setBeers(response)
        }
        getBeers()
    }, []);

    const updateBeers = async () => {
        const updatePage = await fetchBeersList(page, 12)
        setBeers([...beers, ...updatePage]);

        if (updatePage.length === 0 || updatePage.length < 12) {
            setHasMore(false)
        }
        setPage(page + 1)
    };

    const listOfBeers = beers.map((beer) => {
        return <BeerItem
            id={beer.id}
            key={beer.id}
            name={beer.name}
            image_url={beer.image_url}
        />
    });

    return (
        <InfiniteScroll
            dataLength={beers.length}
            next={updateBeers}
            hasMore={hasMore}
            loader={filters ? null : <Loader />}
            endMessage={<EndMessage />}
        >
            <div className={classes.beerListWrapper}>
                {listOfBeers}
            </div>
        </InfiniteScroll>
    );
};

export default BeersList;