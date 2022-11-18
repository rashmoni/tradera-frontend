import emailjs from '@emailjs/browser';
import { send } from 'process';
import { useState } from 'react';

const SERVICE_ID = "service_oyhwjo6";
  const TEMPLATE_ID = "template_cef8s9l";
  const PUBLIC_KEY = "jxBw8W1xL1Z8Z21Ar";

class SendingEmail {
  sendEmail(dataArray: any){
    let traderEmail: any;
    let traderName: any;

    for (const [key, value] of Object.entries(dataArray)) {
      if(key === "email"){traderEmail=value}
      if(key === "name"){traderName=value}}

    const templateParams: any = {
      name: traderName,
      email: traderEmail
    };
    
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams , PUBLIC_KEY)
      .then((result: any) => {
          console.log("Success!", result.text);
          return true
      }, (error: any) => {
          console.log(error.text);
          return false
      });
    }
}

export default new SendingEmail()