const elixir = require('laravel-elixir');

require('laravel-elixir-vue');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

/*
*
*
* require('../../../node_modules/jquery/dist/jquery.js');
    require('./tree.jquery.js');
    require('./main.js');

//require('../../../node_modules/bootstrap/dist/js/bootstrap.js');
.webpack('app.js');
* */

elixir(mix => {

    mix.sass('app.scss')
        .webpack('app.js');

});
