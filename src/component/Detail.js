

function Detail() {

    return (
        <>
        <h1 className="text-center text-danger my-5"></h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                         <div classNew="card bg-dark card1">
                <img style={{width:'50%',height:'250px'}} src="./images/frist.jpg" classNew="card-img" alt="..." />
                <div classNew="card-img-overlay">
                    <h5 classNew="card-title">EV SCOOTER</h5>
                    <p classNew="card-text">RENTAL RATE:$10/PER HOUR <br />CALL NOW </p>
                </div>
            </div>
                    </div>
                    <div className="col">
                         <div classNew="card bg-dark text-white">
                <img style={{width:'50%',height:'250px'}} src="./images/second.jpg" classNew="card-img" alt="..." />
                <div classNew="card-img-overlay">
                    <h5 classNew="card-title">EV SCOOTER</h5>
                    <p classNew="card-text">RENTAL RATE:$30/PER HOUR<br />CALL NOW</p>
                </div>
            </div>
                    </div>
                    <div className="col">
                         <div classNew="card bg-dark text-white">
                <img style={{width:'50%',height:'250px'}} src="./images/third.jpg" classNew="card-img" alt="..." />
                <div classNew="card-img-overlay">
                    <h5 classNew="card-title">EV SCOOTER</h5>
                    <p classNew="card-text">RENTAL RATE:$20/PER HOUR <br />CALL NOW </p>
                </div>
            </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Detail;