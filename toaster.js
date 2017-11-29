/**
 * Toaster class
 * @param {*} data
 */
function Toaster(data) {

    // Constructor values
    this.data = data,

    // Default properties
    this.defaultValues = {
        container: "#toasterContainer",
        text: "Hello !!",
        color: "#FFF",
        background: "#333",
        verticalPosition: "bottom",
        horizontalPosition: "right",
        width: "290px",
        height: "40px",
        padding: "5px",
        cornerRadius: "5px"
    },

    // Class properties
    this.color,
    this.background,
    this.verticalPosition,
    this.horizontalPosition,
    this.container,
    this.text,
    this.width,
    this.height,
    this.padding,
    this.cornerRadius,

    // Setting default and new values
    this.setData = function (toasterData) {
        // Checking if data exists
        if (this.isNull(toasterData)) {
            this.color = this.isNull(toasterData.data.color) ? toasterData.data.color : this.defaultValues.color;
            this.background = this.isNull(toasterData.data.background) ? toasterData.data.background : this.defaultValues.background;
            this.verticalPosition = this.isNull(toasterData.data.verticalPosition) ? toasterData.data.verticalPosition : this.defaultValues.verticalPosition;
            this.horizontalPosition = this.isNull(toasterData.data.horizontalPosition) ? toasterData.data.horizontalPosition : this.defaultValues.horizontalPosition;
            this.container = this.isNull(toasterData.data.container) ? toasterData.data.container : this.defaultValues.container;
            this.text = this.isNull(toasterData.data.text) ? toasterData.data.text : this.defaultValues.text;
            this.width = this.isNull(toasterData.data.width) ? toasterData.data.width : this.defaultValues.width;
            this.height = this.isNull(toasterData.data.height) ? toasterData.data.height : this.defaultValues.height;
            this.padding = this.isNull(toasterData.data.padding) ? toasterData.data.padding : this.defaultValues.padding;
            this.cornerRadius = this.isNull(toasterData.data.cornerRadius) ? toasterData.data.text : this.defaultValues.cornerRadius;
        }
    },

    // Publishing toaster
    this.publish = function () {
        // Setting toaster properties
        this.setData(this);

        // Appending default container if not specified
        if (this.container == this.defaultValues.container) {
            $('<div/>', {
                id: 'toasterContainer'
            }).appendTo('body');
        }
        $(this.container).show();
        $(this.container).stop();

        // Applying animation and styling
        $(this.container).css({
            'position': 'absolute',
            'width': this.width,
            'height': this.height,
            'background': this.background,
            'color': this.color,
            'padding': this.padding,
            'border-radius': this.cornerRadius
        });
        
        // For vertical positioning
        if(this.verticalPosition == "top") {
            $(this.container).css("top", "30px");
        } else {
            $(this.container).css("bottom", "30px");
        }

        // For horizontal positioning
        if(this.horizontalPosition == "left") {
            $(this.container).css("left", "30px");
        } else {
            $(this.container).css("right", "30px");
        }
        $(this.container).text(this.text).animate({ 'opacity': '1' }, 400).fadeOut(5000);
    },

    // Validating null values
    this.isNull = function(entity) {
        return (entity != null || entity != undefined) && entity != "" ? true : false;
    }
}