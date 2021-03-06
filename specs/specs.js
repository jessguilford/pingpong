describe("pingPong", function() {
  it ("counts from 1 to a given number", function() {
    expect(pingPong("2")).to.equal("1 2 ");
  });
  it("replaces numbers divisible by 3 with ping", function() {
    expect(pingPong("4")).to.equal("1 2 ping 4 ");
  });
  it("also replaces numbers divisible by 5 with pong", function() {
    expect(pingPong("10")).to.equal("1 2 ping 4 pong ping 7 8 ping pong ");
  });
  it("also replaces numbers divisible by 15 with pingpong", function() {
    expect(pingPong("15")).to.equal("1 2 ping 4 pong ping 7 8 ping pong 11 ping 13 14 pingpong ");
  });
  it("returns a message if user input is NaN", function() {
    expect(pingPong("Hi")).to.equal("Sorry, Ping Pong needs a number to play");
  });
  it("counts from -1 to negative input numbers", function() {
    expect(pingPong("-2")).to.equal("-1 -2 ");
  });
  it("treats negative numbers divisible by 3, 5, and 15 as above", function() {
    expect(pingPong("-5")).to.equal("-1 -2 ping -4 pong ");
  });
});
