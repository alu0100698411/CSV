var assert = chai.assert;

suite('Suite CSV', function() {

   test('Creacion de tabla correcta (simple)', function () {
        original.value = '1,2,3\n4,5,6';
        calculate();
        var valueExpected = '<p>\n</p><table class="center" id="result">\n<tbody><tr>                    <td>1</td>                                  <td>2</td>                                  <td>3</td>              </tr>\n<tr>                    <td>4</td>                                  <td>5</td>                                  <td>6</td>              </tr>\n</tbody></table>';
        assert.deepEqual(finaltable.innerHTML, valueExpected);
    });
	
	test('Creacion de tabla correcta (compleja)', function () {
        original.value = '1,2,3,"4,5"\n6,7,8,"9,10"';
        calculate();
        var valueExpected = '<p>\n</p><table class="center" id="result">\n<tbody><tr>                    <td>1</td>                                  <td>2</td>                                  <td>3</td>                                  <td>4,5</td>              </tr>\n<tr>                    <td>6</td>                                  <td>7</td>                                  <td>8</td>                                  <td>9,10</td>              </tr>\n</tbody></table>';
        assert.deepEqual(finaltable.innerHTML, valueExpected);
    });
	
	test('Almacenamiento local', function () {
        assert.deepEqual(localStorage.original, '1,2,3,"4,5"\n6,7,8,"9,10"');
    });
	
	
   test('Creacion de tabla erronea', function () {
        original.value = '1,2,3,"4,5"\n6,7,8,"9,10",11';
        calculate();
        var valueExpected = '<p>\n</p><table class="center" id="result">\n<tbody><tr>                    <td>1</td>                                  <td>2</td>                                  <td>3</td>                                  <td>4,5</td>              </tr>\n<tr class="error">                    <td>6</td>                                  <td>7</td>                                  <td>8</td>                                  <td>9,10</td>                                  <td>11</td>              </tr>\n</tbody></table>';
        assert.deepEqual(finaltable.innerHTML, valueExpected);
    });
	
});
