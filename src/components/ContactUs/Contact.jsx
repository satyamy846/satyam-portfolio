const Contact = ()=>{
    return (
        <>
            <div id="contact">
                <h2>{`GET IN TOUCH`}</h2>
                <h3>{`Have any queries?`}</h3>
                <form action="" className="contact-form">
                    <div className="contact-details">
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Email"/>
                    </div>
                    <div className="contact-message">
                        <textarea name="message" id="" cols="30" rows="10" placeholder="message"></textarea>
                    </div>
                    <button className="contact-btn">Send</button>
                </form>
            </div>
        </>
    )
}

export default Contact;