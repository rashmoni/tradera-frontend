import React from 'react'

class DateServices {
  
    formatDate(date: Date) {
        return (
          [
            date.getFullYear(),
            this.padTo2Digits(date.getMonth() + 1),
            this.padTo2Digits(date.getDate()),
          ].join('-') 
        );
      }
      
    padTo2Digits(num: number) {
        return num.toString().padStart(2, '0');
      }

}

export default new DateServices()