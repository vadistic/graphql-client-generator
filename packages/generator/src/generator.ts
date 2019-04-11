import {
  createGraphQLGraph,
  GraphQLGraph,
  mergeExtensions,
} from '@graphql-clientgen/core'

import { buildASTSchema, DocumentNode, GraphQLSchema } from 'graphql'
import {
  defaultGeneratorConfig,
  defaultGeneratorOptions,
  defaultGeneratorPaths,
  GeneratorConfig,
  GeneratorOptions,
  GeneratorPaths,
} from './config'

export interface GeneratorProps {
  doc: DocumentNode
  graph: GraphQLGraph
  schema: GraphQLSchema
  options: GeneratorOptions
  config: GeneratorConfig
  paths: GeneratorPaths
}

export type GeneratorResult = {
  [Group in keyof GeneratorOptions]: {
    [Result in keyof GeneratorOptions[Group]]?: string
  }
}

/**
 * refactored to reuse in tests
 */
export const getGeneratorProps = (
  doc: DocumentNode,
  config?: Partial<GeneratorConfig>,
  options?: Partial<GeneratorOptions>,
  paths?: Partial<GeneratorPaths>,
) => {
  const mergedConfig: GeneratorConfig = {
    ...defaultGeneratorConfig,
    ...config,
  }

  const mergedOptions: GeneratorOptions = options
    ? {
        client: {
          ...defaultGeneratorOptions.client,
          ...options.client,
        },
        graphql: {
          ...defaultGeneratorOptions.graphql,
          ...options.graphql,
        },
        typings: {
          ...defaultGeneratorOptions.typings,
          ...options.typings,
        },
      }
    : defaultGeneratorOptions

  const mergedPaths: GeneratorPaths = {
    ...defaultGeneratorPaths,
    ...paths,
  }

  const mergedDoc = mergeExtensions(doc)

  const schema = buildASTSchema(mergedDoc, {
    assumeValid: true,
    assumeValidSDL: true,
  })

  const graph = createGraphQLGraph(mergedDoc)

  const props: GeneratorProps = {
    doc,
    graph,
    schema,
    config: mergedConfig,
    options: mergedOptions,
    paths: mergedPaths,
  }

  return props
}

export const graphqlClientGenerator = async (
  doc: DocumentNode,
  config: Partial<GeneratorConfig>,
  options: Partial<GeneratorOptions>,
  paths: Partial<GeneratorPaths>,
) => {
  const props = getGeneratorProps(doc, config, options, paths)

  const result: GeneratorResult = {
    client: {},
    graphql: {},
    typings: {},
  }

  /**
   * maybe pararelize it
   */

  if (props.options.typings.definitions) {
    const {
      generateTypingsDefinitions,
    } = await import('./generate/typings-definitions')

    result.typings.definitions = await generateTypingsDefinitions(props)
  }
}
