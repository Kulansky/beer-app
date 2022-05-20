import { useState } from "react";
import AppTemplate from "templates/AppTemplate"
import BeersList from "components/beers/beerList"
import BeerFinder from "components/beers/beerFinder";

const MainPageBeers = () => {
    const [filters, setFilters] = useState();

    return (
        <AppTemplate>
            <BeerFinder setFilters={setFilters} />
            <BeersList filters={filters} />
        </AppTemplate>
    );
};

export default MainPageBeers;