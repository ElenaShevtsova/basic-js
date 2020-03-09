module.exports = function repeater(str, options) {
    for (key in options) {
        let array = [];
        let number = 1;
        if (options['repeatTimes'] === undefined) {
            array.push(str);
            array.push(options['addition']);
            return array.join('');
        } else if (options['separator'] === undefined) {
            for (j = 1; j <= options['repeatTimes']; j++) {
                if (j === options['repeatTimes']) {
                    array.push(str.repeat(number));
                } else {
                    array.push(str.repeat(number) + '+');
                }
            }
            return array.join('');
        }
        for (let i = 1; i <= options['repeatTimes']; i++) {
            if (i === options['repeatTimes']) {
                array.push(str.repeat(number));
                for (let j = 1; j <= options['additionRepeatTimes']; j++) {
                    if (j === options['additionRepeatTimes']) {
                        array.push(options['addition'].repeat(number));

                    } else {
                        array.push(options['addition'].repeat(number));
                        array.push(options['additionSeparator']);
                    }
                }

            } else {
                array.push(str.repeat(number));

                for (let j = 1; j <= options['additionRepeatTimes']; j++) {

                    if (j === options['additionRepeatTimes']) {
                        array.push(options['addition'].repeat(number));

                    } else {
                        array.push(options['addition'].repeat(number));
                        array.push(options['additionSeparator']);
                    }
                }
                array.push(options['separator']);
            }

        }
        return (array.join(''));


    }

};
