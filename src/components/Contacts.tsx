import { Box } from '@mui/material'

const Contacts = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" textAlign="center">
      <div>
        <h2>Welcome to our Contacts Page</h2>
        <p>PROSTOR вулиця Київський шлях, 75, Бориспіль, Київська область, Украина, 08300</p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d535.2046486595065!2d30.954127550160546!3d50.35020499663314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4e8b02089ff71%3A0xdf509e6d1f8c00dd!2sPROSTOR!5e0!3m2!1sru!2sde!4v1712848541755!5m2!1sru!2sde"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </div>
    </Box>
  )
}

export default Contacts
