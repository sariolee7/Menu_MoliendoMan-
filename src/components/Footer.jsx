function Footer({ instagram = '', phone = '', address = '', whatsapp = '' }) {
  const phoneDigits = phone ? phone.replace(/\s|-/g, '') : ''

  return (
    <footer className="footer">
      <div className="footer__links">
        {instagram && (
          <a
            className="footer-link"
            href={`https://instagram.com/${instagram.replace('@', '')}`}
            target="_blank"
            rel="noreferrer"
          >
            📷 {instagram}
          </a>
        )}

        {phone && (
          <a className="footer-link" href={`tel:${phoneDigits}`}>
            📞 {phone}
          </a>
        )}

        {address && (
          <a
            className="footer-link"
            href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
            target="_blank"
            rel="noreferrer"
          >
            📍 {address}
          </a>
        )}

        {whatsapp && (
          <a
            className="footer-link footer-link--whatsapp"
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            💬 WhatsApp
          </a>
        )}
      </div>

      <p className="footer__copy">Moliendo Maní — Sabor tradicional caucano</p>
    </footer>
  )
}

export default Footer