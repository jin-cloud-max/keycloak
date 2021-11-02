import express from 'express'
import keyCloakAdminClient from "@keycloak/keycloak-admin-client"
import { RequiredActionAlias } from '@keycloak/keycloak-admin-client/lib/defs/requiredActionProviderRepresentation'
import Keycloak from 'keycloak-connect'
import cors from "cors"
import session from "express-session"

const app = express()


const memoryStore = new session.MemoryStore()
const keycloak = new Keycloak({ store: memoryStore, scope: 'offline_access' })

const kcAdminCLient = new keyCloakAdminClient({
    baseUrl: "http://127.0.0.1:8080/auth",
    realmName: "myrealm"
})


app.use(express.json())
app.use(cors())

app.get("/2", async (request, response) => {
    try {
        const { name, email } = request.body

        await kcAdminCLient.auth({
            username: "myuser",
            password: "123456",
            grantType: "password",
            clientId: "myclient"
        })

        const newUser = await kcAdminCLient.users.create({
            username: name,
            email,
            enabled: true,
            groups: ["Usuarios"]
        })

        const kcUser = await kcAdminCLient.users.findOne({ id: newUser.id })


        await kcAdminCLient.users.executeActionsEmail({
            actions: [RequiredActionAlias.UPDATE_PASSWORD],
            id: kcUser.id!
        })

        return response.status(200).json()
    } catch (error) {
        return response.json({ message: error })
    }
})

app.use(keycloak.middleware({
    admin: "/",
    logout: "/logout"
}))


app.get("/", keycloak.protect(), (request, response) => {
    return response.status(200).json({ message: "Passed" })
})

app.listen(3000, async () => {
    console.log("Server on")
})