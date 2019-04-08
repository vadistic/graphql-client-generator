import { getDocDefinition, Kind } from '@graphql-clientgen/core'
import { DocumentNode } from 'graphql'
import gql from 'graphql-tag'
import { codegenEnum } from '../../codegen-typescript'
import { getGeneratorProps } from '../../generator'

const docToEnumTypings = (doc: DocumentNode, useMaps?: boolean) =>
  codegenEnum(getGeneratorProps(doc, { useMapsForEnums: !!useMaps }))(
    getDocDefinition(doc, Kind.ENUM_TYPE_DEFINITION)!,
  )

describe('codegen typescript > enums', () => {
  it('codegens enum', () => {
    const fixture = gql`
      enum MyEnum {
        ABC
        Value
        ANOTHER
      }
    `

    const res = docToEnumTypings(fixture)

    expect(res).toMatchInlineSnapshot(`
                        "export enum MyEnum {
                          ABC = 'ABC',
                          Value = 'Value',
                          ANOTHER = 'ANOTHER',
                        }"
                `)
  })

  it('codegens enum as map', () => {
    const fixture = gql`
      enum MyEnum {
        ABC
        Value
        ANOTHER
      }
    `

    const res = docToEnumTypings(fixture, true)

    expect(res).toMatchInlineSnapshot(`
      "export interface IMyEnum {
        ABC: 'ABC'
        Value: 'Value'
        ANOTHER: 'ANOTHER'
      }
      
      export const MyEnum: IMyEnum = {
        ABC: 'ABC',
        Value: 'Value',
        ANOTHER: 'ANOTHER',
      }"
    `)
  })
})
