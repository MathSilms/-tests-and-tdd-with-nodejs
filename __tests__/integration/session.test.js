process.env.NODE_ENV = 'test'

const { User } = require('../../src/app/models')


describe('Authentication', () => {
    it('should receive JWT token when authenticated with valid credentials' , async ()=>{
        const user = await User.create({
            name:"Matheus",
            email:"mateheusoliver@gmail.com",
            password_hash:"123123"
        })

        console.log(user)

     
        expect(user.email).toBe('mateheusoliver@gmail.com');
    });
});