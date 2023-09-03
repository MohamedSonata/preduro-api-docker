// src/extensions/users-permissions/content-types/user/lifecycles.js
module.exports = {
    async beforeCreate(event) {

        const { result, params } = event.params;


        const recenltyViewedObj = {
            data: {}
        }
        const cartDataObj = {
            data: {}
        }
        const favoriteDataObj = {
            data: {}
        }
        const inboxDataObj = {
            data: {}
        }

        // Recently Viewed create event
        const recently = await strapi.entityService.create('api::recently-viewed.recently-viewed', recenltyViewedObj
        );

        // Cart Create event
        const cartData = await strapi.entityService.create('api::cart.cart', cartDataObj
        );

        // Favorites Create event
        const favoriteData = await strapi.entityService.create('api::favorite.favorite', favoriteDataObj
        );

        // Indoxes Create event
        const inboxData = await strapi.entityService.create('api::inbox.inbox', inboxDataObj
        );


        const recentlyViewedId = recently.id;

        const cartId = cartData.id;

        const favoriteId = favoriteData.id;

        const inboxId = inboxData.id;

        event.params.data.recently_viewed = recentlyViewedId;
        event.params.data.recentlyViewedIdString = recentlyViewedId.toString();
        event.params.data.cart = cartId;
        event.params.data.cartIdString = cartId.toString();
        event.params.data.favorite = favoriteId;
        event.params.data.favIdString = favoriteId.toString();
        event.params.data.inbox = inboxId;
        event.params.data.inboxIdString = inboxId.toString();

        console.log(event.result);
    },


    afterUpdate(event) {
        console.log('afterUpdate');
    }
}


// Create a function to generate numeric IDs

