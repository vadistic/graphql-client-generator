import { DocumentNode } from 'graphql'

/**
 * Build fragment for typename
 * TODO: Later
 */

export enum FragmentType {
  DEFAULT = '',
  FLAT = 'Flat',
  DEEP = 'Deep',
  NONE = 'None',
}

/**
 * Config for runtime client
 */

export interface CoreConfig {
  /**
   * whether to use fragments and on what depth
   * @default: 'NONE'
   */
  fragmentType: FragmentType
  /**
   * deparametrize single client operation argument
   * @example: createPost:(args: {data: PostData}) => createPost:(data: PostData)
   * @default: true
   */
  deparametrizeSingleArgument: boolean
}

export const defaultCoreConfig: CoreConfig = {
  fragmentType: FragmentType.NONE,
  deparametrizeSingleArgument: true,
}

/**
 * Uniform props for utils options
 */
export interface CoreProps {
  config: CoreConfig
}

export const getCoreProps = (
  doc: DocumentNode,
  config?: Partial<CoreConfig>,
): CoreProps => ({
  config: {
    ...defaultCoreConfig,
    ...config,
  },
})