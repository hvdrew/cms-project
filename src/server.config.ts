export interface Configuration {
	PORT: number;
	DB: string;
}

let configurations: any = {};

configurations.development = {
	PORT: 3000,
	DB: 'mongodb://localhost:27017/crm-test'
};

configurations.production = {
	PORT: 3000,
	DB: ''
};

export const config: Configuration =
	typeof configurations[process.env.NODE_ENV] !== undefined
		? configurations[process.env.NODE_ENV]
		: configurations.development;
