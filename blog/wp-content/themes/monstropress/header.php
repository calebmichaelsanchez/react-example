<!doctype html>
<html class="no-js" <?php language_attributes(); ?> >
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?php if ( is_category() ) {
      echo 'Category Archive for &quot;'; single_cat_title(); echo '&quot; | '; bloginfo( 'name' );
    } elseif ( is_tag() ) {
      echo 'Tag Archive for &quot;'; single_tag_title(); echo '&quot; | '; bloginfo( 'name' );
    } elseif ( is_archive() ) {
      wp_title(''); echo ' Archive | '; bloginfo( 'name' );
    } elseif ( is_search() ) {
      echo 'Search for &quot;'.esc_html($s).'&quot; | '; bloginfo( 'name' );
    } elseif ( is_home() || is_front_page() ) {
      bloginfo( 'name' ); echo ' | '; bloginfo( 'description' );
    }  elseif ( is_404() ) {
      echo 'Error 404 Not Found | '; bloginfo( 'name' );
    } elseif ( is_single() ) {
      wp_title('');
    } else {
      echo wp_title( ' | ', 'false', 'right' ); bloginfo( 'name' );
    } ?></title>
    <link rel="stylesheet" href="http://localhost:8888/assemble-underbelly/dist/assets/css/styles.css">
    
    <link rel="icon" href="<?php echo get_template_directory_uri(); ?>/assets/img/icons/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="<?php echo get_template_directory_uri(); ?>/assets/img/icons/apple-touch-icon-144x144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="<?php echo get_template_directory_uri(); ?>/assets/img/icons/apple-touch-icon-114x114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="<?php echo get_template_directory_uri(); ?>/assets/img/icons/apple-touch-icon-72x72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="<?php echo get_template_directory_uri(); ?>/assets/img/icons/apple-touch-icon-precomposed.png">
    <script type="text/javascript">
      (function(d) {
        var config = {
          kitId: 'fsw1llh',
          scriptTimeout: 3000
        },
        h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='//use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
      })(document);
    </script>
    <?php wp_head(); ?>


    <script type='text/javascript'>
(function (d, t) {
 var bh = d.createElement(t), s = d.getElementsByTagName(t)[0];
 bh.type = 'text/javascript';
 bh.src = '//www.bugherd.com/sidebarv2.js?apikey=ystydn4o0hzjffqlj63mzw';
 s.parentNode.insertBefore(bh, s);
 })(document, 'script');
</script>


  </head>
  <body <?php body_class(); ?>>
  <div class="inner-wrap l-wrapper">
  <header class="sticky">
    <nav class="top-bar" data-topbar data-options="sticky_on: large">
     <ul class="title-area">
       <li class="name">
         <a href="/" id="brand"></a>
       </li>
       <li class="toggle-topbar menu-icon"><a href="#"></a></li>
       <a class="contact-icon icon-airplane" href="contact.php"></a>
     </ul>
    
     <section class="top-bar-section">
       <ul class="right">
           <li class="hidden"><a href="index.html" class="col-1-5"><span>Home</span></a></li>
           <li><a href="/work.html" class="col-1-5 link"><span>Work</span></a></li>
           <!-- <li><a href="#about" class="col-1-5 link scrollto"><span>About</span></a></li> -->
           <li><a href="/blog" class="col-1-5 link"><span>Journal</span></a></li>
           <li><a href="/contact.php" class="col-1-5" id="contactLink"><span></span></a></li>
       </ul>
     </section>
    </nav>
</header>
<div id="pollMQ"></div>


