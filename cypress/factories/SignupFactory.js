var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '11999999999',
            address: {
                postalcode: '87506475',
                street: 'Rua Domingos Cano Lopes',
                number: '2165',
                details: 'casa',
                district: 'Jardim Veneza II',
                city_state: 'Umuarama/PR'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}