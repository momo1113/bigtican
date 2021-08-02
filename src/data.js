import faker from 'faker';
let data = [];
for(var i=0; i<30; i++){

    let obj = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        address:faker.address.streetAddress() + ", " + faker.address.city() + ", "+faker.address.zipCode(),
        phone:faker.phone.phoneNumber(),
        url:faker.internet.url(),
        company:faker.company.companyName(),
        avatar:faker.image.avatar()
    }

    data.push(obj);
}

export default data;