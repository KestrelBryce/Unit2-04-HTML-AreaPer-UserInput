"use strict"
/**
 * This function calculates area of a triangle.
 */
function calculate () {
  // input
  const height = parseInt(document.getElementById("height-of-triangle").value)
  const base = parseInt(document.getElementById("base-of-triangle").value)

  // process
  // Instead of dividing the base by two, I multiplied it by 0.5 without any special decimal code and it worked for some reason?
  const area = base * 0.5 * height

  // output
  document.getElementById("area").innerHTML = "Your triangle's area is: " + area + " cm²"
}