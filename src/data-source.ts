import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: process.env.DB_HOST,
	port: +process.env.DB_PORT,
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	entities: [process.env.TYPEORM_ENTITIES],
	migrations: [process.env.TYPEORM_MIGRATIONS],
})

// !! -tranforma de string/number em boolean
// + converte pra string