$("#select1").tinyselect();

QUnit.test('Structure creation', function( assert ) {
	var ts1 = $("#select1_ts");

	assert.expect(1);
	assert.equal( 1 , ts1.length , "Structure found" );	


});

