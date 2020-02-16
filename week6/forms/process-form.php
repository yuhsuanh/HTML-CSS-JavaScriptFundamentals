<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Saved - Morning Coffee Home Delivery</title>
		<link href="https://fonts.googleapis.com/css?family=Satisfy&display=swap" rel="stylesheet">
		<link href="css/styles.css" rel="stylesheet">
	</head>
	<body>
		<header>
			<div>
				<h1>Morning Coffee</h1>
				<h2>Fresh Coffee Delivery</h2>
			</div>
			<img src="images/coffee-logo.png" alt="coffee cup logo">
		</header>
		<main>
			<div class="banner">
				<h3>Coffee is on it's way!</h3>
			</div>
				<?php
				    /* All form elements must be checked - that required information is present and that all form data
				    is in the correct format. Security checks must also be made before database queries are made */
					$fname = $_GET['fname'];
					$lname = $_GET['lname'];
					// Output a friendly message to confirm that everything went well
					echo('<p class="message">Thank You, '.$fname.'&nbsp;'.$lname.', your settings have been saved.</p>');
				?>
		</main>
		<footer>
			<p><small>©2019 Morning Coffee. All rights reserved.</small></p>
		</footer>
	</body>
</html>
