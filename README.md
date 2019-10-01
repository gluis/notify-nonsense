### NotifyNonsense

WebComponent to provide custom alerts that permit HTML in output.

#### Usage

There are two ways of using NotifyNonsense: inline or globally. At this time, you can only use one or the other. Global will override any inline versions you might have in place. You'll need both the notify-nonsense.css and notify-nonsense.js files in the /dist folder.

For inline, you can set up a trigger (like a button) to call the alert/confirmation. See I. below for instructions

For global usage, e.g. to come up when a context menu is called, you need to pass it params, and you call it with the global flag and options. See II. below for instructions

For an example to test it out (there's a working example here), run npm start in folder and make changes to the main.js to see how the different versions behave.

I.

In HTML, required:

    <!-- In head -->
    <link rel="stylesheet" href="./dist/css/notify-nonsense.css">
    
    <!-- Place your action in a container -->
    <div id="nn-container">
      <p>
        <span class='nn-alert'
          data-notify-text="Hey Joe! <a target='_blank' href='https://duckduckgo.com'>This</a> is a link!">Statement</span>
      </p>
      <p>
        <span class='nn-confirm' data-notify-text="Are you Ok with this?">Question</span>
      </p>
    </div>

    <!-- Require the scripts before your main js -->
    <script src="./dist/notify-nonsense.js"></script>
    <script src="./main.js"></script>

In your main js file:

    // on page load:
    notifyNonsense.init()

That's it. You edit what you want to appear in the 'data-notify-text' attribute on the trigger element. You class it 'nn-alert' for an alert box and 'nn-confirm' for a confirm box. 

II.

In HTML, required:

    <!-- Require the scripts before your main js -->
    <script src="./dist/notify-nonsense.js"></script>
    <script src="./main.js"></script>

In your main js file:

    // on page load:
    const options = {
      global: true,
      text: "Dogs like <a href='https://duckduckgo.com'>links</a>!",
      type: 'nn-confirm', // 'nn-alert' is the other option
      event: 'contextmenu'
    }
    notifyNonsense.init(options)

