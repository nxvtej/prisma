import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
// const user = await prisma.user.create({data: {
//     name: "navdeep"
// }})

// const alluswer = await prisma.user.findMany()

// console.log(user);
// console.log(alluswer);


await prisma.user.deleteMany();
}

main()
    .catch(e => {
        console.error(e.message);
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
