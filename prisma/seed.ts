import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data: {
            email: "akashKadari@gmail.com",
            name: "Akash Kadari",
            username: "kadariakash",
            image: "noimage",
        }
    })
    await prisma.note.create({
        data: {
            userId: 1,
            content : "My first note",
            tag: "STARTED"
        }
    })
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })