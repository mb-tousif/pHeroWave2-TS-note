<h2 id="initialize-package.json">Initialize package.json</h2>
<pre><code>    : npm init
</code></pre>
<h2 id="install-typescript">install typescript</h2>
<pre><code>    : yarn add -D typescript
</code></pre>
<h2 id="install-primary-packages">install primary packages</h2>
<pre><code>    : yarn add express mongoose cors dotenv
    : yarn add -D @types/express @types/cors
</code></pre>
<h2 id="init-and-configure-ts-config">init and configure ts config </h2>
<pre><code>    : tsc --init
    change rootDir and outDir location
</code></pre>
<h2 id="create-git-ignore-file-and-configure">create git ignore file and configure</h2>
<pre><code>    node_modules
    package-lock.json
    .env
    yarn.lock
    *.log
    *audit.json
</code></pre>
<h2 id="install-ts-node-dev-and-configure-package.json">install ts-node-dev and configure package.json</h2>
<pre><code>    : yarn add ts-node-dev --dev
    Write script
        &quot;start&quot;: &quot;ts-node-dev --respawn --transpile-only src/server.ts&quot;,
</code></pre>
<h2 id="install-eslint-and-configure---httpsbloglogrocketcomlinting-typescript-eslint-prettier">install eslint and configure - <a href="https://blog.logrocket.com/linting-typescript-eslint-prettier/">https://blog.logrocket.com/linting-typescript-eslint-prettier/</a></h2>
<pre><code>    paste this code into tsconfig.json in first
        &quot;include&quot;: [&quot;src&quot;],
        &quot;exclude&quot;: [&quot;node_modules&quot;],
    Install eslint    
        : yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
    Create .eslintrc in the root directory and paste the code
        {
            &quot;parser&quot;: &quot;@typescript-eslint/parser&quot;,
            &quot;parserOptions&quot;: {
                &quot;ecmaVersion&quot;: 13,
                &quot;sourceType&quot;: &quot;module&quot;
            },
            &quot;plugins&quot;: [&quot;@typescript-eslint&quot;],
            // HERE
            &quot;extends&quot;: [
                &quot;eslint:recommended&quot;,
                &quot;plugin:@typescript-eslint/recommended&quot;,
                &quot;prettier&quot;
            ],

            &quot;rules&quot;: {
                &quot;no-unused-vars&quot;: &quot;error&quot;,
                &quot;no-console&quot;: &quot;error&quot;,
                &quot;no-undef&quot;: &quot;error&quot;,
                &quot;no-unused-expressions&quot;: &quot;error&quot;,
                &quot;no-unreachable&quot;: &quot;error&quot;,
                &quot;@typescript-eslint/consistent-type-definitions&quot;: [&quot;error&quot;, &quot;type&quot;]
            },

            &quot;env&quot;: {
                &quot;browser&quot;: true,
                &quot;es2021&quot;: true,
                &quot;node&quot;: true
            },

            &quot;globals&quot;: {
                &quot;process&quot;: &quot;readonly&quot;
            }
        }
    Create .eslintignore in the root directory and paste line
        node_modules
        dist
        .env

    Write this script in package.json
        &quot;lint:check&quot;: &quot;eslint --ignore-path .eslintignore --ext .js,.ts .&quot;,

</code></pre>

<h2 id="install-extension-on-ide-eslint-and-prettier-and-configure">Install extension on IDE eslint and prettier and configure</h2>
<pre><code>    ESLint by microsoft - https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
    prettier by prettier - https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
    Write these line in settings.json on your IDE
        {
            &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;,
            &quot;editor.formatOnSave&quot;: true,
        }
</code></pre>
<h2 id="install-prettier-and-configure---httpsbloglogrocketcomlinting-typescript-eslint-prettier">install prettier and configure - <a href="https://blog.logrocket.com/linting-typescript-eslint-prettier/">https://blog.logrocket.com/linting-typescript-eslint-prettier/</a></h2>
<pre><code>    Install prettier on your server and configure
        yarn add -D prettier eslint-config-prettier
    create .prettierrc in the root directory and paste the line 
        {
            &quot;semi&quot;: false,
            &quot;singleQuote&quot;: true,
            &quot;arrowParens&quot;: &quot;avoid&quot;
        }
    Write this script in package.json
        &quot;prettier:check&quot;: &quot;prettier --ignore-path .gitignore --write \&quot;**/*.+(js|ts|json)\&quot;&quot;,
</code></pre>
<h2 id="install-husky---httpstypicodegithubiohuskygetting-startedhtml">install husky - <a href="https://typicode.github.io/husky/getting-started.html">https://typicode.github.io/husky/getting-started.html</a></h2>
<pre><code>    : yarn add husky --dev
    : yarn husky install
    : yarn husky add .husky/pre-commit &quot;npm test&quot;
    Write this script in package.json
        &quot;lint-prettier&quot;: &quot;yarn lint:check &amp;&amp; yarn prettier:check&quot;,
    change in precommit file in the husky folder 
        : remove npm code and add here yarn lint-prettier
</code></pre>
<h2 id="install-lint-staged-and-configure">install lint-staged and configure</h2>
<pre><code>    : yarn add -D lint-staged
    Write the code in package.json after the script object
        &quot;lint-staged&quot;: {
                            &quot;src/**/*.ts&quot;: &quot;yarn lint-prettier&quot;
                        },
</code></pre>
<h2 id="configure-vs-code-setting">Configure vs code setting</h2>
<pre><code>    create .vscode folder in the root directory
    create setting.json in the .vscode folder
    paste the code in the setting.json which you create previous step
        {
            &quot;editor.codeActionsOnSave&quot;: {
                &quot;source.fixAll.eslint&quot;: true,
                &quot;source.organizeImports&quot;: true
            }
        }
</code></pre>
<h2 id="create-config-folder">create config folder </h2>
<pre><code>    : create src folder in the root directory
    : create config folder in the src folder
    : create .env file in the root directory and write your server secret
    create index.ts file in the config folder
        import dotenv from &#39;dotenv&#39;
        import path from &#39;path&#39;
        dotenv.config({ path: path.join(process.cwd(), &#39;.env&#39;) })

        export default {
            env: process.env.NODE_ENV,
            port: process.env.PORT,
            db_uri: process.env.DB_URI,
            user_default_pass: process.env.USER_DEFAULT_PASS,
        }

</code></pre>

<h2 id="create-interface-folder">create interface folder </h2>
<pre><code>    create interface folder in the src directory
    create error.ts  in the interface folder and paste the code
        export type IErrorMessage = {
                path: string
                message: string
            }
    create common.ts  in the interface folder and paste the code
        import { IErrorMessage } from &#39;./error&#39;

        export type IErrorResponse = {
        statusCode: number
        message: string
        errorMessage: IErrorMessage[]
        }

</code></pre>

<h2 id="install-winston-and-configure---httpswwwnpmjscompackagewinston">Install winston and configure - <a href="https://www.npmjs.com/package/winston">https://www.npmjs.com/package/winston</a></h2>
<pre><code>    : yarn add winston
    install daily logger
            : yarn add winston-daily-rotate-file
    create utilities folder in the src directory
    create logger.ts in the utilities folder
    paste the code in logger.ts
        /* eslint-disable no-undef */
        import { createLogger, format, transports } from &#39;winston&#39;
        const { combine, timestamp, label, printf } = format
        import DailyRotateFile from &#39;winston-daily-rotate-file&#39;
        import path from &#39;path&#39;

        const myFormat = printf(({ level, message, label, timestamp }) =&gt; {
        const date = new Date(timestamp)

        return `${date} - [${label}] ${level}: ${message}`
        })

        export const logger = createLogger({
        level: &#39;info&#39;,
        format: combine(label({ label: &#39;UMS&#39; }), timestamp(), myFormat),
        transports: [
                new transports.Console(),
                new DailyRotateFile({
                filename: path.join(
                    process.cwd(),
                    &#39;logs&#39;,
                    &#39;winston&#39;,
                    &#39;successes&#39;,
                    &#39;ums-%DATE%-success.log&#39;
                ),
                datePattern: &#39;HH - DD.MM.YYYY&#39;,
                zippedArchive: true,
                maxSize: &#39;20m&#39;,
                maxFiles: &#39;14d&#39;,
                }),
            ],
        })

        export const errorLogger = createLogger({
        level: &#39;error&#39;,
        format: combine(label({ label: &#39;UMS&#39; }), timestamp(), myFormat),
        transports: [
                new transports.Console(),
                new DailyRotateFile({
                filename: path.join(
                    process.cwd(),
                    &#39;logs&#39;,
                    &#39;winston&#39;,
                    &#39;errors&#39;,
                    &#39;ums-%DATE%-error.log&#39;
                ),
                datePattern: &#39;HH - DD.MM.YYYY&#39;,
                zippedArchive: true,
                maxSize: &#39;20m&#39;,
                maxFiles: &#39;14d&#39;,
                }),
            ],
        })

</code></pre>

<h2 id="create-interface-folder-1">create interface folder </h2>
<pre><code>    create errorFormatting folder in the src directory
    create handleValidationError.ts  in the interface folder and paste the code
        import mongoose from &#39;mongoose&#39;
        import { IErrorMessage } from &#39;../interface/error&#39;
        import { IErrorResponse } from &#39;../interface/common&#39;

        export const handleValidationError = (
        err: mongoose.Error.ValidationError
        ): IErrorResponse =&gt; {
            const errors: IErrorMessage[] = Object.values(err.errors).map(el =&gt; {
                return {
                    path: el?.path,
                    message: el?.message,
                }
            })

            return {
                statusCode: 500,
                message: &#39;Validation Error&#39;,
                errorMessage: errors,
            }
        }

    create common.ts  in the interface folder and paste the code
        export class ApiError extends Error {
            statusCode: number
            constructor(statusCode: number, message: string | undefined, stack = &#39;&#39;) {
                super(message)
                this.statusCode = statusCode
                if (stack) {
                this.stack = stack
                } else {
                Error.captureStackTrace(this, this.constructor)
                }
            }
        }

</code></pre>

<h2 id="create-middleware-folder">create middleware folder </h2>
<pre><code>    create middleware folder in the src folder
    create globalError.ts file in the middleware folder and paste the code
        /* eslint-disable no-unused-expressions */
        /* eslint-disable no-console */
        import { ErrorRequestHandler } from &#39;express&#39;
        import config from &#39;../config&#39;
        import { IErrorMessage } from &#39;../interface/error&#39;
        import { handleValidationError } from &#39;../errorFormatting/handleValidationError&#39;
        import { ApiError } from &#39;../errorFormatting/apiError&#39;
        import { errorLogger } from &#39;../utilities/logger&#39;

        export const globalError: ErrorRequestHandler = (error, req, res, next) =&gt; {
            let statusCode = 400
            let message = &#39;Something went wrong&#39;
            let errorMessage: IErrorMessage[] = []

            // Dependency
            config.env === &#39;development&#39;
                ? console.log(`Global Error Handler ==`, error)
                : errorLogger.error(`Global Error Handler ==`, error)

            // Check
            if (error?.name === &#39;ValidationError&#39;) {
                const simplifiedError = handleValidationError(error)
                statusCode = simplifiedError.statusCode
                message = simplifiedError.message
                errorMessage = simplifiedError.errorMessage
            } else if (error instanceof ApiError) {
                statusCode = error?.statusCode
                message = error?.message
                errorMessage = error?.message
                ? [
                    {
                        path: &#39;&#39;,
                        message: error?.message,
                    },
                    ]
                : []
            } else if (error instanceof Error) {
                message = error?.message
                errorMessage = error?.message
                ? [
                    {
                        path: &#39;&#39;,
                        message: error?.message,
                    },
                    ]
                : []
            }

            // Return Response
            res.status(statusCode).send({
                success: false,
                message,
                errorMessage,
                stack: config.env !== &#39;production&#39; ? error?.stack : undefined,
            })
            next()
        }

</code></pre>

<h2 id="create-utilities-folder">create utilities folder </h2>
<pre><code>    create bootStrap.ts file in the utilities folder and paste the code
        /* eslint-disable no-console */
        import mongoose from &#39;mongoose&#39;
        import config from &#39;../config&#39;
        import app from &#39;../app&#39;
        import { errorLogger, logger } from &#39;./logger&#39;
        import { Server } from &#39;http&#39;
        let server: Server

        export async function bootStrap() {
            try {
                await mongoose.connect(config.db_uri as string)
                server = app.listen(config.port, (): void =&gt; {
                logger.info(
                    `==== ✌️  Your server is running on http://localhost:${config.port} ====`
                )
                })
                logger.info(`==== ✌️  DB Connection is succesfully ====`)
            } catch (error) {
                errorLogger.error(`==== 🤞  Database Connection Error ====`, error)
            }

            process.on(&#39;unhandledRejection&#39;, error =&gt; {
                console.log(error)
                if (server) {
                server.close(() =&gt; {
                    errorLogger.error(error)
                    process.exit(1)
                })
                } else {
                process.exit(1)
                }
            })
        }

</code></pre>

<h2 id="create-server-and-configure">create server and configure</h2>
<pre><code>    create app.ts in the src folder
        import express, { Application, Request, Response, NextFunction } from &#39;express&#39;
        import cors from &#39;cors&#39;
        import userRoute from &#39;../src/app/modules/users/user.route&#39;
        import { globalError } from &#39;./middleware/globalError&#39;
        const app: Application = express()

        // Middleware
        app.use(cors())
        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))

        // Data API
        app.use(&#39;/api/v1/user&#39;, userRoute)

        // Testing API
        app.get(&#39;/&#39;, (req: Request, res: Response, next: NextFunction) =&gt; {
            res.send(&#39;+++ App Running Successfully +++&#39;)
            next()
            // Uncought Error
            // console.log(x)

            // Test Error
            // throw new Error(&#39;General Error&#39;)

            // Test API Error
            // throw new ApiError(403, &#39;API Error&#39;)

            // Promiss rejection
            // Promise.reject(new Error(`Unhandle Promiss Rejection`))
        })

        // Global error handle
        app.use(globalError)

        // Unknown API Handle
        app.all(&#39;*&#39;, (req: Request, res: Response) =&gt; {
            res.send(`+++ Requested Route Not Found +++`)
        })

        export default app

    create server.ts
        import { errorLogger, logger } from &#39;./utilities/logger&#39;
        import { bootStrap } from &#39;./utilities/bootStrap&#39;
        import { Server } from &#39;http&#39;
        let server: Server

        process.on(&#39;uncaughtException&#39;, error =&gt; {
            errorLogger.error(error)
            process.exit(1)
        })

        bootStrap()

        process.on(&#39;SIGTERM&#39;, () =&gt; {
            logger.info(`Sigterm is received`)
            if (server) {
                server.close()
            }
        })

</code></pre>

<h2 id="install-zod-for-handle-validation-error---httpszoddev">Install Zod for handle validation error - <a href="https://zod.dev/">https://zod.dev/</a></h2>
<pre><code>    install zod - yarn add zod
    create reqValidate.ts and paste the code
        import { NextFunction, Request, Response } from &#39;express&#39;
        import { AnyZodObject } from &#39;zod&#39;

        const reqValidate =
        (schema: AnyZodObject) =&gt;
        async (req: Request, res: Response, next: NextFunction): Promise&lt;void&gt; =&gt; {
            try {
            await schema.parseAsync({
                body: req.body,
                query: req.query,
                params: req.params,
                cookies: req.cookies,
            })
                return next()
            } catch (error) {
                next(error)
            }
        }
        export default reqValidate

    Modified the globalError.ts by the condition
        else if (error instanceof ZodError) {
            const simplifiedError = handleZodError(error)
            statusCode = simplifiedError.statusCode
            message = simplifiedError.message
            errorMessage = simplifiedError.errorMessage
        }

    Update error.ts in interface folder
        export type IErrorMessage = {
            path: string | number
            message: string
        }

    Create validator in your specific modular folder like this (file name user.validation.ts)
        import { z } from &#39;zod&#39;
        export const userZod = z.object({
            body: z.object({
                role: z.string({
                required_error: &#39;Z: Role is required&#39;,
                }),
                password: z.string().optional(),
            }),
        })

    Use reqValidate function in the route like this
        router.route(&#39;/&#39;).post(reqValidate(userZod), createUser)

</code></pre>

<h2 id="create-global-route">create global route</h2>
<pre><code>    Create routes folder in the app directory
    create index.ts in the route folder
        import express from &#39;express&#39;
        const router = express.Router()
        import userRoute from &#39;../modules/users/user.route&#39;

        const appRoutes = [
            {
                path: &#39;/user&#39;,
                route: userRoute,
            },
        ]

        appRoutes.forEach(route =&gt; router.use(route.path, route.route))

        export default router

    update app.ts data api by the line and import the routers
        app.use(&#39;/api/v1&#39;, routers)

</code></pre>

<h2 id="formatting-trycatch-and-response">Formatting tryCatch and Response</h2>
<pre><code>    install http-status
        yarn add http-status
    create tryCatch.ts in the utilities folder and paste the code
        import { NextFunction, Request, RequestHandler, Response } from &#39;express&#39;

        export const tryCatch = (fn: RequestHandler) =&gt; {
            return async (req: Request, res: Response, next: NextFunction) =&gt; {
                try {
                    await fn(req, res, next)
                } catch (error) {
                    next(error)
                }
            }
        }

    create apiRes.ts in the interface directory
        export type IApiRes&lt;T&gt; = {
            statusCode: number
            success: boolean
            message?: string | null
            result?: T | null
        }

    Create sendRes.ts in the utilities folder
        import { Response } from &#39;express&#39;
        import { IApiRes } from &#39;../interface/apiRes&#39;

        export const sendRes = &lt;T&gt;(res: Response, data: IApiRes&lt;T&gt;): void =&gt; {
            const resData: IApiRes&lt;T&gt; = {
                statusCode: data.statusCode,
                success: data.success,
                message: data.message || null,
                result: data.result || null,
            }
            res.status(data.statusCode).send(resData)
        }

    Use tryCatch and sendRes in the controller
        export const createUser = tryCatch(
            async (req: Request, res: Response, next: NextFunction) =&gt; {
                    const result = await createUserService(req.body)
                    sendRes(res, {
                    statusCode: status.OK,
                    success: true,
                    message: &#39;Create users successfully&#39;,
                    result: result,
                })
                    next()
            }
        )

</code></pre>

<p>Handle Unknown api in the app.ts 
        // Unknown API Handle
        app.use((req: Request, res: Response, next: NextFunction) =&gt; {
            res.status(status.NOT_FOUND).json({
                success: false,
                message: &#39;Not Found&#39;,
                errorMessage: [
                {
                    path: req.originalUrl,
                    message: &#39;API Not Found&#39;,
                },
                ],
            })
            next()
        })</p>
