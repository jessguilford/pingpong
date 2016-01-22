describe("pingPong", function() {
  it ("counts from 1 to a given number", function() {
    expect(pingPong("2")).to.equal("12");
  });
  it("replaces numbers divisible by 3 with ping", function() {
    expect(pingPong("5")).to.equal("12ping45");
  });
});
