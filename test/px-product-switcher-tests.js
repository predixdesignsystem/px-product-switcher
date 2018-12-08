/**
 * @license
 * Copyright (c) 2018, General Electric
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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

  test("Selecting an item causes the event to fire and closes the switcher", done => {
    let dropdownContent = Polymer.dom(switcherFixture.root)
        .querySelector("px-dropdown")
        .root.querySelector("px-dropdown-content"),
      ironDropdown = dropdownContent.root.querySelector("iron-dropdown"),
      option = ironDropdown.querySelector(".dropdown-option"),
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
