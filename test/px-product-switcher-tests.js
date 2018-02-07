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
    let length = switcherFixture.items.length;
    assert.equal(length, 3);
    let dropdown = Polymer.dom(switcherFixture.root).querySelector('#switcher');
    let dropdownLength = dropdown.items.length;
    assert.equal(dropdownLength, 3);
    done();
  });

  test('Selecting an item causes the event to fire and closes the switcher', done => {
    let dropdown = Polymer.dom(switcherFixture.root).querySelector('px-dropdown'),
        ironDropdown = Polymer.dom(dropdown.root).querySelector('iron-dropdown'),
        option = Polymer.dom(ironDropdown).querySelectorAll('.dropdown-option')[0],
        count = 0;

    switcherFixture.addEventListener('px-product-switcher-changed', function() {
      count++;
    });

    option.click();
    flush(()=>{
      assert.equal(count, 1);
      assert.isFalse(switcherFixture.opened);
      assert.equal(switcherFixture.selected, '1');
      done();
    });
  });

});
