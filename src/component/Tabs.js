

import React from 'react'

// import Foodcards from './Foodcards';
// import ProductDetails from './ProductDetails';
// import CartList from './CartList';



const Tabs = () => {
    const [items, setItems] = useState(Datacards);

    const [offer, setOffer] = useState(Datacards);
    const [rating, setRating] = useState(Datacards);



    const filterName = (categItem) => {
        const updateitems = Datacards.filter((curElem) => {
            return curElem.category === categItem;
            // event.preventDefault();
        });
        setItems(updateitems);

        const updateoffer = Datacards.filter((curElem) => {
            return curElem.offer === offer;
        });
        setOffer(updateoffer);

        const updaterating = Datacards.filter((curElem) => {
            return curElem.rating === rating;
        });
        setRating(updaterating);
    }
    const filterRating = (rate) => {
        const updaterate = Datacards.filter((curElem) => {
            return curElem.rating === rate;
            // event.preventDefault();
        });
        setItems(updaterate);

    }
    const filterArrival = (arrival) => {
        const updatearrival = Datacards.filter((curElem) => {
            return curElem.food === arrival;
            // event.preventDefault();
        });
        setItems(updatearrival);
    }

    const [details, setDetails] = useState(Datacards)
    console.log(details);
    const viewDetails = (data) => {
        setDetails([...details, data]);
    }

    const filterview = (viewDetails) => {
        const viewData = Datacards.filter((curElem) => {
            return curElem.id === viewDetails;
        });
        setItems(viewData);
    }
    return (

            
            <div className='conatainer'>
                <ul class="nav nav-tabs mb-3" id="myTab0" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button
                            class="nav-link"
                            id="home-tab0"
                            data-mdb-toggle="tab"
                            data-mdb-target="#home0"
                            type="button"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                            onClick={() => filterName('fastdelivery')}>
                            Fast Delivery
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button
                            class="nav-link"
                            id="profile-tab0"
                            data-mdb-toggle="tab"
                            data-mdb-target="#profile0"
                            type="button"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="false"
                            onClick={() => filterName('Greatoffer')}
                        >
                            Great offers
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button
                            class="nav-link"
                            id="contact-tab0"
                            data-mdb-toggle="tab"
                            data-mdb-target="#contact0"
                            type="button"
                            role="tab"
                            aria-controls="contact"
                            aria-selected="false"
                            onClick={() => filterRating('3.8')}
                        >
                            Rating 3.0+
                        </button>
                    </li>

                    <li class="nav-item" role="presentation">
                        <button
                            class="nav-link"
                            id="contact-tab0"
                            data-mdb-toggle="tab"
                            data-mdb-target="#contact0"
                            type="button"
                            role="tab"
                            aria-controls="contact"
                            aria-selected="false"
                            onClick={() => filterArrival('Newarrival')}
                        >
                            New Arrivals
                        </button>
                    </li>

                    <li class="nav-item" role="presentation">
                        <button
                            class="nav-link"
                            id="contact-tab0"
                            data-mdb-toggle="tab"
                            data-mdb-target="#contact0"
                            type="button"
                            role="tab"
                            aria-controls="contact"
                            aria-selected="false"

                        >
                            Pure Veg
                        </button>
                    </li>

                    <li class="nav-item" role="presentation">
                        <button
                            class="nav-link"
                            id="contact-tab0"
                            data-mdb-toggle="tab"
                            data-mdb-target="#contact0"
                            type="button"
                            role="tab"
                            aria-controls="contact"
                            aria-selected="false"

                        >
                            Cusines
                        </button>
                    </li>

                    <li class="nav-item dropdown " role="presentation">

                        <button
                            class="nav-link dropdown dropdown-toggle" data-toggle="dropdown" href="#"
                            id="contact-tab0"
                            data-mdb-toggle="tab"
                            data-mdb-target="#contact0"
                            type="button"
                            role="tab"
                            aria-controls="contact"
                            aria-selected="false">


                            More

                        </button>


                    </li>
                    <ul class="dropdown-menu">
                        <li><a href="#jquerytab" role="tab" data-toggle="tab">jQuery</a></li>
                        <li><a href="#bootstab" role="tab" data-toggle="tab">Bootstrap</a></li>
                        <li><a href="#htmltab" role="tab" data-toggle="tab">HTML</a></li>
                    </ul>
                </ul>
                <div class="tab-content" id="myTabContent0">
                    <div
                        class="tab-pane fade show active"
                        id="home0"
                        role="tabpanel"
                        aria-labelledby="home-tab0"
                    >

                    </div> 
                    <div class="tab-pane fade" id="profile0" role="tabpanel" aria-labelledby="profile-tab0">
                        Great Offers
                    </div>
                    <div class="tab-pane fade" id="contact0" role="tabpanel" aria-labelledby="contact-tab0">
                        Rating 4.0+
                    </div>
                    <div class="tab-pane fade" id="contact0" role="tabpanel" aria-labelledby="contact-tab0">
                        New Arrivals
                    </div>

                    <div class="tab-pane fade" id="contact0" role="tabpanel" aria-labelledby="contact-tab0">
                        Pure Veg
                    </div>

                    <div class="tab-pane fade" id="contact0" role="tabpanel" aria-labelledby="contact-tab0">
                        Cusinies
                    </div>


                    <div class="tab-pane fade" id="contact0" role="tabpanel" aria-labelledby="contact-tab0">
                        More

                    </div>

</div>






                </div>
                )
}

                export default Tabs