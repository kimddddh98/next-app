declare namespace NodeJS {
  interface ProcessEnv {
      NEXT_PUBLIC_API_PATH: string;
      NEXT_PUBLIC_POSTGRES_PASSWORD : string
      NEXT_PUBLIC_POSTGRES_DATABASE : string
        NEXT_PUBLIC_POSTGRES_PORT : number
  }
}