/**
*	Add to cart script.
*	version number: 62
*   circle animation :)
*	https://apps.shopify.com/add-to-cart
*/
	// addToCartLoaded is never set, as the app has to load again in case the shop uses ajax navigation
	// button interval is controlling itself, so it doesn't trigger too many times

(function() {
	var addToCartButton = function() {
		
				
				
						
				
				
		var loadScript=function(a,b){var c=document.createElement("script");c.type="text/javascript",c.readyState?c.onreadystatechange=function(){("loaded"==c.readyState||"complete"==c.readyState)&&(c.onreadystatechange=null,b())}:c.onload=function(){b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};	
		
				
		// Added 2021-04-11
		var debouncers = [];
		function debounce(key, callback, delay) {
			if (typeof debouncers[key] !== 'undefined') {
				clearTimeout(debouncers[key]);
			}
			debouncers[key] = setTimeout(callback, delay);			
		}

		var addToCart = function($){
			function initialize() {
				
				// Check if style was appended
				if ($('#add-to-cart-style-appended').length == 0) {
					$('body').append('<link href="//acdn.goldendev.win/shopify/add-to-cart/css/fagly-rl.min.css?v04" type="text/css" rel="stylesheet">');	
					// Always set z-index to 9 instead of 900
					var z_index = 9;
					
					if (typeof window.Shopify !== 'undefined' 
						&& typeof window.Shopify.theme !== 'undefined' 
						&& typeof window.Shopify.theme.name === 'string' 
						&& window.Shopify.theme.name.indexOf('Dawn') !== -1) {
							
						z_index = 2;
					}
					
										
											$('body').append('<link href="https://fonts.googleapis.com/css?display=swap&family=Raleway" type="text/css" rel="stylesheet">');
										
					$('body').append('<style>div.add-to-cart-absolute {position:absolute;top:4px;right:4px;}div.add-to-cart-quick {display:block !important;background:#319aff;background:#EBEBEB;color: white;color:#000000;cursor:pointer;clear:both;pointer-events: all !important;height: 34px;width: 34px;opacity:1;z-index: '+z_index+';border-radius: 50% !important;}.type-product-grid-item div.add-to-cart-quick, .type-product-grid-item div.addtc-holder, .type-product-grid-item input.addtc-quantity-field, .type-product-grid-item .addtc-up-arrow, .type-product-grid-item .addtc-down-arrow, .type-product-grid-item div.addtc-qf-holder {z-index: 11;}div.add-to-cart-quick.addtc-box-under-image.addtc-sold-out {cursor:default;}div.add-to-cart-quick.addtc-box-under-image .addtc-button {overflow:hidden;}div.add-to-cart-quick div {font-size: 20px !important;position: absolute;top: 6px;left: 7px;color: white !important;color:#000000 !important;}div.add-to-cart-quick div:empty {display:block;}div.addtc-box-under-image {width:auto;width: 100%;margin-left:auto;margin-right:auto;}div.add-to-cart-quick.addtc-box-under-image {box-sizing: border-box;}div.add-to-cart-quick .spinner-animate, div.add-to-cart-quick .gfa-spinner, div.add-to-cart-quick .gglyphicon-repeat,div#addtc-sticky-bar .spinner-animate, div#addtc-sticky-bar .gfa-spinner, div#addtc-sticky-bar .gglyphicon-repeat {animation: gfa-spin .7s infinite linear;-moz-animation: gfa-spin .7s infinite linear;-o-animation: gfa-spin .7s infinite linear;-webkit-animation: gfa-spin .7s infinite linear;-ms-animation: gfa-spin .7s infinite linear;line-height:normal;}div.add-to-cart-quick .gfa-spinner  {position:absolute;font-size:15px !important;top: 9px !important;left: 10px !important;}div.add-to-cart-quick .gglyphicon-repeat  {position:absolute;font-size:16px !important;top: 7px !important;left: 9px !important;letter-spacing: 0;}div.add-to-cart-quick .gglyphicon-shopping-cart {font-size:16px !important;top: 10px !important;left: 9px !important;}#addtc-popup { font-family: "Raleway",Arial,Helvetica,sans-serif; font-family: "Raleway","Raleway",Arial,Helvetica,sans-serif; font-size:13px;font-size:13px;color:black;position:fixed; bottom:-150px;right:5px;border-radius:3px !important;overflow:hidden;z-index:990;overflow:hidden;z-index: 99999999;cursor:pointer;}.addtc-image>div {display:inline-block;margin:0 2px;top: 0;left: 0;right: 0;bottom: 0;background-repeat: no-repeat;background-size: cover; background-position: center center; border-radius:50% !important;width: 50px;height:50px;}.addtc-image { height: 100%;z-index:999;text-align: right;}.addtc-message { text-align: right;color: #7e7e7e;color:#7e7e7e;font-style: italic;margin-bottom: 5px;margin-right: 8px;margin-left: 8px;}@media only screen and (max-width: 450px) {#addtc-popup { left:10px;width:auto;}}div.add-to-cart-quick ul.addtc-dropdown {overflow-y: auto;overflow-x: hidden;color:#000000;font-size: 12px;position: absolute;top: 31px;list-style-type: none;margin:0 !important;padding:0;width:auto !important;display:block !important;pointer-events:auto !important;top:-4px;right:-4px;}.addtc-dropdown li {border-bottom: 1px solid rgba(255, 255, 255, 0.5);text-align: center;padding: 2px;font-family: "Raleway",Arial,Helvetica,sans-serif;font-family: "Raleway","Raleway",Arial,Helvetica,sans-serif;padding: 3px 8px !important;font-size:12px !important;margin:0 !important;list-style: none !important;width: 100%;box-sizing: border-box;word-break: initial;background:#EBEBEB;pointer-events:auto !important;}.addtc-dropdown li span {word-break: initial;}.addtc-overflow-x {overflow-x:hidden;}.addtc-warning {font-family: "Raleway",Arial,Helvetica,sans-serif;position:absolute;top:2px;left:2px;background:white;color: #292929;font-size:12px;display:block;padding: 5px;z-index: 1000;border-radius:2px !important;border: 1px solid #cdcdcd;cursor:help;}.predictive-search-item__link.addtc-parent {flex-wrap:wrap;}#instant_search_menu dt {flex-wrap: wrap;}#instant_search_menu .list-image {flex: 0 0 50px;}#instant_search_menu .cs-item-details {flex: 1 1 50%;}#instant_search_menu .addtc-holder {flex: 0 0 100%;}#instant_search_menu .cs-item.addtc-parent {flex-wrap: wrap;}#instant_search_menu .cs-item.addtc-parent .list-image {flex: 0 0 80px;}#instant_search_menu .cs-item.addtc-parent .cs-item-details {flex: 1 1 50%;}#instant_search_menu .cs-item.addtc-parent .addtc-holder, #instant_search_menu .cs-item.addtc-parent .addtc-holder .addtc-box-under-image {flex: 0 0 100%;}.addtc-noselect {-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}.addtc-animating-action {-webkit-transition: all 1s ease-in-out;-moz-transition: all 1s ease-in-out;-o-transition: all 1s ease-in-out;transition: all 1s ease-in-out;pointer-events: none;}.addtc-animating-action .product-block .product-detail {display:none;}.addtc-animating-action-curved {-webkit-transition: all 1.5s ease-in-out, left 1.5s ease-in, top 1.5s ease-out;-moz-transition: all 1.5s ease-in-out, left 1.5s ease-in, top 1.5s ease-out;-o-transition: all 1.5s ease-in-out, left 1.5s ease-in, top 1.5s ease-out;transition: all 1.5s ease-in-out, left 1.5s ease-in, top 1.5s ease-out;}.grid__cell .product-item .addtc-box-under-image { margin-bottom:0; z-index:unset; margin-top:auto; }.grid__cell .product-item .addtc-holder { margin-bottom:0; z-index:unset; margin-top:auto; }.addtc-parent.addtc-flex-display .addtc-box-under-image {margin-top:auto;}.addtc-parent.addtc-flex-display .addtc-holder {margin-top:auto;}#MainContent #shopify-section-collection-template .collection__section .featured-collections__wrapper .featured-collections__products .featured-collections__item .product-card.product-card--list.addtc-parent.addtc-flex-display {flex-wrap: wrap;}#MainContent #shopify-section-collection-template .collection__section .featured-collections__wrapper .featured-collections__products .featured-collections__item .product-card.product-card--list.addtc-parent.addtc-flex-display .addtc-holder {flex: 1 0 100%;}</style><div id="add-to-cart-style-appended"></div>');					
					if (typeof window.Shopify !== 'undefined' 
						&& typeof window.Shopify.theme !== 'undefined' 
						&& typeof window.Shopify.theme.name === 'string' 
						&& window.Shopify.theme.name.indexOf('Express') !== -1) {
							
						$('body').append('<style>'+
							/* Special Express theme z-index config */
							'div.add-to-cart-quick {' +
								'z-index:4;' +
							'}' +
							'.addtc-qf-holder {' +
								'z-index:3;' +
							'}' +
						'</style>');
					}

										
											$( "body" ).append( ' \
						<div id="addtc-popup" style="display: block;"> \
							<div class="addtc-message">added to cart</div>\
							<div class="addtc-image">\
							</div> \
						</div> \
						' );
										
					$("body").append( ' \
					<div class="gglyphicon gglyphicon-repeat addtc-fancy-spinner" style="position:fixed; bottom:-30px !important; left:-30px !important; display: block;-animation: none;-webkit-animation: none;"> \
					</div> \
					' );
					
					if (typeof Shopify.theme.name != 'undefined') {
												
						if (Shopify.theme.name == 'ShowTime(MHT-dev)') {
							$('body').append('\
								<style>\
									.add-to-cart-quick { z-index:unset; }\
								</style>'
							);
						}
					}
				}
				
								
					if ($('#addtc-sticky-cart').length == 0 ) {
				
						$('body').append('<style>#addtc-sticky-cart {-webkit-border-radius: 50% !important;-moz-border-radius: 50% !important;border-radius:50% !important;width:50px;height:50px;position: fixed;right: 15px;right: 15px;z-index: 9999;z-index: 1000;bottom: initial;cursor:pointer;background: #ffffff;background:#EBEBEB;color: black;color:#000000;}#addtc-sticky-cart .addtc-cart-icon {font-size: 20px !important;text-align: center !important;line-height: 48px !important;width: 100%;}#addtc-sticky-cart span#addtc-sticky-cart-count {-webkit-border-radius: 20px !important;-moz-border-radius: 20px !important;border-radius: 20px !important;width: 20px;height: 20px;background-color: rgb(255, 107, 107);background:rgb(107, 187, 255);position: absolute;top: -5px;top:-5px;left: -10px;left: -10px;font-size: 10px;line-height: 20px;color: rgb(255, 255, 255);color:#ffffff;font-family: "Raleway",Arial,Helvetica,sans-serif; font-family: "Raleway","Raleway",Arial,Helvetica,sans-serif;}.addtc-bounce-in {-moz-animation:addtc-bounce .40s linear;-webkit-animation:addtc-bounce .40s linear;animation:addtc-bounce .40s linear;}@keyframes addtc-bounce {0%{ transform:scale(0); opacity:0;}50%{ transform:scale(1.3); opacity:0.4; }75%{ transform:scale(0.9); opacity:0.7;}100%{ transform:scale(1); opacity:1;}}@-moz-keyframes addtc-bounce {0%{ -moz-transform:scale(0); opacity:0;}50%{ -moz-transform:scale(1.3); opacity:0.4; }75%{ -moz-transform:scale(0.9); opacity:0.7;}100%{ -moz-transform:scale(1); opacity:1;}}@-webkit-keyframes addtc-bounce {0%{ -webkit-transform:scale(0); opacity:0;}50%{ -webkit-transform:scale(1.3); opacity:0.4;}75%{ -webkit-transform:scale(0.9); opacity:0.7;}100%{ -webkit-transform:scale(1); opacity:1;}}.addtc-swing-it {-moz-animation:addtc-swing .40s linear;-webkit-animation:addtc-swing .40s linear;animation:addtc-swing .40s linear;-moz-transform-origin: center top;-webkit-transform-origin: center top;transform-origin: center top;}@keyframes addtc-swing {0% { transform: rotate(0deg); }20% { transform: rotate(10deg); }40% { transform: rotate(-10deg); }60% { transform: rotate(5deg); }80% { transform: rotate(-5deg); }100%{ transform: rotate(0deg); }}@-moz-keyframes addtc-swing {0% { -moz-transform: rotate(0deg); }20% { -moz-transform: rotate(10deg); }40% { -moz-transform: rotate(-10deg); }60% { -moz-transform: rotate(5deg); }80% { -moz-transform: rotate(-5deg); }100%{ -moz-transform: rotate(0deg); }}@-webkit-keyframes addtc-swing {0% { -webkit-transform: rotate(0deg); }20% { -webkit-transform: rotate(10deg); }40% { -webkit-transform: rotate(-10deg); }60% { -webkit-transform: rotate(5deg); }80% { -webkit-transform: rotate(-5deg); }100%{ -webkit-transform: rotate(0deg); }}</style>');						
						if (canShowAddToCart() == true) {
							
															$("body").append( '\
									<div id="addtc-sticky-cart" class="addtc-bounce-in">\
										<div class="gglyphicon gglyphicon-shopping-cart addtc-cart-icon">\
											<span id="addtc-sticky-cart-count">0</span>\
																					</div>\
									</div>\
								');
														
							// Give a bit of a timeout so the sticky cart can get rendered before we calculate it's position
							setTimeout(initializeStickyCart, 1);
							
							function initializeStickyCart() {
								cart_actions.updateCart(null, null, true);
								
								var offset_perc = parseFloat(20);

								if (typeof offset_perc == 'undefined' || isNaN(offset_perc) == true) {
									offset_perc = 50;
								}
								
																var window_height = window.innerHeight;
								var sticky_cart_height = $('#addtc-sticky-cart').height();
								
								var offset = window_height * (offset_perc/100) - (sticky_cart_height/2);
								
								if (offset > (window_height - sticky_cart_height)) {
									offset = window_height - sticky_cart_height - 15;
								} else if (offset < 15) {
									offset = 15;
								}
								
								$('#addtc-sticky-cart').css({'top':offset});
								
							}
						}
					}
								
								
								
								
			}
			// End of initialization function
			
			function getRootUrl(){return window.location.origin?window.location.origin+'/':window.location.protocol+'//'+window.location.hostname+'/'}
			
			function getLanguagePath() {
				if (typeof Shopify !== 'undefined' && typeof Shopify.locale !== 'undefined') {
					if (window.location.pathname.indexOf('/'+Shopify.locale+'/') === 0 || window.location.pathname === '/'+Shopify.locale) {
						return Shopify.locale+'/';
					}
				}
				
				return '';
			}
			
			if (typeof clientSpecifics === 'undefined') {
				// This will contain a list of all client specific functions
				var clientSpecifics = {};
			}
									
			if (typeof clientSpecifics['init'] !== 'undefined') {
				clientSpecifics['init'].trigger();
			}
			
			var utils = {
	formatMoney: function(cents, format) {
		
		if (format === '') {
			// Default format
			return (cents/100).toFixed(2);
		}
		
		try {
			if (typeof cents == 'string') {
				cents = cents.replace('.','');
			}

			var value = '';
			var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
			var formatString = format;

			function defaultOption(opt, def) {
				return (typeof opt == 'undefined' ? def : opt);
			}

			function formatWithDelimiters(number, precision, thousands, decimal) {
				precision = defaultOption(precision, 2);
				thousands = defaultOption(thousands, ',');
				decimal   = defaultOption(decimal, '.');

				if (isNaN(number) || number == null) {
					return 0;
				}

				number = (number/100.0).toFixed(precision);

				var parts 	= number.split('.'),
				dollars 	= parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
				cents   	= parts[1] ? (decimal + parts[1]) : '';

				return dollars + cents;
			}

			switch(formatString.match(placeholderRegex)[1]) {
				case 'amount':
				value = formatWithDelimiters(cents, 2);
				break;
				case 'amount_no_decimals':
				value = formatWithDelimiters(cents, 0);
				break;
				case 'amount_with_comma_separator':
				value = formatWithDelimiters(cents, 2, '.', ',');
				break;
				case 'amount_no_decimals_with_comma_separator':
				value = formatWithDelimiters(cents, 0, '.', ',');
				break;
				case 'amount_with_apostrophe_separator':
				value = formatWithDelimiters(cents, 2, "'", '.');
				break;
			}
		

			return formatString.replace(placeholderRegex, value);
			
		} catch(e) {
			console.log(e.message);
			
			// This was the original/default format
			return (cents/100).toFixed(2);
		}
	}
	};var product_variants = {
	// Retrieve product variants and execute callback with variants as a parameter
	get: function(productHandle, callback) {
		var useBasicVariants = true;
		productHandle = productHandle.replace(/#.*$/,''); // Remove any hashes from handle
		var variantUrl = getRootUrl()+'products/'+productHandle+'.js';
		var responseType = 'json';
		
		var self = this;
				
		if (useBasicVariants) {
			$.get(variantUrl, function( data ) {
				self.handleVariants(data, callback);
			},responseType).fail(function(data) {
				return false;
			});
		}
	},
	handleVariants: function(data, callback) {
		if (typeof data.variants != 'undefined') {
			var variants = data.variants;
		} else if (data.product.variants != 'undefined') {
			var variants = data.product.variants;
		} else {
			var variants = data.variants;
		}
		
		if (typeof clientSpecifics['variants_filter'] !== 'undefined') {
			variants = clientSpecifics['variants_filter'].trigger(variants);
		}
		
				
		callback(variants, data);
	},
	processVariantTemplate: function(variant) {

		var variant_name_template = "[variant_name]";
		
		var title = variant.public_title;
		
		if (title == null) {
			title = variant.name;
		}
		
								
			if (title.length > 35) {
				title = title.substr(0,31).trim()+ '...';
			}
				
		// var price = (variant.price/100).toFixed(2);
		
		variant_name_template = variant_name_template.replace('[variant_name]', title); 
		
		var price 			= variant.price;
		var convertedPrice 	= '';
		
				
		price = utils.formatMoney(price, '');
		
		variant_name_template = variant_name_template.replace('[price]', price);
		variant_name_template = variant_name_template.replace('[multi_currency_price]', convertedPrice);

		return variant_name_template;				
	}
	};var cart_actions = {
	add: function(variant_id, quantity, successCallback, failCallback, itemProps) {
		if(variant_id.length > 0 || variant_id > 0) {
			var self = this;
			
			var props = {
				quantity: quantity,
				id: variant_id
			};
			
			if (Object.keys(itemProps).length > 0) {
				props['properties'] = itemProps;
			}
			
			
			$.post(getRootUrl()+'cart/add.js', props, function(data) {
					
					self.updateCart();
					
					
					if (typeof addtc_analytics !== 'undefined') {
						addtc_analytics.track(variant_id, quantity, data);
					}
					
					
					var canTriggerProductAddedEvent = true;
					if (typeof clientSpecifics !== 'undefined' && typeof clientSpecifics['can_trigger_product_added_event'] !== 'undefined') {
						canTriggerProductAddedEvent = clientSpecifics['can_trigger_product_added_event'].get();
					}
					
					if (canTriggerProductAddedEvent) {
						try {
							document.dispatchEvent(new CustomEvent('product:added', {
								bubbles: true,
								detail: {
									variant: variant_id,
									quantity: parseInt(quantity, 10)
								}
							}));
						} catch(e) {
							console.log(e);
						}
						try {
							// Trigger ajaxProduct:added event so cart drawer in Motion theme will update
							document.dispatchEvent(new CustomEvent('ajaxProduct:added', {
								bubbles: true,
								detail: {}
							}));
						} catch(e) {
							console.log(e);
						}
					}
					
					// Trigger success callback
					successCallback(variant_id, data);

					self.successActions(variant_id, data);
					
					if (typeof clientSpecifics['after_add_to_cart'] !== 'undefined') {
						clientSpecifics['after_add_to_cart'].trigger(data);
					}
			
					
				},'json').fail(function(data) {
					// Trigger fail callback
					failCallback(data);
				});
		}
	},
	successActions: function(variant_id, data) {
					
								
		if (typeof variant_id !== 'undefined') {
			try {
				$('body').trigger('addtc_variant_added_to_cart', [variant_id]);
				
				// Update header cart
				// blowvision-fr
				if (typeof window.$ !== 'undefined' && $('[data-header-cart]').length) {
					// Trigger event with window jquery so the correct one will catch it :)
					window.$('[data-header-cart]').trigger('update', [variant_id]);
				}
			} catch(e) {}
			try {
				// Candy Rack One click upsell integration
				var btn = document.createElement('button');
				document.dispatchEvent(
					new CustomEvent('addToCartButtonClicked', {
					detail: { clonedButton: btn, hiddenButton: btn, variantId: variant_id },
					})
				);
			} catch(e) {}
		}
	},
	redirectToCheckout: function() {
		if (typeof window.bndlr !== 'undefined' && typeof window.bndlr.checkout === 'function') {
			window.bndlr.checkout();
		} else {
			window.location = getRootUrl() + 'checkout';
		}
	},
	updateCart: function(cartData, recursiveCall, initialLoad) {
		
		if (typeof initialLoad === 'undefined') {
			var initialLoad = false;
		}
		
		if ((typeof cartData === 'undefined' || cartData === null) && (typeof recursiveCall === 'undefined' || recursiveCall === null)) {
			
			var self = this;
			
			$.get(getRootUrl()+'cart.js', function(data) {
				self.updateCart(data, true, initialLoad);
			},"json");
			
			return true;
		} else {
			var data = cartData;
		}
		
		data = addtc_cart_func._fixCart(data);
		
								
				$('#addtc-sticky-cart span#addtc-sticky-cart-count').html(data.item_count);
								
				try {
					var price = data.total_price;
					price = price/100;
					price = price.toLocaleString(undefined, { style: 'currency', currency: data.currency });
					$('#addtc-sticky-cart span#addtc-sticky-cart-price').html(price);
				} catch(e) {
					console.log(e.message());
				}
		
				
					if($('.site-header__cart-indicator').length) {
				if (data.item_count > 0) {
					$('.site-header__cart-indicator').removeClass('hide');	
				}
			} else if ($('.site-header__cart').length) {
				if ($('#CartCount span').length) {
					$('#CartCount span').html(data.item_count);
					
					if (data.item_count> 0) {
						$('#CartCount.hide').removeClass('hide');
					}
				}
			} else if($('#CartCount').length) {
			
				$('#CartCount').html(data.item_count);
				
				if (data.item_count> 0) {
					$('#CartCount.hide').removeClass('hide');
				}

				if ($('#CartCost').length) {
					if ($('#CartCost').html().indexOf('¥') !== -1) {
						var price = (data.total_price/100).toFixed(0);
						price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
						$('#CartCost').html($('#CartCost').html().replace(/(\d+[\.\,]\d+)/, price));

					} else {
							var price = (data.total_price/100).toFixed(2);
							$('#CartCost').html($('#CartCost').html().replace(/(\d+[\.\,]\d+)/, price));
					}
					
					if (typeof mlvedaload === 'function') {
						mlvedaload();
					}
				}
					
			} else if($('span.CartCount').length) {
				if (data.item_count > 0) {
					$('span.CartCount').html(data.item_count);	
				}
				
				if($('span.CartCost').length) {
					if (data.total_price > 0) {
						var price = (data.total_price/100).toFixed(2);
						$('span.CartCost').html($('span.CartCost').html().replace(/(\d+[\.\,]\d+)/, price));
					}
				} 
			} 
			else if($('.cart-icon .count').length) {
				if (data.item_count > 0) {
					$('.cart-icon .count').html(data.item_count);
					$('.cart-icon .count').removeClass('hidden');	
				}
			} else if($('.cart-info a em').length) {
				if (data.item_count > 0) {
					$('.cart-info a em').html(data.item_count);	
				}
			} else if($('#satcb_sticky_cart mark').length) {
				if (data.item_count > 0) {
					$('#satcb_sticky_cart mark').html(data.item_count);	
				}
			} else if($('#cart-count').length) {

				$('#cart-count').html(data.item_count);

			} else if($('#item_count').length) {

				$('#item_count').html(data.item_count);
				
			}  else if($('.bag_count, .bag_count_mob').length) {

				$('.bag_count, .bag_count_mob').html(data.item_count);

			}  else if($('.cartsummary .numitems').length) {
				$('.cartsummary .numitems').html($('.cartsummary .numitems').html().replace(/\d+/, data.item_count));
			}  else if($('.cart-item-count-header--quantity').length) {
				$('.cart-item-count-header--quantity').html($('.cart-item-count-header--quantity').html().replace(/\d+/, data.item_count));
			} else if ($('.cart-link__bubble').length) {
				if (data.item_count > 0) {
					$('.cart-link__bubble').addClass('cart-link__bubble--visible');
				}
			}
						
		try {
			document.dispatchEvent(new CustomEvent('addtc:update_cart', {
				bubbles: true,
				detail: {
					cart: data
				}
			}));
		} catch(e) {
			console.log(e);
		}

		if(typeof addtc_cart_func != 'undefined') {
			if (typeof addtc_cart_func.updateCart == 'function') {
				addtc_cart_func.updateCart(initialLoad, cartData);
			}
		}
	}
	
};var addtc_quantity_func = {
	cname: 'addtc-pop-buttons',
	show: function($el, direction) {
		console.log('show');
		
		if (window.IS_TOUCH_DEVICE == false) {
			return;
		}
		
		var width = $el[0].getBoundingClientRect().width;

console.log('1');
		var $parent = $el.closest('div');
		if ($parent.find('.'+this.cname).length == 0) {
			var style = '';
			var html = '<div class="'+this.cname+'" style="'+style+'">';
			html += '<div class="addtc-minus-btn"></div>';
			html += '<div class="addtc-plus-btn"></div>';
			html += '</div>';
			console.log('2', html);
			$parent.append(html);
			
			var $html = $parent.find('.'+this.cname).first();
			var height = $html[0].getBoundingClientRect().height;
console.log('3', $parent);
			$html.css(direction,'-'+height+'px');
		}
	},
	init: function() {
		window.IS_TOUCH_DEVICE = false;
		window.addEventListener('touchstart', function() {
			window.IS_TOUCH_DEVICE = true;
		});
	}
};

addtc_quantity_func.init();
var addtc_analytics = {
	init: function() {
			},
	// Track add to cart event with Facebook
	track: function(productId, quantity, responseData) {

					if (typeof fbq === 'function') {
				try {
					fbq('track', 'AddToCart', {
						content_ids: [productId],
						content_type: 'product',
						contents: [{id: productId, quantity: quantity}]
					});
				} catch(e) {
					console.log(e);
					// Something went wrong
				}
			}
				
			}
};

addtc_analytics.init();

			
			var hidePopupTimeout;
			function hide_popup() {
							}
			
			function toggleAnimation(element, toggle) {
									if (toggle == false) {
						element.removeClass('gglyphicon gglyphicon-repeat addtc-fancy-spinner');
						element.removeClass('atc-contains-checkmark');
						element.addClass('gglyphicon gglyphicon-shopping-cart');
					} else {
						$('.addtc-dropdown').hide(100);
						$('.addtc-dropdown').remove();
						element.removeClass('gglyphicon gglyphicon-shopping-cart');
						element.addClass('gglyphicon gglyphicon-repeat addtc-fancy-spinner');
					}
							}
			
			function getImageUrl(element) {
				var imageUrl = element.attr('data-image');
				
				if (typeof imageUrl !== 'undefined') {
					var match = imageUrl.match(/(\/products.*)+(?=\.)/);
				}

				// Image is not the image of the product!
				if (typeof match == 'undefined' || match == null || match[0] == null || match[0].length < 2) {

					if (element.closest('.add-to-cart-quick').siblings('img').first().hasClass('lazyloaded') || element.closest('.add-to-cart-quick').siblings('img').first().hasClass('Image--lazyLoaded')) {
						var imgSrc = element.closest('.add-to-cart-quick').siblings('img').first().attr('srcset');
						imgSrc = imgSrc.match(/([^\s,]+)/);
						
						if (imgSrc !== null && imgSrc[0] !== null) {
							imgSrc = imgSrc[0];
						}
						imageUrl = imgSrc;
						
					} else if ((element.closest('.addtc-parent').find('img:visible').first().hasClass('lazyloaded') || 
						element.closest('.addtc-parent').find('img:visible').first().hasClass('Image--lazyLoaded')) && 
						typeof element.closest('.addtc-parent').find('img:visible').first().attr('srcset') != 'undefined') {
							
						var imgSrc = element.closest('.addtc-parent').find('img:visible').first().attr('srcset');
						imgSrc = imgSrc.match(/([^\s,]+)/);

						if (imgSrc !== null && imgSrc[0] !== null) {
							imgSrc = imgSrc[0];
						}
						imageUrl = imgSrc;
						
					} else if ((element.closest('.addtc-parent').find('img').first().hasClass('lazyloaded') || 
						element.closest('.addtc-parent').find('img').first().hasClass('Image--lazyLoaded')) && 
						typeof element.closest('.addtc-parent').find('img').first().attr('data-bgset') != 'undefined') {
							
						var imgSrc = element.closest('.addtc-parent').find('img').first().attr('data-bgset');
						imgSrc = imgSrc.match(/([^\s,]+)/);

						if (imgSrc !== null && imgSrc[0] !== null) {
							imgSrc = imgSrc[0];
						}
						imageUrl = imgSrc;
						
					} else if (element.closest('.addtc-parent').find('.square-image-container[style*="background-image"]').first().length) {
						// Get image from background image
						var elStyle = element.closest('.addtc-parent').find('.square-image-container[style*="background-image"]').first().attr('style');
						imgSrc = elStyle.match(/background-image:\s*url\((?:'|")([^']+)(?:'|")\)/);

						if (imgSrc !== null && imgSrc[1] !== null) {
							imgSrc = imgSrc[1];
						}
						imageUrl = imgSrc;
						
					} else if (imageUrl.indexOf('pagefly') !== -1) {
						// do nothing in order to keep the image url :)						
					} else if (element.closest('.addtc-parent').find('picture source').length && 
						typeof element.closest('.addtc-parent').find('picture source').first().attr('srcset') != 'undefined') {
						// Support for picture -> source object
							
						var imgSrc = element.closest('.addtc-parent').find('picture source').first().attr('srcset');
						imgSrc = imgSrc.match(/([^\s,]+)/);

						if (imgSrc !== null && imgSrc[0] !== null) {
							imgSrc = imgSrc[0];
						}
						imageUrl = imgSrc;
						
					} else {
						
						var imgSrc = element.closest('.add-to-cart-quick').siblings('img').first().attr('src');
						imageUrl = imgSrc;
					}
				}
				
				// No image was found. Try to find one.
				if (typeof imageUrl == 'undefined') {
					var imageUrlTmp = element.attr('data-image');
					
					var match = imageUrlTmp.match(/(shopify\.com.*)+(\/files\/.*)+(?=\.)/);

					if (match !== null && match.length == 3) {
						imageUrl = imageUrlTmp;
					}
				}
				
				// No image was found. Try to find one.
				if (typeof imageUrl == 'undefined') {
					var imageUrlTmp = element.attr('data-image');
					
					var match = imageUrlTmp.match(/(shopify\..*)+([Nn]o-[Ii]mage.*)/);

					if (match !== null && match.length == 3) {
						imageUrl = imageUrlTmp;
					}
				}
				
				// No image was found. Try to find one.
				if (typeof imageUrl == 'undefined') {
					var imageUrlTmp = element.attr('data-image');

					var match = imageUrlTmp.match(/(shopify-digital-delivery\.s3\.amazonaws\.com.*)/);

					if (match !== null && match.length == 2) {
						imageUrl = imageUrlTmp;
					}
				}
				
				if (typeof imageUrl == 'undefined') {
					imageUrl = '';
				}
				
								if (imageUrl.length === 0 || imageUrl.indexOf('no-image') !== -1) {
					// Product image is still empty string
					// Get the featured image from the product endpoint
					var backupImage = element.attr('data-product-image');
					if (typeof backupImage !== 'undefined' && backupImage !== null && backupImage.length > 0) {
						backupImage = resizeImage(backupImage, '80X80');
						imageUrl = backupImage;
					}
				} else {
					imageUrl = resizeImage(imageUrl, '80X80');
				}
				
				
				return imageUrl;
			}
			
			function showPopup(imageUrl) {
				imageUrl = imageUrl.replace("'","");
				
				var imageHtml = '<div style="background-image:url('+imageUrl+');display:none;"></div>';
				var imageHtml = $(imageHtml);

									$("#addtc-popup .addtc-image").prepend(imageHtml);
					$("#addtc-popup .addtc-image div").first().fadeIn(200);
								
				if (hidePopupTimeout) {
					clearTimeout(hidePopupTimeout); //cancel the previous timer.
				}
				
				$("#addtc-popup").animate({bottom:'5px'}
					, 800, function() {
										});

							}
			
			function showSuccess(element) {
									toggleAnimation(element, false);
								
				var imageUrl = getImageUrl(element);
				showPopup(imageUrl);				
			}

			function showFail(a,b){toggleAnimation(a,!1);var c='This product was not added to cart.';c='undefined'==typeof b.responseJSON?$.parseJSON(b.responseText).description:b.responseJSON.description,parentElement=a.closest('.addtc-parent'),warningHtml='<div class="addtc-warning" style="display:none">'+c+'</div>',$.each($('.addtc-warning'),function(d,e){$(e).remove()}),parentElement.append($(warningHtml)),$('.addtc-warning').fadeIn(500,function(){setTimeout(function(){parentElement.children('.addtc-warning').first().fadeOut(500)},4e3)})}
			
			function showProductVariants(variants, element, productHandle) {

				toggleAnimation(element, false);
				var imageUrl = element.attr('data-image');
				var variantsList = '<ul class="addtc-dropdown">';

				for (var i = 0; i < variants.length && i < 140; i++) {

					title = product_variants.processVariantTemplate(variants[i]);
					
										
										
					variantsList += '<li data-id="' + variants[i].id + '" data-handle="' + productHandle + '" title="Add to cart - '+title.replace(/(<([^>]+)>)/gi, "").replace('"','')+'"><span>'+title.replace(/ /g, '\u00a0')+'</span></li>';
				}
					
				variantsList += '</ul>';
				
				var list = $(variantsList);

				$(element).parent('.add-to-cart-quick').append(list);

				list = modifyVariantsDropdown(element, list);
				
				$('.add-to-cart-quick .addtc-dropdown li').off(); 
				$('.add-to-cart-quick .addtc-dropdown li').click(function(event) {
					event.stopImmediatePropagation();
					event.stopPropagation();
					event.preventDefault();
					
					addToCartClicked($(this).closest('ul').prev('div'), $(this).attr('data-handle'), $(this).attr('data-id'));
					
					return false;
				});
			}
			
			function modifyVariantsDropdown(element, list) {

				var parEl = $(element).closest('.addtc-parent');

				var atcAttribute = parEl.attr('data-atc-product');
				if (typeof atcAttribute !== 'undefined' && atcAttribute.length > 0) {
					// Parent element has an atc attribute. Find another parent to it, otherwise the variants won't show up at all because parent isn't high enough.
					var specialParents = [
						'.grid__item'
					];
					
					for(var i = 0; i < specialParents.length; i++) {
						if (parEl.parent().closest(specialParents[i]).length > 0) {
							parEl = parEl.parent().closest(specialParents[i]).first();
						}
					}
				}
				
								
				parElH = parEl[0].getBoundingClientRect().height;

								
				if (list.height() >= parElH) {
					var heightCss = parElH;
					if (heightCss > 0) {
						list.css({'height':heightCss});
					}
					list.children('li').css({'padding-right':'24px'});
				}
				
				var maxHeightCss = parElH;
				if (maxHeightCss > 0) {
					
										
					list.css({'max-height':maxHeightCss});
				}
				
				var maxWidthCss = parEl[0].getBoundingClientRect().width;
				if (maxWidthCss > 110) {
					list.css({'max-width':maxWidthCss});
				}
				
				return list;
			}
			
			// It doesn't seem like this function is used by anyone anymore.
			function getFormattedPrice(a,b){if(-1!==a.html().indexOf("\xA5")){var c=(b.total_price/100).toFixed(0);return c=c.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),c}var c=(b.total_price/100).toFixed(2);return c}
			
			function addToCart(element, productId, productHandle) {

				var quantity = 1;
				
								
									var itemProps = {};
					
					var $parent = element.closest('.addtc-parent');
					
					// forriststore.myshopify.com
					var $parent2 = $parent.closest('.ProductItem');
					if ($parent2.length > 0) {
						$parent = $parent2;
					}
					
					if($parent.length > 0) {
						try {
							$parent.find('input[name^="properties"]').each(function(i, prop) {
								var val 	= $(prop).val();
								var name 	= $(prop).attr('name').replace('properties[', '').replace(']', '');
								
								itemProps[name] = val;
							});
						} catch(e) {
							console.log(e);
						}
					}
					
					
					if (typeof clientSpecifics['item_props'] !== 'undefined') {
						itemProps = clientSpecifics['item_props'].get(productHandle);
					}
					
								
				cart_actions.add(productId, quantity, function(variant_id, data) {
					showSuccess(element);
					//updateCart();
					
										
											setTimeout(function() {
							animateToCart(element);
						}, 50);
										
				}, function(data) {
					showFail(element, data);
				}, itemProps);
			}
			
							function animateToCart(element, cart) {
					if (typeof cart == 'undefined') {
						var cart_classes=['#addtc-sticky-cart','.cart-toggle.mobileNavBar-link, .header-cart-btn.cart-toggle','.site-header__cart-indicator','.site-header__cart','.cart-count','#CartCount','.cart-icon .count','.cart-info a em','.header-bar__module .cart-page-link','.icon-cart .cart_count','.bag_count','.bag_count_mob','.Icon--cart','.Icon--cart-desktop', '#main-navigation-wrapper .gm-target .fa-shopping-cart', '#shopify-section-header .p-cart-head', '.cart-menu'];

												
						for(var i=0;i<cart_classes.length;i++)if($(cart_classes[i]).length)if(0<$(cart_classes[i]).offset().left){cart=$(cart_classes[i]);break}else if(0<$(cart_classes[i]).length)for(var j=0;j<$(cart_classes[i]).length;j++)if(0<$(cart_classes[i]).eq(j).offset().left){cart=$(cart_classes[i]).eq(j);break}
					}
					
					if (typeof cart == 'undefined') {
						return;
					}
					
					if (cart.length && cart.offset().left > 0) {
						
						
												
							var parent = $(element).closest('.addtc-parent');
							var imgtodrag = parent.eq(0);
							
							if (imgtodrag) {
								var imgclone = imgtodrag.clone()
									.offset({
										top: imgtodrag.offset().top,
										left: imgtodrag.offset().left
									}).css({
										'opacity': '0.5',
										'position': 'absolute',
										'height': imgtodrag.height()*0.9,
										'width': imgtodrag.width()*0.9,
										'transform': 'initial',
										'z-index': '1000',
										'padding-top':'unset'
									});
									
								imgclone.children('img').css({
									'width': imgtodrag.width()
								});

								imgclone.removeClass('animated');
								imgclone.removeClass('slide-up-animation');
								imgclone.addClass('ideas-hover');
								
								
								imgclone.css({
									'width':imgtodrag.width(), 
									'height':imgtodrag.height(),
									'display':'block',
									'min-width':'unset'
								});
								
								imgclone.addClass('addtc-animating-action');
								
								$('body').addClass('addtc-overflow-x');
								
								imgclone.appendTo($('body')).css({
									'top':cart.offset().top,
									'left': cart.offset().left - imgclone.width() + cart.width()
								});
								
								setTimeout(function() {
									imgclone.css({
										'opacity':0
									});
									
									setTimeout(function() {
										imgclone.remove();
										$('body').removeClass('addtc-overflow-x');
									}, 1000);
								}, 1000);
							}
							
												
						
					}
									}
						
						function extractProductImage(product) {
				var image = '';
				if (typeof product.featured_image !== 'undefined' && product.featured_image.length > 0) {
					image = product.featured_image;
				}
				
				return image;
			}
			
			function resizeImage(imageSrc, size) {

				if (typeof imageSrc === 'string' && imageSrc.length >  0) {
					var resizeMatches 	= imageSrc.match(/_\d+x\d+\./gi);
					var resizeMatches2 	= imageSrc.match(/\d+x\.(jpg|png|jpeg)\?/gi);
					var resizeMatches3 	= imageSrc.match(/_large\.(jpg|png|jpeg)\?/gi);
					
					if(imageSrc.indexOf('shopify') !== -1 && imageSrc.indexOf('@') === -1) {
						
						if (resizeMatches === null && resizeMatches2 === null && resizeMatches3 === null) {
						
							imageSrc = imageSrc.replace(/\.jpg\?/, "_"+size+'.jpg?');
							imageSrc = imageSrc.replace(/\.jpeg\?/, "_"+size+'.jpeg?');
							imageSrc = imageSrc.replace(/\.png\?/, "_"+size+'.png?');
							
							imageSrc = imageSrc.replace(/\.JPG\?/, "_"+size+'.JPG?');
							imageSrc = imageSrc.replace(/\.JPEG\?/, "_"+size+'.JPEG?');
							imageSrc = imageSrc.replace(/\.PNG\?/, "_"+size+'.PNG?');
						} else if (resizeMatches2 !== null) {
							imageSrc = imageSrc.replace(/\d+x\.((jpg|png))\?/gi, size+'.$2?');
						} else if (resizeMatches3 !== null) {
							imageSrc = imageSrc.replace(/_large\.((jpg|png))\?/gi, "_"+size+'.$2?');
						}
					}
				}
				
				return imageSrc;
			}
			
			//Add product to cart.
			function addToCartClicked(element, productHandle, variantId, $this) {
				console.log($(this));
				
				var productHandle 	= typeof productHandle !== 'undefined' ? productHandle : '';
				var variantId 		= typeof variantId !== 'undefined' ? variantId : null;
				
				if (variantId === null && typeof $this !== 'undefined') {
					var $swatchElement = $this.closest('[swatch-current-variant]');
					if ($swatchElement.length > 0) {
						var swatchCurrentVariant = $swatchElement.attr('swatch-current-variant');
						if (swatchCurrentVariant.length > 0) {
							swatchCurrentVariant = swatchCurrentVariant*1;
							variantId = swatchCurrentVariant;
						}
					}
				}
				
				if (element.closest('.addtc-sold-out').length && element.closest('.addtc-box-under-image').length) {
					return true;
				}
				
				if (element.filter('.addtc-dropdown').length > 0) {
					$('.addtc-dropdown').hide(100);
					$('.addtc-dropdown').remove();
					return true;
				}
				
				toggleAnimation(element, true);
				
								
								
				if (variantId !== null) {
					// This is used with variant dropdown, as data-handle actually represents the variant_id and not the product handle
					addToCart(element, variantId, productHandle);
				} else {
					
					if (productHandle.length === 0) {
						return false;
					}
					
					return product_variants.get(productHandle, function(variants, product) {
						
												try {
							var productImage = extractProductImage(product);
							if (productImage.length) {
								element.attr('data-product-image', productImage);
							}
						} catch(e) {}
						
						
												
												
													addToCart(element, variants[0].id, product.handle);	
												
					});
				}
			}
			
			function canShowAddToCart() {
									var locationUrl = window.location.href;
					var lastSegment = locationUrl.replace(getRootUrl(),'');
					lastSegment = '/' + lastSegment;

					if(lastSegment.indexOf('/cart?') >= 0 || lastSegment.match("/cart$")) {
						return false;
					}
								return true;			
			}
		
			// check if object is image of product
			function isProduct(imageObject) {
				
				var $imageObject = $(imageObject);
				
								
								
					var atcAttribute = $imageObject.attr('data-atc-product');
					if (typeof atcAttribute !== 'undefined') {
						if (atcAttribute.length > 0) {
							return atcAttribute;
						}
					}
				
				
					var excludedParents = '.quick-view,'+
									'.cart_content,.cart_item,'+
									'.cart_row,'+
									'.cart-row,'+
									'.flexslider,'+
									'.cart__row,'+
									'.cartForm,'+
									'#crt .quick-cart-item,'+
									'.slideshow-wrapper .slideshow,'+
									'.section.product_section,'+
									'.ajaxcart__product,'+
									'.snize-ac-results,'+
									'.cart-list,'+
									'#dropdown-cart,'+
									'.cart_c .cart_tbl,'+
									'.template-search .list-view-item,'+
									'.cart-preview,'+
									'#bundle-recent_sales,'+
									'.search_container form.search_form,'+
									'.search__container form.search__form,'+
									'.bkt--upsell-offer-products,'+
									'#cart_form,'+
									'.FeaturedProduct,'+
									'.rd-colour-swatch,'+
									'.ly-languages-switcher-link,'+
									'.fera-notif-popup-container,'+
									'.AddToCartForm,'+
									'.header-cart-items,'+
									'.mini-cart,'+
									'#cartform,'+
									'.cart__row,'+
									'#evm-sales-pop,'+
									'.ssw-notification-box,' +
									'.bndlr-container,' +
									'.cart-response,' +
									'.header_cart,' +
									'.mm-product-list,' +
									//'#shopify-section-cart-template,' + // shop-curls
									'.slidecarthq,' +
									'.th_pb_section,' +
									'#theme-ajax-cart,' +
									'.hs-site-cart-popup,' +
									'.cart-items,' +
									'.cart-product-item,' +
									'.cart--item,' +
									'.predictive-search,' +
									'.search-bar__results,' +
									'.boost-pfs-search-suggestion-item,' +
									'.jdgm-carousel-wrapper,' +
									'.qsc-cart-item,' +
									'#cart-drawer,' +
									'#prodNotify,' +
									'.header--mobile--recently-added,' +
									'.cart-form,' +
									//'.cart,' + //iheart-nature
									'#cart-content,' +
									'.cart__item,' +
									'#shopify-section-product--static,' +
									'.image-overlay--bg-full,' +
									'.thumbnail-swatch,' +
									'.segundaimagen,' +
									'#CartContainer,' +
									'.upsell-cart__item,' +
									'.cart__items__grid,' +
									'.product-section .page-width .product.grid,' +
									'.rebuy-cart__flyout-item, .rebuy-product-block,' +
									'.featured-product--body,' +
									'.vtl-ub-bundle-box__product-image-list,' +
									'.cart-item';
					
								
								
								
				
												
								
				
								
									
				if ($imageObject.closest(excludedParents).length) {
					return false;
				}

								
					if ($imageObject.attr('data-img-src')) {
						// for some strange themes whith lazy img loading
						var src = $imageObject.attr('data-img-src');
						
					} else if ($imageObject.attr('data-srcset')) {
						var src = $imageObject.attr('data-srcset');
						
					} else if ($imageObject.attr('srcset')) {
						var src = $imageObject.attr('srcset');
						
					} else if ($imageObject.attr('data-src')) {
						var src = $imageObject.attr('data-src');
						
					}  else if ($imageObject.attr('data-bgset')) {
						var src = $imageObject.attr('data-bgset');
						
					} else {
						var src = $imageObject.attr('src');
					}
				
				
				if(src != null) {
					
					var match = src.match(/(\/products.*)+(?=\.)/);

					if (match != null && match[0] != null && match[0].length > 2) {
						
						var link = $imageObject.closest("a");
						
						if (link.length == 0) {
							// get sibling link, because there was no parent
							var link = $imageObject.siblings('a').first();
						}
						
						if (link.length == 0) {
														link = $imageObject.closest('.product-card').find('a').first();
						}
						if (link.length == 0) {
														link = $imageObject.closest('.product-grid-item').find('a').first();
						}
						if (link.length == 0) {
														link = $imageObject.closest('.product-thumb').find('a').first();
						}
						
						if (link.length == 0) {
														link = $imageObject.closest('div[data-pf-type="MasterImage"][data-href*="products/"]');
							
							if (link.length > 0) {
								var parentLink = link.attr('data-href');
							}
						}
						if (link.length == 0) {
							link = $imageObject.closest('.type-product-grid-item').find('a').first();
						}
						
						if (link.length == 0) {
							link = $imageObject.closest('.card--media').find('a').first();
						}
						
													if (typeof parentLink === 'undefined') {
								var parentLink = $(link).attr("href");
							}
												
						parentLink += '?';

						var productHandle = parentLink.match(/\/products\/(.*?)\?/i);

						if (productHandle != null && productHandle[1] != null) {

							if(canShowAddToCart()) {
								var strippedHandle = productHandle[1].replace("products/", "");
								strippedHandle = strippedHandle.replace(/\/$/, "");
								return strippedHandle;
							}
						}
						
					} else {

						// Src is not null, but doesn't match product regex. Try to match by url.
																		
																						
								var link = $imageObject.closest("a");
								
								if (link.length == 0) {
																		link = $imageObject.closest('.product-card').find('a').first();
								}
								
								var parentLink = $(link).attr("href");
								parentLink += '?';

								var productHandle = parentLink.match(/\/products\/(.*?)\?/);

								if (productHandle != null && productHandle[1] != null) {
									if(canShowAddToCart()) {
										var strippedHandle = productHandle[1].replace("products/", "");
										return strippedHandle;
									}
								}
																		}
				} else {
					// Src is null. Usually the case with some strange image loaders
											var link = $imageObject.closest("a");
						
						var parentLink = $(link).attr("href");
						parentLink += '?';

						var productHandle = parentLink.match(/\/products\/(.*?)\?/);

						if (productHandle != null && productHandle[1] != null) {
							if(canShowAddToCart()) {
								var strippedHandle = productHandle[1].replace("products/", "");
								return strippedHandle;
							}
						}
									}

				if (typeof $imageObject.attr('href') != 'undefined') {
					var parentLink = $imageObject.attr('href');
					parentLink += '?';

					var productHandle = parentLink.match(/\/products\/(.*?)\?/);

					if (productHandle != null && productHandle[1] != null) {
						
						if(canShowAddToCart()) {
							var strippedHandle = productHandle[1].replace("products/", "");
							return strippedHandle;
						}
					}
				}
				
				if ($(imageObject).closest('.card-wrapper').find('.card-information a[href]').length === 1) {
					var parentLink = $(imageObject).closest('.card-wrapper').find('.card-information a[href]').attr('href');
					parentLink += '?';

					var productHandle = parentLink.match(/\/products\/(.*?)\?/);

					if (productHandle != null && productHandle[1] != null) {
						
						if(canShowAddToCart()) {
							var strippedHandle = productHandle[1].replace("products/", "");
							return strippedHandle;
						}
					}
				}
				
				if ($(imageObject).find('a[href].list-container').length === 1) {
					var parentLink = $(imageObject).find('a[href].list-container').attr('href');
					parentLink += '?';

					var productHandle = parentLink.match(/\/products\/(.*?)\?/);

					if (productHandle != null && productHandle[1] != null) {
						
						if(canShowAddToCart()) {
							var strippedHandle = productHandle[1].replace("products/", "");
							return strippedHandle;
						}
					}
				}
				
				if ($imageObject.attr('data-shg-product-target') === 'product-image') {
					// This is a Shogun product with lazyloading. Don't yet mark the image with the .addtc-np class
					return '--skip-for-now--';
				}

				return false;
			}

			var max_acceptable_top_offset = 110;
						
						
			function equalizeButtons(skipParent) {

				var max_top_offset = [];
				$.each($('.addtc-parent:not(.owl-item) .add-to-cart-quick'), function (key, addtc) {
					
					try {
						
						if ($(addtc).closest('.addtc-parent').hasClass('addtc-animating-action') == true) {
							// Skip this element
							return true;
						}
						
						if ($(addtc).closest('.limespot-recommendation-box-item').find('.ls-li-overlay.ls-show').length) {
							// Skip buttons on hovered limespot recomm items
							return true;
						}
						
						
						if ($(addtc).closest('#instant_search_menu').length) {
							// Skip buttons on instant search menu items
							return true;
						}
						
						if ($(addtc).closest('.addtc-parent.addtc-flex-display').length) {
							// Skip equalization on button parents which were already identified as flex display
							return true;
						}
						
						try {
							var tmpparent = $(addtc).closest('.addtc-parent')[0];
							var displayProperty = getComputedStyle(tmpparent).display;
							if (displayProperty == 'flex') {
								$(tmpparent).addClass('addtc-flex-display');
								return true;
							}
						} catch(e) {}

						
						if ($(addtc).closest('.addtc-parent').length === 0) {
							// Skip this element in case someone removed the class on the parent element
							return true;
						}
						
						var key = Math.floor($(addtc).closest('.addtc-parent').offset().top/100);
						
						var holderElement = $(addtc);
						// Buttons with quantity box have a parent element
						if ($(addtc).closest('.addtc-holder').length) {
							holderElement = $(addtc).closest('.addtc-holder');
						}
						
						if (typeof max_top_offset[key] == 'undefined') {
							max_top_offset[key] = holderElement.position().top;
						} else if (max_top_offset[key] < holderElement.position().top) {
							max_top_offset[key] = holderElement.position().top;
						}
					} catch(e) {
						console.log(e);
					}
				});

				$.each($('.add-to-cart-quick'), function (key, addtc) {
					
					try {

						if ($(addtc).closest('.addtc-parent').hasClass('addtc-animating-action') == true) {
							// Skip this element
							return true;
						}
						
						if ($(addtc).closest('.limespot-recommendation-box-item').find('.ls-li-overlay.ls-show').length) {
							// Skip buttons on hovered limespot recomm items
							return true;
						}
						
						if ($(addtc).closest('#instant_search_menu').length) {
							// Skip buttons on instant search menu items
							return true;
						}
						
						if ($(addtc).closest('.addtc-parent.addtc-flex-display').length) {
							// Skip equalization on button parents which were already identified as flex display
							return true;
						}
						
						try {
							var tmpparent = $(addtc).closest('.addtc-parent')[0];
							var displayProperty = getComputedStyle(tmpparent).display;
							if (displayProperty == 'flex') {
								$(tmpparent).addClass('addtc-flex-display');
								return true;
							}
						} catch(e) {}
						
						var holderElement = $(addtc);

						// Buttons with quantity box have a parent element
						if ($(addtc).closest('.addtc-holder').length) {
							holderElement = $(addtc).closest('.addtc-holder');
						}
						
						if (holderElement.closest('.addtc-parent').length === 0) {
							// Skip this element in case someone removed the class on the parent element
							return true;
						}
												
						if ($(addtc).closest('.swiper-wrapper .cc-animate-init:not(.cc-animate-complete)').length) {
							// Skip equalization in swiper because of some animation (chocolatetrial)
							return true;
						}
						
						if (typeof skipParent != 'undefined') {
							if (holderElement.closest('.addtc-parent').closest(skipParent).length) {
								return true;
							}
						}
						
						var key = Math.floor(holderElement.closest('.addtc-parent').offset().top/100);

						if (typeof max_top_offset[key] != 'undefined') {

							var diff = max_top_offset[key] - holderElement.position().top;

							if (diff > 0 && diff < max_acceptable_top_offset && holderElement.closest('.addtc-parent').closest('.collage-grid__row').length == 0) {
								
								var margin_top = 4 + diff;

																
								if (margin_top>0) {
									var currentMarginTop = getComputedStyle(holderElement[0]).marginTop;								
									margin_top = Math.round(margin_top*100)/100;
									var predictedValue =  margin_top + 'px';
									
									if (predictedValue !== currentMarginTop) {
										holderElement.css({"margin-top":margin_top});
									}
								}

							}
													}
					
					} catch(e) {
						console.log(e);
					}
				});
			}
			
			var loopingImgs = false;			   
			function loopThroughImages() {
									
					if (loopingImgs == true) {
						return true;
					}
					loopingImgs = true;
					var buttonWasAdded = false;
					
					var max_top_offset = [];
					
					/*
					var productImageSelectors = [
						'img',
						'.collectionBlock-image',
						'.ais-hit--title a',
						'.placeholder-svg'
					];
					*/
					
					var productImageSelectors = [
						'img, .collectionBlock-image, .ais-hit--title a, .placeholder-svg, picture, video, [data-atc-product], .product-card a.full-width-link[data-product-card-link][href], .product-grid-item .background-size-cover[data-bgset]'
					];
					
										
										
										
										
										
										
										
										
					// Loop through selectors for product images and find products
					for (var im = 0; im < productImageSelectors.length; im++) {
					
						$.each($(productImageSelectors[im]), function( index, imageObject ) {
							
																																if (//(typeof $(imageObject).attr('data-rimg') === 'undefined' || $(imageObject).attr('data-rimg') === false) && // data-rimg is a lazy image loader by pixelunion
										// When the image is not loaded, it's width will be of course 0
										$(imageObject).width() == 0) {
										return true;
									}
														
							if ($(imageObject).hasClass('addtc-np')) {
								// Skip images/elements which were already marked as not a product
								return true;
							}
							
							if ($(imageObject).hasClass('addtc-hb')) {
								// Skip images/elements which already have the add to cart button added, because the .addtc-parent class can sometimes get removed by some scripts
								return true;
							}
							
							if ($(imageObject).closest('.addtc-parent').length) {
								// Skip products that already have add to cart button
								return true;
							}
							
							if ($(imageObject).closest('.gm-item').length) {
								// Ignore these gm-items, because they slow down the app repair-grademobile
								$(imageObject).addClass('addtc-np');								
								return true;
							}
							
							var productHandle = isProduct(imageObject);

							if (productHandle != false && productHandle.indexOf('.') == -1 && productHandle !== '--skip-for-now--') {
								
								var isSoldOut = false;
								
																								
																
									var parent_classes=[
										".grid-view-item",
										".owl-item .main_box",
										".owl-item",
										".isp_grid_result",
										".snize-product",
										".product-grid-item",
										".product-item",
										".product-card.h-full",
										".grid-item",
										".search-infinite-wrapper .main_box",
										".product-index",
										'.card.card--standard.card--media',
										'#product-grid li.grid__item', // New dawn theme
										'[id*="product-grid"] div.grid__item', // New dawn theme
										'.collection li.grid__item',
										'.grid__item .card-wrapper',
										"div.card",".flickity-viewport .product-wrap",
										'article .product',
										"article, div.related-products a",".product--wrapper",".bk-product",".box.product",
										".main_box", // Added 2020-07-16 for wellingtonfresh, 2yourdoorstep-com and osolocal2uclick-collect
										".box_1",".indiv-product",".product-index",".product-car",".product-card",
										".product__grid-item", // Added 2021-07-01 onlycurls
										".product-wrap",".product:not(body)",".products .one-third.column.thumbnail",".limespot-recommendation-box-item .ls-link",".mp-product-grid",".product-grid .four-col .product-link .img-outer",".collection-matrix .grid__item",".product-grid .product-item",".ais-product",".ProductItem__Wrapper",".grid-product__content",".bkt--products-vertical",".lb-product-wrapper",".product-link .rimage-outer-wrapper",".grid__cell .product-item",".item.large--one-quarter", ".perz-item", 
										".item-content, .predictive-search-item__link, #instant_search_menu .block-products dt[data-id], #instant_search_menu .results-block .cs-item",
										".directededge-image-cell",
										".boost-pfs-search-suggestion-item-product",
										'.product-thumb',
										'.grid-product__wrapper',
										'.product--root .product--item',
										'.featured-grid--item .featured-grid--item--container',
										'.shg-category-col',
										'.boost-pfs-filter-product-item-inner',
										'form.pf-product-form',
										'.type-product-grid-item',
										'.promo-block',
										'.product--root',
										"div, li, article"];
									
									parent_classes.unshift('.grid-product-container');
									
									if (typeof window.Shopify !== 'undefined' 
										&& typeof window.Shopify.theme !== 'undefined' 
										&& typeof window.Shopify.theme.name === 'string' 
										&& window.Shopify.theme.name.indexOf('Venture') !== -1) {
										parent_classes.unshift('.grid__item');
									}
									
									
																		
																		
																		
									var parentIsImage = false;
									var atcAttribute = $(imageObject).attr('data-atc-product');
									if (typeof atcAttribute !== 'undefined') {
										var parentDiv = $(imageObject);
										parentIsImage = true;
									}
								
									if (parentIsImage === false) {
										for (var i=0; i < parent_classes.length; i++) {
											// find closest element but exclude itself
											if ($(imageObject).parent().closest(parent_classes[i]).length) {
												var parentDiv = $(imageObject).parent().closest(parent_classes[i]);
												if (parentDiv.closest('.addtc-parent').length) {
													return true;
												}
												if (parentDiv.find('.addtc-parent').length) {
													return true;
												}
												break;
											}
										}
									}
									
								
								
																	
									if ($(parentDiv).css("position") != 'absolute') {
										$(parentDiv).css({position:'relative'});
									}
									
																
								
								$(parentDiv).addClass('addtc-parent');
								
																
								var additional_class = '';
																	additional_class = 'addtc-circle';
																
								var quantity_class = 'addtc-q-circle';
																	quantity_class = 'addtc-q-circle';
																
								var imageSrc = '';
								
								if (typeof $(imageObject).attr('src') != 'undefined') {
									imageSrc = $(imageObject).attr('src');
								} else if (typeof $(imageObject).attr('data-bg-src') != 'undefined') {
									imageSrc = $(imageObject).attr('data-bg-src');
								}
								
								var button_text = 'Add to cart';
								
								var soldOutText = '';
																
								if (isSoldOut) {
																			additional_class += ' addtc-sold-out';
																	
									button_text = soldOutText;
								}
								
																	var addToCartHtml = '<div style="display:none;" title="Add to cart" class="add-to-cart-quick add-to-cart-absolute '+additional_class+'" data-handle="'+productHandle+'" tabindex="0">\
																					<div class="addtc-button addtc-noselect gglyphicon gglyphicon-shopping-cart" aria-hidden="true" data-image="'+imageSrc+'"></div>\
																			</div>';
													
								if ($(parentDiv).children('.add-to-cart-quick').length == 0) {
									
									var child = $(addToCartHtml);
									
																			$(parentDiv).append(child);
									
									child.fadeIn(1000, function () {

																			child.click(function(event) {
											event.stopImmediatePropagation();
											event.stopPropagation();
											event.preventDefault();
											
											addToCartClicked($(this).children(), $(this).attr('data-handle'), null, $(this));
											
											return false;
										});
																		
																		
									});
									
									buttonWasAdded = true;
									
									$(imageObject).addClass('addtc-hb');
								}
							} else {
								if (productHandle !== '--skip-for-now--') {
									var $imgObject = $(imageObject);
									if ($imgObject.hasClass('addtc-np') !== true) {
										$imgObject.addClass('addtc-np');
									}
								}
							}
						});
					}
					
					// After all buttons are added
										
										
										
										if (buttonWasAdded == true && typeof Flickity == 'function') {
																										window.dispatchEvent(new Event('resize'));
												
						try {
							var carousels = document.querySelectorAll('.Carousel');

							for (i = 0; i < carousels.length; ++i) {
								Flickity.data(carousels[i]).reloadCells();
							}

						} catch(e) {}
					}
					
					loopingImgs=false;
				
							}

			console.log('-------------------------------------------------');
			console.log('----------- App loaded: Add To Cart -------------');
			console.log('------ https://apps.shopify.com/add-to-cart -----');
			console.log('-------------------------------------------------');
			
						
			
			initialize();
			
			var canShowButtons = true;
						
			if (canShowButtons) {
				loopThroughImages();
				
				setTimeout(function() {
						loopThroughImages();
					}, 
				10000);
			}
			
			
			if (typeof window.addToCartListenerSet == 'undefined') {
			
			
								var $document = $(document);
				$document.on('click','.add-to-cart-quick', function(event) {
					event.stopImmediatePropagation();
					event.stopPropagation();
					event.preventDefault();
					
					addToCartClicked($(this).children(), $(this).attr('data-handle'), null, $(this));
					
					return false;
				});
				
				$document.on('keydown','.add-to-cart-quick', function(e) {

					if (e.which == 13 || e.which == 32) {
						e.stopImmediatePropagation();
						e.stopPropagation();
						e.preventDefault();
						
						addToCartClicked($(this).children(), $(this).attr('data-handle'), null, $(this));
						
						return false;
					}
				});
				
				$('.add-to-cart-quick').click(function(event) {
					event.stopImmediatePropagation();
					event.stopPropagation();
					event.preventDefault();
					
					addToCartClicked($(this).children(), $(this).attr('data-handle'), null, $(this));
					
					return false;
				});
				
				$('input.addtc-quantity-field').click(function(event) {
					event.stopImmediatePropagation();
					event.stopPropagation();
					event.preventDefault();					
					return false;
				});
				
				// Listeners for default add to cart button, quantity buttons, etc. To update the sticky cart automatically
				// listener for the default add to cart button
				$document.on('click','.product-add .add', function(event) {
					cart_actions.updateCart();
				});
				
				// listener for the default add to cart button
				// $(document).on('click','#addToCart-product-template, .add-to-cart #add, .product-page--add-to-cart, .button-wrapper #AddToCart-product-template, .product-add .add, .cart-drawer-form .cart-item-quantity-button, button.add_to_cart, .cart_row .minus_btn, .cart_row .plus_btn, .cart_row .remove_item_button', function(event) {
				// 2019-09-22 removed '.cart-drawer-form .cart-item-quantity-button' selector, as it caused to automatically update cart whenever quantity changed. No idea why exactly was this there.
				$document.on('click','#addToCart-product-template, .add-to-cart #add, .product-page--add-to-cart, .button-wrapper #AddToCart-product-template, .product-add .add, button.add_to_cart, .cart_row .minus_btn, .cart_row .plus_btn, .cart_row .remove_item_button, #AddToCart-product-template, .quantity-submit-row__submit input.button, .product-form__cart-submit, button.btn--add-to-cart', function(event) {
					setTimeout(function() {
						cart_actions.updateCart();
					}, 1000);
				});
				
								
				$('#add-to-cart-form .add-to-cart--secondary').click(function() {
					setTimeout(function() {
						cart_actions.updateCart();
					}, 1000);
				});
				
				
				$document.on('click','#addtc-popup', function(event) {
					window.location = getRootUrl()+getLanguagePath()+'cart';
				});
				
				// remove all addtc dropdowns when user clicks anywhere on the page
				$document.on('click', 'body', function(event) {
					$('.add-to-cart-quick .addtc-dropdown li').off();
					$('.add-to-cart-quick .addtc-dropdown').hide(100);
					$('.add-to-cart-quick .addtc-dropdown').remove();
					
				});
				
				
				$('.sca-qv-cartbtn-config, .product-add-to-cart .add-to-cart').click(function(){
										setTimeout(function() {
						cart_actions.updateCart();
					}, 1500);
				});
				
								$document.on('click.niceaddtc', '.quick-shop-modal-trigger', function() {
					$('.product-add-to-cart .add-to-cart').off('click.niceaddtc');
					$('.product-add-to-cart .add-to-cart').on('click.niceaddtc', function() {
						setTimeout(function() {
							cart_actions.updateCart();
						}, 1500);
					});
				});
				
				
									$document.on('click','#addtc-sticky-cart', function(event) {
						
						debounce('sticky-cart-click', function() {
							var navigationWasHandled = false;
							// Automatically open any kind of strange cart, especially for ajaxifyShopify cart -- morrisononline-com
							if ($('.header-cart-btn.cart-toggle').length == 1) {
								navigationWasHandled = true;
								$('.header-cart-btn.cart-toggle span, .header-cart-btn.cart-toggle').click();
							} else if ($('.site-header__cart.ajax-cart__toggle').length == 1) {
								// Triggering a click on jqquery object doesn't seem to work anymore
								navigationWasHandled = true;
								$('.site-header__cart.ajax-cart__toggle')[0].click();
							} else if ($('a.site-nav__link.js-drawer-open-cart').length == 1) {
								// -- keecoon-japan
								navigationWasHandled = true;
								$('a.site-nav__link.js-drawer-open-cart')[0].click();
							} else if ($('a[data-action="open-drawer"][data-drawer-id="sidebar-cart"]').length == 1) {
								// -- my-celebrity-closet
								navigationWasHandled = true;
								$('a[data-action="open-drawer"][data-drawer-id="sidebar-cart"]')[0].click();
							} else if (typeof window.SLIDECART_OPEN === 'function') {
								// Disabled on 2021-06-10 because it makes the whole page unscrollable (shop-curls)
								//window.SLIDECART_OPEN();
								
								if (typeof window.SLIDECART_STATE === 'function') {
									var scs = window.SLIDECART_STATE();
									
									if (typeof scs.settings === 'object' && typeof scs.settings.enabled === 'boolean') {
										if (scs.settings.enabled) {
											navigationWasHandled = true;
											window.SLIDECART_OPEN();
										}
									}
								}
							} else if ($('a.site-header__icon.site-header__cart[href="/cart"]').length == 1) {
								navigationWasHandled = true;
								$('a.site-header__icon.site-header__cart[href="/cart"]')[0].click();
							} else {						
								navigationWasHandled = false;
							}
							
							if (navigationWasHandled === false) {
								// fallback to default navigation
								window.location = getRootUrl()+getLanguagePath()+'cart';
							}
							
						}, 50);
					});
					
					$document.on('mouseenter','#addtc-sticky-cart', function(event) {
						$('#addtc-sticky-cart #addtc-sticky-cart-count').addClass('addtc-swing-it');
					});
					
					$document.on('mouseleave','#addtc-sticky-cart', function(event) {
						$('#addtc-sticky-cart #addtc-sticky-cart-count').removeClass('addtc-swing-it');
					});
				
								
								
							}
			
			window.addToCartListenerSet = true;
			
			var add_buttons = function() {
				
				if (typeof loopThroughImages != 'undefined') {
					if (canShowButtons) {
						loopThroughImages();
					}
				}
				return true;
			}
			return add_buttons;

		};
		 
		var alwaysUseCustomJQuery = false; 
				 
		if (alwaysUseCustomJQuery|| (typeof jQuery === 'undefined') || (parseFloat(jQuery.fn.jquery) < 1.7) || typeof jQuery.get === 'undefined') {
		  loadScript('//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js', function(){
			jQuery191 = jQuery.noConflict(true);
			_addtc_$ = jQuery191;
			addToCartButton.add_buttons = addToCart(jQuery191);
		  });
		} else {
		  _addtc_$ = jQuery;
		  addToCartButton.add_buttons = addToCart(jQuery);
		}
	};
	addToCartButton();
	
	if (typeof addToCartButton.add_buttons !== 'undefined') {
		window.addToCartButton = {
			add_buttons: addToCartButton.add_buttons
		}
		Object.freeze(window.addToCartButton);
	} else {
		// The app is disabled on this page. Create a blank function.
		window.addToCartButton = {
			add_buttons: function() {}
		}
		Object.freeze(window.addToCartButton);
	}
	
	
		
	var intervalLength = 2100;
	
	if (document.getElementById('instant_search_menu') !== null) {
		// faster refresh rate for themes with instant search menu, so we can display the buttons there fast enough
		intervalLength = 1100;
	}
	
	window.addtcInterval&&clearInterval(window.addtcInterval),window.addtcInterval=setInterval(function(){'function'==typeof addToCartButton.add_buttons&&addToCartButton.add_buttons()}, intervalLength);

	
	var addtc_cart_func = {
	_fixCart: function(cart) {
		if(window.BOLD && BOLD.common && BOLD.common.cartDoctor && typeof BOLD.common.cartDoctor.fix === 'function'){
			// Cart is the cart object
			cart = BOLD.common.cartDoctor.fix(cart);
		}
		return cart;
	},
	_routeCartUpdate: function(data, initialLoad) {
		if (typeof Shopify != 'undefined') {

			// Mini cart refresh function (dropdown cart). Usually in turbo themes
			if (_addtc_$('.cart_container a.mini_cart').length) {
				if (typeof Shopify.formatMoney == 'function') {
					_addtc_$.ajax({
						url: '/cart.js',
						dataType: 'json',
						cache: false,
						type: 'get',
						success: function(data) {
							addtc_cart_func.miniCart._updateCart(data);
							//addtcMiniCart.refreshCartNew(data);
						}
					});
				}
			}
			
			// Dropdown cart refresh function -- no idea where
			if (_addtc_$('#dropdown-cart').length) {
				if (typeof Shopify.getCart == 'function') {
					addtc_cart_func.customDropdownCart._updateCart(data);
					//addtcMiniCart.updateDropdownCart();
				}
			}
			
			if (initialLoad === false) {
				
				// Cart drawer in the Narrative theme. Theme name can be easily changed to something else.
				if (_addtc_$('.drawer').length && _addtc_$('form.cart-drawer').length && _addtc_$('.drawer-cover').length) {
					addtc_cart_func.Narrative._updateCart(data);
				}
				
				// Cart drawer refresh function. A drawer which opens on the right (not in Narrative theme). It has it's own refresh function which is super nice.
				if (typeof refreshCart == 'function') {
					refreshCart(data);
				}
				
				// Update with some kind of native Shopify function
				if (typeof Shopify.updateQuickCart === 'function') {
											Shopify.updateQuickCart(data);
									}
				
				// Update ajax cart coconut-merchant-store
				if (typeof ajaxCart != 'undefined' && typeof ajaxCart.load == 'function') {
					ajaxCart.load();
				}
				
				// A fantastic event for Impulse theme :)
									_addtc_$('body').trigger('added.ajaxProduct');
								
								
				// Update cart drawer in Envy by WeTheme theme.
				// thebowlondon-com
				if (_addtc_$('#cart-item-template').length && _addtc_$('.cart-error-box').length && _addtc_$('#cartSlideoutWrapper').length) {
					try {
						addtc_cart_func.EnvyCartDrawer._updateCart(data);
					} catch(e) {
						console.log(e.message);
					}
				}
				
				// Update sidebar Drawer which is usually in Prestige theme
				/*
				// No need to update the cart drawer anymore because it gets rerendered because of the product:added event :) 
				if (_addtc_$('#sidebar-cart.Drawer').length) {
					addtc_cart_func.sidebarDrawer._updateCart(data);
				}
				*/
				
				try {
					// Trigger event to update carrt from ES module. For some kind of Warehouse theme.
					document.documentElement.dispatchEvent(new CustomEvent('cart:refresh'));
				} catch(e) {}
				try {
					document.body.dispatchEvent(new CustomEvent('baseline:modalcart:afteradditem'))
				} catch(e) {}
				
				// Refresh and open cart from apps on demand  demand (almightee-shirts)
				if (_addtc_$('#Aod_open_cart').length > 0) {
					_addtc_$('div.cart-container a.cart-link').click();
				}

				// https://apps.shopify.com/slide-cart
				if (typeof window.SLIDECART_UPDATE !== 'undefined' && typeof window.SLIDECART_OPEN !== 'undefined') {
					window.SLIDECART_UPDATE(function(cart) {
						
												
																	});
				}
				
				if (_addtc_$('.nav-main-cart-amount.count-items').length) {
					_addtc_$('.nav-main-cart-amount.count-items').html(_addtc_$('.nav-main-cart-amount.count-items').html().replace(/\d+/, data.item_count));
					if (data.item_count>0) {
						_addtc_$('.nav-main-cart-amount.count-items').removeClass('hidden');
					}
				}
				
				if (typeof Shopify.theme !== 'undefined' && typeof Shopify.theme.jsAjaxCart !== 'undefined' && typeof Shopify.theme.jsAjaxCart.updateView !== 'undefined') {
					Shopify.theme.jsAjaxCart.updateView();
									}
				
				try {
					if (typeof HsCartDrawer !== 'undefined' && typeof HsCartDrawer.getSlideCart !== 'undefined') {
						HsCartDrawer.getSlideCart();
					}
				} catch(e) {}
				
				
				/*
				if (typeof renderCartUpdate === 'function' && typeof renderItem === 'function') {
					addtc_cart_func.cartQueueDrawer._updateCart(data);
				}
				*/
				
				if (_addtc_$('#CartDrawer').length) {
					if (typeof window.$ !== 'undefined') {
						window.$('body').trigger('updateCart', data);
					}
				}
				
				try {
					addtc_cart_func.BlockShop._updateCart(data);
				} catch(e) {
					console.log(e.message);
				}

				if (typeof CartJS !== 'undefined' && typeof CartJS.getCart === 'function') {
					// Avone theme
					CartJS.getCart();
				}
				
				if (typeof Cart !== 'undefined' && typeof Cart.buildCart === 'function') {
					Cart.buildCart(data);
				}
				
				if (typeof window.theme !== 'undefined' && typeof window.theme.ajaxCart !== 'undefined' && typeof window.theme.ajaxCart.update === 'function') {
					window.theme.ajaxCart.update();
				}
				
				// Express theme
				if (typeof window.carts !== 'undefined' && window.carts.length > 0 && _addtc_$('#CartDrawer').length > 0 && _addtc_$('.stage.stage--cart').length > 0 && _addtc_$('.stage__overlay[data-popup-close]').length > 0) {
					addtc_cart_func.Express._updateCart(data);
				}
				
				if (typeof AT_AddCart !== 'undefined' && typeof AT_AddCart.addToCartSuccess === 'function') {
					try {
						AT_AddCart.addToCartSuccess();
					} catch(e) {}
				}
				
				
				if (typeof window.Shopify !== 'undefined' && 
					typeof window.Shopify.theme !== 'undefined' && 
					typeof window.Shopify.theme.jsAjaxCart !== 'undefined' && 
					typeof window.Shopify.theme.jsAjaxCart.updateView === 'function' && 
					typeof window.Shopify.theme.jsAjaxCart.showDrawer === 'function'		
				) {
					Shopify.theme.jsAjaxCart.updateView();
					Shopify.theme.jsAjaxCart.showDrawer();
				}
				
				if (typeof window.Obsidian !== 'undefined' &&
					typeof window.Obsidian.CartApi !== 'undefined' &&
					typeof window.Obsidian.CartApi.getCart === 'function' &&
					typeof window.Obsidian.Upsell !== 'undefined' &&
					typeof window.Obsidian.Upsell.reprintCart === 'function' &&
					typeof window.Obsidian.Upsell.open === 'function') {
						try {
							window.Obsidian.CartApi.getCart().then(window.Obsidian.Upsell.reprintCart.bind(window.Obsidian.Upsell)).then(function () {
								window.Obsidian.Upsell.open()
							}.bind(window.Obsidian.Upsell));
						} catch(e) {
							console.log(e.message);
						}
				}
				
				if (typeof window.nm_easywholesale_custom_script_after_add === 'function') {
					try {
						window.nm_easywholesale_custom_script_after_add();
					} catch(e) {}
				}
			}
			
			// Update ajaxify cart
			if (_addtc_$('#ajaxifyCart form.cart-form').length) {
				addtc_cart_func.ajaxifyCart._updateCart(data);
			}
			
			
			
			// rose-petal-jewelry.myshopify.com
			if (_addtc_$('.g-stickycart-wrapper .g-stickycart-count').length) {
				_addtc_$('.g-stickycart-wrapper .g-stickycart-count').html(_addtc_$('.g-stickycart-wrapper .g-stickycart-count').html().replace(/\d+/, data.item_count));
				if (data.item_count>0) {
					_addtc_$('.g-stickycart-wrapper .g-stickycart-count').css({'display':'block'});
				}
			}
			
			
			// Update quick cart in Grid themes
			if (_addtc_$('.mini-cart-item-wrapper').length && _addtc_$('[data-product-success-labels]').length) {
				try {
					addtc_cart_func.gridMiniCart._updateCart(data);
				} catch(e) {
					console.log(e.message);
				}
			}
			
			// Update site cart
			if (_addtc_$('#site-cart .cart-items').length) {
				try {
					addtc_cart_func.siteCart._updateCart(data);
				} catch(e) {
					console.log(e.message);
				}
			}			
		}		
	},
	_updateCartCounterToZero: function() {
		if (_addtc_$('.cart-count').length > 0) {
			_addtc_$('.cart-count').html('');
		}
		
		// Make the cart icon empty (oneoseven.myshopify.com)
		if (_addtc_$('[data-cart-render="item_count"] path.cls-2').length > 0) {
			_addtc_$('[data-cart-render="item_count"] path.cls-2').attr("class", "cls-1");
		}
	},
	_updateCartCounter: function(data) {
		if(_addtc_$('div#header.mobile-header a.icon-cart.cart-button span').length) {
			_addtc_$('div#header.mobile-header a.icon-cart.cart-button span').html(_addtc_$('div#header.mobile-header a.icon-cart.cart-button span').html().replace(/(\d+)/, data.item_count));
		}
		
		if (_addtc_$('ul.menu li a.icon-cart.cart-button').length) {
			if (_addtc_$('ul.menu li a.icon-cart.cart-button .cart_count').length)  {
				_addtc_$('ul.menu li a.icon-cart.cart-button .cart_count').html(_addtc_$('ul.menu li a.icon-cart.cart-button .cart_count').html().replace(/(\d+)/, data.item_count));
			} else if (_addtc_$('ul.menu li a.icon-cart.cart-button span').length)  {
				_addtc_$('ul.menu li a.icon-cart.cart-button span').html(_addtc_$('ul.menu li a.icon-cart.cart-button span').html().replace(/(\d+)/, data.item_count));
			} else {
				_addtc_$('ul.menu li a.icon-cart.cart-button').prepend('<div class="cart_count">'+data.item_count+'</div>');
			}
		}
		
		if(_addtc_$('.icon-cart .cart_count').length) {
			_addtc_$('.icon-cart .cart_count').html(data.item_count);
		}
		
		if(_addtc_$('#CartToggleItemCount').length) {
			_addtc_$('#CartToggleItemCount').html(_addtc_$('#CartToggleItemCount').html().replace(/(\d+)/, data.item_count));
		}
		
		if (_addtc_$('.sd_procounter').length) {
			_addtc_$('.sd_procounter').html(_addtc_$('.sd_procounter').html().replace(/(\d+)/, data.item_count));
		}
		
		if (_addtc_$('.header-cart__count.header-cart__count--badge.badge').length) {
			_addtc_$('.header-cart__count.header-cart__count--badge.badge').html(_addtc_$('.header-cart__count.header-cart__count--badge.badge').html().replace(/(\d+)/, data.item_count));
			_addtc_$('.header-cart.action-area__link').addClass('has-cart-count');
		}
		
		if (_addtc_$('.cart_button .cart_count').length) {
			_addtc_$('.cart_button .cart_count').html(data.item_count);
		}
		
		if(_addtc_$('#cart_count').length) {
			_addtc_$('#cart_count').html(data.item_count);
		}
		
		if(_addtc_$('#cartToggle #cart-count').length) {
			_addtc_$('#cartToggle #cart-count').html(data.item_count);
		}

		if(_addtc_$('#summary-total').length) {
			var price = this.getFormattedPrice(_addtc_$('#summary-total'), data);
			_addtc_$('#summary-total').html(_addtc_$('#summary-total').html().replace(/(\d+[\.\,]\d+)/, price));
			
			if (_addtc_$('#summary-items-count').length) {
				_addtc_$('#summary-items-count').html(_addtc_$('#summary-items-count').html().replace(/(\d+)/, data.item_count));
			}
		}

		if (_addtc_$('.Header__CartDot').length) {
			_addtc_$('.Header__CartDot').toggleClass('is-visible', true);
		}
		
		
		if (_addtc_$('.cart-count .beside-svg').length) {
			_addtc_$('.cart-count .beside-svg').html(_addtc_$('.cart-count .beside-svg').html().replace(/(\d+)/, data.item_count));
		}
		
		if (_addtc_$('.cart-summary .cart-count .cart-count__text').length) {
			_addtc_$('.cart-summary .cart-count .cart-count__text').html(_addtc_$('.cart-summary .cart-count .cart-count__text').html().replace(/(\d+)/, data.item_count));
		}

		if (_addtc_$('.Header__CartCount').length) {
			_addtc_$('.Header__CartCount').html(_addtc_$('.Header__CartCount').html().replace(/(\d+)/, data.item_count));
		}
		
		if (_addtc_$('.header__cart-count').length) {
			_addtc_$('.header__cart-count').html(_addtc_$('.header__cart-count').html().replace(/(\d+)/, data.item_count));
		}
		
		// Cart update for Showcase theme
		if (_addtc_$('#site-control a.cart div').length && _addtc_$('#site-control a.cart span.text-link').length) {
			_addtc_$('#site-control a.cart div').html(_addtc_$('#site-control a.cart div').html().replace(/(\d+)/, data.item_count));
		} else if (_addtc_$('#site-control a.cart span.text-link').length) {
			_addtc_$('#site-control a.cart').append('<div>'+data.item_count+'</div>');
		}
		
		if (_addtc_$('.cart-count').length && _addtc_$('.cart-count .beside-svg').length == 0 && _addtc_$('.cart-summary .cart-count .cart-count__text').length == 0) {
			if (_addtc_$('.cart-count').html().length) {
				_addtc_$('.cart-count').html(_addtc_$('.cart-count').html().replace(/(\d+)/, data.item_count));
			} else {
				_addtc_$('.cart-count').html(data.item_count);
			}
			_addtc_$('.cart-count').removeClass('hidden-count');
		}
		
		
		// Make the cart icon full (oneoseven.myshopify.com)
		if (_addtc_$('[data-cart-render="item_count"] path.cls-1').length > 0) {
			_addtc_$('[data-cart-render="item_count"] path.cls-1').attr("class", "cls-2");
		}
		
		if (_addtc_$('.site-cart-handle .count-holder .count').length) {
			_addtc_$('.site-cart-handle .count-holder .count').html(_addtc_$('.site-cart-handle .count-holder .count').html().replace(/(\d+)/, data.item_count));
		}
		if (_addtc_$('.header--supporting-text .cart-item-count-header--quantity').length) {
			_addtc_$('.header--supporting-text .cart-item-count-header--quantity').html(_addtc_$('.header--supporting-text .cart-item-count-header--quantity').html().replace(/(\d+)/, data.item_count));
		}
		
		// Update cart number for cart from apps on demand (almightee-shirts)
		if (_addtc_$('#Aod_open_cart').length > 0 && _addtc_$('div.cart-container a.cart-link span.number-wrapper span.number').length > 0) {
			var $el = _addtc_$('div.cart-container a.cart-link span.number-wrapper span.number')
			$el.html($el.html().replace(/(\d+)/, data.item_count));
			// Remove hide class and display the counter
			_addtc_$('div.cart-container a.cart-link span.number-wrapper.hide').removeClass('hide');
		}
		
		if (_addtc_$('.cart-icon .cartCount').length) {
			_addtc_$('.cart-icon .cartCount').html(_addtc_$('.cart-icon .cartCount').html().replace(/\d+/, data.item_count));
		}
		if (_addtc_$('#basketCount').length) {
			_addtc_$('#basketCount').html(_addtc_$('#basketCount').html().replace(/\d+/, data.item_count));
		}
		
		if (_addtc_$('.number-wrapper .cart--external--total-items').length) {
			_addtc_$('.number-wrapper .cart--external--total-items').html(_addtc_$('.number-wrapper .cart--external--total-items').html().replace(/\d+/, data.item_count));
			if (data.item_count > 0) {
				_addtc_$('span.number-wrapper').css('display', 'inline');
			}
		}
		
		if(_addtc_$('.cart-item-count-header--total .money').length) {
			// jims-home-fresh
			var price = this.getFormattedPrice(_addtc_$('.cart-item-count-header--total .money'), data);
			_addtc_$('.cart-item-count-header--total .money').html(_addtc_$('.cart-item-count-header--total .money').html().replace(/(\d+[\.\,]\d+)/, price));
		}
		
		
		if(_addtc_$('.cartCost').length && typeof slate !== 'undefined' && typeof slate.Currency !== 'undefined' && typeof slate.Currency.formatMoney === 'function' && typeof theme.moneyFormat === 'string') {
			var newTotal = slate.Currency.formatMoney(data.total_price, theme.moneyFormat);
           _addtc_$('.cartCost').html("(<span class='money'>" + newTotal + "</span>)").removeClass('hidden-count');
		}

		if (_addtc_$('.header-tools-cart.cart-contents-dot').length && data.item_count > 0) {
			_addtc_$('.header-tools-cart.cart-contents-dot').addClass('cart-has-content');
		}
		if (_addtc_$('[data-cart-count]').length && data.item_count > 0) {
			_addtc_$('[data-cart-count]').html(_addtc_$('[data-cart-count]').html().replace(/\d+/, data.item_count)).removeClass('hidden-count');
		}
		
		
		if (_addtc_$('.header-controls__cart-count').length && data.item_count > 0) {
			_addtc_$('.header-controls__cart-count').html('('+data.item_count+')');
		}
		if (_addtc_$('.site-header__cart-bubble').length && data.item_count > 0) {
			_addtc_$('.site-header__cart-bubble').html(data.item_count);
		}
		if (_addtc_$('.cart-button__count').length && data.item_count > 0) {
			_addtc_$('.cart-button__count').html(data.item_count);
		}
		
		 
		if(_addtc_$('.cart-button__total').length) {
			var price = this.formatMoney(data.total_price);
			_addtc_$('.cart-button__total').html(price);
		}
		
		if (typeof fsb_get_bars === 'function') {
			fsb_get_bars();
		}
		
	},
	getFormattedPrice: function(a, b) {
		// Parameter a is the already existing formatted price (e.g. $2.99)
		// Parameter b is the cart object, which contains the total cart price.
		// The function returns the total price, rounded to either 2 or 0 decimals. It rounds to 0 decimals if the formatter price contains the JPY currency symbol.
		if(-1!==a.html().indexOf("\xA5")){
			var c=(b.total_price/100).toFixed(0);return c=c.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),c
		}
		var c=(b.total_price/100).toFixed(2);
		return c;
	},
	formatMoney: function(cents, format) {
		
		if (typeof theme.moneyFormat === 'undefined') {
			var moneyFormat = Shopify.currency.active+' {{amount}}'; // Set default money format as a fallback
		} else {
			var moneyFormat = theme.moneyFormat;
		}
		
		if (typeof cents === 'string') {
			cents = cents.replace('.', '');
		}
		var value = '';
		var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
		var formatString = (format || moneyFormat);

		function formatWithDelimiters(number, precision, thousands, decimal) {
			if (precision === null || precision === undefined) {
				precision = 2;
			}
			thousands = thousands || ',';
			decimal = decimal || '.';

			if (isNaN(number) || number == null) {
				return 0;
			}

			number = (number / 100.0).toFixed(precision);

			var parts = number.split('.');
			var dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
			var centsAmount = parts[1] ? (decimal + parts[1]) : '';

			return dollarsAmount + centsAmount;
		}

		switch (formatString.match(placeholderRegex)[1]) {
			case 'amount':
				value = formatWithDelimiters(cents, 2);
				break;
			case 'amount_no_decimals':
				value = formatWithDelimiters(cents, 0);
				break;
			case 'amount_with_comma_separator':
				value = formatWithDelimiters(cents, 2, '.', ',');
				break;
			case 'amount_no_decimals_with_comma_separator':
				value = formatWithDelimiters(cents, 0, '.', ',');
				break;
			case 'amount_no_decimals_with_space_separator':
				value = formatWithDelimiters(cents, 0, ' ');
				break;
		}
		return formatString.replace(placeholderRegex, value).replace(".00", "");
	},
	updateCart: function(initialLoad, cartData) {
		
		if (typeof initialLoad === 'undefined') {
			initialLoad = false;
		}

		var timestamp = '0';
		if (!Date.now) {
			timestamp = new Date().getTime();
		} else {
			timestamp = Date.now();
		}
		
		if (typeof cartData === 'undefined' || cartData === null) {
			_addtc_$.ajax({
				url: '/cart.js',
				dataType: 'json',
				cache: false,
				type: 'get',
				data: {
					_t : timestamp
				},
				success: function(data) {
					this._success(data, initialLoad);
					/*
					data = this._fixCart(data);
					
					if(data.items.length > 0) {
													this._updateCartCounter(data);
												
													this._routeCartUpdate(data, initialLoad);
											}
					*/
					
				}.bind(this)
			});
		} else {
			this._success(cartData, initialLoad);
		}
	},
	_success: function(data, initialLoad) {
		data = this._fixCart(data);

		if(data.items.length > 0) {
							this._updateCartCounter(data);
						
							this._routeCartUpdate(data, initialLoad);
					} else {
			this._updateCartCounterToZero();
		}
	},
	init: function() {
		if (typeof Shopify != 'undefined' && typeof _addtc_$ !== 'undefined') {
			if (Shopify.theme.name == 'Narrative') {
				addtc_cart_func.Narrative._init();
			}
		}
	}
};

/*
// Some weird drawer which processes add to cart actions via queue
// pump-hair-products
addtc_cart_func.cartQueueDrawer = {
	_updateCart: function(data) {
		if (typeof renderCartUpdate === 'function' && typeof renderItem === 'function' && typeof Shopify !== 'undefined' && typeof Shopify.formatMoney === 'function' && _addtc_$('.cart-drawer-items').length > 0) {
			// renderCartUpdate uses renderItem function. Both functions should be available on window model. 
			if(data['items'].length > 0) {
				$('.cart-drawer-items-empty').addClass('hidden');
				$('.cart-drawer-items').html(renderCartUpdate(data['items']));
				$('.cart-drawer-contents-container').height($('.cart-drawer').height()-$('.cart-drawer-heading').outerHeight());
			} else {
				$('.cart-drawer-items-empty').removeClass('hidden');
				$('.cart-drawer-items').html('');
				$('.cart-drawer-contents-container').height($('.cart-drawer').height()-$('.cart-drawer-heading').outerHeight());
			}

			_addtc_$('.bag-count').text(data['item_count']);

			_addtc_$('.cart-drawer-subtotal-amount').html(Shopify.formatMoney(data['total_price'], "<span class=money>${{amount}} AUD</span>"));
			var itemText = data['item_count'] + ' item';
			if(data['item_count'] !== 1) {
				itemText = itemText + 's';
			}
			_addtc_$('.cart-drawer-item-count').text(itemText);

			if(typeof trigger_messages == 'function'){
				trigger_messages();
			}
		}
	}
}
*/


// Update cart in Grid themes
addtc_cart_func.gridMiniCart = {
	_updateCart: function(cart) {
		_addtc_$('.mini-cart').removeClass('empty');
		var miniCartItemWrapper = _addtc_$('.mini-cart-item-wrapper');
		var labels = JSON.parse(_addtc_$('[data-product-success-labels]').html());

		miniCartItemWrapper.empty();
		_addtc_$('[data-cart-count]').html("<span class=\"cart-count-text\">\n          ".concat(labels.cartHeaderText, "</span>\n          (<span class=\"cart-count-number\">").concat(cart.item_count, "</span>)"));

		for (var i = 0; i < cart.items.length; i++) {
		  var item = cart.items[i];
		  var price = Shopify.formatMoney(item.price, Theme.moneyFormat);
		  var image = item.image != null ? item.image : labels.cartPlaceholderImg;
		  miniCartItemWrapper.append("<article\n            class=\"mini-cart-item\"\n            data-variant=\"".concat(item.variant_id, "\"\n            data-url=\"").concat(item.url, "\"\n            data-title=\"").concat(item.title, "\">\n            <figure class=\"mini-cart-item-image\">\n              <a href=\"").concat(item.url, "\">\n                <img alt=\"").concat(item.title, "\" src=\"").concat(image, "\">\n              </a>\n            </figure>\n            <div class=\"mini-cart-item-details\">\n              <p class=\"mini-cart-item-quantity\">\n                ").concat(labels.cartQuantityText, ": <span>").concat(item.quantity, "</span>\n              </p>\n              <p class=\"mini-cart-item-title\">\n                <a href=\"").concat(item.url, "\">").concat(item.title, "</a>\n              </p>\n              <p class=\"mini-cart-item-price\">\n                <span class=\"money\">").concat(price, "</span>\n              </p>\n            </div>\n          </article>"));
		}

		var currencySwitcher = _addtc_$('[data-currency-converter]');
		var currencyValue = currencySwitcher.val(); // This is required to get around currency converter issues
		// when updating quantity and cart prices

		return currencySwitcher.val(Theme.currency).trigger('reset-currency').val(currencyValue).trigger('reset-currency');
	}
}


// Update cart drawer in Narrative theme
addtc_cart_func.Narrative = {
	_updateCart: function(data) {
		this._native(data);
	},
	_init: function() {
		this._native([], false);
	},
	_native: function(data, update) {
		if (typeof update == 'undefined') {
			update = true;
		}
		
		_c = {
			preload: function (t, e) {
				'string' == typeof t && (t = [
				t
				]);
				for (var n = 0; n < t.length; n++) {
				var i = t[n];
				this.loadImage(this.getSizedImageUrl(i, e))
				}
			},
			loadImage: function (t) {
				(new Image).src = t
			},
			switchImage: function (t, e, n) {
				var i = this.imageSize(e.src),
				r = this.getSizedImageUrl(t.src, i);
				n ? n(r, t, e)	: e.src = r
			},
			imageSize: function (t) {
				t = t || '';
				var e = t.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\\.@]/);
				return null !== e ? e[1] : null
			},
			getSizedImageUrl: function (t, e) {
				if (null === e) return t;
				if ('master' === e) return this.removeProtocol(t);
				var n = t.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);
				if (null !== n) {
				var i = t.split(n[0]),
				r = n[0];
				return this.removeProtocol(i[0] + '_' + e + r)
				}
				return null
			},
			removeProtocol: function (t) {
				return t.replace(/http(s)?:/, '')
			}
		},
		wc = {
			itemId: 'data-cart-item-id',
			cartItemLineNumber: 'data-cart-item-line-number'
		},
		Sc = {
			ajaxCart: '.cart-drawer',
			itemList: '[data-cart-item-list]',
			item: '[data-cart-item]',
			itemId: '[data-cart-item-id]',
			itemHref: '[data-cart-item-href]',
			itemImage: '[data-cart-item-image]',
			itemBackgroundImage: '[data-cart-item-background-image]',
			itemTitle: '[data-cart-item-title]',
			itemVariantTitle: '[data-cart-item-variant-title]',
			itemPropertyList: '[data-cart-item-property-list]',
			itemProperty: '[data-cart-item-property]',
			itemDiscountList: '[data-cart-item-discount-list]',
			itemDiscount: '[data-cart-item-discount]',
			itemLabelQuantity: '[data-cart-item-label-quantity]',
			itemInputQuantity: '[data-cart-item-input-quantity]',
			itemDelete: '[data-cart-item-delete]',
			itemPrice: '[data-cart-item-price], .cart-item__original-price.cart-item__price', // added clas for compatiblity with newer Narrative theme
			itemMessage: '[data-item-message]',
			itemOriginalPrice: '[data-cart-item-original-price]',
			itemLinePrice: '[data-cart-item-line-price]',
			cartNoteContainer: '[data-cart-note-container]',
			cartNoteInput: '[data-cart-note]',
			cartMessage: '[data-cart-message]',
			cartTotalDiscountContainer: '[data-cart-total-discount-container]',
			cartTotalDiscount: '[data-cart-total-discount]',
			cartSubtotal: '[data-cart-subtotal]',
			cartSubmit: '[data-cart-submit]',
			cartItemLineNumber: '[data-cart-item-line-number]'
		},
		xc = {
			cartTemplate: 'ajax-cart__template',
			cartItemRemove: 'ajax-cart__item--remove',
			cartError: 'ajax-cart--error',
			visuallyHidden: 'visually-hidden',
			cartDiscountActive: 'ajax-cart__discount-container--active',
			btnLoaderActive: 'btn--loader-active'
		},
		Ac = {
			cartTemplate: 'template-cart',
			cartEmpty: 'cart-drawer--empty',
			cartNoCookies: 'cart-drawer--no-cookies'
		};
		bc = {
			formatMoney: function (t, e) {
				function xn(t, e) {
					return null == t || t !== t ? e : t
				}
				function n(t, e, n, i) {
					if (e = xn(e, 2), n = xn(n, ','), i = xn(i, '.'), isNaN(t) || null === t) return 0;
					t = (t / 100).toFixed(e);
					var r = t.split('.');
					return r[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + n) + (r[1] ? i + r[1] : '')
				}
				'string' == typeof t && (t = t.replace('.', ''));
				var i = '',
				r = /\{\{\s*(\w+)\s*\}\}/,
				o = e || '$';
				switch (o.match(r) [1]) {
					case 'amount':
						i = n(t, 2);
						break;
					case 'amount_no_decimals':
						i = n(t, 0);
						break;
					case 'amount_with_comma_separator':
						i = n(t, 2, '.', ',');
						break;
					case 'amount_no_decimals_with_comma_separator':
						i = n(t, 0, '.', ',');
						break;
					case 'amount_no_decimals_with_space_separator':
						i = n(t, 0, ' ');
						break;
					case 'amount_with_apostrophe_separator':
						i = n(t, 2, '\'')
				}
				return o.replace(r, i)
			}
		},
		Cc = {
			init: function () {
				
				if (typeof addtc_cart_func.Narrative.template == 'undefined') {
				
					this.$container = _addtc_$('.drawer');
					this.$ajaxCart = _addtc_$(Sc.ajaxCart, this.$container);
					this.$itemTemplate = _addtc_$(Sc.item, this.$container).first().clone();
					this.$propertyTemplate = _addtc_$(Sc.itemProperty, this.$container).first().clone();
					this.$discountTemplate = _addtc_$(Sc.itemDiscount, this.$container).first().clone();
					
					addtc_cart_func.Narrative.template = {
						$container 			: this.$container,
						$ajaxCart 			: this.$ajaxCart,
						$itemTemplate 		: this.$itemTemplate,
						$propertyTemplate 	: this.$propertyTemplate,
						$discountTemplate	: this.$discountTemplate
					};
				} else {
					this.$container 		= addtc_cart_func.Narrative.template.$container;
					this.$ajaxCart 			= addtc_cart_func.Narrative.template.$ajaxCart;
					this.$itemTemplate 		= addtc_cart_func.Narrative.template.$itemTemplate;
					this.$propertyTemplate 	= addtc_cart_func.Narrative.template.$propertyTemplate;
					this.$discountTemplate 	= addtc_cart_func.Narrative.template.$discountTemplate;
				}
			},
			_createCart: function (t) {
				//this.$ajaxCart.toggleClass(Ac.cartEmpty, 0 === t.items.length);
				_addtc_$('.site-header__cart-bubble').toggleClass('site-header__cart-bubble--visible', 0 !== t.items.length);
				
				var e = this.$container.clone();
				
				e.find(Sc.ajaxCart).toggleClass(Ac.cartEmpty, 0 === t.items.length);
				
				return e.removeClass(xc.cartError),
				_addtc_$(Sc.cartMessage, e).text(''),
				_addtc_$(Sc.item, e).not(Sc.cartNoteContainer).remove(),
				_addtc_$(Sc.itemList, e).prepend(this._createItemList(t)),
				_addtc_$(Sc.cartNoteInput, e).val(t.note),
				_addtc_$(Sc.cartTotalDiscountContainer, e).toggleClass(xc.cartDiscountActive, 0 !== t.total_discount),
				_addtc_$(Sc.cartTotalDiscount, e).html(bc.formatMoney(t.total_discount, theme.moneyFormat)),
				_addtc_$(Sc.cartSubtotal, e).html(bc.formatMoney(t.total_price, theme.moneyFormat)),
				_addtc_$(Sc.cartSubmit, e).attr('disabled', 0 === t.items.length),
				e
			},
			_createItemList: function (t) {
				return _addtc_$.map(t.items, function (t, index) {
				var e = this.$itemTemplate.clone().removeClass(xc.cartTemplate),
				n = this._createPropertyList(t),
				i = this._createDiscountList(t);
				
				try {
					// Set line number
					e.attr(wc.cartItemLineNumber, index+1);
				} catch(e) {
					
				}
				
				return e.find(Sc.itemId).addBack(Sc.itemId).attr(wc.itemId, t.key),
				_addtc_$(Sc.itemHref, e).attr('href', t.url),
				_addtc_$(Sc.itemImage, e).attr('src', t.image ? _c.getSizedImageUrl(t.image, 'medium')	: '').toggleClass('hide', 'string' != typeof t.image),
				_addtc_$(Sc.itemBackgroundImage, e).css('background-image', t.image ? 'url(' + _c.getSizedImageUrl(t.image, 'medium') + ')' : 'none'),
				_addtc_$(Sc.itemTitle, e).text(t.product_title),
				_addtc_$(Sc.itemVariantTitle, e).text(t.variant_title),
				_addtc_$(Sc.itemPrice, e).html(bc.formatMoney(t.discounted_price, theme.moneyFormat)),
				_addtc_$(Sc.itemOriginalPrice, e).html(t.discounted_price === t.price ? '' : bc.formatMoney(t.original_price, theme.moneyFormat)),
				_addtc_$(Sc.itemLinePrice, e).html(bc.formatMoney(t.line_price, theme.moneyFormat)),
				_addtc_$(Sc.itemLabelQuantity, e).attr('for', 'quantity_' + t.key),
				_addtc_$(Sc.itemInputQuantity, e).attr('name', 'updates[' + t.key + ']'),
				_addtc_$(Sc.itemInputQuantity, e).attr('id', 'quantity_' + t.key),
				_addtc_$(Sc.itemInputQuantity, e).val(t.quantity),
				_addtc_$(Sc.itemInputQuantity, e).attr('value',t.quantity),
				_addtc_$(Sc.itemInputQuantity, e).prop('value',t.quantity),
				_addtc_$(Sc.itemPropertyList, e).html(n),
				_addtc_$(Sc.itemDiscountList, e).html(i),
				_addtc_$(Sc.cartItemLineNumber, e).attr(wc.cartItemLineNumber, index),
				e[0]
				}.bind(this))
			},
			_createPropertyList: function (t) {
				return _addtc_$.map(t.properties, function (t, e) {
				var n = this.$propertyTemplate.clone().removeClass(xc.cartTemplate);
				if ('_' !== e.charAt(0) && '' !== t) return - 1 === t.indexOf('/uploads/') ? n.text(e + ': ' + t)	: n.html(e + ': <a href="' + t + '">' + t.split('/').pop() + '</a>'),
				n[0]
				}.bind(this))
			},
			_createDiscountList: function (t) {
				return _addtc_$.map(t.discounts, function (t) {
				var e = this.$discountTemplate.clone().removeClass(xc.cartTemplate);
				return e.text(t.title),
				e[0]
				}.bind(this))
			}
		}
		
		Cc.init();
		if (update == true) {
			// Copies the drawer and adds cart items
			var drawer = Cc._createCart(data);
			// Sets drawer content to the copied drawer
			_addtc_$('.drawer').html(drawer.html());
		}
	}
};



// Update cart drawer in Narrative theme
addtc_cart_func.Express = {
	_updateCart: function(data) {
		try {
			if (typeof window.carts !== 'undefined') {
				window.carts.forEach(function(cart) {
					cart.onNewItemAdded(); // We should pass product_id, but there is no need for it, as the cart gets updated even without it
				});
			}
		} catch(e) {
			console.log(e);
		}
	}
};



// Mini cart refresh function (dropdown cart). Usually in turbo themes
// beyond-the-scrubs
addtc_cart_func.miniCart = {
	_updateCart: function(cart) {
		_addtc_$(".cart_count").empty();
		$cartBtn = _addtc_$(".cart_count");
		var value = $cartBtn.text() || '0';
		var cart_items_html = "";
		var cart_action_html = "";
		var cart_savings_html = "";
		var $cart = _addtc_$(".cart_content form");
		var discounted_price_total = 0;
		var total_savings = 0;

		
					$cartBtn.text(value.replace(/[0-9]+/, cart.item_count));
				
		
		if (cart.item_count == 0) {
			_addtc_$('.js-empty-cart__message').removeClass('hidden');
			_addtc_$('.js-cart_content__form').addClass('hidden');
		} else {
			_addtc_$('.js-empty-cart__message').addClass('hidden');
			_addtc_$('.js-cart_content__form').removeClass('hidden');

			_addtc_$.each(cart.items, function(index, item) {
				var line_id = index + 1;
				cart_items_html += '<li class="cart_item clearfix">' + '<a href="' + item.url + '">';
				if (item.image) {
					cart_items_html += '<div class="cart_image">' + '<img src="' + item.image.replace(/(\.[^.]*)$/, "_compact$1").replace('http:', '') + '" alt="' + addtc_cart_func.miniCart.htmlEncode(item.title) + '" />' + '</div>';
				}

				
				cart_items_html += '<div class="cart_item__title"><div class="item_title">' + item.title;
				//cart_items_html += '<strong class="right price">';
				//cart_items_html += '<span class="money">' + Shopify.formatMoney(item.price, $cart.data('money-format')) + '</span></strong>' + '<div class="item_title">' + item.title;

				if (item.properties) {
					_addtc_$.each(item.properties, function(title, value) {
						if (value) {
							cart_items_html += '<div class="line-item">' + title + ': ' + value + '</div>';
						}
					});
				}

				cart_items_html += '</div></a>';

				cart_items_html += '<div class="left product-quantity-box">' +
					'<span class="ss-icon product-minus js-change-quantity" data-func="minus"><span class="icon-minus"></span></span>' +
					'<input type="number" min="0" class="quantity" name="updates[]" id="updates_' + item.id + '" value="' + item.quantity +'" data-line-id="' + line_id +'" />' +
					'<span class="ss-icon product-plus js-change-quantity" data-func="plus"><span class="icon-plus"></span></span>' +
				  '</div>' +
				'</div>';
				
				
				/*
				cart_items_html += '<div class="left product-quantity-box">' + '<span class="ss-icon product-minus js-change-quantity" data-func="minus"><span class="icon-minus"></span></span>'
				+ '<input type="number" min="0" class="quantity" name="updates[]" id="updates_' + item.id + '" value="' + item.quantity + '" data-line-id="' + line_id + '" />' + 
				'<span class="ss-icon product-plus js-change-quantity" data-func="plus"><span class="icon-plus"></span></span>' + '</div>' + '</li>';*/

				cart_items_html += '<strong class="right price">';
				
				cart_items_html += '<span class="money">' + Shopify.formatMoney(item.price, $cart.data('money-format')) + '</span></strong>' + '</div>';
				
			});

			cart_action_html += '<span class="right"><span class="money">' + Shopify.formatMoney(cart.total_price, $cart.data('money-format')) + '</span></span>' + '<span>Subtotal</span>';

			if (total_savings > 0) {
				cart_savings_html = '<span class="right"><span class="money">' + Shopify.formatMoney(total_savings - discounted_price_total, $cart.data('money-format')) + '</span></span>' + '<span>Total Savings</span>';
			} else {
				cart_savings_html = "";
			}
		}

		_addtc_$('.js-cart_items').html(cart_items_html);
		_addtc_$('.js-cart_subtotal').html(cart_action_html);
		_addtc_$('.js-cart_savings').html(cart_savings_html);
		
		if (window.Currency && typeof Currency.convertAll === 'function' && Shopify.currency.active) {
			Currency.convertAll(Shopify.currency.active, $('[name=currencies]:visible option:selected').val()); 
		}

	},
	htmlEncode: function(value) {
		if (value) {
			return _addtc_$('<div/>').text(value).html();
		} else {
			return '';
		}
	}
}

// Update custom dropdown cart (not from Narrative theme)
addtc_cart_func.customDropdownCart = {
	_updateCart: function(data) {
		_addtc_$('#dropdown-cart .cart-empty').css({'display':'none'});
		_addtc_$('#dropdown-cart .mini_cart_header').css({'display':'block'});
		
		if (_addtc_$("#dropdown-cart .mini-products-list").length && data.item_count > 0) {
			_addtc_$('#dropdown-cart .no-items').css({'display':'none'});
			_addtc_$('#dropdown-cart .has-items').css({'display':'block'});
		}
		
		this.doUpdateDropdownCart(data);
		this.updateTotalCartCount(data);
	},
	doUpdateDropdownCart: function(n) {
		if (_addtc_$("#dropdown-cart .mini-products-list").length) {
			// tan-luxe
			var cart = '<li class="item" id="cart-item-{ID}"><a href="{URL}" title="{TITLE}" class="product-image"><img src="{IMAGE}" alt="{TITLE}"></a><div class="product-details"><a href="javascript:void(0)" title="Remove This Item" class="btn-remove">X</a><p class="product-name"><a href="{URL}">{TITLE}</a></p><div class="option"><small>{VARIANT_TITLE}</small></div><div class="cart-collateral">{QUANTITY} x <span class="price">{PRICE}</span></div></div></li>';
		} else {
			var cart = '<li class="item" id="cart-item-{ID}"><a href="{URL}" title="{TITLE}" class="product-image"><img src="{IMAGE}" alt="{TITLE}"></a><div class="product-inner"><a href="javascript:void(0)" title="Remove Item" class="btn-remove"><i class="clever-icon-close"></i></a><p class="product-name"><a href="{URL}">{TITLE}</a></p><div class="cart-collateral"><span class="price">{PRICE}</span>Qty:  {QUANTITY}</div></div></li>';
		}
		_addtc_$("#cart-count").text(n.item_count);
		_addtc_$("#cartCount").text(n.item_count);
		
		_addtc_$("#cartToggle .price-cart-mini").html(Shopify.formatMoney(n.total_price, window.money_format));
		_addtc_$("#dropdown-cart .summary .price").html(Shopify.formatMoney(n.total_price, window.money_format));
		
		_addtc_$("#dropdown-cart .cart-list").html(""); 			// clearing the existing cart items
		_addtc_$("#dropdown-cart .mini-products-list").html(""); 	// clearing the existing cart items

		if (n.item_count > 0) {
			for (var i = 0; i < n.items.length; i++) {
				var s = cart;
				
				var variantTitle =  n.items[i].variant_title;
				if (variantTitle == null) {
					variantTitle = '';
				}
				
				s = s.replace(/\{ID\}/g, n.items[i].id);
				s = s.replace(/\{URL\}/g, n.items[i].url);
				s = s.replace(/\{TITLE\}/g, n.items[i].title);
				s = s.replace(/\{VARIANT_TITLE\}/g, variantTitle);
				s = s.replace(/\{QUANTITY\}/g, n.items[i].quantity);
				s = s.replace(/\{IMAGE\}/g, Shopify.resizeImage(n.items[i].image, "small"));
				s = s.replace(/\{PRICE\}/g, Shopify.formatMoney(n.items[i].price, window.money_format));
				
				if (_addtc_$("#dropdown-cart .mini-products-list").length) {
					_addtc_$('#dropdown-cart .mini-products-list').append(s);
				} else {
					_addtc_$("#dropdown-cart .cart-list").append(s);
				}
				
			}
			_addtc_$("#dropdown-cart .btn-remove").click(function(n) {
				n.preventDefault();
				var cart = _addtc_$(this).parents(".item").attr("id");
				cart = cart.match(/\d+/g);
				Shopify.removeItem(cart , function(e) {
					addtc_cart_func.customDropdownCart.doUpdateDropdownCart(e);
					addtc_cart_func.customDropdownCart.updateTotalCartCount(e);
				})
			});
			if (addtc_cart_func.customDropdownCart.checkNeedToConvertCurrency()) {
				//Currency.convertAll(window.shop_currency, jQuery('#currencies .currency.selected').data('currency'), "#dropdown-cart span.money", "money_format")
			}
		}
	},
	checkNeedToConvertCurrency: function() {
		return window.show_multiple_currencies && Currency.currentCurrency != shopCurrency
	},
	updateTotalCartCount: function(data) {
		if (_addtc_$('#wrapper-count-cart').length) {
			_addtc_$('#wrapper-count-cart').html(_addtc_$('#wrapper-count-cart').html().replace(/\d+/, data.item_count));
		}
	}
}

// Update sidebar drawer, usually in Prestige theme -- wholesale-party-of-one
// NOT USED ANYMORE
addtc_cart_func.sidebarDrawer = {
	_updateCart: function(data) {
		addtc_cart_func.sidebarDrawer._rerenderCart();
	},
	_replaceContent: function (e) {
		var t = document.createElement('div');
		t.innerHTML = e;
		var body = document;
		//window.theme.currencyConversionEnabled && sidebarDrawer.convertAll(t);
		var n = body.querySelector('.Cart').parentNode;

		var i = body.querySelector('.Drawer__Main').scrollTop;
		n.replaceChild(t.querySelector('.Cart'), body.querySelector('.Cart')),
		body.querySelector('.Drawer__Main').scrollTop = i
		
		if (_addtc_$('[data-action="open-drawer"][data-drawer-id="sidebar-cart"]').length && _addtc_$('#sidebar-cart.Drawer[aria-hidden="true"]').length > 0) {
			// Make sure to only trigger the click event when the drawer is closed
			// It can already be open because of the product:added event :) 
			_addtc_$('[data-action="open-drawer"][data-drawer-id="sidebar-cart"]')[0].click();
		}
		
	},
	_rerenderCart: function (e) {
		fetch('/cart?view=drawer' + '&timestamp=' + Date.now(), {
			credentials: 'same-origin',
			method: 'GET'
		}).then(function (drawerContent) {
			drawerContent.text().then(function (e) {
				addtc_cart_func.sidebarDrawer._replaceContent(e)
			});
		});
	}
}


// Update site cart  --greenday-singapore
addtc_cart_func.siteCart = {
	_updateCart: function(data) {
		addtc_cart_func.siteCart._rerenderCart(data);
	},
	_rerenderCart: function (cartData) {
		var $ = _addtc_$;
		$.ajax({
			url: '/cart',
			success: function(data) {

				$('#site-cart .cart-items').html($(data).find('#site-cart .cart-items .cart-item'));
				$('#CartTotal').html($(data).find('#CartTotal').html());
				$('#CartDetails').html($(data).find('#CartDetails').html());

				$('#site-cart .cart-holder').attr('data-items', $(data).find('#site-cart .cart-holder').data('items'));

				if (typeof window.sidebarCartAjaxFunctions !== 'undefined') {
					window.sidebarCartAjaxFunctions();
				}
				
				$('#site-cart .subtitle').html($('#site-cart .subtitle').html().replace(/(\d+)/, cartData.item_count));
				// $('.site-cart-handle a').trigger('click');
			}
		});
	}
}


// Update cart drawer (blockshop theme). flormar-lebanon
addtc_cart_func.BlockShop = {
	_updateCart: function(data) {
		if (typeof window.theme !== 'undefined' && 
			typeof window.theme.partials !== 'undefined' && 
			typeof window.theme.partials.Cart !== 'undefined' && 
			typeof window.theme.partials.Cart.updateAllHtml !== 'undefined') {
		
			theme.partials.Cart.updateAllHtml(function () {});
			
			if (data.items.length > 0) {
				_addtc_$('.cart--root[data-has-items="false"]').attr('data-has-items', 'true');
			}
		}
	}
}


// Update cart drawer in Envy by WeTheme theme.
addtc_cart_func.EnvyCartDrawer = {
	_updateCart: function(data) {
		if (typeof window.wetheme !== 'undefined' && typeof window.wetheme.updateCartDrawer !== 'undefined') {
			window.wetheme.updateCartDrawer(data);
		} else {
			addtc_cart_func.EnvyCartDrawer.updateCartDrawer(data);
		}
	},
	updateCartDrawer: function(data) {
		_addtc_$('.cart-error-box').text('');
		
		if (data.items.length === 0) {
            _addtc_$('.cart-empty-box,.ajax-cart--total-price').removeClass('hide');
            _addtc_$('.ajax-cart--total-price,.cart-button-checkout,.additional-checkout-buttons').addClass('hide');
        } else {
            _addtc_$('.cart-empty-box').addClass('hide');
            _addtc_$('.ajax-cart--total-price,.cart-button-checkout,.additional-checkout-buttons').removeClass('hide');
        }
		

		var template = _addtc_$('#cart-item-template').html();
		var $cart_items = _addtc_$('.cart-items');
		var oldItems = $cart_items.html();
		try {
			$cart_items.empty();
			data.items.forEach(function (item, index) {
				var $cart_item = _addtc_$(template);
				if (item.image) {
					$cart_item.find('.cart-item-image').attr({
						src: item.image,
						alt: item.product_title,
					});
				} else {
					$cart_item.find('.cart-item-image').css('display', 'none');
				}
				$cart_item.find('.cart-item-link').attr({
					href: item.url,
				});
				$cart_item.find('.cart-item-product-title').text(item.product_title);
				$cart_item.find('.cart-item-variant-title').text(item.variant_title);
				$cart_item.find('.cart-item-price').html(addtc_cart_func.EnvyCartDrawer.formatMoney(item.line_price));
				var quantity = $cart_item.find('.cart-item-quantity');
				var quantity_wrapepr = quantity.closest('.cart-item--quantity-wrapper');
				
				var update_quantity = function (quantity) {
					quantity_wrapepr.addClass('cart-item-quantity-active');
					var fade = quantity <= 0;
					var delay = fade ? 800 : 0;
					addtc_cart_func.EnvyCartDrawer.cart_set_quantity(delay).always(function () {
						quantity_wrapepr.removeClass('cart-item-quantity-active');
						if (fade) {
							$cart_item.addClass('fadeOut animated fast');
							setTimeout(function () {
								$cart_item.remove();
							}, 800);
						}
					});
				};
				quantity.on('change', function () {
					var new_q = parseInt(_addtc_$(this).val(), 10);
					update_quantity(new_q);
				});
				
				quantity.val(item.quantity);
				quantity.attr('name', 'updates[' + item.variant_id + ']');

				$cart_item.find('.cart-item-quantity-button').on('click', function () {
					var current = parseInt(quantity.val(), 10);
					var change = parseInt(this.dataset.amount, 10);
					var new_q = current + change;
					quantity.val(new_q);
					update_quantity(new_q);
				});
				$cart_item.appendTo($cart_items);
			});

			_addtc_$('.cart-item-count, .cart-item-count-header--quantity').text(data.item_count);
			_addtc_$('.cart-item-total-price, .cart-item-count-header--total').html(addtc_cart_func.EnvyCartDrawer.formatMoney(data.total_price));
		} catch(e) {
			console.log(e);
			console.log('Something went wrong. Reverting cart items');
			$cart_items.html(oldItems);
		}
		
		if (window.Currency && typeof Currency.convertAll === 'function' && Currency.shopCurrency) {
			Currency.convertAll(Currency.shopCurrency, $('[name=currencies]').val());
		}
	},
	formatMoney: function(cents, format) {
		
		if (typeof theme === 'undefined') {
			// wilde-lash
			var theme = addtc_cart_func.EnvyCartDrawer.get_theme_globals();
		}
		
		if (typeof theme.moneyFormat === 'undefined') {
			var moneyFormat = Shopify.currency.active+' {{amount}}'; // Set default money format as a fallback
		} else {
			var moneyFormat = theme.moneyFormat;
		}
		
		if (typeof cents === 'string') {
			cents = cents.replace('.', '');
		}
		var value = '';
		var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
		var formatString = (format || moneyFormat);

		function formatWithDelimiters(number, precision, thousands, decimal) {
			if (precision === null || precision === undefined) {
				precision = 2;
			}
			thousands = thousands || ',';
			decimal = decimal || '.';

			if (isNaN(number) || number == null) {
				return 0;
			}

			number = (number / 100.0).toFixed(precision);

			var parts = number.split('.');
			var dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
			var centsAmount = parts[1] ? (decimal + parts[1]) : '';

			return dollarsAmount + centsAmount;
		}

		switch (formatString.match(placeholderRegex)[1]) {
			case 'amount':
				value = formatWithDelimiters(cents, 2);
				break;
			case 'amount_no_decimals':
				value = formatWithDelimiters(cents, 0);
				break;
			case 'amount_with_comma_separator':
				value = formatWithDelimiters(cents, 2, '.', ',');
				break;
			case 'amount_no_decimals_with_comma_separator':
				value = formatWithDelimiters(cents, 0, '.', ',');
				break;
			case 'amount_no_decimals_with_space_separator':
				value = formatWithDelimiters(cents, 0, ' ');
				break;
		}
		return '<span class="money">' + formatString.replace(placeholderRegex, value).replace(".00", "") + '</span>';
	},
	cart_set_quantity: function(delay) {
		var deferred = _addtc_$.Deferred();

		_addtc_$('.cart-error-box').text('');

		_addtc_$.ajax({
			type: "POST",
			url: '/cart/update.js',
			dataType: 'json',
			data: _addtc_$('.cart-drawer-form').serialize(),
		})
			.then(function (data) {
				deferred.resolve();
				setTimeout(function () {
					addtc_cart_func.EnvyCartDrawer.updateCartDrawer(data);
				}, delay);
			})
			.fail(function (jqXHR, textStatus, errorThrown) {
				deferred.reject();
				console.error('Cart error', textStatus, jqXHR, errorThrown);
				$('.cart-error-box').empty().text('Unable to update item quantity');
			});

		return deferred;
	},
	get_theme_globals: function() {
        var globalEl = document.querySelector('#wetheme-global');
        if (!globalEl) {
            console.warn('Script #wetheme-global with global definitions not found');
            return;
        }

        var global;
        try {
            global = JSON.parse(globalEl.textContent);
        } catch (e) {
            console.warn('Invalid syntax in #wetheme-global', e);
            return;
        }
        return global;
    }
}

// Update ajaxify cart -- morrisononline-com
addtc_cart_func.ajaxifyCart = {
	_updateCart: function(data) {
		addtc_cart_func.ajaxifyCart._rerenderCart();
	},
	_replaceContent: function (htmlContent) {
		var t = document.createElement('div');
		t.innerHTML = htmlContent;

		var body = document;

		var n = body.getElementById('ajaxifyCart');

		n.innerHTML = t.querySelector('form.cart-form').parentNode.innerHTML;
		
		addtc_cart_func.ajaxifyCart._createQtySelectors();
		addtc_cart_func.ajaxifyCart._updateQuantityEvents();
		addtc_cart_func.ajaxifyCart._updateDrawerHeight();
		
	},
	_rerenderCart: function (e) {
		fetch('/cart' + '?timestamp=' + Date.now(), {
			credentials: 'same-origin',
			method: 'GET'
		}).then(function (cartContent) {
			cartContent.text().then(function (htmlContent) {
				addtc_cart_func.ajaxifyCart._replaceContent(htmlContent);
			});
		});
	},
	_updateDrawerHeight: function() {
			
			if (_addtc_$("#ajaxifyDrawer.ajaxify-drawer.is-visible").length == 0) {
				return true;
			}
			
			$drawerHeight = _addtc_$('#ajaxifyCart').outerHeight();
			_addtc_$('.cart-row img').css('width', 'auto'); // chrome image size bug
			_addtc_$('#ajaxifyDrawer').css('height',  $drawerHeight + 'px');
	},
	_createQtySelectors: function() {
		
		if (_addtc_$("#ajaxifyQty").length == 0 && typeof Handlebars == 'undefined') {
			return true;
		}
		
		// If there is a normal quantity number field in the ajax cart, replace it with our version
		if (_addtc_$('input[type="number"]', _addtc_$('#ajaxifyCart')).length) {
			_addtc_$('input[type="number"]', _addtc_$('#ajaxifyCart')).each(function() {
				var el = _addtc_$(this),
				currentQty = parseInt(el.val());

				var itemAdd = currentQty + 1,
				  itemMinus = currentQty - 1,
				  itemQty = currentQty + ' x';

				var source = _addtc_$("#ajaxifyQty").html(),
				  template = Handlebars.compile(source),
				  data = {
					line: el.attr('data-line'),
					itemQty: itemQty,
					itemAdd: itemAdd,
					itemMinus: itemMinus
				  };

				// Append new quantity selector then remove original
				el.after(template(data)).remove();
			});
		}

		// If there is a regular link to remove an item, add attributes needed to ajaxify it
		if (_addtc_$('a[href^="/cart/change"]', _addtc_$('#ajaxifyCart')).length) {
			_addtc_$('a[href^="/cart/change"]', _addtc_$('#ajaxifyCart')).each(function() {
				var el = _addtc_$(this).addClass('ajaxifyCart--remove');
			});
		}
	},
	isUpdating: false,
	validateQty: function (qty) {
		if((parseFloat(qty) == parseInt(qty)) && !isNaN(qty)) {
			// We have a valid number!
			return qty;
		} else {
			// Not a number. Default to 1.
			return 1;
		}
	},
	_updateQuantityEvents: function() {

		if (_addtc_$("#ajaxifyQty").length == 0) {
			return true;
		}
	
		if (addtc_cart_func.ajaxifyCart.isUpdating) {
			return;
		}
		
		// Update quantify selectors
		var qtyAdjust = _addtc_$('.ajaxifyCart--qty span');

		// Add or remove from the quantity
		qtyAdjust.off('click');
		qtyAdjust.on('click', function() {

		  var el = _addtc_$(this),
			  line = el.data('line'),
			  qtySelector = el.siblings('.ajaxifyCart--num'),
			  qty = parseInt( qtySelector.val() );

		  qty = addtc_cart_func.ajaxifyCart.validateQty(qty);

		  // Add or subtract from the current quantity
		  if (el.hasClass('ajaxifyCart--add')) {
			qty = qty + 1;
		  } else {
			qty = qty <= 0 ? 0 : qty - 1;
		  }

		  // If it has a data-line, update the cart.
		  // Otherwise, just update the input's number
		  if (line) {
			updateQuantity(line, qty);
		  } else {
			qtySelector.val(qty);
		  }

		});

		// Update quantity based on input on change
		var qtyInput = _addtc_$('.ajaxifyCart--num');
		qtyInput.off('change');
		qtyInput.on('change', function() {
		  if (addtc_cart_func.ajaxifyCart.isUpdating) {
			return;
		  }

			var el = _addtc_$(this),
				line = el.data('line'),
				qty = el.val();

		  // Make sure we have a valid integer
		  if( (parseFloat(qty) == parseInt(qty)) && !isNaN(qty) ) {
			// We have a number!
		  } else {
			// Not a number. Default to 1.
			el.val(1);
			return;
		  }

		  // If it has a data-line, update the cart
		  if (line) {
			updateQuantity(line, qty);
		  }
		});

		// Highlight the text when focused
		qtyInput.off('focus');
		qtyInput.on('focus', function() {
		  var el = _addtc_$(this);
		  setTimeout(function() {
			el.select();
		  }, 50);
		});

		// Completely remove product
		_addtc_$('.ajaxifyCart--remove').on('click', function(e) {
		  var el = _addtc_$(this),
			  line = el.data('line') || null,
			  qty = 0;

		  // Without a data-line, let the default link action take over
		  if (!line) {
			return;
		  }

		  e.preventDefault();
		  updateQuantity(line, qty);
		});

		function updateQuantity(line, qty) {
		  addtc_cart_func.ajaxifyCart.isUpdating = true;

		  // Add activity classes when changing cart quantities
		  /*if (!settings.useCartTemplate) {
			var row = _addtc_$('.ajaxifyCart--row[data-line="' + line + '"]').addClass('ajaxifyCart--is-loading');
		  } else {
			var row = _addtc_$('.cart-row[data-line="' + line + '"]').addClass('ajaxifyCart--is-loading');
		  }*/
		  var row = _addtc_$('.cart-row[data-line="' + line + '"]').addClass('ajaxifyCart--is-loading');

		  if ( qty === 0 ) {
			row.addClass('is-removed');
		  }

		  // Slight delay to make sure removed animation is done
		  setTimeout(function() {
			Shopify.changeItem(line, qty, function() {
				addtc_cart_func.ajaxifyCart.isUpdating = false;
				addtc_cart_func.ajaxifyCart._rerenderCart();
			});
		  }, 250);
		}

		// Save note anytime it's changed
		var noteArea = _addtc_$('textarea[name="note"]');
		noteArea.off('change');
		noteArea.on('change', function() {
		  var newNote = _addtc_$(this).val();

		  // Simply updating the cart note in case they don't click update/checkout
		  Shopify.updateCartNote(newNote, function(cart) {});
		});

		if (window.Shopify && Shopify.StorefrontExpressButtons) {
		  Shopify.StorefrontExpressButtons.initialize();
		}
	}
}

addtc_cart_func.init();	addtc_cart_func = Object.freeze(addtc_cart_func);
	
})();

		
	
	