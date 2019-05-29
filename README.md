# Expanded Email Hyperlink 1.0

For something so simple as a email hyperlink, the current experience often doesn’t fit with what users have been doing in the desktop space. I myself use Gmail, so while sending an email from mobile is as simple as a click, I’m often copying email addresses and bringing them to Gmail.com on my laptop.

Adham Dannaway’s use of a tooltip and some JavaScript inspired me to create a better experience, as his doesn't account for mobile users. jQuery is needed though for this.

The system uses mobile detection to determine if the user is on a mobile device, or a laptop (or desktop). A desktop/laptop user would see a tooltip when hovering over the hyperlink. If he clicks, then an email address is copied into the user’s clipboard, and he can paste it into his email client (or site) of choice. If the user is on a mobile device, the tooltip functionality is turned off and the JavaScript will make the link act like any normal *mailto* hyperlink

[You can see a working example here.](https://codepen.io/amportfolio/pen/LvxBaO)

## Getting Set Up

The download contains an html file for the setup, a JavaScript file for the functionality, and both SCSS and CSS files for the styling. Bear in mind the tooltip is powered by CSS.

Beyond changing the text to anything you like to say, the only other real configuration is setting up your email address in two areas. First there’s a span in the HTML page:

    <span id="myAddress" class="vanish">name@email.com</span>

This is necessary as an item for the JavaScript to copy into the clipboard when one clicks on the link. Then there is also the email address in the JavaScript:

    var email = 'name@email.com';

Now you can change the message of the tooltip. You first need to fix it in the HTML:

    tooltip-content="Click to copy my email address to your clipboard."

That is for the initial showing of the tooltip. The functionality to switch messages when a user clicks is in the JavaScript:

    $("#emailLink").attr('tooltip-content','My email address is in your clipboard.');
    $("#emailLink").mouseleave(function(){
        $("#emailLink").attr('tooltip-content','Click to copy my email address to your clipboard.');
    });

## Questions? Comments? Suggestions?

Please feel free to reach out or fork this and improve on it.

## Authors

* **Alex Moschopoulos** - *Initial work* - [amportfolio](https://github.com/amportfolio)

## Acknowledgments

* Adham Dannaway...he had the initial inspiration.