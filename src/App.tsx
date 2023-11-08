
import './App.css'
import { Item } from './components/Item'
import { useItems } from './hooks/useItems'
import { useSeo } from './hooks/useSeo'

export type ItemId = `${string}-${string}-${string}-${string}-${string}`

export interface Item {
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

  const {items,addItem, removeItem} = useItems()
  useSeo({
    title:`[${items.length}] Prueba Técnica de React`,
    description: 'Añadir y eliminar elementos de una lista'
  })

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

  addItem(input.value)

  input.value = ''

 }

 const createHandleRemoveItem = (id: ItemId) => () => {
  removeItem(id)
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
            return <Item  
            handleClick = {createHandleRemoveItem(item.id)}
            {...item} 
            key={item.id} 
            />
          })
          )
         }
        </ul>
      </section>
    </main>
  )
}

export default App


