/**
 * © 2024 Hardcore Engineering, Inc. All Rights Reserved.
 * Licensed under the Eclipse Public License v2.0 (SPDX: EPL-2.0).
 *
 * Huly Platform Effects & Resources
 */

import { createIO, type IOConfiguration } from './modules/io'
import { createResource, type AnyResourceProvider } from './modules/resource'
import { type Status } from './resources/status'

// // import { i18nProvider } from './resources/i18n'
// import { Result, statusProvider, type Status, type StatusId } from './resources/status'

export class PlatformError extends Error {
  readonly status: Status<any>

  constructor(status: Status<any>) {
    super()
    this.status = status
  }
}

export interface PlatformConfiguration extends IOConfiguration {}

export function createPlatform(configuration: PlatformConfiguration, providers: AnyResourceProvider[]) {
  return {
    IO: createIO(configuration),
    plugin: createResource(providers),
  }
}

// const configuration: PlatformConfiguration = {
//   errorToStatus: (error: unknown): Status<any> => {
//     if (error instanceof PlatformError) return error.status
//     if (error instanceof Error)
//       return {
//         id: 'platform.status.UnknownError' as unknown as StatusId<{ message: string }>,
//         result: Result.ERROR,
//         params: { message: error.message },
//       }
//     throw error // not our business
//   },
//   defaultFailureHandler: (status: Status<any>): void => {
//     console.error('unhandled status: ', status)
//   },
// }

// export const Platform = createPlatform(configuration, [i18nProvider, statusProvider])
