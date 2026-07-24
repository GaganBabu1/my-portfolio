import {useEffect,useState} from "react";
import {ValidationError,useForm} from "@formspree/react";
import styles from "./Contact.module.css";

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
        <section className={styles.pageShell}>
            <div className={styles.successCard}>
                <p className={styles.eyebrow}>Message sent</p>
                <h1 className={styles.title}>Thank you, {name}</h1>
                <p className={styles.successText}>
                    Your message was sent successfully. I’ll reply at {email} soon.
                </p>
                <a className={styles.primaryLink} href="/">
                    Return home
                </a>
            </div>
        </section>
    );
    }

    return(
        <section className={styles.pageShell}>
            <div className={styles.heroCard}>
                <p className={styles.eyebrow}>Contact</p>
                {/*<h1 className={styles.title}>Let’s build something useful.</h1>*/}
                <p className={styles.lead}>
                    Send a message through the form, or use one of the direct links.
                </p>

                <div className={styles.layout}>
                    <aside className={styles.infoCard}>
                        <p className={styles.sectionLabel}>Direct links</p>

                        <div className={styles.linkGroup}>
                            <span className={styles.linkLabel}>Email</span>
                            <a className={styles.contactLink} href="mailto:gaganbabu1203@gmail.com">
                                gaganbabu1203@gmail.com
                            </a>
                        </div>

                        <div className={styles.linkGroup}>
                            <span className={styles.linkLabel}>LinkedIn</span>
                            <a
                                className={styles.contactLink}
                                href="https://linkedin.com/in/gagan-babu-7a982b2b1"
                                target="_blank"
                                rel="noreferrer"
                            >
                                linkedin.com/in/gagan-babu-7a982b2b1
                            </a>
                        </div>

                        <div className={styles.linkGroup}>
                            <span className={styles.linkLabel}>GitHub</span>
                            <a
                                className={styles.contactLink}
                                href="https://github.com/GaganBabu1"
                                target="_blank"
                                rel="noreferrer"
                            >
                                github.com/GaganBabu1
                            </a>
                        </div>

                        
                    </aside>

                    <div className={styles.formCard}>
                        <p className={styles.sectionLabel}>Send a message</p>

                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.field}>
                                <label className={styles.label} htmlFor="name">Name</label>
                                <input
                                    className={styles.input}
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={name}
                                    onChange={(e)=>setName(e.target.value)}
                                    placeholder="Your Name"/>
                            </div>

                            <div className={styles.field}>
                                <label className={styles.label} htmlFor="email">Email</label>
                                <input
                                    className={styles.input}
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    placeholder="Your Email"/>
                                <ValidationError prefix="Email" field="email" errors={state.errors} />
                            </div>

                            <div className={styles.field}>
                                <label className={styles.label} htmlFor="message">Message</label>
                                <textarea
                                    className={styles.textarea}
                                    id="message"
                                    name="message"
                                    value={message}
                                    onChange={(e)=>setMessage(e.target.value)}
                                    placeholder="Your Message"/>
                                <ValidationError prefix="Message" field="message" errors={state.errors} />
                            </div>

                            <ValidationError errors={state.errors} />

                            <button className={styles.button} type="submit" disabled={state.submitting}>
                                {state.submitting ? 'Sending...' : 'Submit'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );

    
}

export default Contact;
