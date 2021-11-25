
 export default
    function getDaysOfMonth(month, year)
    {
    return new Date(year, month + 1, 0).getDate()
    }

 function assertEquals(actual, expected) {
     console.assert(actual === expected, 'Ошибка проверки: значения не равны ' + actual + ' != ' + expected)
 }

assertEquals(getDaysOfMonth(0, 2021), 31)
assertEquals(getDaysOfMonth(1, 2021), 28)
assertEquals(getDaysOfMonth(3, 2021), 30)
assertEquals(getDaysOfMonth(2, 2021), 31)
assertEquals(getDaysOfMonth(1, 2020), 29)
assertEquals(getDaysOfMonth(11, 1200), 31)

