import * as Joi from 'joi';

export function getConfigModuleOptions() {
  return {
    isGlobal: true,
    validationSchema: Joi.object({
      PORT: Joi.number().port().default(3000),
      OFFLINE_MODE: Joi.string().valid('ON', 'OFF').default('ON'),
      NODE_ENV: Joi.string()
        .valid('development', 'production')
        .default('development'),
    }),
    envFilePath: `envs/.env.${process.env.NODE_ENV || 'development'}`,
  };
}
