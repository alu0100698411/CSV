var assert = chai.assert;

suite('Suite CSV', function() {

   test('Creacion de tabla correcta (simple)', function () {
        original.value = '1,2,3\n4,5,6';
        calculate();
        var valueExpected = '<p>\n</p><table class="center" id="result">\n<tbody><tr>\n\t\t \n\t\t\t<td>1</td>\n\t\t \n\t\t\t<td>2</td>\n\t\t \n\t\t\t<td>3</td>\n\t\t \n\t</tr>\n<tr>\n\t\t \n\t\t\t<td>4</td>\n\t\t \n\t\t\t<td>5</td>\n\t\t \n\t\t\t<td>6</td>\n\t\t \n\t</tr>\n</tbody></table>';
        assert.deepEqual(finaltable.innerHTML, valueExpected);
    });
	
	test('Creacion de tabla correcta (compleja)', function () {
        original.value = '1,2,3,"4,5"\n6,7,8,"9,10"';
        calculate();
        var valueExpected = '<p>\n</p><table class="center" id="result">\n<tbody><tr>\n\t\t \n\t\t\t<td>1</td>\n\t\t \n\t\t\t<td>2</td>\n\t\t \n\t\t\t<td>3</td>\n\t\t \n\t\t\t<td>4,5</td>\n\t\t \n\t</tr>\n<tr>\n\t\t \n\t\t\t<td>6</td>\n\t\t \n\t\t\t<td>7</td>\n\t\t \n\t\t\t<td>8</td>\n\t\t \n\t\t\t<td>9,10</td>\n\t\t \n\t</tr>\n</tbody></table>';
        assert.deepEqual(finaltable.innerHTML, valueExpected);
    });
	
	test('Almacenamiento local', function () {
        assert.deepEqual(localStorage.original, '1,2,3,"4,5"\n6,7,8,"9,10"');
    });
	
	
   test('Creacion de tabla erronea', function () {
        original.value = '1,2,3,"4,5"\n6,7,8,"9,10",11';
        calculate();
        var valueExpected = '<p>\n</p><table class="center" id="result">\n<tbody><tr>\n\t\t \n\t\t\t<td>1</td>\n\t\t \n\t\t\t<td>2</td>\n\t\t \n\t\t\t<td>3</td>\n\t\t \n\t\t\t<td>4,5</td>\n\t\t \n\t</tr>\n<tr class="error">\n\t\t \n\t\t\t<td>6</td>\n\t\t \n\t\t\t<td>7</td>\n\t\t \n\t\t\t<td>8</td>\n\t\t \n\t\t\t<td>9,10</td>\n\t\t \n\t\t\t<td>11</td>\n\t\t \n\t</tr>\n</tbody></table>';
        assert.deepEqual(finaltable.innerHTML, valueExpected);
    });
	
});
