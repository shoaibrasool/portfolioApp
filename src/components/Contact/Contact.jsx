import './contact.css'


const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <hr />
            <div className="contactForm">
                <div className="details">
                    <h2>Get In Touch</h2>
                    <h4>Emails <a href="">shooaib6@gmail.com</a></h4>
                    <h4>Phone : <span>+923119599700</span></h4>
                </div>
                <div className="form">
                    <form>
                        <div className="row">
                            <input type="text" name="Name" placeholder='Name' />
                            <input type="email" name="Email" placeholder='Email' />
                        </div>
                        <div className='msg'>
                            <textarea name="message" placeholder='Message'></textarea>
                        </div>
                        <button type='submit'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
