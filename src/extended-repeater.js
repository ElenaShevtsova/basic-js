module.exports = function repeater(str, options) {
    for (key in options) {
        let array = [];
        for (let i = 1; i <= options['repeatTimes']; i++) {
            let number = 1;
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
