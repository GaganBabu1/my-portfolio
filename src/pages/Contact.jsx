import {useEffect,useState} from "react";
import {ValidationError,useForm} from "@formspree/react";

function Contact()
{
    const [state,handleSubmit] = useForm("mpqvyawj");
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');

    useEffect(()=>{
        document.title = "Contact | Gagan Babu Portfolio";
    }, []);

    if(state.succeeded)
    {
        return (
        <div>
            <h1>Thank you, {name}</h1>
            <p>Your message was sent successfully. I’ll reply at {email} soon.</p>
        </div>
    );
    }

    return(
        <div>
            <h1>Contact Me</h1>

            <div>
                <p>Email: <a href="mailto:gaganbabu1203@gmail.com">gaganbabu1203@gmail.com</a></p>
                <p>LinkedIn: <a href="https://linkedin.com/in/gagan-babu-7a982b2b1" target="_blank" rel="noreferrer">linkedin.com/in/gagan-babu-7a982b2b1</a></p>
                <p>GitHub: <a href="https://github.com/GaganBabu1" target="_blank" rel="noreferrer">github.com/GaganBabu1</a></p>
            </div>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        placeholder="Your Name"/>
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        placeholder="Your Email"/>
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                        placeholder="Your Message"/>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <ValidationError errors={state.errors} />

                <button type="submit" disabled={state.submitting}>
                    {state.submitting ? 'Sending...' : 'Submit'}
                </button>
            </form>
        </div>
    );

    
}

export default Contact;
