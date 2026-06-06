import {useEffect,useState} from "react";
function Contact()
{
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [submitted,setSubmitted] = useState(false);
    useEffect(()=>{
        document.title = "Contact | Gagan Babu Portfolio";
    }, []);

    function handleSubmit()
    {
        if(name == '' || email == '' || message == '')
        {
            alert('Please fill in all fields.');
            return;
        }
        setSubmitted(true);
    }

    if(submitted)
    {
        return (
        <div>
            <h1>Thank you, {name}</h1>
            <p>I'll get back to you at {email} soon.</p>
        </div>
    );
    }

    return(
        <div>
            <h1>Contact Me</h1>

            <div>
                <label>Name:</label>
                <input
                    type ="text"
                    value = {name}
                    onChange = {(e)=>setName(e.target.value)}
                    placeholder = "Your Name"/>
            </div>

            <div>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Your Email"/>
            </div>

            <div>
                <label>Message</label>
                <textarea
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}
                    placeholder="Your Message"/>
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );

    
}

export default Contact;
