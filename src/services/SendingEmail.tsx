import React, { FormEvent, useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { send } from 'process';

const SendingEmail = () => {
  const form: any = useRef(null);
  const current = new Date();

  const templateParams: any = {
    name: 'Mumtaz',
    notes: 'Check this out!',
    email: 'shereenfatima1000@gmail.com'
};

  const currentDate = `${current.getDate()}${current.getMonth()+1}${current.getFullYear()}`;
  const SERVICE_ID = "service_oyhwjo6";
  const TEMPLATE_ID = "template_cef8s9l";
  const PUBLIC_KEY = "jxBw8W1xL1Z8Z21Ar";


  const sendEmail = () => {
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams , PUBLIC_KEY)
      .then((result: any) => {
          console.log("Success!", result.text);
      }, (error: any) => {
          console.log(error.text);
      });

  };
  /* 
  useEffect(() => {
    if(currentDate === "14112022")
    {
      setValue("mumtaz.fatima1000@gmail.com");
      sendEmail();
    }
  },[])
  */
  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
      </form>
    </div>
  )
}

export default SendingEmail