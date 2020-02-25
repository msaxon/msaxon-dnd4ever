import * as ran from '../src/utils/RandomUtils';

test('renders learn react link', () => {
    console.log(ran.getDesire());
    console.log(ran.getFear());
    let str = '';
    ran.getNpcDescription().forEach(desc => {
        str += desc + '\n';
    });
    console.log(str);
});
