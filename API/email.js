const axios = require('axios');

async function sendEmail(name, email, message) {
    try {
          const options = {
            method: 'POST',
            url: 'https://rapidmail.p.rapidapi.com/',
            headers: {
              'content-type': 'application/json',
              'X-RapidAPI-Key': '64599ae043msh398fc63066501c2p1023dajsn39d2f81f685a',
              'X-RapidAPI-Host': 'rapidmail.p.rapidapi.com'
            },
            data: {
              ishtml: 'false',
              sendto: 'mengjuchiu6@gmail.com',
              name: 'Trinity Chiu',
              replyTo: email,
              title: 'Portfolio 來信',
              body: ` 使用者來信內容：

              Name: ${name}
              Email: ${email}
              Message: ${message}`
            }
          };
          const response = await axios.request(options);
          console.log(response.data.message);
    }
    catch(err) {
        console.log("Send Email Error: ", err);
    }
}


exports.sendEmail = sendEmail;