/**
 * Created by .
 * User: Chris
 * Date: 5/15/11
 * Time: 3:58 PM
 * To change this template use File | Settings | File Templates.
 */

GreeterTest = TestCase("GreeterTest");

GreeterTest.prototype.testGreet = function() {
  var greeter = new myapp.Greeter();
  assertEquals("Hello World!", greeter.greet("World"));
};
GreeterTest.prototype.testGreetBad = function() {
  var greeter = new myapp.Greeter();
  assertEquals("Hello Worldd!", greeter.greet("World"));
};