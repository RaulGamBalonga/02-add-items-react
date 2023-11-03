import './App.css'

function App() {

  return (
    <main>
      <aside>
        <h1> Prueba Técnica de React</h1>
        <h2>Añadir y eliminar elementos de una lista</h2>
        <form>
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
          <li>Videojuegos🎮</li>
          <li>Libros📚</li>
          <li>Series📺</li>
          <li>Películas🎥</li>
        </ul>
      </section>
    </main>
  )
}

export default App
