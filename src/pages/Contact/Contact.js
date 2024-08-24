import React, {useState, useEffect} from 'react'
import './Contact.css'
export function Contact(props) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const [message, setMessage] = useState("")
    return (
        <div className={`contact${props.contactPopup?"":" hidden"}`}>
            <div className={`popup${props.contactPopup?"":" hidden"}`}>
                <div className="contact-heading">
                    <span>Contact</span>
                    <button className="exit-button" onClick={() => props.setContactPopup(prevContactPopup => {return !prevContactPopup})}/>
                </div>
                
                <div className="input-name">
                    <div className="input">
                        *First Name
                        <input value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    </div>
                    <div className="input">
                        *Last Name
                        <input value={lastName} onChange={e => setLastName(e.target.value)}/>
                    </div>
                </div>
                <div className="input">
                    *Email Address
                    <input value={emailAddress} onChange={e => setEmailAddress(e.target.value)}/>
                </div>
                <div className="input">
                    *Message
                    <textarea value={message} onChange={e => setMessage(e.target.value)}/>
                </div>
                <button className="send-button">
                    Send
                </button>
            </div>
        </div>
    )
}
