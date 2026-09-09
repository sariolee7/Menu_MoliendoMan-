import aborrajado from '../assets/aborrajado.jpg';
import carantanta from '../assets/carantanta.jpg';
import champus from '../assets/champus.jpg';
import empanadas from '../assets/empanadas.jpg';
import huevitosE from '../assets/huevitosE.jpg';
import huevos from '../assets/huevos.webp';
import huevosB from '../assets/huevosB.jpg';
import lulada from '../assets/lulada.jpg';
import rellena from '../assets/rellena.gif';
import salpicon from '../assets/salpicon.jpg';
import tamal from '../assets/tamal.png';
import tamalPipian from '../assets/tamalPipian.jpg';

import '../styles/menu.css'


export const images = {
  aborrajado,
  carantanta,
  champus,
  empanadas,
  huevitosE,
  huevos,
  huevosB,
  lulada,
  rellena,
  salpicon,
  tamal,
  tamalPipian,
};

function PriceVariants({ variants }) {
  return (
    <div className="price-variants">
      {variants.map((variant, i) => (
        <div className="price-variant" key={`${variant.label}-${i}`}>
          {variant.label && <span className="price-variant__label">{variant.label}: </span>}
          <span className="price-variant__price">{variant.price}</span>
        </div>
      ))}
    </div>
  )
}

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

function MenuSection({ title, badge, items, additionalOptions, variant, onSelectItem }) {
  return (
    <section className="menu-category">
      <div className="menu-category__header">
        <h2 className="menu-category__title">{title}</h2>
        {badge && <span className="badge">{badge}</span>}
      </div>

      <div className={`menu-category__grid ${variant === 'quick' ? 'menu-category__grid--quick' : ''}`}>
        {items.map((item) => (
          <div className="menu-item" key={item.id}>
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="menu-item__image"
              />
            )}

            <div className="menu-item__header">
              <h3 className="dish-title">{item.title}</h3>
              {item.price && <span className="price-label">{item.price}</span>}
            </div>

            {item.priceVariants && <PriceVariants variants={item.priceVariants} />}

            <button
              type="button"
              className="menu-item__detail-link"
              onClick={() => onSelectItem(item, additionalOptions)}
            >
              Ver detalle e ingredientes ›
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
export default MenuSection