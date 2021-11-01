const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
    list: async (request, response) => {
        const allJobs = await prisma.job.findMany();
        console.log(allJobs);
        response.send(allJobs);
    }
}