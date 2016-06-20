describe("Fizzbuzz", function() {

 var fizzbuzz
  
  beforeEach(function() {
     fizzbuzz = new Fizzbuzz();
  });

  it("should return number if not multiple of 3 or 5", function() {
    expect(fizzbuzz.getResult(4)).toEqual(4);
  });

  it("should return zero if 0", function() {
    expect(fizzbuzz.getResult(0)).toEqual(0);
  });

  describe("should return fizz if multiple of 3", function() {
    it("takes in 3", function() {
      expect(fizzbuzz.getResult(3)).toEqual("Fizz");
    });

    it("takes in 6", function() {
      expect(fizzbuzz.getResult(6)).toEqual("Fizz");
    });
  });

  describe("should return buzz if multiple of 5", function() {
    it("takes in 5", function() {
      expect(fizzbuzz.getResult(5)).toEqual("Buzz");
    });

    it("takes in 10", function() {
      expect(fizzbuzz.getResult(10)).toEqual("Buzz");
    });
  });

  describe("should return fizzbuzz if multiple of 3 and 5", function() {
    it("takes in 15", function() {
      expect(fizzbuzz.getResult(15)).toEqual("Fizzbuzz");
    });

    it("takes in 30", function() {
      expect(fizzbuzz.getResult(30)).toEqual("Fizzbuzz");
    });
  });

});
