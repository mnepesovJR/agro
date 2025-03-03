import { SendMailOptions, createTransport } from 'nodemailer';

async function send() {
  const mail = 'sen@gmail.com';
  const transport = createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: mail,
      pass: 'asdfqwer',
    },
  });
  const mailOptions: SendMailOptions = {
    from: mail,
    to: 'sana@gmail.com',
    subject: `hello`,
    html: `hello world`,
  };

  const sent = await transport.sendMail(mailOptions);
}
