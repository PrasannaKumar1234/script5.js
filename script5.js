//  TO FIND VOLUME OF A CYLINDER

// function Cylinder(cyl_height, cyl_diameter) {
//     this.cyl_height = cyl_height;
//     this.cyl_diameter = cyl_diameter;
//   }
  
//   Cylinder.prototype.Volume = function () {
//     var radius = this.cyl_diameter / 2;
//     return this.cyl_height * Math.PI * radius * radius;
//   };
  
//   var cyl = new Cylinder(7, 4);
//   // Volume of the cylinder with four decimal places.
//   console.log('volume =', cyl.Volume().toFixed(4));


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//  TO Find Volume Of A Sphere 

// <!doctype html>
// <html lang="en">
// <head>
// <meta charset="utf-8">
// <title>Volume of a Sphere</title>
// <style> 
// body{padding-top:30px;}
// label,input{display:block;} 
// </style>
// </head>
// <body>
// <p>Input radius value and get the volume of a sphere.</p>
// <form action="" method="post" id="MyForm">
// <label for="radius">Radius</label><input type="text" name="radius" id="radius" required>
// <label for="volume">Volume</label><input type="text" name="volume" id="volume">
// <input type="submit" value="Calculate" id="submit">    </form>
// </body>
// <script type="text/javascript">
// 	function volume_sphere()
//  {
//   var volume;
//   var radius = document.getElementById('radius').value;
//   radius = Math.abs(radius);
//   volume = (4/3) * Math.PI * Math.pow(radius, 3);
//   volume = volume.toFixed(4);
//   document.getElementById('volume').value = volume;
//   return false;
//  } 
// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

// </script>
// </html>

//------------------------------------------------------------------------------------------------------------------------------------------------------------------- 

//To get volume of a cone  

// function coneTask(a, b) {
//     let s = Math.sqrt(a * a + b * b);
//     let volume = Math.PI * a * a * b / 3;
//     console.log("volume = " + volume);
   
// }
 
// coneTask(3,5);
