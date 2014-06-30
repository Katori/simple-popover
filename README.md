simple-popover 0.4
==============

A very simple popover that requires only jQuery.

This is all that's needed to use it:

```html
<!DOCTYPE html>
<head>
	<title>simple-popover.js Example</title>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<link rel="stylesheet" type="text/css" href="../simple-popover.css"/>
	<script type="text/javascript" src="../simple-popover.js"></script>
	<script type="text/javascript">
		$(document).ready(function() {
			$("#popoverParent").simplePopover();
		});
	</script>
</head>
<body>
	<div id="popoverParent">
		<p>I'm a link to a popover.</p>
		<div class="popover example">
			<p>I'm a popover! Whee!</p>
		</div>
	</div>
</body>
```

Use the "example" class on your popover for a default style, or create your own.

Additionally, an example site that uses it is included in the "/example" folder. 