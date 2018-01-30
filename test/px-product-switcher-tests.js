// This is the placeholder suite to place custom tests in
// Use testCase(options) for a more convenient setup of the test cases
suite('Custom Automation Tests for px-product-switcher', () => {
  test('Check initial value of counter', done => {
    let counterEl = fixture('px-product-switcher-fixture'),
        counterValueEl = Polymer.dom(counterEl.root).querySelector('span');
    debugger;
    assert.equal(counterValueEl.textContent, '0');
    done();
  });

  test('Clicking px-product-switcher increments the counter', done => {
    let counterEl = fixture('px-product-switcher-fixture'),
        counterValueEl = Polymer.dom(counterEl.root).querySelector('span');
    assert.equal(counterValueEl.textContent, '0');

    counterEl.click();
    flush(function(){
      assert.equal(counterValueEl.textContent, '1');
    });
    done();
  });
});
