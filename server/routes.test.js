import * as fs from 'node:fs/promises'
import { test, expect, vi } from 'vitest'
import request from 'supertest'

import server from './server.js'
import { render } from '../test-utils.js'

vi.mock('node:fs/promises')

test('GET / shows a list of puppies', async () => {
    vi.mocked(fs.readFile).mockResolvedValue(
        JSON.stringify({
          puppies: [
            {
              id: 3,
              name: 'Magnum',
              owner: 'Michael',
              image: '/images/puppy3.jpg',
              breed: 'Rottweiler',
            },
          ],
        })
      )

    const res = await request(server).get('/')
    const screen = render(res)
  
    const murphyImage = screen.getByAltText('Magnum')
    expect(murphyImage.src).toBe('/images/puppy3.jpg')
})