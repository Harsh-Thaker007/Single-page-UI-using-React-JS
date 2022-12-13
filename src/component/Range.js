

function Range() {

    return (
        <section class="mb-4 p-3 bg-dark text-primary s1 justify-content-center">


            <h2 class="h1-responsive font-weight-bold d-flex justify-content-start">Contact us</h2>

            <p class="h1-responsive font-weight-bold d-flex justify-content-start">Do you have any questions? </p>
            <p class="h1-responsive font-weight-bold d-flex justify-content-start">Please do not hesitate to contact us directly.</p>
            <br />
            <div class="row d-flex">


                <div class="col-md-9 mb-md-0 mb-5">
                    <form id="contact-form" name="contact-form">


                        <div class="row d-flex justify-content-end">


                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <input type="text" id="name" name="name" class="form-control" />
                                    <label for="name" class="">Your name</label>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <input type="text" id="email" name="email" class="form-control" />
                                    <label for="email" class="">Your email</label>
                                </div>
                            </div>

                        </div>

                        <div class="row">
                            <div class="col-md-8">
                                <div class="md-form mb-0">
                                    <input type="text" id="subject" name="subject" class="form-control" />
                                    <label for="subject" class="">Subject</label>
                                </div>
                            </div>
                        </div>

                        <div class="row">


                            <div class="col-md-8">

                                <div class="md-form">
                                    <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                    <label for="message">Your message</label>
                                </div>

                            </div>
                        </div>

                    </form>

                    </div>

                    <div class="text-center text-md-left">
                        <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                    </div>
                    <div class="status"></div>
                </div>
                
            
                </section>
      
    );
}

export default Range;