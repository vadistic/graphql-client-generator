import {
  COMPLEX_TYPEDEFS,
  PRISMA_TYPEDEFS,
  VATS_TYPEDEFS,
} from '@graphql-clientgen/testing'
import { getGeneratorProps } from '../generator'

export const prismaProps = getGeneratorProps(PRISMA_TYPEDEFS)

export const complexProps = getGeneratorProps(COMPLEX_TYPEDEFS)

export const vatsProps = getGeneratorProps(VATS_TYPEDEFS)
