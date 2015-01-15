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

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'db47302_underbelly_wp');

/** MySQL database username */
define('DB_USER', 'db47302_ubwp');

/** MySQL database password */
define('DB_PASSWORD', 'Ah0yTharMat3!');

/** MySQL hostname */
define('DB_HOST', 'internal-db.s47302.gridserver.com');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '3.s!9oNGiJQpIt ;Qn}Ozu-5~#$qwY+ZGogIy{}8-[r6//4ko@I&7LwE2-}fZ,R*');
define('SECURE_AUTH_KEY',  '-OP@{r!]rZvQ`HV__H{Dp[4kAtHw~flDN7pEzsl;!,`=Ys&bayo/r{([_:!fVFV:');
define('LOGGED_IN_KEY',    'E*%1JCeGJZ>?5Z~1hnd)8fQ8|4R{hBPls).-HxZ?#.I|k6@0.i)/+-2&9+0lY(w}');
define('NONCE_KEY',        'EpEL,263)M0tW`AXZTe1E3v@E[#fqd}SnjgyX(Z(>aU}GS?+8x,8t+@+bGH`@f%,');
define('AUTH_SALT',        '|4 mkT@A-+-BHOkp!zPTyR#&$VcSy-R7bc5.^;@<>oA/wd8w;G}:NMh&QBO8kEYM');
define('SECURE_AUTH_SALT', 'Q^U}!<HE,j_fhZae@4aZu5}Q1aRDyxraCE3&Y-:F:zatYf&}upi$mwK(jp~,T<NJ');
define('LOGGED_IN_SALT',   'QeI?;@7gAiallW;^}-6Cn[a5qm_sQP5yXO)i>4C<VA78/-5u|}cs/{4&b1N,^Pvk');
define('NONCE_SALT',       'wx28-6#.QOjRh{W~nMv,<I%EqF0KGQ0ek$2&Vp+y_@bND9-(b+RtubcS$@2:{yZX');

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
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
