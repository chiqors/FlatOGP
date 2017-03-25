	var mainColor = "398bba";  // here you can set Default Theme Color HEX (without #)
	var PickerTheme = "dark";   // there are 2 Themes for Color Picker: light and dark
jQuery(document).ready(function ($) {
	var customElements = ' #datetime, .datetime > ul, table.tablesorter thead tr .headerSortDown, table.tablesorter thead tr .headerSortUp, table.tablesorter thead tr th, table.tablesorter tfoot tr th, h4, .dragbox h4.collapse, .login_title, h2';
	var customText = ' ';
	var customBorderLeft = '';
	var customBorderTop = " .main-content";
	var HoverBackground = ' .login_button:hover, .monitorbutton tr td:hover, input[type="submit"], button, .administration-buttons div:hover';
	var HoverText = ' #content a:link, #content a:visited, input[type="submit"]:hover, button:hover, .login_button:hover';
	var HoverBorderLeft = '.menu > ul > li > a:hover, .menu > ul > li:hover > a, .user_menu_link_selected, .admin_menu_link_selected';
	var HoverBorderBottom = ' tr.maintr.even, tr.maintr.odd, tr.expand-child.odd, tr.expand-child.even';
	var HoverBorder = 'input[type="text"]:focus,input[type="password"]:focus,textarea:focus,input[type="text"]:hover,input[type="password"]:hover,textarea:hover,input[type="submit"]:hover,button:hover, input[type="submit"], button, table.tablesorter, table.tablesorter tfoot td';
  $('#colorpicker').colpick({
	  color: (mainColor),
	  colorScheme: (PickerTheme),
	  onBeforeShow: function () {
      $(this).colpickSetColor($.cookie('customcolor'))
    },
	onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            return false;
    },
	onHide: function (colpkr) {
            $(colpkr).fadeOut(500);
			return false;
	},
    onSubmit: function (hsb, perm_hex, rgb, temp_hex) {
      $(temp_hex).val(perm_hex);
      $(temp_hex).css('backgroundColor', '#' + perm_hex);
      $(customElements).css('background-color', '#' + perm_hex);
      $(customText).css('color', '#' + perm_hex);
	  $(customBorderLeft).css('border-left-color', '#' + perm_hex);
	  $(customBorderTop).css('border-top-color', '#' + perm_hex);
	  $('head').append('<style>' + HoverText + '{color:#' + perm_hex + ';}'+ HoverBackground + '{background-color:#' + perm_hex + ' !important;}' + HoverBorderLeft + '{border-left-color:#' + perm_hex + ' !important;}' + HoverBorderBottom + '{border-bottom-color:#' + perm_hex + ' !important;}' + HoverBorder + '{border-color:#' + perm_hex + '!important;}</style>');
      $.cookie('customcolor', perm_hex,{ expires: 365, path: '/'});
	  },
    onChange: function (hsb, temp_hex, rgb) {
      $(customElements).css('background-color', '#' + temp_hex);
      $(customText).css('color', '#' + temp_hex);
	  $(customBorderLeft).css('border-left-color', '#' + temp_hex);
	  $(customBorderTop).css('border-top-color', '#' + temp_hex);
	  $('head').append('<style>' + HoverText + '{color:#' + temp_hex + ';}'+ HoverBackground + '{background-color:#' + temp_hex + ' !important;}' + HoverBorderLeft + '{border-left-color:#' + temp_hex + ' !important;}' + HoverBorderBottom + '{border-bottom-color:#' + temp_hex + ' !important;}' + HoverBorder + '{border-color:#' + temp_hex + '!important;}</style>');
      }
  }).bind('keyup', function () {
    $(this).colpickSetColor(this.value)
  });
  if (($.cookie('customcolor') != null)) {
    $(customElements).css('background-color', '#' + $.cookie('customcolor'));
    $(customText).css('color', '#' + $.cookie('customcolor'));
	$(customBorderLeft).css('border-left-color', '#' + $.cookie('customcolor'));
	$(customBorderTop).css('border-top-color', '#' + $.cookie('customcolor'));
	  $('head').append('<style>' + HoverText + '{color:#' + $.cookie('customcolor') + ';}'+ HoverBackground + '{background-color:#' + $.cookie('customcolor') + ' !important;}' + HoverBorderLeft + '{border-left-color:#' + $.cookie('customcolor') + ' !important;}' + HoverBorderBottom + '{border-bottom-color:#' + $.cookie('customcolor') + ' !important;}' + HoverBorder + '{border-color:#' + $.cookie('customcolor') + '!important;}</style>');
      $('#colorpicker').val($.cookie('customcolor'))
  } else {
    $(customElements).css('background-color', '#' + (mainColor));
    $(customText).css('color', '#' + (mainColor));
	$(customBorderLeft).css('border-left-color', '#' + (mainColor));
	$(customBorderTop).css('border-top-color', '#' + (mainColor));
	$('head').append('<style>' + HoverText + '{color:#' + (mainColor) + ';}'+ HoverBackground + '{background-color:#' + (mainColor) + ' !important;}' + HoverBorderLeft + '{border-left-color:#' + (mainColor) + ' !important;}' + HoverBorderBottom + '{border-bottom-color:#' + (mainColor) + ' !important;}' + HoverBorder + '{border-color:#' + (mainColor) + '!important;}</style>');
      }
	$(".reset_hex").click(function () {
    $(customElements).css('background-color', '#' + (mainColor));
    $(customText).css('color', '#' + (mainColor));
	$(customBorderLeft).css('border-left-color', '#' + (mainColor));
	$(customBorderTop).css('border-top-color', '#' + (mainColor));
	$('head').append('<style>' + HoverText + '{color:#' + (mainColor) + ';}'+ HoverBackground + '{background-color:#' + (mainColor) + ' !important;}' + HoverBorderLeft + '{border-left-color:#' + (mainColor) + ' !important;}' + HoverBorderBottom + '{border-bottom-color:#' + (mainColor) + ' !important;}' + HoverBorder + '{border-color:#' + (mainColor) + '!important;}</style>');
     $.cookie('customcolor', (mainColor), { expires: 365, path: '/'});
    });
	
	
});
