import changeCase from 'change-case'
import { GeneratorConfig } from './config'

/**
 * chnage case have like 20 deps so  maybe cut it later
 */
export const pascalCase = (...inputs: string[]) =>
  changeCase.pascalCase(inputs.join(' '))

export const constantCase = (...inputs: string[]) =>
  changeCase.constantCase(inputs.join(''))

export type Naming = ReturnType<typeof getNaming>

export const getNaming = (config: GeneratorConfig) => {
  const getClientName = (typename: string) => typename + 'Promise'
  const getRootClientName = () => 'Client'

  const getFragmentName = (typename: string, fragmentType: FragmentType) =>
    pascalCase(typename, fragmentType)
  const getFragmentConstantName = (fragmentname: string) =>
    constantCase(fragmentname)

  // interface prefix and stuff, for now uniform
  const getTypescriptName = (typename: string) => typename

  return {
    getClientName,
    getRootClientName,
    getFragmentName,
    getFragmentConstantName,
    getTypescriptName
  }
}