suite('Custom Automation Tests for px-product-switcher', () => {
  let switcherFixture;

  setup((done)=> {
    switcherFixture = fixture('px-product-switcher-fixture');
    switcherFixture.toggle();
    flush(()=>{
      done();
    });
  });

  test('Internal dropdown has right # of items', done => {
    debugger;
    let length = switcherFixture.items.length;
    assert.equal(length, 3);
    let dropdown = Polymer.dom(switcherFixture.root).querySelector('#switcher');
    let dropdownLength = dropdown.items.length;
    assert.equal(dropdownLength, 3);
    done();
  });

});
