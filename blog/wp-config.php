<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */
 
// Include local configuration
if (file_exists(dirname(__FILE__) . '/local-config.php')) {
	include(dirname(__FILE__) . '/local-config.php');
}

// Global DB config
if (!defined('DB_NAME')) {
	define('DB_NAME', 'underbellyblog');
}
if (!defined('DB_USER')) {
	define('DB_USER', 'root');
}
if (!defined('DB_PASSWORD')) {
	define('DB_PASSWORD', 'root');
}
if (!defined('DB_HOST')) {
	define('DB_HOST', 'localhost');
}

/** Database Charset to use in creating database tables. */
if (!defined('DB_CHARSET')) {
	define('DB_CHARSET', 'utf8');
}

/** The Database Collate type. Don't change this if in doubt. */
if (!defined('DB_COLLATE')) {
	define('DB_COLLATE', '');
}

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '$Pla22=<VZp_B<aUI++I-v%iBXo[S5awN0-nqu:?q%,;q37w-8U{,5I=Aj!L0YlX');
define('SECURE_AUTH_KEY',  't^DK|v~i1/:3$<,mvNJ:-/;u-C0?8s&MYq0|n`+=xe~Gs=E+H)Y*~q]X>U>eAkp0');
define('LOGGED_IN_KEY',    'cSlg:`ekp)Sn8t@Zl%$&mDK(!G|ehz@J@ohK5L~$uYo a+Y./f*3<ieSq%1aHY1d');
define('NONCE_KEY',        '>qILf|ph6j!#o:f-356AjI6qMlMS?:]WgZ<-2Z$&Vc|d67vob+s*eq8t6K8e`MSV');
define('AUTH_SALT',        '_[l.s%c*dphnM/u0V5:`CCf/85nG5+~{v0C0D.{o(^Oyic)NP^&UVd5%&jhrJ{Gk');
define('SECURE_AUTH_SALT', 'OLI_:dUnnb?b?!zM(:|xCwH[x6uK}>dq^W`;|caGsLU ,+BQ{*VUD=HDCWp-1@Dr');
define('LOGGED_IN_SALT',   'NiA(^R{@ZpOS&1s^%!5kL2jMf86Z`Fhr?7^:C( u-|&r WIbQt~=}#QfS/pirhQ|');
define('NONCE_SALT',       'o.+4]I4W5M9Gls_n*Ddr_!$qO2OL`GIAUbjOMHHGugn+q3+CA5f[y!a7_!QD9[yH');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');


/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
if (!defined('WP_DEBUG')) {
	define('WP_DEBUG', false);
}

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
