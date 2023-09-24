import React, { useState } from 'react';
import { FormControl, FormLabel, Box, Button } from '@chakra-ui/react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailData = {
      to: 'efambajr.henry@gmail.com',
      subject: 'Contact Form Submission',
      body: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
    };

    // Send email using SMTP.js
    Email.send({
      //   SecureToken: 'your-smtpjs-secure-token',
      To: emailData.to,
      From: 'your-email@example.com',
      Subject: emailData.subject,
      Body: emailData.body,
    }).then(
      () => {
        console.log('Email sent successfully.');
      },
      (error) => {
        console.error('Error sending email:', error);
      }
    );
  };

  return (
    <FormControl onSubmit={handleSubmit} style={{ width: '50vw' }}>
      <Box>
        <FormLabel htmlFor="name" position={'relative'} right={-45}>
          Name:
        </FormLabel>
        <input
          style={{ width: '80%', padding: '10px' }}
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormLabel htmlFor="email" position={'relative'} right={-45} pt={10}>
          Email:
        </FormLabel>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={{ width: '80%', padding: '10px' }}
        />
      </Box>
      <Box>
        <FormLabel htmlFor="message" position={'relative'} right={-45} pt={10}>
          Message:
        </FormLabel>
        <textarea
          style={{ width: '80%', padding: '10px', height: '10rem' }}
          id="message"
          name="message"
          placeholder="Leave a message"
          value={formData.message}
          onChange={handleChange}></textarea>
      </Box>
      <Button
        type="submit"
        style={{ backgroundColor: 'rgb(36, 126, 72)' }}
        width={'50%'}
        onClick={handleSubmit}>
        Submit
      </Button>
    </FormControl>
  );
}
