const cds = require('@sap/cds')

const { GET, POST, expect, defaults } = cds.test (__dirname+'/..')
defaults.auth = { username: 'alice', password: '' }

describe('CatalogService OData APIs', () => {

  it('serves CatalogService.Books', async () => {
    const { data } = await GET `/odata/v4/catalog/Books ${{ params: { $select: 'ID,title' } }}`
    expect(data.value).to.containSubset([
      { ID: 1, title: 'Wuthering Heights' },
        { ID: 2, title: 'Jane Eyre' },
        { ID: 3, title: 'The Raven' },
        { ID: 4, title: 'Eleonora' },
        { ID: 5, title: 'Catweazle' },
    ])
  })

})
