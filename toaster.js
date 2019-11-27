/**
 * A simple easy to use jQuery based message toaster. Fully configurable, and customizable options available.
 * 
 * @version 0.0.6
 * @license MIT
 * @author Rudraksh Pathak
 * @status stable
 * @param {*} data
 */
class Toaster {

    /**
     * Constructor defining the properties and initializing default data
     * 
     * @param {oject} data Data object passed as configuration
     */
    constructor(data) {
        // Setting the default properties
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
        }

        // Constructor values
        this.data = data,

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
        this.cornerRadius
    }

    /**
     * Setting default and new values
     * 
     * @param {object} toasterData Toaster configuration data
     */
    setData(toasterData) {
        // Checking if data exists
        if (this.isNull(toasterData)) {
            this.color = toasterData.data.color || toasterData.defaultValues.color;
            this.background = toasterData.data.background || toasterData.defaultValues.background;
            this.verticalPosition = toasterData.data.verticalPosition || toasterData.defaultValues.verticalPosition;
            this.horizontalPosition = toasterData.data.horizontalPosition || toasterData.defaultValues.horizontalPosition;
            this.container = toasterData.data.container || toasterData.defaultValues.container;
            this.text = toasterData.data.text || toasterData.defaultValues.text;
            this.width = toasterData.data.width || toasterData.defaultValues.width;
            this.height = toasterData.data.height || toasterData.defaultValues.height;
            this.padding = toasterData.data.padding || toasterData.defaultValues.padding;
            this.cornerRadius = toasterData.data.cornerRadius || toasterData.defaultValues.cornerRadius;
        }
    }

    /**
     * Publishing toaster by manipulating DOM
     */
    publish() {
        // Setting toaster properties
        this.setData(this);

        // Appending default container if not specified
        if (this.container == this.defaultValues.container) {
            $('<div/>', {
                id: 'toasterContainer'
            }).appendTo('body');
        }

        // Generating the toast id
        let toastId = new Date().getTime();

        // Creating a new element for toast item
        $('<div/>', {
            class: `toasterItem toasterContent-${toastId}`
        }).prependTo(this.container);

        // Marking position of container absolute
        $(this.container).css({
            'position': 'absolute'
        });

        // Applying animation and styling
        $(`.toasterContent-${toastId}`).css({
            'position': 'relative',
            'width': this.width,
            'min-height': this.height,
            'background': this.background,
            'color': this.color,
            'padding': this.padding,
            'border-radius': this.cornerRadius,
            'margin-top': '10px',
            'word-break': 'break-word',
            'overflow': 'none',
            '-webkit-box-shadow': `0px 0px 11px 1px ${this.background}`,
            '-moz-box-shadow': `0px 0px 11px 1px ${this.background}`,
            'box-shadow': `0px 0px 11px 1px ${this.background}`
        });


        // For vertical positioning
        if (this.verticalPosition == "top") {
            $(this.container).css("top", "30px");
        } else {
            $(this.container).css("bottom", "30px");
        }
        // For horizontal positioning
        if (this.horizontalPosition == "left") {
            $(this.container).css("left", "30px");
        } else {
            $(this.container).css("right", "30px");
        }

        // Setting the text of toaster item
        $(`.toasterContent-${toastId}`).text(this.text);

        // Fading out and removing the toaster item
        this.fadeOut();
    }

    /**
     * Validating null values
     * 
     * @param {*} entity Any entity to be validated
     */
    isNull(entity) {
        return (entity != null || entity != undefined) && entity != "" ? true : false;
    }

    /**
     * Fading out and removing the element after toasting
     */
    fadeOut() {
        if ($('.toasterItem:last').length > 0) {
            $.when($('.toasterItem:last').fadeOut(4000)).then((element) => {
                element.remove();
                this.fadeOut();
            });
        }
    }
}