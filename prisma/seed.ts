import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data: {
            email: 'vishwanthbarma@gmail.com',
            name: 'BarmaVishwanth',
            username: 'barmavishwanth',
            image: 'https://avatars.githubusercontent.com/u/72876374?v=4'
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