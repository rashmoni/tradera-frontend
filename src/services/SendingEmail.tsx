import React, { FormEvent, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { send } from 'process';

const SendingEmail = () => {
  const form: any = useRef(null);
  const SERVICE_ID = "service_oyhwjo6";
  const TEMPLATE_ID = "template_cef8s9l";
  const PUBLIC_KEY = "jxBw8W1xL1Z8Z21Ar";


  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result: any) => {
          console.log(result.text);
      }, (error: any) => {
          console.log(error.text);
      });

  };
  return (
    <div>
      <form ref={form}
      onSubmit={sendEmail}>
        <label>Email</label>
      <input type="email" name="user_email" />
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}

export default SendingEmail