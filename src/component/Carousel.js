import React from "react"

const Carousel = () => {
    return (
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain" }}>
                <div className="carousel-inner">
                    <div className='carousel-caption' style={{ zIndex: "10" }}>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Reasturant name Or dish..." aria-label="Search" />
                            <button className="btn btn-outline-success bg-success text-white" type="submit" >Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://dxminds.com/wp-content/uploads/2020/02/how-much-does-it-cost-to-develop-food-ordering-app-like-zomato.jpg" className="d-block w-100" alt="..." style={{ height: "300px" }} />
                    </div>

                </div>
            </div>




        </>


    )


}
export default Carousel