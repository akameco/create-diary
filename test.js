import test from 'ava';
import fn from './';

test('is Function', t => {
	t.true(typeof fn === 'function');
});
