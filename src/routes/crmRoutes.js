import { addNewContact, getContacts, getContactWithID, updateContact, deleteContact } from '../controllers/crmControllers'

const route = app => {
    app.route('/contact')
        .get(getContacts)
        .post(addNewContact);

    app.route('/contact/:contactID')
        .get(getContactWithID)
        .put(updateContact)
        .delete(deleteContact);
}

export default route;