<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'test01' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'V_)W[`vd}Hp3+=`W.L#R6YKkj=A|LsR~DssjI}a]$`G%pJW$KE0z6MR$T%GlmvRb' );
define( 'SECURE_AUTH_KEY',  'di&=b(AMVa+k3`_GkSS yKr_B3e%K9+Dy<y}@,<ZR9kmLu$X8QAw3a%j5EdO-W+z' );
define( 'LOGGED_IN_KEY',    '%C<M{>i~=LmrDk7{oh|-nB$fS(g(K++3OX&DXRd/yG=9sLGUG+^FhsE6yxHX4;N8' );
define( 'NONCE_KEY',        'ltoCC88>cX=Y2MV].v9J(o)-aPr]uCO6$h%jys,XDu t:H03.[m({Vy4zulb:gAT' );
define( 'AUTH_SALT',        '|s+lLz/=jKQ)X|EJMK013XY?$(g$&dIvGo%UDs(t4^x-!xZBKGgvHc$)+xkv{LO[' );
define( 'SECURE_AUTH_SALT', '&my5nHF_WwY_B?A]2GT8}6yw0nHzLey?^cw(bN2#l6A|Xcf1Y@J,tK}78>6&!2jA' );
define( 'LOGGED_IN_SALT',   'fcA<[jDHMCo_@d4CABb#}=.#NP>UC;<-(+8oGlb`ZG< 1_Tmz;`4GM/|(N/L$ _P' );
define( 'NONCE_SALT',       'w/uDJu:5,9b?)S2L{AQT5p03Wr{h`S R9CV6PH~._oN7R6+LfgbLZ8cr)Pv^7~^8' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
