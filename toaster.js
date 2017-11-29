/**
 * Toaster class
 * @param {*} data
 */
function Toaster() {

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
        corderRadius: "5px"
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
    this.corderRadius,

    // Setting default and new values
    this.setData = function (data) {
        // Checking if data exists
        if (this.isNull(data)) {
            this.color = this.isNull(data.color) ? data.color : this.defaultValues.color;
            this.background = this.isNull(data.background) ? data.background : this.defaultValues.background;
            this.verticalPosition = this.isNull(data.verticalPosition) ? data.verticalPosition : this.defaultValues.verticalPosition;
            this.horizontalPosition = this.isNull(data.horizontalPosition) ? data.horizontalPosition : this.defaultValues.horizontalPosition;
            this.container = this.isNull(data.container) ? data.container : this.defaultValues.container;
            this.text = this.isNull(data.text) ? data.text : this.defaultValues.text;
            this.width = this.isNull(data.width) ? data.width : this.defaultValues.width;
            this.height = this.isNull(data.height) ? data.height : this.defaultValues.height;
            this.padding = this.isNull(data.padding) ? data.padding : this.defaultValues.padding;
            this.corderRadius = this.isNull(data.corderRadius) ? data.text : this.defaultValues.corderRadius;
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
        $(this.container).css("margin-bottom", "0px");

        // Applying animation and styling
        $(this.container).text(this.text).animate({ 'marginBottom': '50px' }, 800).fadeOut(5000).css({
            'position': 'absolute',
            'bottom': '30px',
            'right': '30px',
            'width': this.width,
            'height': this.height,
            'background': this.background,
            'color': this.color,
            'padding': this.padding,
            'border-radius': this.corderRadius
        });
    },

    // Validating null values
    this.isNull = function(entity) {
        return (entity != null || entity != undefined) && entity != "" ? true : false;
    }
}