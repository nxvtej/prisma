import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["query"]}); 
// log all the query 
async function main() {
// const user = await prisma.user.create({data: {
//     name: "navdeep"
// }})

// const alluswer = await prisma.user.findMany()

// console.log(user);
// console.log(alluswer);
// 
// await prisma.user.deleteMany();  //just to prevent runnign into email unique probel
// now if you try to delete user after adding user prefernecews
// then we will get error as userperferences related to user


const user = await prisma.user.createMany({
    data: [{
        name: "navdeep",
        email: "navdeep@gmail.com",
        age: 27,
        role: "BASIC",
        largeNumber: 18634532,

       

    },
{
    name: "sachin",
    email: "sachin@gmail.com",
    age: 27,
    role: "BASIC",
    largeNumber: 18634532,
}]

    
});

console.log(user);
}

main()
    .catch(e => {
        console.error(e.message);
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
