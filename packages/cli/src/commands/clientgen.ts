import { GeneratorMode } from '@graphql-clientgen/generator'
import { Result } from 'meow'
import { getConfig } from '../config'
import { getSchemaDoc } from '../get-schema'
import { writeFlatDir } from '../read-write'

export const clientgenCmd = async (cli: Result) => {
  if (!cli.flags.schema || !cli.flags.output) {
    console.warn('Invalid: missing --schema or --output flag!')
    cli.showHelp()
  }

  const config = await getConfig(cli.flags.config)
  const doc = await getSchemaDoc(cli.flags.schema)

  console.log('Generating client...')

  const { clientgen } = await import('@graphql-clientgen/generator')

  const { result, props } = await clientgen(doc, config)(GeneratorMode.CLIENT)

  const write = await writeFlatDir(cli.flags.output, {
    'index.ts': result.index,
    [props.paths.clients + '.ts']: result.clients,
    [props.paths.responses + '.ts']: result.responses,
    [props.paths.typedefs + '.ts']: result.typedefs,
    [props.paths.types + '.ts']: result.types,
  })

  if (write.status === 'err') {
    console.error('Something were wrong: ', write.message)
  } else {
    console.log(`Client generated to: ${write.dir}`)
  }
}
