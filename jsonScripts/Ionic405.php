
			<?php	
				header("Access-Control-Allow-Headers: Content-Type");
				header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
				header("Access-Control-Allow-Origin: *");
			
				$host = "paddygriffin.cloudapp.net";
				$host1 = "http://paddygriffin.cloudapp.net";
				$user = "paddygriffin123";
				$password = "password123";
				$database = "bus_timetable";				
				
				$query = "SELECT * FROM `405`";
				
				//$connect = mysqli_connect($host,$user,$password,$database) or die("Problem connecting.");
				//$connection = mysql_connect($hostname, $username, $password);
				$connect = mysqli_connect($host,$user,$password,$database) or die("Problem connecting.");
				$result = mysqli_query($connect,$query) or die("Bad Query.");

				mysqli_close($connect);

				while($row = mysqli_fetch_assoc($result))
				{
				
					$test[] = $row;
				}
				print json_encode($test);
			?>
