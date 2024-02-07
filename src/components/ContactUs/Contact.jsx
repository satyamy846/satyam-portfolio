import './Contact.css';
const Contact = ()=>{
    return (
        <>
            <div id="contact">
                <div className="contact-container">
                <div className="contact-title">
                <h2>{`GET IN TOUCH`}</h2>
                <h3>{`Have any queries?`}</h3>
                </div>
                <form action="" className="contact-form">
                    <div className="contact-details">
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Email"/>
                    </div>
                    <div className="contact-message">
                        <textarea name="message" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    </div>
                    <button className="contact-btn">Send</button>
                </form>
                </div>
            </div>
        </>
    )
}

export default Contact;