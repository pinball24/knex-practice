const ShoppingListService = require('../src/shopping-list-service')
const knex = require('knex')

describe(`shopping list service object`, function() {
    let db
    let testList = [
        {
            id: 1,
            name: 'First test post!',
            price: '2.00',
            date_added: new Date('1919-12-22T16:28:32.615Z'),
            checked: true,
            category: 'Main',
        },
        {
            id: 2,
            name: 'Second test post!',
            price: '2.00',
            date_added: new Date('2100-05-22T16:28:32.615Z'),
            checked: true,
            category: 'Main',
        },
        {
            id: 3,
            name: 'Third test post!',
            price: '3.00',
            date_added: new Date('2029-01-22T16:28:32.615Z'),
            checked: false,
            category: 'Main',
        }
    ]

    before(() => {
        db = knex({
            client: 'pg',
            connection: process.env.DB_URL,
        })
    })

    after(() => db.destroy())

    before(() => db('shopping_list').truncate())

    afterEach(() => db('shopping_list').truncate())
    
    context(`Given 'shopping_list' has data`, () => {
        beforeEach(() => {
            return db 
                .into('shopping_list')
                .insert(testList)
        })
        it(`getAllShoppingLists() resolves all items from 'shopping_list' table`, () => {
            //tests that ShoppingListService.getAllShoppingLists gets data
            return ShoppingListService.getAllShoppingLists(db)
                .then(actual => {
                    expect(actual).to.eql(testList)
                })
        })
        it(`getById() resolves a item by id from 'shopping_list' table`, () => {
            const thirdId = 3
            const thirdTestItem = testList[thirdId - 1]
            return ShoppingListService.getById(db, thirdId)
                .then(actual => {
                    expect(actual).to.eql({
                        id: thirdId,
                        name: thirdTestItem.name,
                        price: thirdTestItem.price,
                        date_added: thirdTestItem.date_added,
                        checked: thirdTestItem.checked,
                        category: thirdTestItem.category,
                    })
                })
        })
        it(`deleteItem() removes the item by id from 'shopping_list' table`, () => {
            const itemId = 3
            return ShoppingListService.deleteShoppingList(db, itemId)
                .then(() => ShoppingListService.getAllShoppingLists(db))
                .then(allItems => {
                    const expected = testList.filter(item => item.id !== itemId)
                    expect(allItems).to.eql(expected)
                })
        })
        it(`updateShoppingList() updates the items from the 'shopping_list' table`, () => {
            const idOfItemToUpdate = 3
            const newItemData = {
                name: 'updated title',
                price: '2.00',
                date_added: new Date(),
                checked: true,
                category: 'Main',
            }
            return ShoppingListService.updateShoppingList(db, idOfItemToUpdate, newItemData)
                .then(() => ShoppingListService.getById(db, idOfItemToUpdate))
                .then(item => {
                    expect(item).to.eql({
                        id: idOfItemToUpdate,
                        ...newItemData
                    })
                })
        })
    })

    context(`Given 'shopping_list' has no data`, () => {
        it(`getAllShoppingLists() resolves an empty array`, () => {
            return ShoppingListService.getAllShoppingLists(db)
                .then(actual => {
                    expect(actual).to.eql([])
                })
        })
        it(`insertShoppingList() inserts a new item and resolves the new item with an 'id'`, () => {
            const newItem = {
                name: 'Test new name',
                price: '4.00',
                date_added: new Date('2020-01-01T00:00:00.000Z'),
                checked: false,
                category: 'Main'
            }
            return ShoppingListService.insertShoppingList(db, newItem)
                .then(actual => {
                    expect(actual).to.eql({
                        id: 1,
                        name: newItem.name,
                        price: newItem.price,
                        date_added: newItem.date_added,
                        checked: newItem.checked,
                        category: newItem.category
                    })
                })
        })
    })
})