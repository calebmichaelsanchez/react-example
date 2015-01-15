<?php
/**
 * This is the default template part for the
 * city element in the billing-address
 * purchase-requriements in the super-widget-billing-address template part.
 *
 * @since 1.3.0
 * @version 1.3.0
 * @package IT_Exchange
 *
 * WARNING: Do not edit this file directly. To use
 * this template in a theme, copy over this file to the
 * /exchange/super-widget-billing-address/elements/
 * directory located in your theme.
*/
?>
<?php do_action( 'it_exchange_super_widget_billing_address_purchase_requirement_before_city_element' ); ?>
<div class="it-exchange-city">
	<?php it_exchange( 'billing', 'city' ); ?>
</div>
<?php do_action( 'it_exchange_super_widget_billing_address_purchase_requirement_after_city_element' ); ?>
