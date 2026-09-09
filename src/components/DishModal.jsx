function AdditionalOptions({ options }) {
  return (
    <div className="additional-options">
      <span className="additional-options__label">Adicionales:</span>
      {options.map((opt) => (
        <span key={opt.name} className="additional-options__item">
          {opt.name}: {opt.price}
        </span>
      ))}
    </div>
  )
}

function DishModal({ item, additionalOptions, whatsappPhone, onClose }) {
  if (!item) return null

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(`Hola, quiero pedir: ${item.title} - ${item.price}`)
    window.open(`https://wa.me/${whatsappPhone}?text=${message}`, '_blank')
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__image-wrap">
          {item.image && <img className="modal__image" src={item.image} alt={item.title} />}
          <button type="button" className="modal__close" onClick={onClose} aria-label="Cerrar">
            ×
          </button>
        </div>

        <div className="modal__body">
          <div className="modal__header">
            <h2 className="modal__title">{item.title}</h2>
            {item.price && <span className="modal__price">{item.price}</span>}
          </div>

          <p className="modal__description">{item.longDescription || item.description}</p>

          {additionalOptions && <AdditionalOptions options={additionalOptions} />}

          <button type="button" className="modal__whatsapp-btn" onClick={handleWhatsAppOrder}>
            Pedir por WhatsApp
          </button>
        </div>
      </div>
    </div>
  )
}

export default DishModal