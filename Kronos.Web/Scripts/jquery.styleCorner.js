/**
* @autor Rene Berwanger
* 
* @description Creates corners and calculate your positions, to make a easy and beauty style for pages
* 
* @param position: Defines the position of each corner, realtive to borders of element;
* @param topLeft: Defines the class of topLeft corner;
* @param topRight: Defines the class of topRight corner;
* @param bottomRight: Defines the class of bottomRight corner;
* @param bottomLeft: Defines the class of topRight bottomLeft;
* @param top: Defines the class of topRight top;
* @param right: Defines the class of right corner;
* @param bottom: Defines the class of bottom corner;
* @param left: Defines the class of left corner;
* @param zIndex: Defines the z-index of element;
*/
jQuery.fn.styleCorner = function (settings) {
    settings = jQuery.extend(
	{
	    position: 11,
	    topLeft: 'top-left',
	    topRight: 'top-right',
	    bottomRight: 'bottom-right',
	    bottomLeft: 'bottom-left',
	    top: 'top',
	    right: 'right',
	    bottom: 'bottom',
	    left: 'left',
	    zIndex: 1

	}, settings);

    // Create the corners verifying how corner need to be created
    this.createCorners = function () {
        if (settings.topLeft != null) { jQuery(this).append('<div class="style-corner ' + settings.topLeft + '"></div>'); }
        if (settings.topRight != null) { jQuery(this).append('<div class="style-corner ' + settings.topRight + '"></div>'); }
        if (settings.bottomRight != null) { jQuery(this).append('<div class="style-corner ' + settings.bottomRight + '"></div>'); }
        if (settings.bottomLeft != null) { jQuery(this).append('<div class="style-corner ' + settings.bottomLeft + '"></div>'); }
        if (settings.top != null) { jQuery(this).append('<div class="style-corner ' + settings.top + '"></div>'); }
        if (settings.right != null) { jQuery(this).append('<div class="style-corner ' + settings.right + '"></div>'); }
        if (settings.bottom != null) { jQuery(this).append('<div class="style-corner ' + settings.bottom + '"></div>'); }
        if (settings.left != null) { jQuery(this).append('<div class="style-corner ' + settings.left + '"></div>'); }
    }

    // Ajust the position, and calculate the width and heith of each corner, and border
    this.setStyle = function () {
        jQuery(this).children('.style-corner').css({ position: 'absolute', zIndex: settings.zIndex + 2 });
        jQuery(this).children('.style-corner.top-left').css({ left: this.position, top: this.position });
        jQuery(this).children('.style-corner.top-right').css({ right: this.position, top: this.position });
        jQuery(this).children('.style-corner.bottom-right').css({ right: this.position, bottom: this.position });
        jQuery(this).children('.style-corner.bottom-left').css({ left: this.position, bottom: this.position });
        jQuery(this).children('.style-corner.top').css({ top: this.position, left: -((this.cornerWidth / 2) + 1), width: this.elementWidth + (this.cornerWidth) + 1 });
        jQuery(this).children('.style-corner.right').css({ right: this.position, top: -((this.cornerHeight / 2) + 1), height: this.elementHeight + (this.cornerHeight) + 1 });
        jQuery(this).children('.style-corner.bottom').css({ bottom: this.position, left: -((this.cornerWidth / 2) + 1), width: this.elementWidth + (this.cornerWidth) + 1 });
        jQuery(this).children('.style-corner.left').css({ left: this.position, top: -((this.cornerHeight / 2) + 1), height: this.elementHeight + (this.cornerHeight) + 1 });
        jQuery(this).children('.style-corner.top, .style-corner.right, .style-corner.bottom, .style-corner.left').css({ zIndex: settings.zIndex + 1 });
    }

    // Initialize all and set the variables
    this.init = function () {

        // Define Variables
        this.elementWidth = (jQuery(this).width() + parseInt(jQuery(this).css('padding-left')) + parseInt(jQuery(this).css('padding-right')));
        this.elementHeight = (jQuery(this).height() + parseInt(jQuery(this).css('padding-top')) + parseInt(jQuery(this).css('padding-left')));
        this.position = ((settings.position == 0) ? 1 : settings.position);
        this.position *= -1;
        this.cornerWidth = jQuery(this).children('.style-corner').width();
        this.cornerHeight = jQuery(this).children('.style-corner').height();


        this.createCorners();
        this.setStyle();
        return this;
    }
    this.init();
}