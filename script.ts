import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// log all the query { log: ["query"]}
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

    const newUser = await prisma.user.createMany({
        data: [
            {
                name: "na",
                email: "nv@gmil.com",
                age: 80,
                role: "BASIC",
                largeNumber: 18634532,
            },
            {
                name: "neep",
                email: "niv@gail.com",
                age: 5,
                role: "BASIC",
                largeNumber: 18634532,
            },
        ],
    });

    const user = await prisma.user.findUnique({
        where: {
            email: "navdeep@gmail.com",
        },
    });

    console.log(user);
    console.log(newUser);

    const many = await prisma.user.findMany({
        where: {
            name: { equals: "navdeep" },
        },
    });

    const conatinsPart = await prisma.user.findMany({
        where: {
            email: { endsWith: "@gmail.com" },
        },
    });

    let manyNot = await prisma.user.update({
        where: {
            email: "navdeep@gmail",
        },

        data: {
            age: {
                decrement: 1, //muktipley, etc , etc
            }
        }

    });

    let manyOr = await prisma.user.findMany({
        where: {
            name: { in: ["navdeep", "nvi"] },
        },
    });

    let manynotIn = await prisma.user.findMany({
        where: {
            name: { notIn: ["navdeep", "nvi"] },
        },
    });

    const userAnd = await prisma.user.findMany({
        where: {
            AND: [
                { email: { startsWith: "Sally" } },
                { email: { endsWith: "@gmail.com" } },
            ],
        },
    });

    console.log(many);



    // other queries on relation tables 
    const author = await prisma.post.findMany({
        where: {
            author: {
                is: {
                    age: 28,
                }
            }
        }
    })


    // query to update data
    const updateuser = await prisma.user.update({

        where: {
            email: "navdeep@gamil.com",
        },

        data: {
            email: "n@gmail.com"
        }
    })

    console.log(updateuser);

}

main()
    .catch((e) => {
        console.error(e.message);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
