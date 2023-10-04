import { test, expect, vi } from 'vitest'
import request from 'supertest'

import server from './server.js'
import { render } from '../test-utils.js'
import { readText } from './utils/fsUtils.js'

vi.mock('./utils/fsUtils.js')

test('GET / shows a list of puppies', async () => {
    vi.mocked(readText).mockResolvedValue(
        {
          puppies: [
            {
              id: 15,
              name: 'Rex',
              owner: 'Nathalia',
              image: '/images/puppy5.jpg',
              breed: 'Stray',
            },
          ],
        }
      )

    const res = await request(server).get('/')
    const screen = render(res)
  
    const murphyImage = screen.getByAltText('Rex')
    expect(murphyImage.src).toBe('/images/puppy5.jpg')
})