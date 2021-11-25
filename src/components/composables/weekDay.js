export default
    function getFirstWeekday(month, year) {
        return new Date(year, month, 1).getUTCDay()
    }

 function getWeekDayName(inx) {
        const d = new Date('2021-04-05')
        d.setDate(d.getDate() + inx)
        return d.toLocaleDateString('ru-RU', {weekday: 'long'})
    }

    function assertEquals(actual, expected) {
    console.assert(actual === expected, 'Ошибка проверки: значения не равны ' + actual + ' != ' + expected)
    }

assertEquals(getFirstWeekday(4, 2021), 5)
assertEquals(getFirstWeekday(5, 2021), 1)
assertEquals(getFirstWeekday(10, 2021), 0)
assertEquals(getFirstWeekday(7, 2021), 6)

assertEquals(getWeekDayName(0), 'понедельник')
assertEquals(getWeekDayName(1), 'вторник')
assertEquals(getWeekDayName(6), 'воскресенье')