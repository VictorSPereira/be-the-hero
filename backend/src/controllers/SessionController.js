const connection = require("../database/connection");
const { create } = require("./OngsControllers");

module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first();

        if(!ong) {
            return reponse.status(400).json({ error: 'No ONG found with this ID'});
            }
        return response.json(ong);
    }
}