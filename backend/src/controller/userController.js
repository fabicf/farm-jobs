const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
    list: async (request, response) => {
        const allUsers = await prisma.user.findMany();
        console.log(allUsers);
        response.send(allUsers);
    },
    create: async (request, response) => {
        const allUsers = await prisma.user.findMany();
        console.log(allUsers);
        response.send(allUsers);
    },
}