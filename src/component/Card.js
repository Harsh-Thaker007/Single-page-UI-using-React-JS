

function Card() {

    return (
        <>
            <div class="fluid text-white ">
                <img id="show" src="./images/full_width.jpg" alt="Snow" />
                <div style={{position:'absolute',top:'30%',right:'70%',transform:'translate(-50%,-50%)'}} class="centered">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

                    <label for="exampleFormControlTextarea1" class="form-label">Purposes fro rental </label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>

        </>

    );
}

export default Card;