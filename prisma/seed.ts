import { PrismaClient } from '@prisma/client'

import { stockWorkouts } from 'data/stockworkouts'

const prisma = new PrismaClient()

async function main() {
    await prisma.workout.create({
      data: {
        id: "999",
        name: "test1",
        overview: "test2",
        objective: "test3",
        training_phase: "test4"
    },
    })
  
    await prisma.workout.createMany({
      data: stockWorkouts,
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