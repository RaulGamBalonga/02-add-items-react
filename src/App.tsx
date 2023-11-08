import { useState } from 'react'
import './App.css'

type ItemId = `${string}-${string}-${string}-${string}-${string}`

interface Item {
  id:ItemId
  timestamp: number
  text: string
}


// const INITIAL_ITEMS: Item[] = [
//   {
//     id:crypto.randomUUID(),
//     timestamp: Date.now(),
//     text: 'Videojuegos 🎮'
//   },
//   {
//     id:crypto.randomUUID(),
//     timestamp: Date.now(),
//     text: 'Libros 📚'
//   }
// ]

function App() {

 const [items, setItems] = useState<Item[]>([])

 const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  const { elements} = event.currentTarget

  // estrategia 1 , Trampa de TypeScript
  // no lo recomiendo
  //const input = elements.namedItem('item') as HTMLInputElement

  // estrategia 2, es asegurarse que realmente es lo que es
  const input = elements.namedItem('item');
  const isInput = input instanceof HTMLInputElement
  if(!isInput || input == null) return

  const newItem: Item = {
    id:crypto.randomUUID(),
    text: input.value,
    timestamp: Date.now()
  }

  setItems((prevItems) => {
    return[...prevItems, newItem]
  })

  input.value = ''

 }

 const createHandleRemoveItem = (id: ItemId) => () => {
  setItems(prevItems => {
    return prevItems.filter(currentItem => currentItem.id !== id)
  })

 }

  return (
    <main>
      <aside>
        <h1> Prueba Técnica de React</h1>
        <h2>Añadir y eliminar elementos de una lista</h2>
        <form onSubmit={handleSubmit} aria-label='Añadir elementops a la lista' >
          <label>
            Elemento a introducir:
            <input
            name='item'
            required
            placeholder='Videojuegos:🎮'
            type='text'
            />
          </label>
          <button> Añadir Elemento a la lista</button>
        </form>
      </aside>
      <section>
        <ul>
          <h2> Lista de elemtos:</h2>
         {
          items.length === 0 ? (
          <p>
            <strong> No hay elementos en la lista</strong>
          </p>
          ) : (
          items.map(item => {
            return (
              <li key={item.id}> {/* no utilizar el indice como key! */}
                {item.text}
                <button onClick={createHandleRemoveItem(item.id)}>
               
                  Eliminar elemento
                </button>
              </li>
            )
          })
          )
         }
        </ul>
      </section>
    </main>
  )
}

export default App
