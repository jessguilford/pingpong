describe("pingPong", function() {
  it ("counts from 1 to a given number", function() {
    expect(pingPong("2")).to.equal("12");
  });
  it("replaces numbers divisible by 3 with ping", function() {
    expect(pingPong("4")).to.equal("12ping4");
  });
  it("also replaces numbers divisible by 5 with pong", function() {
    expect(pingPong("10")).to.equal("12ping4pongping78pingpong");
  });
  it("also replaces numbers divisible by 15 with pingpong", function() {
    expect(pingPong("15")).to.equal("12ping4pongping78pingpong11ping1314pingpong");
  });
});
