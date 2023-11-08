   import { describe, test,expect } from 'vitest'
   import userEvent from '@testing-library/user-event'
   import { render, screen } from '@testing-library/react'
   import App from '../App'


    describe('<pp />', () => { 
        // test('should worrk', () => { 
        //     render(<App/>)
        //     screen.debug()

        //     expect(
        //         screen.getByText('Prueba Técnica de React')
        //     ).toBeDefined()
            
        //  })
        test('should add a new item and remove item', async () => { 
            const user = userEvent.setup()

            render(<App/>)

            //buscar el input 
            const input = screen.getByRole('textbox')
            expect(input).toBeDefined()

            // Buscar el form
            const form = screen.getByRole('form')
            expect(form).toBeDefined()

            const button = form.querySelector('button')
            expect(button).toBeDefined()

            const randomText = crypto.randomUUID()
            await user.type(input,randomText)
            await user.click(button!)

            //asegurar que el elemento se ha agregado
            const list = screen.getByRole('list')
            expect(list).toBeDefined()

            screen.debug()
            expect(list.childNodes.length).toBe(2)

            //asegurarnos que el lo podemos borrar
            const item = screen.getByText(randomText)
            const removeButton = item.querySelector('button')
            expect(removeButton).toBeDefined()

            await user.click(removeButton!)

            const noResults = screen.getByText('No hay elementos en la lista')
            expect(noResults).toBeDefined()
         })

     })