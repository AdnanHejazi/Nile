import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Mohammad Adnan',
        email: 'adnan@nile.com',
        password: bcrypt.hashSync('adnan32', 10),
        isAdmin: true
    },
    {
        name: 'Omar Shaikh',
        email: 'omar@mjc.com',
        password: bcrypt.hashSync('omar31', 10)
    },
    {
        name: 'Zeeshan Moizuddin',
        email: 'zeeshan@mjc.com',
        password: bcrypt.hashSync('zeeshan24', 10)
    },

]

export default users
