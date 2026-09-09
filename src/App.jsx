import { useState } from 'react'
import Header from './components/Header'
import MenuSection from './components/MenuSection'
import Footer from './components/Footer'
import DishModal from './components/DishModal'
import { categories, footerData } from './data/menuData'


import './styles/base.css'
import './styles/menu.css'
import './styles/modal.css'
import './styles/footer.css'

const navLinks = ['Nuestro Menú', 'Nuestra Historia', 'Pedidos Online', 'Contacto']

function App() {
  const [selectedDish, setSelectedDish] = useState(null)
  const [selectedAdditionalOptions, setSelectedAdditionalOptions] = useState(null)

  const handleSelectItem = (item, additionalOptions) => {
    setSelectedDish(item)
    setSelectedAdditionalOptions(additionalOptions || null)
  }

  const handleCloseModal = () => {
    setSelectedDish(null)
    setSelectedAdditionalOptions(null)
  }

  return (
    <div id="center">
      <Header title="Moliendo Maní" subtitle="MOLIENDO SABOR, SIRVIENDO TRADICIÓN" navLinks={navLinks} />

      <main className="main-content">
        {categories.map((category) => (
          <MenuSection key={category.id} {...category} onSelectItem={handleSelectItem} />
        ))}
      </main>

      <Footer {...footerData} />

      <DishModal
        item={selectedDish}
        additionalOptions={selectedAdditionalOptions}
        whatsappPhone={footerData.phone}
        onClose={handleCloseModal}
      />
    </div>
  )
}

export default App
