const cds = require('@sap/cds')

module.exports = class CatalogService extends cds.ApplicationService { init() {

  const { Books } = cds.entities('CatalogService')

  this.before (['CREATE', 'UPDATE'], Books, async (req) => {
    console.log('Before CREATE/UPDATE Books', req.data)
  })
  this.after ('READ', Books, async (books, req) => {
    console.log('After READ Books', books)
  })

  this.on ('getCats', async (req) => {
    console.log('On getCats', req.data)
  })

  this.on('getCats', async (req) => {
      const { Cat } = this.entities;
      const cats = this.catsList();
      return cats;
  });

  return super.init()
}
}
