import {NextResponse} from 'next/server'
import {SSMClient, GetParameterCommand} from '@aws-sdk/client-ssm'

export async function middleware() {
  const ssm = new SSMClient({region: 'us-east-1'})
  const command = new GetParameterCommand({Name: 'put-some-variable-here'})
  const response = await ssm.send(command)
  console.log(response)

  return NextResponse.next()
}

export const config = {
  matcher: ['/:path*']
}