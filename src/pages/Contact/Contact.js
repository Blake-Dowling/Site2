import React, { useState, useEffect, forwardRef } from 'react'
import './Contact.css'
export const Contact = forwardRef((props, ref) => (

        <div id="contact-form" className={`contact${props.contactPopup?"":" hidden"}`}>
            <div className={`popup${props.contactPopup?"":" hidden"}`} >
                <div className="contact-heading">
                    <span>Contact</span>
                    <button className="exit-button" onClick={() => props.setContactPopup(prevContactPopup => {return !prevContactPopup})}/>
                </div>
                {!props.emailSent && 
                    <form ref={ref} onSubmit={props.sendEmail}>
                        <div className="input-name">
                            <div className="input">
                                *First Name
                                <input name="first_name" required/>
                            </div>
                            <div className="input">
                                *Last Name
                                <input name="last_name" required/>
                            </div>
                        </div>
                        <div className="input">
                            *Email Address
                            <input name="email_address" required/>
                        </div>
                        <div className="input">
                            *Message
                            <textarea name="message" required/>
                        </div>
                        <input className="send-button" type="submit" value="Send"/>
                    </form>
                }
                {props.emailSent && 
                    <div className="email-sent">
                        <img src={`${process.env.PUBLIC_URL}/plane-icon.svg`}/>
                        <span>Message Sent!</span>
                    </div>
                }
            </div>
        </div>
    )
)
