import './contact.css'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../../assets/emailConfig'


const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [sending, setSending] = useState(false)
    const [status, setStatus] = useState('')

    const onChange = (e) => {
        const { name, value } = e.target
        setForm((f) => ({ ...f, [name]: value }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        setStatus('')
        if(!form.name || !form.email || !form.message){
            setStatus('Please fill in all fields.')
            return
        }
        try{
            setSending(true)
            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
                from_name: form.name,
                from_email: form.email,
                message: form.message,
                to_email: 'shooaib6@gmail.com'
            }, {
                publicKey: EMAILJS_PUBLIC_KEY
            })
            setStatus('Message sent! I will get back to you soon.')
            setForm({ name: '', email: '', message: '' })
        }catch(err){
            setStatus('Failed to send. Please try again later.')
        }finally{
            setSending(false)
        }
    }

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
                    <form className="glass" onSubmit={onSubmit}>
                        <div className="row">
                            <input type="text" name="name" placeholder='Name' value={form.name} onChange={onChange} />
                            <input type="email" name="email" placeholder='Email' value={form.email} onChange={onChange} />
                        </div>
                        <div className='msg'>
                            <textarea name="message" placeholder='Message' value={form.message} onChange={onChange}></textarea>
                        </div>
                        <button className='btn-neon' type='submit' disabled={sending}>{sending ? 'Sending...' : 'Send'}</button>
                        {status && <p className='status'>{status}</p>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
