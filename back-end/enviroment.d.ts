declare global {
    namespace NodeJS {
        interface ProcessEnv {
            HOST_DB: string;
            KANBANFLOW_DB: string;
            USER_DB: string;
            PASSWORD_DB: string;
        }
    }
}

export {}