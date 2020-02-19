const ShoppingListService = {
    getAllShoppingLists(knex) {
        return knex.select('*').from('shopping_list')
    },
    getById(knex, id) {
        return knex.from('shopping_list').select('*').where('id', id).first()
    },
    insertShoppingList(knex, newItem) {
        return knex
            .insert(newItem)
            .into('shopping_list')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    },
    updateShoppingList(knex, id, newItem) {
        return knex('shopping_list')
            .where({ id })
            .update(newItem)
    },
    deleteShoppingList(knex, id) {
        return knex('shopping_list')
            .where({ id })
            .delete()
    },
}

module.exports = ShoppingListService