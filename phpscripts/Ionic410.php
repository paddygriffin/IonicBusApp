<html>
	<head>
		<title>Php Ionic App</title>
	</head>	
	
	<body>
		<h2>410</h2>
	
		<table border="1">
			
			<tr>
				<td><h2>eyre square</h2></td>
				<td><h2>Dublin rd.</h2></td>
				<td><h2>oranmore</h2></td>
			</tr>
		
			<?php			
				$host = "paddygriffin.cloudapp.net";
				$host1 = "http://paddygriffin.cloudapp.net";
				$user = "paddygriffin123";
				$password = "password123";
				$database = "bus_timetable";				
				
				$query = "SELECT * FROM `410`";
				
				//$connect = mysqli_connect($host,$user,$password,$database) or die("Problem connecting.");
				//$connection = mysql_connect($hostname, $username, $password);
				$connect = mysqli_connect($host,$user,$password,$database) or die("Problem connecting.");
				$result = mysqli_query($connect,$query) or die("Bad Query.");

				mysqli_close($connect);

				while($row = $result->fetch_array())
				{
				
					echo "<tr>";
					echo "<td><h2>" .$row['eyre square'] . "</h2></td>";
					echo "<td><h2>" .$row['Dublin rd.'] . "</h2></td>";
					echo "<td><h2>" .$row['oranmore'] . "</h2></td>";
					
			
				    echo "</tr>";
				}
			?>

		<table>
	</body>
</html>