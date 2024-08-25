import React, {useState, useEffect} from 'react'
import './Contact.css'
export function Contact(props) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const [message, setMessage] = useState("")
    return (
        <div id="contact-form" className={`contact${props.contactPopup?"":" hidden"}`}>
            <form className={`popup${props.contactPopup?"":" hidden"}`}>
                <div className="contact-heading">
                    <span>Contact</span>
                    <button className="exit-button" onClick={() => props.setContactPopup(prevContactPopup => {return !prevContactPopup})}/>
                </div>
                <div className="input-name">
                    <div className="input">
                        *First Name
                        <input name="first_name" value={firstName} onChange={e => setFirstName(e.target.value)} required/>
                    </div>
                    <div className="input">
                        *Last Name
                        <input name="last_name" value={lastName} onChange={e => setLastName(e.target.value)} required/>
                    </div>
                </div>
                <div className="input">
                    *Email Address
                    <input name="email_address" value={emailAddress} onChange={e => setEmailAddress(e.target.value)} required/>
                </div>
                <div className="input">
                    *Message
                    <textarea name="message" value={message} onChange={e => setMessage(e.target.value)} required/>
                </div>
                <input className="send-button" type="submit" value="Send"/>
            </form>
        </div>
    )
}
