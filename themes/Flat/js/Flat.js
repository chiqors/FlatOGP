//	Output date and time.
var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();

var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();

var suffix = "AM";

if (minutes < 10)
	minutes = "0" + minutes;


if (hours >= 12) {
	suffix = "PM";
	hours = hours - 12;
}

if (hours == 0) {
	hours = 12;
}

document.write("<b class='mmddyyyy'>" + month + "/" + day + "/" + year + "</b><b class='ddmmyyyy'>" + day + "/" + month + "/" + year + "</b>");
document.write("   |   <b>" + hours + ":" + minutes + " " + suffix + "</b>");

/* Login */
jQuery(function($){
	if((window.location.href.indexOf("index.php") != -1 && window.location.href.indexOf("index.php?") == -1 ) || $('input[name=ulogin]').length != false) {
		var username_text = $("div.bloc table tbody tr:first td:first").html().replace(':','');
		var pass_text = $("div.bloc > form > table > tbody > tr:nth-child(2) > td:first").html().replace(':','');
	
		/* Login Elements */
		$("div.main-content").attr('style', 'box-shadow: none;')//Remove unwanted Shadow effect
		$('div.bloc h4').addClass('login_header'); //Adds classes to main-content
		$("div.main-content > table").removeAttr("style"); //Removes style from table.
		$("div.main-content > table").attr('align', 'center');//Center it.
		$("div.main-content > table").attr('style', 'padding: 0px 10px 1px 10px;margin-top: 80px;'); //Removes style from table + droping it little down..
		$("input[name=login]").addClass('login_button');//Adding class
		$("div.bloc > form > table > tbody > tr:first").appendTo("div.bloc > form > table > tbody");//droping language tr down.
		$("div.bloc > form > table > tbody > tr:last").find('td').contents().unwrap();//Removing all Td tags
		$("div.bloc > form > table > tbody > tr:last").contents().wrapAll("<span style='float: left;'></span>");//Wrapping who td with that.
		$("div.bloc > form > table > tbody > tr:last").append("<span class='forgotp' style='float: right;'></span>");
		$("div.bloc > form > table > tbody > tr:last").contents().wrapAll("<td>");
		$("div.bloc > form > table > tbody > tr td > a").appendTo("div.bloc > form > table > tbody > tr:last > td > span.forgotp");
		$("div.bloc > form > table > tbody > tr:nth-child(3)").appendTo("div.bloc > form > table > tbody");
		$("div.bloc > form > table > tbody > tr:nth-child(2) > td:first").remove();
		$("div.bloc > form > table > tbody > tr:first > td:first").remove();
		$("div.bloc > form > table > tbody > tr:last > td:last").remove();
		$('input[name=ulogin]').attr('placeholder', username_text);
		$('input[name=upassword]').attr('placeholder', pass_text);
		$("div.bloc > form > table > tbody > tr:first > td:first").attr('style', 'padding: 25px 20px 10px;');
		$("input[name=ulogin]").attr('style', 'width: 320px; height: 25px; border: 1px solid rgb(204, 204, 204); padding: 3px;');
		$("div.bloc > form > table > tbody > tr:nth-child(2) > td:first").attr('style', 'padding: 5px 20px;');
		$("input[name=upassword]").attr('style', 'width: 320px; height: 25px; border: 1px solid rgb(204, 204, 204); padding: 3px;');
		$("div.bloc > form > table > tbody > tr:nth-child(3) > td:first").attr('style', 'padding: 20px 25px 10px;');
		$("div.bloc > form > table > tbody > tr:last > td:first").attr('style', 'text-align: center;');
		$("div.bloc").attr('style', 'background-color: #fff;');
	}
	
	//Replacing images/ path with themes/Flat/images/ path	
	$('img').each(function() {
		if ($(this).attr('src') == 'images/edit.png') {
			$(this).attr('src', 'themes/Flat/images/edit.png');
		}else if ($(this).attr('src') == 'images/file_size.png') {
			$(this).attr('src', 'themes/Flat/images/file_size.png');
		}else if ($(this).attr('src') == 'images/ftp.png') {
			$(this).attr('src', 'themes/Flat/images/ftp.png');
		}else if ($(this).attr('src') == 'images/install.png') {
			$(this).attr('src', 'themes/Flat/images/install.png');
		}else if ($(this).attr('src') == 'images/txt.png') {
			$(this).attr('src', 'themes/Flat/images/txt.png');
		}else if ($(this).attr('src') == 'images/log.png') {
			$(this).attr('src', 'themes/Flat/images/log.png');
		}else if ($(this).attr('src') == 'images/rsync.png') {
			$(this).attr('src', 'themes/Flat/images/rsync.png');
		}
	});
	
	$(".unclickmmddyyyy").click(function() {
		$(".ddmmyyyy").hide();
		$(".mmddyyyy").show();
		$(this).hide();
		$(".clickedmmddyyyy").show();
		$(".unclickddmmyyyy").show();
		$(".clickedddmmyyyy").hide();
		$.cookie('dateview', "ddmmyyyy", { expires: 365, path: '/' });
		return false;
	});
	
	$(".unclickddmmyyyy").click(function() {
		$(".mmddyyyy").hide();
		$(".ddmmyyyy").show();
		$(this).hide();
		$(".clickedddmmyyyy").show();
		$(".unclickmmddyyyy").show();
		$(".clickedmmddyyyy").hide();
		$.cookie('dateview', "mmddyyyy", { expires: 365, path: '/' });
		return false;
	});
	
	if($.cookie("dateview") == "ddmmyyyy") {
		$(".ddmmyyyy").hide();
		$(".mmddyyyy").show();
		$(".clickedmmddyyyy").show();
		$(".unclickddmmyyyy").show();
		$(".unclickmmddyyyy").hide();
		$(".clickedddmmyyyy").hide();
	}
	else if($.cookie("dateview") == "mmddyyyy") {
		$(".mmddyyyy").hide();
		$(".ddmmyyyy").show();
		$(".clickedddmmyyyy").show();
		$(".unclickmmddyyyy").show();
		$(".unclickddmmyyyy").hide();
		$(".clickedmmddyyyy").hide();
	} else {
		$(".mmddyyyy").hide();
		$(".ddmmyyyy").show();
		$(".clickedddmmyyyy").show();
		$(".unclickmmddyyyy").show();
		$(".unclickddmmyyyy").hide();
		$(".clickedmmddyyyy").hide();
	};
	
	//sidebar//
	$('div.menu li:has(ul)').addClass('treeview');
	$('div.menu li:has(ul) > a').append('<i class="fa fa-angle-left pull-right"></i>');
	$('div.menu ul ul').addClass('treeview-sub');
	$('.treeview > a').addClass('treeview-a');
	
	$.sidebarMenu = function(menu) {
		var animationSpeed = 300;
	  
		$(menu).on('click', 'li a', function(e) {
			var $this = $(this);
			var checkElement = $this.next();

			if (checkElement.is('.treeview-sub') && checkElement.is(':visible')) {
				checkElement.slideUp(animationSpeed, function() {
					checkElement.removeClass('menu-open');
				});
				
				checkElement.parent("li").removeClass("active");
			}
			
			//If the menu is not visible
			else if ((checkElement.is('.treeview-sub')) && (!checkElement.is(':visible'))) {
			  //Get the parent menu
				var parent = $this.parents('ul').first();
				//Close all open menus within the parent
				var ul = parent.find('ul:visible').slideUp(animationSpeed);
				//Remove the menu-open class from the parent
				ul.removeClass('menu-open');
				//Get the parent li
				var parent_li = $this.parent("li");

				//Open the target menu and add the menu-open class
				checkElement.slideDown(animationSpeed, function() {
					//Add the class active to the parent li
					checkElement.addClass('menu-open');
					parent.find('li.active').removeClass('active');
					parent_li.addClass('active');
				});
			}
			
			//if this isn't a link, prevent the page from being redirected
			if (checkElement.is('.treeview-sub')) {
				e.preventDefault();
			}
		});
	}	//sidebarMenu end.
	
	//GOT HELP//
	$('li.treeview').each(function() {
		$('<li class="copied"></li>').html($(this).children('a').clone()).prependTo($(this).children('ul')).find('> a > span').html('Overview');
	});
	$(".copied > a").removeClass('admin_menu_link_selected');
	$(".copied > a").removeClass('user_menu_link_selected');
	$(".copied > a > span").removeAttr('data-icon_path');
	$(".treeview > a").removeClass('treeview-a');
	$('.treeview').each(function() {
		var $linked = $(this);
		if ($linked.find('.admin_menu_link_selected').length > 0) {
			$linked.addClass('active');
		} else if ($linked.find('.user_menu_link_selected').length > 0) {
			$linked.addClass('active');
		}
	});	//treeview.each end.
	
	$.sidebarMenu($('.menu'));
	if(window.location.href.indexOf("home.php?m=") > -1) {
		$(".menu").prepend('<div class="avatar-cover"><span class="avatar-username"></span><span class="avatar-status"><i class="fa fa-circle"></i>Online</span><label class="edit_avatar"><i class="fa fa-camera"></i><input class="avatarinput" type="file" /></label><span id="remove_avatar"><i class="fa fa-trash"></i></span></div>');
		$(".avatar-username").text($("li.treeview > a.user_menu_link span.username").text());
		
		if(localStorage.Avatar) {
			var img = new Image();                
			img.src = localStorage.Avatar;
			
			$(".avatar-cover").prepend(img);
			$(".avatar-cover > img").attr('id', 'avatar');
		} else {
			$(".menu .avatar-cover").prepend('<img id="avatar" src="themes/Flat/images/default_avatar.png">');
		}
		
		$("#avatar").attr('style', 'border-radius: 100%;width: 64px;height: 64px;');
	}	//href index of end.
	
	var nodes = document.getElementById('submenu_0').getElementsByTagName('span');
		
	for(var i=0; i<nodes.length; i++) {
		iconPath = nodes[i].getAttribute("data-icon_path");
		if(typeof iconPath != "undefined" && iconPath != "") {
			nodes[i].style.background = "url("+iconPath+") 0% 50% / 16px 16px no-repeat scroll transparent";
			nodes[i].style.padding = "5px 0 5px 25px";
		}
	}
		
	$(".slider").click(function() {
		if ($("#wrapper").hasClass("wrapper-hidder")){
			$(".menu-bg").removeClass("menu-hidder");
			$("#wrapper").removeClass("wrapper-hidder");
			$.cookie('menu-bg-options', "show", { expires: 365, path: '/' });
		} 
		else {
			$(".menu-bg").addClass("menu-hidder");
			$("#wrapper").addClass("wrapper-hidder");
			$.cookie('menu-bg-options', "hide", { expires: 365, path: '/' });
		}
    });
	
	if($.cookie("menu-bg-options") == "show") {
		$(".menu-bg").removeClass("menu-hidder");
		$("#wrapper").removeClass("wrapper-hidder");
	} else if($.cookie("menu-bg-options") == "hide") {
		$(".menu-bg").addClass("menu-hidder");
		$("#wrapper").addClass("wrapper-hidder");
	}
		
	$(".copied > a > span").css("background", "");
	$(".copied > a > span").css("padding", "");
	
	//You might want to do if check to see if localstorage set for theImage here
	
	$('body').on('click', '#remove_avatar',function(){
		localStorage.removeItem("Avatar");
		$("#avatar").remove();
		$(".menu .avatar-cover").prepend('<img id="avatar" src="themes/Flat/images/default_avatar.png">');
		$("#avatar").attr('style', 'border-radius: 100%;width: 64px;height: 64px;');
	});	//body.on.click end.
	
	$("body").on("change",".avatarinput",function(){
		//Equivalent of getElementById
		var fileInput = $(this)[0];//returns a HTML DOM object by putting the [0] since it's really an associative array.
		var file = fileInput.files[0]; //there is only '1' file since they are not multiple type.
		
		var reader = new FileReader();
		reader.onload = function(e) {
			// Create a new image.
			var img = new Image();
			
			img.src = reader.result;
			localStorage.Avatar = reader.result; //stores the image to localStorage
			$("#avatar").remove();
			$(".avatar-cover").prepend(img);
			$(".avatar-cover > img").attr('id', 'avatar');
			$("#avatar").attr('style', 'border-radius: 100%;width: 64px;height: 64px;');
		}
	  
		reader.readAsDataURL(file);//attempts to read the file in question.
	});	//body.on.change end.
	
});	//document.ready end
