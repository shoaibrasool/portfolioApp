import './contact.css'


const Contact = () => {
    return (
        <div className="contact">
            <h1>Let’s build something great together.</h1>
            <hr />
            <div className="contactForm">
                <div className="details">
                    <h2>Get In Touch</h2>
                    <h4>📧 Email: <a href="mailto:shooaib6@gmail.com">shooaib6@gmail.com</a></h4>
                    <h4>📱 Phone: <a href="tel:+923119599700">+92 311 9599700</a></h4>
                    <h4>🌍 Location: <span>Islamabad, Pakistan</span></h4>
                    <h4>
                        💼 <a href="https://www.linkedin.com/in/shoaib-rasool" target="_blank" rel="noreferrer">LinkedIn</a> |
                        <a href="https://github.com/shoaibrasool" target="_blank" rel="noreferrer"> GitHub</a> |
                        <a href="https://www.upwork.com" target="_blank" rel="noreferrer"> Upwork</a>
                    </h4>
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
