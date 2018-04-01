const webpackDevConfig = require('./configs/webpack/webpack.dev.config');
const webpackProdConfig = require('./configs/webpack/webpack.prod.config');
const webpackUnitConfig = require('./configs/webpack/webpack.unit.config');

const EnvironmentType = {
    DEVELOPER: 'developer',
    PRODUCTION: 'production',
    UNIT: 'unit',
};
const isEnvironmentTypeValid = environment => Object
    .values(EnvironmentType)
    .some(value => value === environment);

const map = {
    [EnvironmentType.DEVELOPER]: webpackDevConfig,
    [EnvironmentType.PRODUCTION]: webpackProdConfig,
    [EnvironmentType.UNIT]: webpackUnitConfig,
};


const {NODE_ENV: environment} = process.env;




if (!isEnvironmentTypeValid(environment)) {
    throw new Error(`unknown environment "${environment}".`);
}

const webpackCurrentConfig = map[environment];


const wrapper = root => (env) => webpackCurrentConfig.create(root, env);


module.exports = wrapper(__dirname);